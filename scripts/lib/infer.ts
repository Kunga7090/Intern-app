export type InternshipType = "virtual" | "in-person";
export type CategoryTable = ReadonlyArray<readonly [string, RegExp]>;

const VIRTUAL_RX = /\b(online|remote|virtual)\b/i;

export function inferType(text: string): InternshipType {
  return VIRTUAL_RX.test(text) ? "virtual" : "in-person";
}

export function inferCategory(
  text: string,
  table: CategoryTable,
  fallback: string,
): string {
  for (const [cat, rx] of table) {
    if (rx.test(text)) return cat;
  }
  return fallback;
}
