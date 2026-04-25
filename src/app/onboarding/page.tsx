"use client";

import { useState } from "react";
import { Button } from "~/components/ui/button";
import { createClient } from "~/lib/supabase/client";
import { cn } from "~/lib/utils";

const INTERNSHIP_TYPES = [
  { id: "tech", label: "Technology & Software" },
  { id: "business", label: "Business & Finance" },
  { id: "healthcare", label: "Healthcare & Medicine" },
  { id: "marketing", label: "Marketing & Communications" },
  { id: "research", label: "Research & Science" },
  { id: "education", label: "Education" },
  { id: "nonprofit", label: "Non-profit & Government" },
  { id: "arts", label: "Arts & Design" },
  { id: "legal", label: "Law & Legal" },
  { id: "engineering", label: "Engineering" },
];

export default function OnboardingPage() {
  const [selected, setSelected] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isPending, setIsPending] = useState(false);

  function toggle(id: string) {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((v) => v !== id) : [...prev, id],
    );
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (selected.length === 0) {
      setError("Please select at least one internship type.");
      return;
    }

    setIsPending(true);
    setError(null);

    const supabase = createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      window.location.href = "/login";
      return;
    }

    const { error: updateError } = await supabase
      .from("profiles")
      .update({ internship_types: selected, onboarding_completed: true })
      .eq("id", user.id);

    if (updateError) {
      setError(updateError.message);
      setIsPending(false);
      return;
    }

    window.location.href = "/";
  }

  return (
    <div className="flex min-h-[calc(100vh-3.5rem)] items-center justify-center px-4">
      <div className="w-full max-w-lg space-y-8">
        <div className="space-y-1 text-center">
          <h1 className="text-2xl font-bold tracking-tight">
            What kind of internships interest you?
          </h1>
          <p className="text-sm text-muted-foreground">
            Select all that apply. You can update this later.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {INTERNSHIP_TYPES.map(({ id, label }) => {
              const isSelected = selected.includes(id);
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => toggle(id)}
                  className={cn(
                    "rounded-lg border px-4 py-3 text-left text-sm font-medium transition-colors",
                    isSelected
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-background text-foreground hover:bg-accent hover:text-accent-foreground",
                  )}
                >
                  {label}
                </button>
              );
            })}
          </div>

          {error && <p className="text-sm text-destructive">{error}</p>}

          <Button type="submit" className="w-full" disabled={isPending}>
            {isPending ? "Saving…" : "Continue"}
          </Button>
        </form>
      </div>
    </div>
  );
}
