const USER_AGENT = "InternMA-scraper/0.1 (educational project)";
const DELAY_MS = 1000;

let lastRequestAt = 0;

export async function fetchPage(url: string): Promise<string> {
  const elapsed = Date.now() - lastRequestAt;
  if (elapsed < DELAY_MS) {
    await new Promise((r) => setTimeout(r, DELAY_MS - elapsed));
  }
  lastRequestAt = Date.now();

  const res = await fetch(url, {
    headers: {
      "User-Agent": USER_AGENT,
      Accept: "text/html,application/xhtml+xml",
    },
  });

  if (!res.ok) {
    throw new Error(`GET ${url} failed: ${res.status} ${res.statusText}`);
  }
  return res.text();
}
