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
    <main className="mx-auto max-w-5xl px-4 py-10 flex flex-col gap-6">
      <InternshipsClient
        internships={all}
        cities={uniqueCities}
        savedIds={savedIds}
        userId={userId}
      />
    </main>
  );
}
