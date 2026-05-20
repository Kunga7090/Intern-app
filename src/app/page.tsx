import Link from "next/link";
import { Button } from "~/components/ui/button";
import { createClient } from "~/lib/supabase/server";

const features = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
      </svg>
    ),
    title: "Filters that get it",
    description:
      "Filter by grade level, pay, format, season, and deadline window — not just by location.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Deadline tracking",
    description:
      "See exactly when each program opens and closes. No more missing deadlines.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
      </svg>
    ),
    title: "Save & track",
    description:
      "Build a personal list of programs you're applying to. Access it anytime after signing in.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
        <path d="M22 10v6" />
        <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
      </svg>
    ),
    title: "Resources & guides",
    description:
      "Resume templates, interview prep, and essay examples written for high schoolers — not adults.",
  },
];

const steps = [
  {
    num: "01 — DISCOVER",
    title: "Browse",
    description:
      "Filter by what matters — STEM vs Arts, paid vs unpaid, your grade, your city.",
  },
  {
    num: "02 — SAVE",
    title: "Build your list",
    description: "Heart programs to revisit. Your list syncs once you sign in.",
  },
  {
    num: "03 — PREP",
    title: "Apply",
    description:
      "Pull together your resume and essays using guides written for high school applicants.",
  },
  {
    num: "04 — LAND IT",
    title: "Get hired",
    description:
      "Track applications, prep for interviews, and start the work that shapes your trajectory.",
  },
];

const FEATURED_CATS = [
  { key: "STEM", label: "STEM" },
  { key: "Biology", label: "Biology" },
  { key: "Arts", label: "Arts" },
  { key: "Mathematics", label: "Mathematics" },
  { key: "Business", label: "Business" },
  { key: "Government", label: "Government" },
];

export default async function Home() {
  const supabase = await createClient();
  const { data: all } = await supabase
    .from("internships")
    .select("category, paid, city");

  const total = all?.length ?? 0;
  const paidCount =
    all?.filter((i) => i.paid === "paid" || i.paid === "stipend").length ?? 0;
  const cityCount = new Set(all?.map((i) => i.city) ?? []).size;

  const catCounts: Record<string, number> = {};
  for (const row of all ?? []) {
    catCounts[row.category] = (catCounts[row.category] ?? 0) + 1;
  }

  return (
    <main className="flex flex-col">
      {/* ── Hero ────────────────────────────────────────────── */}
      <section className="flex flex-col items-center justify-center gap-8 px-4 py-24 text-center border-b border-border">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs text-muted-foreground">
          <span className="rounded-full bg-foreground px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-background">
            New
          </span>
          <span>
            {total}+ Massachusetts programs, updated for the 2027 cycle
          </span>
        </div>

        <div className="flex flex-col gap-4 max-w-3xl">
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-none"
            style={
              {
                letterSpacing: "-0.04em",
                textWrap: "balance",
              } as React.CSSProperties
            }
          >
            Massachusetts internships,{" "}
            <span
              className="font-mono font-medium"
              style={{ letterSpacing: "-0.03em" }}
            >
              built for high schoolers.
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Find paid research, summer fellowships, museum residencies, and
            pre-college programs across the state — filtered the way teens
            actually search.
          </p>
        </div>

        <div className="flex gap-3 flex-wrap justify-center">
          <Button asChild size="lg">
            <Link href="/internships">
              Browse internships
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
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="#how-it-works">How it works</a>
          </Button>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-10 justify-center pt-8 border-t border-border w-full max-w-2xl">
          {[
            { value: String(total), label: "Programs listed" },
            { value: String(paidCount), label: "Paid or stipend" },
            { value: String(cityCount), label: "MA cities" },
            { value: "9–12", label: "Eligible grades" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col gap-1 text-left">
              <div
                className="font-mono text-3xl font-semibold leading-none"
                style={{ letterSpacing: "-0.03em" }}
              >
                {s.value}
              </div>
              <div className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Features ────────────────────────────────────────── */}
      <section className="border-b border-border px-4 py-20">
        <div className="mx-auto max-w-5xl flex flex-col gap-14">
          <div className="text-center flex flex-col gap-3">
            <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              What's inside
            </div>
            <h2
              className="text-4xl font-bold tracking-tight"
              style={{ letterSpacing: "-0.03em" }}
            >
              Everything you need to land your first one.
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Built specifically for high schoolers in Massachusetts. No
              corporate fluff, no broken job-board search.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="flex flex-col gap-4 rounded-xl border border-border bg-card p-6 min-h-[180px]"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted text-foreground">
                  {f.icon}
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-semibold text-base tracking-tight">
                    {f.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {f.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Browse by field ──────────────────────────────────── */}
      <section className="border-b border-border px-4 py-20">
        <div className="mx-auto max-w-5xl flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Browse by field
            </div>
            <h2
              className="text-3xl font-bold tracking-tight"
              style={{ letterSpacing: "-0.03em" }}
            >
              What are you into?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {FEATURED_CATS.map(({ key, label }) => (
              <Link
                key={key}
                href={`/internships?cat=${key}`}
                className="flex items-center justify-between rounded-xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-foreground/20 hover:shadow-sm"
              >
                <div className="flex flex-col gap-0.5">
                  <span className="font-semibold text-[15px] tracking-tight">
                    {label}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {catCounts[key] ?? 0} programs
                  </span>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-muted-foreground"
                  aria-hidden="true"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ────────────────────────────────────── */}
      <section id="how-it-works" className="border-b border-border px-4 py-20">
        <div className="mx-auto max-w-5xl flex flex-col gap-12">
          <div className="flex flex-col gap-2">
            <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              How it works
            </div>
            <h2
              className="text-3xl font-bold tracking-tight"
              style={{ letterSpacing: "-0.03em" }}
            >
              From "where do I start?" to your first offer.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
            {steps.map((step, _i) => (
              <div
                key={step.num}
                className="flex flex-col gap-3 pl-6 border-l border-border relative py-1"
              >
                <div className="absolute -left-[5px] top-[10px] w-2.5 h-2.5 rounded-full bg-background border-2 border-foreground" />
                <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  {step.num}
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-semibold tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA band ────────────────────────────────────────── */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 rounded-2xl bg-foreground p-12 text-background flex-wrap">
            <div className="flex flex-col gap-2 max-w-lg">
              <h2
                className="text-3xl font-bold leading-tight"
                style={{ letterSpacing: "-0.03em" }}
              >
                Ready to find your first internship?
              </h2>
              <p className="text-sm" style={{ color: "oklch(1 0 0 / 0.7)" }}>
                Free to use. No account required to browse — sign in to save
                your list.
              </p>
            </div>
            <Button
              asChild
              size="lg"
              className="bg-background text-foreground hover:bg-background/90 shrink-0"
            >
              <Link href="/internships">
                Browse {total} programs
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
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────── */}
      <footer className="border-t border-border px-4 py-10">
        <div className="mx-auto max-w-5xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm text-muted-foreground flex-wrap">
          <div className="flex items-center gap-3">
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-foreground font-mono text-xs font-semibold text-background">
              iM
            </span>
            <span className="font-semibold text-foreground">InternMA</span>
            <span className="hidden sm:inline">
              Massachusetts high school internships
            </span>
          </div>
          <div className="flex gap-5">
            <span className="cursor-pointer hover:text-foreground transition-colors">
              About
            </span>
            <span className="cursor-pointer hover:text-foreground transition-colors">
              Submit a program
            </span>
            <span className="cursor-pointer hover:text-foreground transition-colors">
              Contact
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}
