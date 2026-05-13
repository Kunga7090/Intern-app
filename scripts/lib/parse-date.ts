const MONTHS: Record<string, number> = {
  january: 1,
  jan: 1,
  february: 2,
  feb: 2,
  march: 3,
  mar: 3,
  april: 4,
  apr: 4,
  may: 5,
  june: 6,
  jun: 6,
  july: 7,
  jul: 7,
  august: 8,
  aug: 8,
  september: 9,
  sep: 9,
  sept: 9,
  october: 10,
  oct: 10,
  november: 11,
  nov: 11,
  december: 12,
  dec: 12,
};

const MONTH_NAMES =
  "january|february|march|april|may|june|july|august|september|october|november|december|jan|feb|mar|apr|jun|jul|aug|sep|sept|oct|nov|dec";

const MONTH_DAY_YEAR = new RegExp(
  `\\b(${MONTH_NAMES})\\s+(\\d{1,2})(?:st|nd|rd|th)?,?\\s+(\\d{4})\\b`,
  "gi",
);
const DAY_MONTH_YEAR = new RegExp(
  `\\b(\\d{1,2})(?:st|nd|rd|th)?\\s+(${MONTH_NAMES})\\s+(\\d{4})\\b`,
  "gi",
);
const ISO_DATE = /\b(\d{4})[-/](\d{2})[-/](\d{2})\b/g;

const DEADLINE_CONTEXT =
  /\b(deadline|due|apply by|applications? due|application close[sd]?|submit by|closes?|closing date|last day)\b/i;
const OPENS_CONTEXT =
  /\b(open[s]?|accepting|now accepting|applications? open|begin[s]?|start[s]? accepting)\b/i;

function pad(n: number): string {
  return String(n).padStart(2, "0");
}

function toISO(year: number, month: number, day: number): string | null {
  if (
    month < 1 ||
    month > 12 ||
    day < 1 ||
    day > 31 ||
    year < 2000 ||
    year > 2100
  )
    return null;
  return `${year}-${pad(month)}-${pad(day)}`;
}

type DateMatch = { iso: string; index: number };

function extractAll(text: string): DateMatch[] {
  const results: DateMatch[] = [];

  let m: RegExpExecArray | null;

  MONTH_DAY_YEAR.lastIndex = 0;
  for (;;) {
    m = MONTH_DAY_YEAR.exec(text);
    if (m === null) break;
    const month = MONTHS[m[1].toLowerCase()];
    const iso = toISO(parseInt(m[3], 10), month, parseInt(m[2], 10));
    if (iso) results.push({ iso, index: m.index });
  }

  DAY_MONTH_YEAR.lastIndex = 0;
  for (;;) {
    m = DAY_MONTH_YEAR.exec(text);
    if (m === null) break;
    const month = MONTHS[m[2].toLowerCase()];
    const iso = toISO(parseInt(m[3], 10), month, parseInt(m[1], 10));
    if (iso) results.push({ iso, index: m.index });
  }

  ISO_DATE.lastIndex = 0;
  for (;;) {
    m = ISO_DATE.exec(text);
    if (m === null) break;
    const iso = toISO(
      parseInt(m[1], 10),
      parseInt(m[2], 10),
      parseInt(m[3], 10),
    );
    if (iso) results.push({ iso, index: m.index });
  }

  const seen = new Set<number>();
  return results.filter((r) => {
    if (seen.has(r.index)) return false;
    seen.add(r.index);
    return true;
  });
}

export function parseDates(text: string): {
  deadline: string | null;
  application_opens: string | null;
} {
  const matches = extractAll(text);
  if (matches.length === 0) return { deadline: null, application_opens: null };

  let deadline: string | null = null;
  let application_opens: string | null = null;

  for (const { iso, index } of matches) {
    const context = text
      .slice(Math.max(0, index - 80), index + 20)
      .toLowerCase();
    if (DEADLINE_CONTEXT.test(context)) {
      if (!deadline || iso < deadline) deadline = iso;
    } else if (OPENS_CONTEXT.test(context)) {
      if (!application_opens || iso < application_opens)
        application_opens = iso;
    }
  }

  if (matches.length === 1 && !deadline && !application_opens) {
    deadline = matches[0].iso;
  }

  return { deadline, application_opens };
}
