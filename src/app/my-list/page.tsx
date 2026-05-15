import Link from "next/link";
import type { Internship } from "~/components/internships/featured-internship-card";
import { InternshipCard } from "~/components/internships/internship-card";
import { Button } from "~/components/ui/button";
import { createClient } from "~/lib/supabase/server";

export default async function MyListPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-20 flex flex-col items-center gap-4 text-center">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">
          My List
        </h1>
        <p className="text-muted-foreground">
          Sign in to save internships and access them here.
        </p>
        <Button asChild>
          <Link href="/login">Sign in</Link>
        </Button>
      </main>
    );
  }

  const { data: saved } = await supabase
    .from("saved_internships")
    .select("internship_id, internships(*)")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });

  const internships = (saved ?? [])
    .map((row) => row.internships as unknown as Internship)
    .filter(Boolean);

  if (internships.length === 0) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-20 flex flex-col items-center gap-4 text-center">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">
          My List
        </h1>
        <p className="text-muted-foreground">
          You haven&apos;t saved any internships yet.
        </p>
        <Button asChild variant="outline">
          <Link href="/internships">Browse internships</Link>
        </Button>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-5xl px-4 py-10 flex flex-col gap-10">
      <header>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          My List
        </h1>
        <p className="mt-2 text-muted-foreground">
          {internships.length} saved internship{internships.length !== 1 ? "s" : ""}
        </p>
      </header>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {internships.map((internship) => (
          <InternshipCard
            key={internship.id}
            internship={internship}
            saved={true}
            userId={user.id}
          />
        ))}
      </div>
    </main>
  );
}
