"use client";

import { CategoryBanner } from "~/components/internships/category-banner";
import {
  daysUntil,
  fmtSeasons,
  fmtShort,
  statusOf,
} from "~/lib/internship-status";
import { cn } from "~/lib/utils";
import { SaveButton } from "./save-button";

export interface Internship {
  id: string;
  name: string;
  org: string | null;
  blurb: string | null;
  city: string;
  type: string;
  category: string;
  featured: boolean;
  created_at: string;
  url: string | null;
  deadline?: string | null;
  application_opens?: string | null;
  paid?: "paid" | "unpaid" | "stipend" | null;
  seasons?: string[] | null;
  grades?: number[] | null;
}

interface InternshipCardProps {
  internship: Internship;
  saved?: boolean;
  userId?: string | null;
  onClick?: () => void;
}

const STATUS_STYLES: Record<string, { bg: string; color: string }> = {
  open: { bg: "oklch(0.95 0.04 145)", color: "oklch(0.62 0.14 145)" },
  hot: { bg: "oklch(0.96 0.06 25)", color: "oklch(0.57 0.20 25)" },
  soon: { bg: "oklch(0.96 0.06 80)", color: "oklch(0.66 0.16 60)" },
  rolling: { bg: "oklch(0.96 0.04 245)", color: "oklch(0.55 0.13 245)" },
  closed: { bg: "oklch(0.967 0 0)", color: "oklch(0.556 0 0)" },
  later: { bg: "oklch(0.967 0 0)", color: "oklch(0.556 0 0)" },
};

function StatusPill({ internship }: { internship: Internship }) {
  const st = statusOf(internship);
  const styles = STATUS_STYLES[st.key] ?? STATUS_STYLES.open;
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 5,
        height: 22,
        padding: "0 9px",
        borderRadius: 9999,
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: "0.01em",
        background: styles.bg,
        color: styles.color,
      }}
    >
      <span
        style={{
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: "currentColor",
          animation:
            st.key === "hot"
              ? "internma-pulse 1.8s ease-in-out infinite"
              : undefined,
        }}
      />
      {st.label}
    </span>
  );
}

const PAID_STYLES = {
  paid: { bg: "oklch(0.95 0.04 145)", color: "oklch(0.62 0.14 145)" },
  stipend: { bg: "oklch(0.96 0.04 245)", color: "oklch(0.55 0.13 245)" },
  unpaid: { bg: "oklch(0.967 0 0)", color: "oklch(0.556 0 0)" },
};

function SmallTag({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        height: 22,
        padding: "0 8px",
        borderRadius: 9999,
        background: "oklch(0.967 0 0)",
        color: "oklch(0.556 0 0)",
        fontSize: 11,
        fontWeight: 500,
      }}
    >
      {children}
    </span>
  );
}

export function InternshipCard({
  internship,
  saved = false,
  userId = null,
  onClick,
}: InternshipCardProps) {
  const deadlineText = fmtShort(internship.deadline);
  const opensText = fmtShort(internship.application_opens);
  const seasonText = fmtSeasons(internship.seasons);
  const days = daysUntil(internship.deadline);

  const modeLabel =
    internship.type === "virtual"
      ? "Remote"
      : internship.type === "in-person"
        ? "In-person"
        : internship.type === "hybrid"
          ? "Hybrid"
          : internship.type;

  const paidLabel =
    internship.paid === "paid"
      ? "Paid"
      : internship.paid === "stipend"
        ? "Stipend"
        : internship.paid === "unpaid"
          ? "Unpaid"
          : null;
  const paidStyles = internship.paid ? PAID_STYLES[internship.paid] : undefined;

  const card = (
    <article
      onClick={onClick}
      onKeyDown={
        onClick
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") onClick();
            }
          : undefined
      }
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      className={cn(
        "relative flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-150",
        onClick &&
          "cursor-pointer hover:-translate-y-0.5 hover:border-foreground/20 hover:shadow-sm",
      )}
    >
      {/* Banner */}
      <CategoryBanner category={internship.category} height={160} />

      {/* Floating save button */}
      <div className="absolute top-2.5 right-2.5 z-10">
        <SaveButton
          internshipId={internship.id}
          initialSaved={saved}
          userId={userId}
          className="rounded-full bg-white/90 backdrop-blur-sm shadow-xs hover:bg-white"
        />
      </div>

      {/* Body */}
      <div className="flex flex-col gap-3 p-5 flex-1">
        {/* Category eyebrow */}
        <div className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
          {internship.category}
        </div>

        {/* Title + org */}
        <div className="flex flex-col gap-0.5">
          <h3 className="line-clamp-2 text-[15px] font-semibold leading-snug tracking-tight text-foreground m-0">
            {internship.name}
          </h3>
          {internship.org && (
            <p className="text-xs text-muted-foreground">{internship.org}</p>
          )}
        </div>

        {/* Blurb */}
        {internship.blurb && (
          <p className="line-clamp-2 text-[13px] leading-relaxed text-muted-foreground m-0">
            {internship.blurb}
          </p>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          <StatusPill internship={internship} />
          <SmallTag>{internship.city}</SmallTag>
          <SmallTag>{modeLabel}</SmallTag>
          {seasonText && <SmallTag>{seasonText}</SmallTag>}
          {paidLabel && paidStyles && (
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                height: 22,
                padding: "0 8px",
                borderRadius: 9999,
                background: paidStyles.bg,
                color: paidStyles.color,
                fontSize: 11,
                fontWeight: 500,
              }}
            >
              {paidLabel}
            </span>
          )}
        </div>

        {/* Meta grid */}
        <div className="mt-auto grid grid-cols-2 gap-3 border-t border-border pt-3.5">
          <div className="flex flex-col gap-0.5">
            <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
              Deadline
            </span>
            <span className="font-mono text-[13px] font-medium tabular-nums text-foreground">
              {deadlineText ?? "Rolling"}
              {days != null && days > 0 && days <= 30 && (
                <span
                  style={{
                    marginLeft: 6,
                    fontSize: 11,
                    color:
                      days <= 14
                        ? "oklch(0.57 0.20 25)"
                        : "oklch(0.66 0.16 60)",
                  }}
                >
                  · {days}d
                </span>
              )}
            </span>
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
              Opens
            </span>
            <span
              className={cn(
                "font-mono text-[13px] tabular-nums",
                opensText
                  ? "font-medium text-foreground"
                  : "text-muted-foreground",
              )}
            >
              {opensText ?? "Anytime"}
            </span>
          </div>
        </div>
      </div>

      {/* Pulse keyframe — injected once per page via CSS */}
      <style>{`@keyframes internma-pulse { 0%,100%{opacity:1} 50%{opacity:.3} }`}</style>
    </article>
  );

  if (internship.url && !onClick) {
    return (
      <a
        href={internship.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {card}
      </a>
    );
  }
  return card;
}
