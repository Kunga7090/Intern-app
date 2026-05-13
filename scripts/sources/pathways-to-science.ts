import * as cheerio from "cheerio";
import type { AnyNode } from "domhandler";
import { fetchPage } from "../lib/fetch-page";
import { type CategoryTable, inferCategory, inferType } from "../lib/infer";
import { parseDates } from "../lib/parse-date";
import type { ScrapedInternship } from "../lib/types";

const SOURCE_URL =
  "https://www.pathwaystoscience.org/programs.aspx?u=HighSchool_High+School+Students&submit=y";

const STEM_KEYWORDS: CategoryTable = [
  [
    "Computer Science",
    /\b(comput|software|coding|programming|cyber|data|AI|artificial intelligence|machine learning)\b/i,
  ],
  [
    "Engineering",
    /\b(engineer|robot|aerospace|mechanical|electrical|civil|materials)\b/i,
  ],
  [
    "Biology",
    /\b(biolog|life science|biomed|genom|cancer|medic|health|neuro|ecolog)\b/i,
  ],
  ["Chemistry", /\b(chem|molecul|pharma)\b/i],
  ["Physics", /\b(physic|astro|quantum|nuclear|optic)\b/i],
  ["Mathematics", /\b(math|statistic|number theor)\b/i],
  [
    "Earth Science",
    /\b(earth|geolog|ocean|atmospher|environ|climat|marine)\b/i,
  ],
];

export async function scrape(): Promise<ScrapedInternship[]> {
  const html = await fetchPage(SOURCE_URL);
  const $ = cheerio.load(html);
  const results: ScrapedInternship[] = [];

  const headerDivs = $("div.progigert").filter(
    (_: number, el: AnyNode) => $(el).find("h2").length > 0,
  );

  headerDivs.each((_: number, headerEl: AnyNode) => {
    const $header = $(headerEl);
    const locationText = $header.find("span").first().text().trim();
    const locMatch = locationText.match(/\(([^,]+),\s*([A-Z]{2})\)/);
    if (!locMatch) return;
    const city = locMatch[1].trim();
    const state = locMatch[2].trim();
    if (state !== "MA") return;

    const $content = $header.next("div.progigert");
    if ($content.length === 0) return;

    const $firstLink = $content.find("a").first();
    const title = $firstLink.text().trim();
    if (!title) return;

    const href = $firstLink.attr("href");
    const url = href
      ? new globalThis.URL(href, "https://www.pathwaystoscience.org").href
      : undefined;

    const description = $content.text().trim();
    const combined = `${title} ${description}`;
    const { deadline, application_opens } = parseDates(description);

    if (!url) return;

    results.push({
      name: title.slice(0, 200),
      city,
      type: inferType(combined),
      category: inferCategory(combined, STEM_KEYWORDS, "STEM"),
      featured: false,
      url,
      deadline,
      application_opens,
    });
  });

  return results;
}
