"use client";

import { useMemo, useState } from "react";
import { CategoryBanner } from "~/components/internships/category-banner";
import type { Internship } from "~/components/internships/internship-card";
import { InternshipCard } from "~/components/internships/internship-card";
import { SaveButton } from "~/components/internships/save-button";
import { daysUntil, fmtShort, statusOf } from "~/lib/internship-status";
import { cn } from "~/lib/utils";

interface InternshipsClientProps {
  internships: Internship[];
  cities: string[];
  savedIds: Set<string>;
  userId: string | null;
}

const CATEGORIES = [
  "STEM",
  "Computer Science",
  "Biology",
  "Mathematics",
  "Earth Science",
  "Arts",
  "Business",
  "Government",
  "General",
];

// ── Search icon ────────────────────────────────────────────
function SearchIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
function XIcon({ size = 14 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
function GridIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="7" height="7" x="3" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="14" rx="1" />
      <rect width="7" height="7" x="3" y="14" rx="1" />
    </svg>
  );
}
function ListIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="8" x2="21" y1="6" y2="6" />
      <line x1="8" x2="21" y1="12" y2="12" />
      <line x1="8" x2="21" y1="18" y2="18" />
      <line x1="3" x2="3.01" y1="6" y2="6" />
      <line x1="3" x2="3.01" y1="12" y2="12" />
      <line x1="3" x2="3.01" y1="18" y2="18" />
    </svg>
  );
}
function FlameIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
    </svg>
  );
}

// ── Closing soon compact card ──────────────────────────────
function ClosingSoonCard({
  item,
  onClick,
}: {
  item: Internship;
  onClick: () => void;
}) {
  const days = daysUntil(item.deadline);
  return (
    <article
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onClick();
      }}
      className="flex-none w-[280px] flex flex-col overflow-hidden rounded-xl border border-border bg-card cursor-pointer transition-all hover:-translate-y-0.5 hover:border-foreground/20"
      style={{ scrollSnapAlign: "start" }}
    >
      <CategoryBanner category={item.category} height={56} />
      <div className="flex flex-col gap-1.5 p-3.5">
        <div className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
          {item.category}
        </div>
        <h3 className="line-clamp-2 text-sm font-semibold leading-snug tracking-tight text-foreground">
          {item.name}
        </h3>
        {item.org && (
          <p className="text-xs text-muted-foreground">{item.org}</p>
        )}
        <div className="flex items-center justify-between mt-1 pt-2 border-t border-border">
          <span
            style={{
              fontSize: 12,
              fontWeight: 600,
              color:
                (days ?? 0) <= 14
                  ? "oklch(0.57 0.20 25)"
                  : "oklch(0.66 0.16 60)",
              fontVariantNumeric: "tabular-nums",
            }}
          >
            {days}d left
          </span>
          <span className="font-mono text-[11px] text-muted-foreground">
            {fmtShort(item.deadline)}
          </span>
        </div>
      </div>
    </article>
  );
}

// ── List row ───────────────────────────────────────────────
const BANNER_ACCENT: Record<string, string> = {
  STEM: "#8aa5c4",
  "Computer Science": "#9c83be",
  Biology: "#7c9c5e",
  Mathematics: "#7681ad",
  "Earth Science": "#6a9690",
  Arts: "#c47b50",
  Business: "#6e7c93",
  Government: "#9a8862",
  General: "#9a8a6c",
};
const BANNER_BG: Record<string, string> = {
  STEM: "#e9eff5",
  "Computer Science": "#ece5f1",
  Biology: "#e3eed8",
  Mathematics: "#e8e9f2",
  "Earth Science": "#dceae8",
  Arts: "#f2e3d6",
  Business: "#e3e7ee",
  Government: "#ebe6dd",
  General: "#ece6db",
};

