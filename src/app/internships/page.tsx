import type { Internship } from "~/components/internships/featured-internship-card";
import { FeaturedInternshipCard } from "~/components/internships/featured-internship-card";
import { InternshipsClient } from "~/components/internships/internships-client";
import { Separator } from "~/components/ui/separator";
import { createClient } from "~/lib/supabase/server";

export default async function InternshipsPage() {
  const supabase = await createClient();

  const [
    { data },
    {
      data: { user },
    },
  ] = await Promise.all([
    supabase
      .from("internships")
      .select("*")
      .order("created_at", { ascending: false }),
    supabase.auth.getUser(),
  ]);

  const all = (data ?? []) as Internship[];
  const featured = all.filter((i) => i.featured);
  const rest = all.filter((i) => !i.featured);
  const uniqueCities = [...new Set(rest.map((i) => i.city))].sort();

  let savedIds = new Set<string>();
  if (user) {
    const { data: saved } = await supabase
      .from("saved_internships")
      .select("internship_id")
      .eq("user_id", user.id);
    savedIds = new Set((saved ?? []).map((r) => r.internship_id as string));
  }

  const userId = user?.id ?? null;

  return (
    <main className="mx-auto max-w-5xl px-4 py-10 flex flex-col gap-10">
      <header>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Internships
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Dates are based on previous application cycles and may change. Please check the official website for the most current information.
        </p>
      </header>

      {featured.length > 0 && (
        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-foreground">
            Featured Opportunities
          </h2>
          <div className="flex flex-col gap-4">
            {featured.map((internship) => (
              <FeaturedInternshipCard
                key={internship.id}
                internship={internship}
                saved={savedIds.has(internship.id)}
                userId={userId}
              />
            ))}
          </div>
        </section>
      )}

      <Separator />

      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-foreground">
          All Internships
        </h2>
        <InternshipsClient
          internships={rest}
          cities={uniqueCities}
          savedIds={savedIds}
          userId={userId}
        />
      </section>
    </main>
  );
}
