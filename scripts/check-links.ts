import { createAnonClient } from "./lib/supabase-admin";

type Result = {
  name: string;
  url: string;
  status: number | string;
  ok: boolean;
};

async function main() {
  const supabase = createAnonClient();

  const { data, error } = await supabase
    .from("internships")
    .select("name, url")
    .not("url", "is", null)
    .order("name");

  if (error) {
    console.error("DB error:", error.message);
    process.exit(1);
  }

  if (!data || data.length === 0) {
    console.log("No internships with URLs found.");
    return;
  }

  console.log(`Checking ${data.length} internship links...\n`);

  const results: Result[] = [];

  for (const row of data) {
    const { name, url } = row as { name: string; url: string };
    try {
      const res = await fetch(url, {
        method: "HEAD",
        redirect: "follow",
        signal: AbortSignal.timeout(10_000),
        headers: { "User-Agent": "Mozilla/5.0 (compatible; link-checker/1.0)" },
      });
      results.push({ name, url, status: res.status, ok: res.ok });
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      results.push({ name, url, status: msg, ok: false });
    }
  }

  const bad = results.filter((r) => !r.ok);
  const good = results.filter((r) => r.ok);

  console.log(`✅ ${good.length} links OK`);
  if (bad.length > 0) {
    console.log(`❌ ${bad.length} links BROKEN or suspect:\n`);
    for (const r of bad) {
      console.log(`  "${r.name}"`);
      console.log(`    URL:    ${r.url}`);
      console.log(`    Status: ${r.status}\n`);
    }
  } else {
    console.log("\nAll links look healthy!");
  }
}

main();
