import { createAdminClient, createAnonClient } from "./lib/supabase-admin";
import { type ScrapedInternship, scrapedInternshipSchema } from "./lib/types";
import * as collegevine from "./sources/collegevine";
import * as pathways from "./sources/pathways-to-science";

type SourceResult = {
  source: string;
  found: number;
  validated: ScrapedInternship[];
  error?: string;
};

type Args = {
  dry: boolean;
  limit?: number;
};

function parseArgs(argv: string[]): Args {
  const args: Args = { dry: false };
  for (const a of argv.slice(2)) {
    if (a === "--dry") args.dry = true;
    else if (a.startsWith("--limit=")) {
      const n = Number(a.slice("--limit=".length));
      if (Number.isFinite(n) && n > 0) args.limit = n;
    }
  }
  return args;
}

async function runSource(
  name: string,
  fn: () => Promise<ScrapedInternship[]>,
): Promise<SourceResult> {
  try {
    const raw = await fn();
    const validated: ScrapedInternship[] = [];
    for (const item of raw) {
      const parsed = scrapedInternshipSchema.safeParse(item);
      if (parsed.success) {
        validated.push(parsed.data);
      } else {
        console.warn(
          `[${name}] dropped invalid record:`,
          item,
          parsed.error.issues.map((i) => i.message).join("; "),
        );
      }
    }
    return { source: name, found: raw.length, validated };
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error(`[${name}] scrape failed: ${msg}`);
    return { source: name, found: 0, validated: [], error: msg };
  }
}

function dedupeWithin(rows: ScrapedInternship[]): ScrapedInternship[] {
  const seen = new Set<string>();
  const out: ScrapedInternship[] = [];
  for (const r of rows) {
    const key = r.name.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(r);
  }
  return out;
}

async function fetchExistingNames(): Promise<Set<string>> {
  const client = createAnonClient();
  const { data, error } = await client.from("internships").select("name");
  if (error) {
    throw new Error(`Failed to query existing internships: ${error.message}`);
  }
  return new Set((data ?? []).map((r) => String(r.name).toLowerCase()));
}

function printDryRunTable(rows: ScrapedInternship[]) {
  console.log("\nWould insert these rows (dry run):");
  console.table(
    rows.map((r) => ({
      name: r.name.length > 60 ? `${r.name.slice(0, 57)}...` : r.name,
      city: r.city,
      type: r.type,
      category: r.category,
    })),
  );
}

async function main() {
  const args = parseArgs(process.argv);

  const [pathwaysResult, collegevineResult] = await Promise.all([
    runSource("Pathways", () => pathways.scrape()),
    runSource("CollegeVine", () => collegevine.scrape()),
  ]);

  const allFound = [
    ...pathwaysResult.validated,
    ...collegevineResult.validated,
  ];
  const deduped = dedupeWithin(allFound);

  let existing: Set<string>;
  try {
    existing = await fetchExistingNames();
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error(msg);
    process.exit(1);
  }

  let toInsert = deduped.filter((r) => !existing.has(r.name.toLowerCase()));
  if (args.limit !== undefined) {
    toInsert = toInsert.slice(0, args.limit);
  }

  const pathwaysNew = pathwaysResult.validated.filter(
    (r) => !existing.has(r.name.toLowerCase()),
  ).length;
  const collegevineNew = collegevineResult.validated.filter(
    (r) => !existing.has(r.name.toLowerCase()),
  ).length;

  if (args.dry) {
    printDryRunTable(toInsert);
    console.log(
      `\nPathways: ${pathwaysResult.found} found, ${pathwaysNew} new. ` +
        `CollegeVine: ${collegevineResult.found} found, ${collegevineNew} new. ` +
        `Would insert: ${toInsert.length} (dry run — no writes performed).`,
    );
    return;
  }

  if (toInsert.length === 0) {
    console.log(
      `Pathways: ${pathwaysResult.found} found, ${pathwaysNew} new. ` +
        `CollegeVine: ${collegevineResult.found} found, ${collegevineNew} new. ` +
        `Inserted 0 total (nothing new to insert).`,
    );
    return;
  }

  const admin = createAdminClient();
  const { error } = await admin.from("internships").insert(toInsert);
  if (error) {
    console.error(`Insert failed: ${error.message}`);
    process.exit(1);
  }

  console.log(
    `Pathways: ${pathwaysResult.found} found, ${pathwaysNew} new. ` +
      `CollegeVine: ${collegevineResult.found} found, ${collegevineNew} new. ` +
      `Inserted ${toInsert.length} total.`,
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
