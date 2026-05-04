import { createAdminClient, createAnonClient } from "./lib/supabase-admin";
import { type ScrapedInternship, scrapedInternshipSchema } from "./lib/types";
import * as collegevine from "./sources/collegevine";
import * as pathways from "./sources/pathways-to-science";

type SourceName = "Pathways" | "CollegeVine";
type Tagged = ScrapedInternship & { source: SourceName };

const SOURCES: Array<{
  name: SourceName;
  scrape: () => Promise<ScrapedInternship[]>;
}> = [
  { name: "Pathways", scrape: pathways.scrape },
  { name: "CollegeVine", scrape: collegevine.scrape },
];

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
  name: SourceName,
  fn: () => Promise<ScrapedInternship[]>,
): Promise<{ found: number; tagged: Tagged[] }> {
  try {
    const raw = await fn();
    const tagged: Tagged[] = [];
    for (const item of raw) {
      const parsed = scrapedInternshipSchema.safeParse(item);
      if (parsed.success) {
        tagged.push({ ...parsed.data, source: name });
      } else {
        console.warn(
          `[${name}] dropped invalid record:`,
          item,
          parsed.error.issues.map((i) => i.message).join("; "),
        );
      }
    }
    return { found: raw.length, tagged };
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error(`[${name}] scrape failed: ${msg}`);
    return { found: 0, tagged: [] };
  }
}

async function fetchExisting(): Promise<Map<string, string>> {
  const client = createAnonClient();
  const { data, error } = await client.from("internships").select("name, id");
  if (error) {
    throw new Error(`Failed to query existing internships: ${error.message}`);
  }
  return new Map((data ?? []).map((r) => [r.name.toLowerCase(), r.id]));
}

function printDryRunTable(rows: Tagged[]) {
  console.log("\nWould insert these rows (dry run):");
  console.table(
    rows.map((r) => ({
      name: r.name.length > 60 ? `${r.name.slice(0, 57)}...` : r.name,
      city: r.city,
      type: r.type,
      category: r.category,
      source: r.source,
    })),
  );
}

function stripSource(rows: Tagged[]): ScrapedInternship[] {
  return rows.map(({ source: _source, ...row }) => row);
}

async function main() {
  const args = parseArgs(process.argv);

  const sourceResults = await Promise.all(
    SOURCES.map(async (s) => ({
      name: s.name,
      ...(await runSource(s.name, s.scrape)),
    })),
  );

  const seen = new Set<string>();
  const dedupedTagged: Tagged[] = [];
  for (const { tagged } of sourceResults) {
    for (const row of tagged) {
      const key = row.name.toLowerCase();
      if (seen.has(key)) continue;
      seen.add(key);
      dedupedTagged.push(row);
    }
  }

  let existing: Map<string, string>;
  try {
    existing = await fetchExisting();
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error(msg);
    process.exit(1);
  }

  let toInsert = dedupedTagged.filter(
    (r) => !existing.has(r.name.toLowerCase()),
  );
  const toUpdate = dedupedTagged.filter(
    (r) => existing.has(r.name.toLowerCase()) && r.url,
  );
  if (args.limit !== undefined) {
    toInsert = toInsert.slice(0, args.limit);
  }

  const newBySource = new Map<SourceName, number>();
  for (const r of toInsert) {
    newBySource.set(r.source, (newBySource.get(r.source) ?? 0) + 1);
  }

  const summary = sourceResults
    .map(
      (r) =>
        `${r.name}: ${r.found} found, ${newBySource.get(r.name) ?? 0} new.`,
    )
    .join(" ");

  if (args.dry) {
    printDryRunTable(toInsert);
    console.log(
      `\n${summary} Would insert: ${toInsert.length} (dry run — no writes performed).`,
    );
    return;
  }

  const admin = createAdminClient();

  if (toUpdate.length > 0) {
    await Promise.all(
      toUpdate.map((r) =>
        admin
          .from("internships")
          .update({ url: r.url })
          .eq("id", existing.get(r.name.toLowerCase()) ?? ""),
      ),
    );
  }

  if (toInsert.length === 0) {
    console.log(`${summary} Inserted 0 total (nothing new to insert).`);
    return;
  }

  const { error } = await admin
    .from("internships")
    .insert(stripSource(toInsert));
  if (error) {
    console.error(`Insert failed: ${error.message}`);
    process.exit(1);
  }

  console.log(`${summary} Inserted ${toInsert.length} total.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
