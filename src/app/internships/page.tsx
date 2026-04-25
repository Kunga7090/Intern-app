import type { Internship } from "~/components/internships/featured-internship-card";
import { FeaturedInternshipCard } from "~/components/internships/featured-internship-card";
import { InternshipsClient } from "~/components/internships/internships-client";
import { Separator } from "~/components/ui/separator";
import { createClient } from "~/lib/supabase/server";

export default async function InternshipsPage() {
  const supabase = await createClient();
  const { data } = await supabase
    .from("internships")
    .select("*")
    .order("created_at", { ascending: false });

  const all = (data ?? []) as Internship[];
  const featured = all.filter((i) => i.featured);
  const rest = all.filter((i) => !i.featured);
  const uniqueCities = [...new Set(rest.map((i) => i.city))].sort();

  return (
    <main className="mx-auto max-w-5xl px-4 py-10 flex flex-col gap-10">
      <header>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Internships
        </h1>
        <p className="mt-2 text-muted-foreground">
          Browse internship opportunities across Massachusetts.
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
        <InternshipsClient internships={rest} cities={uniqueCities} />
      </section>
    </main>
  );
}