function ListRow({
  item,
  saved,
  onToggleSave: _onToggleSave,
  onClick,
}: {
  item: Internship;
  saved: boolean;
  onToggleSave: () => void;
  onClick: () => void;
}) {
  const st = statusOf(item);
  const STATUS_STYLES: Record<string, { bg: string; color: string }> = {
    open: { bg: "oklch(0.95 0.04 145)", color: "oklch(0.62 0.14 145)" },
    hot: { bg: "oklch(0.96 0.06 25)", color: "oklch(0.57 0.20 25)" },
    soon: { bg: "oklch(0.96 0.06 80)", color: "oklch(0.66 0.16 60)" },
    rolling: { bg: "oklch(0.96 0.04 245)", color: "oklch(0.55 0.13 245)" },
    closed: { bg: "oklch(0.967 0 0)", color: "oklch(0.556 0 0)" },
    later: { bg: "oklch(0.967 0 0)", color: "oklch(0.556 0 0)" },
  };
  const styles = STATUS_STYLES[st.key] ?? STATUS_STYLES.open;
  const bg = BANNER_BG[item.category] ?? "#ece6db";
  const accent = BANNER_ACCENT[item.category] ?? "#9a8a6c";
  const paidLabel =
    item.paid === "paid"
      ? "Paid"
      : item.paid === "stipend"
        ? "Stipend"
        : item.paid === "unpaid"
          ? "Unpaid"
          : "—";

  return (
    <div
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onClick();
      }}
      role="button"
      tabIndex={0}
      className="grid items-center gap-4 px-5 py-3.5 border-b border-border cursor-pointer hover:bg-muted/50 transition-colors last:border-0"
      style={{ gridTemplateColumns: "8px 2.5fr 1fr 1fr 1fr 1fr 36px" }}
    >
      <div
        style={{
          width: 8,
          height: 36,
          borderRadius: 4,
          background: bg,
          border: `1px solid ${accent}`,
        }}
        aria-hidden="true"
      />
      <div>
        <div className="font-semibold text-sm leading-snug text-foreground line-clamp-1">
          {item.name}
        </div>
        <div className="text-xs text-muted-foreground mt-0.5">
          {item.org ?? item.category}
        </div>
      </div>
      <div className="text-xs text-muted-foreground">{item.city}</div>
      <div className="text-xs text-muted-foreground">{paidLabel}</div>
      <div className="font-mono text-xs text-foreground">
        {fmtShort(item.deadline) ?? "Rolling"}
      </div>
      <div>
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 4,
            height: 20,
            padding: "0 8px",
            borderRadius: 9999,
            fontSize: 11,
            fontWeight: 600,
            background: styles.bg,
            color: styles.color,
          }}
        >
          <span
            style={{
              width: 5,
              height: 5,
              borderRadius: "50%",
              background: "currentColor",
            }}
          />
          {st.label}
        </span>
      </div>
      <SaveButton internshipId={item.id} initialSaved={saved} userId={null} />
    </div>
  );
}

