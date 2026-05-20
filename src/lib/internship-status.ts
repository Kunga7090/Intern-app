export function daysUntil(iso: string | null | undefined): number | null {
  if (!iso) return null;
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const d = new Date(iso);
  return Math.ceil((d.getTime() - today.getTime()) / 86400000);
}

export type StatusKey =
  | "open"
  | "hot"
  | "soon"
  | "rolling"
  | "closed"
  | "later";

export interface StatusInfo {
  key: StatusKey;
  label: string;
}

export function statusOf(item: {
  deadline?: string | null;
  application_opens?: string | null;
}): StatusInfo {
  const dDeadline = daysUntil(item.deadline);
  const dOpens = daysUntil(item.application_opens);
  if (dDeadline != null && dDeadline < 0)
    return { key: "closed", label: "Closed" };
  if (dDeadline != null && dDeadline <= 21)
    return { key: "hot", label: `${dDeadline}d left` };
  if (dOpens != null && dOpens > 0) {
    if (dOpens <= 62) return { key: "soon", label: "Opens soon" };
    return { key: "later", label: "Opens in a while" };
  }
  return { key: "open", label: "Open" };
}

export function fmtDate(iso: string | null | undefined): string | null {
  if (!iso) return null;
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function fmtShort(iso: string | null | undefined): string | null {
  if (!iso) return null;
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

export function fmtSeasons(
  seasons: string[] | null | undefined,
): string | null {
  if (!Array.isArray(seasons) || seasons.length === 0) return null;
  const cap = (s: string) =>
    s === "year-round" ? "Year-round" : s[0].toUpperCase() + s.slice(1);
  if (seasons.join(",") === "fall,winter,spring") return "Fall–Spring";
  if (seasons.length === 1) return cap(seasons[0]);
  return seasons.map(cap).join(", ");
}
