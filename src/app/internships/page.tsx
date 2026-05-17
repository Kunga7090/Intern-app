import type { Internship } from "~/components/internships/internship-card";
import { InternshipsClient } from "~/components/internships/internships-client";
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
  const uniqueCities = [...new Set(all.map((i) => i.city))].sort();

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
          Dates are based on previous application cycles and may change. Please
          check the official website for the most current information.
        </p>
      </header>

      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-foreground">
          All Internships
        </h2>
        <InternshipsClient
          internships={all}
          cities={uniqueCities}
          savedIds={savedIds}
          userId={userId}
        />
      </section>
    </main>
  );
}
