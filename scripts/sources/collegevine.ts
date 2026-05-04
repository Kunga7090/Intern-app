import * as cheerio from "cheerio";
import type { AnyNode } from "domhandler";
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

// Manual overrides for entries where the blog post has no direct link
const URL_OVERRIDES: Record<string, string> = {
  "BU RISE Internship":
    "https://www.bu.edu/summer/high-school-programs/rise-internship-practicum/",
  "GROW (Greater Boston Research Opportunities for Young Women)":
    "https://www.bu.edu/lernet/grow/",
  "Mass General Hospital (MGH) Youth Scholars Program":
    "https://www.massgeneral.org/community-health/cchi/programs/mgh-youth-scholars",
  "Museum of Science Academic Year/Summer Youth Internship Program":
    "https://www.mos.org/careers/internships",
  "Massachusetts Institute of Technology Research Science Institute (RSI)":
    "https://www.cee.org/programs/research-science-institute",
  "Paul Revere House One-Week Internship":
    "https://www.paulreverehouse.org/high-school-internship-summer-program/",
  "Northeastern Young Scholars Program (YSP)":
    "https://stem.northeastern.edu/summer/ysp/",
  "Tufts University Biomedical Engineering Research Scholars (TUBERS)":
    "https://sites.tufts.edu/tubers/",
  "Museum of Fine Arts Boston Teen Programs":
    "https://www.mfa.org/programs/teen-programs",
  "Artists for Humanity Teen Jobs": "https://www.afhboston.org/teen-jobs",
  "Today's Interns, Tomorrow's Professionals (TIP) Internship Program":
    "https://www.bostonfed.org/community-development/expanding-employment-opportunities/todays-interns-tomorrows-professionals.aspx",
  "Army Educational Outreach Program (AEOP) High School Apprenticeship":
    "https://www.usaeop.com/program/high-school-internships/",
  "Dana-Farber Cancer Institute’s Office of Workforce Development Student Training Academic-year Internship Program":
    "https://www.dana-farber.org/about/careers/workforce-development/student-training-program",
  "Ragon Institute Summer Experience (RISE)":
    "https://ragoninstitute.org/rise-ragon-institute-summer-experience/",
  "LEAH Knox Scholars Program": "https://www.leahknoxscholars.org/",
  "Boston Public Library Teen Volunteer Program":
    "https://www.bpl.org/teen-volunteer-program/",
  "New England Aquarium Teen Internships":
    "https://www.neaq.org/engage/teen-programs/teen-internships/",
  "Boston Society for Architecture Arch/Design High School Internship":
    "https://www.architects.org/programs/k-12-design-education/arch-design-high-school-internships",
  "Massachusetts Supreme Judicial Court's Judicial Youth Corps Program":
    "https://www.mass.gov/info-details/judicial-youth-corps-program",
};

const NUMBERED_RX = /^\s*(\d{1,2})\.\s+(.*)$/;
const MAX_DESCRIPTION_SIBLINGS = 8;

function normalizeQuotes(s: string) {
  return s.replace(/[‘’]/g, "'").replace(/[“”]/g, '"');
}

export async function scrape(): Promise<ScrapedInternship[]> {
  const html = await fetchPage(URL);
  const $ = cheerio.load(html);
  const results: ScrapedInternship[] = [];

  $("h3").each((_: number, el: AnyNode) => {
    const $h3 = $(el);
    const rawText = $h3.text().replace(/\s+/g, " ").trim();
    const match = rawText.match(NUMBERED_RX);
    if (!match) return;

    const name = match[2].trim().replace(/\s+/g, " ");
    if (!name) return;

    let descriptionParts = "";
    let url: string | undefined;
    let $sibling = $h3.next();
    let steps = 0;
    while (
      $sibling.length &&
      steps < MAX_DESCRIPTION_SIBLINGS &&
      !$sibling.is("h2, h3")
    ) {
      if (!url) {
        const href = $sibling.find("a[href]").first().attr("href");
        if (href?.startsWith("http")) url = href;
      }
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
      url: URL_OVERRIDES[normalizeQuotes(name)] ?? url ?? URL,
    });
  });

  return results;
}
