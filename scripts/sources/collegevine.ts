import * as cheerio from "cheerio";
import { fetchPage } from "../lib/fetch-page";
import type { ScrapedInternship } from "../lib/types";

export const COLLEGEVINE_URL =
  "https://blog.collegevine.com/high-school-internships-boston";

const CATEGORY_KEYWORDS: Array<[string, RegExp]> = [
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

function inferCategory(text: string): string {
  for (const [cat, rx] of CATEGORY_KEYWORDS) {
    if (rx.test(text)) return cat;
  }
  return "General";
}

function inferType(text: string): "virtual" | "in-person" {
  return /\b(online|remote|virtual)\b/i.test(text) ? "virtual" : "in-person";
}

const NUMBERED_RX = /^\s*(\d{1,2})\.\s+(.*)$/;

export async function scrape(
  url: string = COLLEGEVINE_URL,
): Promise<ScrapedInternship[]> {
  const html = await fetchPage(url);
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
    while ($sibling.length && steps < 8 && !$sibling.is("h2, h3")) {
      descriptionParts += ` ${$sibling.text()}`;
      $sibling = $sibling.next();
      steps++;
    }
    const combined = `${name} ${descriptionParts}`;

    results.push({
      name: name.slice(0, 200),
      city: "Boston",
      type: inferType(combined),
      category: inferCategory(combined),
      featured: false,
    });
  });

  return results;
}
