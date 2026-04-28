import * as cheerio from "cheerio";
import { fetchPage } from "../lib/fetch-page";
import { type CategoryTable, inferCategory, inferType } from "../lib/infer";
import type { ScrapedInternship } from "../lib/types";

const URL = "https://blog.collegevine.com/high-school-internships-boston";

const CATEGORY_KEYWORDS: CategoryTable = [
  [
    "Computer Science",
    /\b(software|coding|programming|computer science|cyber|data science|AI|artificial intelligence|machine learning|web)\b/i,
  ],
  ["Engineering", /\b(engineer|robot|mechanical|electrical)\b/i],
  [
    "Biology",
    /\b(biolog|life science|biomed|cancer|medic|hospital|neuro|premed|nurs)\b/i,
  ],
  ["Chemistry", /\b(chem|pharma)\b/i],
  ["Physics", /\b(physic|astro|space)\b/i],
  ["Mathematics", /\b(math|statistic)\b/i],
  [
    "Business",
    /\b(business|finance|entrepreneur|startup|consulting|market)\b/i,
  ],
  ["Marketing", /\b(marketing|advertising|brand|social media)\b/i],
  ["Arts", /\b(art|museum|design|theater|music|film|writ)\b/i],
  ["Government", /\b(government|policy|civic|legal|law)\b/i],
];

const NUMBERED_RX = /^\s*(\d{1,2})\.\s+(.*)$/;
const MAX_DESCRIPTION_SIBLINGS = 8;

export async function scrape(): Promise<ScrapedInternship[]> {
  const html = await fetchPage(URL);
  const $ = cheerio.load(html);
  const results: ScrapedInternship[] = [];

  $("h3").each((_, el) => {
    const $h3 = $(el);
    const rawText = $h3.text().replace(/\s+/g, " ").trim();
    const match = rawText.match(NUMBERED_RX);
    if (!match) return;

    const name = match[2].trim().replace(/\s+/g, " ");
    if (!name) return;

    let descriptionParts = "";
    let $sibling = $h3.next();
    let steps = 0;
    while (
      $sibling.length &&
      steps < MAX_DESCRIPTION_SIBLINGS &&
      !$sibling.is("h2, h3")
    ) {
      descriptionParts += ` ${$sibling.text()}`;
      $sibling = $sibling.next();
      steps++;
    }
    const combined = `${name} ${descriptionParts}`;

    results.push({
      name: name.slice(0, 200),
      city: "Boston",
      type: inferType(combined),
      category: inferCategory(combined, CATEGORY_KEYWORDS, "General"),
      featured: false,
    });
  });

  return results;
}