// ── Detail drawer ─────────────────────────────────────────
function Drawer({
  item,
  saved,
  onToggleSave: _onToggleSave,
  onClose,
}: {
  item: Internship;
  saved: boolean;
  onToggleSave: () => void;
  onClose: () => void;
}) {
  const deadlineText = fmtShort(item.deadline);
  const opensText = fmtShort(item.application_opens);
  const days = daysUntil(item.deadline);
  const modeLabel =
    item.type === "virtual"
      ? "Remote"
      : item.type === "in-person"
        ? "In-person"
        : item.type === "hybrid"
          ? "Hybrid"
          : item.type;

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end"
      style={{
        background: "oklch(0.18 0 0 / 0.4)",
        backdropFilter: "blur(2px)",
      }}
      onClick={onClose}
      onKeyDown={(e) => {
        if (e.key === "Escape") onClose();
      }}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="h-full overflow-y-auto flex flex-col bg-card border-l border-border"
        style={{
          width: "min(560px, 100vw)",
          animation: "drawer-in 0.22s ease",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 flex items-center gap-3 px-5 py-4 border-b border-border bg-card z-10">
          <button
            onClick={onClose}
            className="flex items-center justify-center w-8 h-8 rounded-lg hover:bg-muted text-muted-foreground transition-colors"
          >
            <XIcon size={16} />
          </button>
          <span className="text-sm font-medium text-muted-foreground">
            Program detail
          </span>
          <div className="ml-auto">
            <SaveButton
              internshipId={item.id}
              initialSaved={saved}
              userId={null}
            />
          </div>
        </div>

        {/* Banner */}
        <CategoryBanner category={item.category} height={120} />

        {/* Body */}
        <div className="flex flex-col gap-0 p-7">
          <div className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground mb-2">
            {item.category}
          </div>
          <h2 className="text-xl font-bold tracking-tight text-foreground leading-snug mb-1">
            {item.name}
          </h2>
          {item.org && (
            <p className="text-sm text-muted-foreground mb-4">{item.org}</p>
          )}
          {item.blurb && (
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              {item.blurb}
            </p>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-7">
            {[item.city, modeLabel, item.paid ?? null]
              .filter(Boolean)
              .map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center h-6 px-2.5 rounded-full bg-muted text-muted-foreground text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
          </div>

          {/* Timeline */}
          <div className="border-t border-border pt-5">
            <div className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground mb-4">
              Application timeline
            </div>
            <div className="flex flex-col gap-2">
              {opensText && (
                <div className="flex gap-3.5 items-start">
                  <div className="w-3 h-3 rounded-full bg-background border-2 border-foreground mt-0.5 shrink-0" />
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                      Applications open
                    </div>
                    <div className="font-mono text-sm text-foreground">
                      {opensText}
                    </div>
                  </div>
                </div>
              )}
              {opensText && deadlineText && (
                <div className="w-0.5 h-5 bg-border ml-[5px]" />
              )}
              {deadlineText && (
                <div className="flex gap-3.5 items-start">
                  <div
                    className="w-3 h-3 rounded-full mt-0.5 shrink-0"
                    style={{
                      background:
                        days != null && days <= 21 && days > 0
                          ? "oklch(0.57 0.20 25)"
                          : "var(--color-foreground)",
                      border: "2px solid currentColor",
                    }}
                  />
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                      Application deadline
                    </div>
                    <div className="font-mono text-sm text-foreground">
                      {deadlineText}
                      {days != null && days > 0 && (
                        <span
                          style={{
                            marginLeft: 8,
                            fontSize: 12,
                            color:
                              days <= 14
                                ? "oklch(0.57 0.20 25)"
                                : days <= 30
                                  ? "oklch(0.66 0.16 60)"
                                  : "oklch(0.556 0 0)",
                          }}
                        >
                          {days}d remaining
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* CTA */}
          {item.url && (
            <div className="mt-7 pt-5 border-t border-border">
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full rounded-lg bg-foreground text-background py-2.5 text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Apply now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </div>
          )}
        </div>
      </div>

      <style>{`@keyframes drawer-in { from { transform: translateX(20px); opacity: 0; } to { transform: translateX(0); opacity: 1; } }`}</style>
    </div>
  );
}

// ── Main component ─────────────────────────────────────────
export function InternshipsClient({
  internships,
  cities,
  savedIds,
  userId,
}: InternshipsClientProps) {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("all");
  const [city, setCity] = useState("all");
  const [mode, setMode] = useState("all");
  const [paid, setPaid] = useState("all");
  const [season, setSeason] = useState("all");
  const [sort, setSort] = useState("deadline");
  const [view, setView] = useState<"grid" | "list">("grid");
  const [statusFilter, setStatusFilter] = useState("all");
  const [drawer, setDrawer] = useState<Internship | null>(null);

  const catCounts = useMemo(() => {
    const c: Record<string, number> = {};
    for (const i of internships) c[i.category] = (c[i.category] ?? 0) + 1;
    return c;
  }, [internships]);

  const stats = useMemo(() => {
    const openNow = internships.filter((i) => {
      const s = statusOf(i).key;
      return s === "open" || s === "hot" || s === "rolling";
    }).length;
    const closingSoon = internships.filter((i) => {
      const d = daysUntil(i.deadline);
      return d != null && d > 0 && d <= 30;
    }).length;
    const paidCount = internships.filter(
      (i) => i.paid === "paid" || i.paid === "stipend",
    ).length;
    return { total: internships.length, openNow, closingSoon, paidCount };
  }, [internships]);

  const closingSoonItems = useMemo(
    () =>
      internships
        .map((i) => ({ i, d: daysUntil(i.deadline) }))
        .filter((x) => x.d != null && x.d > 0 && x.d <= 45)
        .sort((a, b) => (a.d ?? 0) - (b.d ?? 0))
        .slice(0, 8)
        .map((x) => x.i),
    [internships],
  );

  const filtered = useMemo(() => {
    let r = internships.slice();
    if (q.trim()) {
      const s = q.trim().toLowerCase();
      r = r.filter(
        (i) =>
          i.name.toLowerCase().includes(s) ||
          (i.org ?? "").toLowerCase().includes(s) ||
          i.category.toLowerCase().includes(s) ||
          i.city.toLowerCase().includes(s),
      );
    }
    if (cat !== "all") r = r.filter((i) => i.category === cat);
    if (city !== "all") r = r.filter((i) => i.city === city);
    if (mode !== "all")
      r = r.filter((i) => {
        const m = i.type === "virtual" ? "remote" : i.type;
        return m === mode;
      });
    if (paid !== "all") {
      if (paid === "compensated")
        r = r.filter((i) => i.paid === "paid" || i.paid === "stipend");
      else r = r.filter((i) => i.paid === paid);
    }
    if (season !== "all")
      r = r.filter(
        (i) => Array.isArray(i.seasons) && i.seasons.includes(season),
      );
    if (statusFilter === "open")
      r = r.filter((i) => {
        const s = statusOf(i).key;
        return s === "open" || s === "hot" || s === "rolling";
      });
    if (statusFilter === "deadline-soon")
      r = r.filter((i) => {
        const d = daysUntil(i.deadline);
        return d != null && d > 0 && d <= 30;
      });
    if (sort === "deadline") {
      r.sort((a, b) => {
        const da = daysUntil(a.deadline),
          db = daysUntil(b.deadline);
        if (da == null && db == null) return 0;
        if (da == null) return 1;
        if (db == null) return -1;
        if (da < 0 && db >= 0) return 1;
        if (db < 0 && da >= 0) return -1;
        return da - db;
      });
    } else if (sort === "az") {
      r.sort((a, b) => a.name.localeCompare(b.name));
    }
    return r;
  }, [internships, q, cat, city, mode, paid, season, statusFilter, sort]);

  const hasFilters =
    q ||
    cat !== "all" ||
    city !== "all" ||
    mode !== "all" ||
    paid !== "all" ||
    season !== "all" ||
    statusFilter !== "all";

  const clearAll = () => {
    setQ("");
    setCat("all");
    setCity("all");
    setMode("all");
    setPaid("all");
    setSeason("all");
    setStatusFilter("all");
  };

  const chipBase =
    "inline-flex items-center gap-1.5 h-8 px-3 rounded-full border border-border bg-card text-xs text-muted-foreground font-medium transition-all hover:border-foreground/30 hover:text-foreground cursor-pointer whitespace-nowrap";
  const chipActive = "bg-foreground text-background border-foreground";

  const selectStyle: React.CSSProperties = {
    height: 32,
    padding: "0 28px 0 12px",
    borderRadius: 9999,
    border: "1px solid var(--color-border)",
    background: "var(--color-card)",
    fontSize: 13,
    color: "var(--color-muted-foreground)",
    fontWeight: 500,
    fontFamily: "inherit",
    appearance: "none",
    backgroundImage:
      "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%2374787e' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'/></svg>\")",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 10px center",
    cursor: "pointer",
  };

  return (
    <>
      {/* ── Page header ─────────────────────────────────────── */}
      <header className="border-b border-border pb-8">
        <div className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground mb-3">
          For Massachusetts high schoolers
        </div>
        <h1
          className="text-4xl font-bold tracking-tight text-foreground"
          style={{ letterSpacing: "-0.03em" }}
        >
          Find your first internship.
        </h1>
        <p className="mt-2 text-sm text-muted-foreground max-w-xl">
          Browse {stats.total} programs across Massachusetts. Dates reflect the
          most recent cycle — check official sites for the latest.
        </p>

        {/* Stats strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 mt-6 border border-border rounded-xl overflow-hidden bg-card">
          {[
            { value: stats.total, label: "Programs listed", color: undefined },
            {
              value: stats.openNow,
              label: "Open now",
              color: "oklch(0.62 0.14 145)",
            },
            {
              value: stats.closingSoon,
              label: "Closing in 30 days",
              color: "oklch(0.66 0.16 60)",
            },
            {
              value: stats.paidCount,
              label: "Paid or stipend",
              color: undefined,
            },
          ].map((s, i) => (
            <div
              key={s.label}
              className={cn(
                "flex flex-col gap-1 px-5 py-4",
                i < 3 &&
                  "border-r border-border sm:border-r border-border [&:nth-child(2)]:border-r-0 sm:[&:nth-child(2)]:border-r",
              )}
            >
              <div
                className="font-mono text-2xl font-semibold leading-none tabular-nums"
                style={s.color ? { color: s.color } : undefined}
              >
                {s.value}
              </div>
              <div className="text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </header>

      {/* ── Sticky filter bar ───────────────────────────────── */}
      <div
        className="sticky top-14 z-30 flex flex-col gap-3 py-4 border-b border-border"
        style={{
          background:
            "color-mix(in oklab, var(--color-background) 92%, transparent)",
          backdropFilter: "blur(8px)",
        }}
      >
        {/* Row 1: search + selects */}
        <div className="flex items-center gap-2 flex-wrap">
          {/* Search */}
          <div className="flex flex-1 min-w-[200px] items-center gap-2 h-9 px-3 border border-border rounded-lg bg-card text-muted-foreground focus-within:ring-2 focus-within:ring-ring/30">
            <SearchIcon />
            <input
              className="flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
              placeholder="Search programs, orgs, keywords…"
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
            {q && (
              <button
                onClick={() => setQ("")}
                className="text-muted-foreground hover:text-foreground"
              >
                <XIcon size={13} />
              </button>
            )}
          </div>

          {/* Select dropdowns */}
          <select
            style={selectStyle}
            value={city}
            onChange={(e) => setCity(e.target.value)}
          >
            <option value="all">All cities</option>
            {cities.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          <select
            style={selectStyle}
            value={mode}
            onChange={(e) => setMode(e.target.value)}
          >
            <option value="all">Any format</option>
            <option value="in-person">In-person</option>
            <option value="hybrid">Hybrid</option>
            <option value="remote">Remote</option>
          </select>
          <select
            style={selectStyle}
            value={paid}
            onChange={(e) => setPaid(e.target.value)}
          >
            <option value="all">Pay: any</option>
            <option value="compensated">Paid or stipend</option>
            <option value="paid">Paid</option>
            <option value="stipend">Stipend</option>
            <option value="unpaid">Unpaid</option>
          </select>
          <select
            style={selectStyle}
            value={season}
            onChange={(e) => setSeason(e.target.value)}
          >
            <option value="all">Any season</option>
            <option value="summer">Summer</option>
            <option value="fall">Fall</option>
            <option value="winter">Winter</option>
            <option value="spring">Spring</option>
            <option value="year-round">Year-round</option>
          </select>

          <div
            style={{
              width: 1,
              height: 20,
              background: "var(--color-border)",
              margin: "0 2px",
            }}
          />

          <select
            style={selectStyle}
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="deadline">Sort: deadline</option>
            <option value="az">Sort: A → Z</option>
          </select>

          {hasFilters && (
            <button onClick={clearAll} className={cn(chipBase, "gap-1")}>
              <XIcon size={11} /> Clear
            </button>
          )}
        </div>

        {/* Row 2: category chips + quick toggles */}
        <div className="flex gap-1.5 flex-wrap items-center">
          <button
            onClick={() => setCat("all")}
            className={cn(chipBase, cat === "all" && chipActive)}
          >
            All{" "}
            <span className="font-mono text-[11px] opacity-60 ml-0.5">
              {internships.length}
            </span>
          </button>
          {CATEGORIES.filter((k) => catCounts[k]).map((k) => (
            <button
              key={k}
              onClick={() => setCat(cat === k ? "all" : k)}
              className={cn(chipBase, cat === k && chipActive)}
            >
              {k}{" "}
              <span className="font-mono text-[11px] opacity-60 ml-0.5">
                {catCounts[k]}
              </span>
            </button>
          ))}

          <div
            style={{
              width: 1,
              height: 20,
              background: "var(--color-border)",
              margin: "0 4px",
            }}
          />

          <button
            onClick={() =>
              setStatusFilter(
                statusFilter === "deadline-soon" ? "all" : "deadline-soon",
              )
            }
            className={cn(
              chipBase,
              statusFilter === "deadline-soon" && chipActive,
              "gap-1",
            )}
          >
            <FlameIcon /> Closing soon
          </button>
          <button
            onClick={() =>
              setStatusFilter(statusFilter === "open" ? "all" : "open")
            }
            className={cn(chipBase, statusFilter === "open" && chipActive)}
          >
            Open now
          </button>
        </div>
      </div>

      {/* ── Closing soon rail ────────────────────────────────── */}
      {!hasFilters && closingSoonItems.length > 0 && (
        <section className="mt-6">
          <div className="flex items-baseline justify-between mb-3.5">
            <h2 className="flex items-center gap-2 text-lg font-semibold tracking-tight text-foreground">
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "oklch(0.57 0.20 25)",
                  display: "inline-block",
                  animation: "internma-pulse 1.8s ease-in-out infinite",
                }}
              />
              Closing soon
            </h2>
            <span className="font-mono text-xs text-muted-foreground">
              {closingSoonItems.length} programs · sorted by urgency
            </span>
          </div>
          <div
            className="flex gap-3.5 overflow-x-auto pb-2"
            style={{ scrollSnapType: "x mandatory", margin: "0 -1px" }}
          >
            {closingSoonItems.map((item) => (
              <ClosingSoonCard
                key={item.id}
                item={item}
                onClick={() => setDrawer(item)}
              />
            ))}
          </div>
        </section>
      )}

      {/* ── Result bar + view toggle ─────────────────────────── */}
      <div className="flex items-center justify-between gap-3 py-4">
        <p className="text-sm text-muted-foreground">
          <strong className="text-foreground font-semibold">
            {filtered.length}
          </strong>{" "}
          {filtered.length === 1 ? "program" : "programs"}
          {hasFilters && " matching your filters"}
        </p>
        <div className="flex overflow-hidden rounded-lg border border-border bg-card">
          <button
            onClick={() => setView("grid")}
            className={cn(
              "flex items-center gap-1.5 px-2.5 py-1.5 text-xs text-muted-foreground transition-colors",
              view === "grid" && "bg-muted text-foreground",
            )}
          >
            <GridIcon /> Grid
          </button>
          <button
            onClick={() => setView("list")}
            className={cn(
              "flex items-center gap-1.5 px-2.5 py-1.5 text-xs text-muted-foreground transition-colors",
              view === "list" && "bg-muted text-foreground",
            )}
          >
            <ListIcon /> List
          </button>
        </div>
      </div>

      {/* ── Results ─────────────────────────────────────────── */}
      {filtered.length === 0 ? (
        <div className="flex flex-col items-center gap-3 rounded-xl border border-dashed border-border px-8 py-16 text-center mb-20">
          <h3 className="font-semibold text-foreground">
            No programs match your filters.
          </h3>
          <p className="text-sm text-muted-foreground">
            Try clearing a few filters or broadening your search.
          </p>
          <button
            onClick={clearAll}
            className="mt-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium hover:border-foreground/30 transition-colors"
          >
            Clear filters
          </button>
        </div>
      ) : view === "grid" ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 pb-20">
          {filtered.map((item) => (
            <InternshipCard
              key={item.id}
              internship={item}
              saved={savedIds.has(item.id)}
              userId={userId}
              onClick={() => setDrawer(item)}
            />
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-border bg-card overflow-hidden mb-20">
          <div
            className="grid px-5 py-2.5 border-b border-border bg-muted/50 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground"
            style={{ gridTemplateColumns: "8px 2.5fr 1fr 1fr 1fr 1fr 36px" }}
          >
            <span />
            <span>Program</span>
            <span>City</span>
            <span>Compensation</span>
            <span>Deadline</span>
            <span>Status</span>
            <span />
          </div>
          {filtered.map((item) => (
            <ListRow
              key={item.id}
              item={item}
              saved={savedIds.has(item.id)}
              onToggleSave={() => {}}
              onClick={() => setDrawer(item)}
            />
          ))}
        </div>
      )}

      {/* ── Detail drawer ────────────────────────────────────── */}
      {drawer && (
        <Drawer
          item={drawer}
          saved={savedIds.has(drawer.id)}
          onToggleSave={() => {}}
          onClose={() => setDrawer(null)}
        />
      )}

      <style>{`@keyframes internma-pulse { 0%,100%{opacity:1} 50%{opacity:.3} }`}</style>
    </>
  );
}
