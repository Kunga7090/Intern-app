"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { createClient } from "~/lib/supabase/server";

export async function signIn(
  _prevState: string | null,
  formData: FormData,
): Promise<string | null> {
  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  });

  if (error) return error.message;

  redirect("/");
}

export async function signUp(
  _prevState: { error?: string; message?: string } | null,
  formData: FormData,
): Promise<{ error?: string; message?: string }> {
  const supabase = await createClient();

  const headersList = await headers();
  const host = headersList.get("host") ?? "localhost:3000";
  const protocol = host.startsWith("localhost") ? "http" : "https";
  const origin = `${protocol}://${host}`;

  const { data, error } = await supabase.auth.signUp({
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    options: {
      emailRedirectTo: `${origin}/auth/callback?next=/onboarding`,
      data: { full_name: formData.get("fullName") as string },
    },
  });

  if (error) return { error: error.message };

  // Email confirmation disabled — session is available immediately
  if (data.session) redirect("/onboarding");

  // Email confirmation enabled — prompt the user to check their inbox
  return { message: "Check your email to confirm your account." };
}

export async function saveOnboarding(
  _prevState: string | null,
  formData: FormData,
): Promise<string | null> {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const types = formData.getAll("internship_types") as string[];
  if (types.length === 0) return "Please select at least one internship type.";

  const { error } = await supabase
    .from("profiles")
    .update({ internship_types: types, onboarding_completed: true })
    .eq("id", user.id);

  if (error) return error.message;

  redirect("/");
}
