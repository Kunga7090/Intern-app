-- Create profiles table for user data beyond Supabase auth
create table if not exists public.profiles (
  id uuid references auth.users(id) on delete cascade primary key,
  full_name text not null,
  internship_types text[] default '{}',
  onboarding_completed boolean default false,
  created_at timestamptz default now() not null
);

alter table public.profiles enable row level security;

create index if not exists profiles_id_idx on public.profiles (id);

create policy "profiles_select_own" on public.profiles
  for select to authenticated
  using (auth.uid() = id);

create policy "profiles_insert_own" on public.profiles
  for insert to authenticated
  with check (auth.uid() = id);

create policy "profiles_update_own" on public.profiles
  for update to authenticated
  using (auth.uid() = id)
  with check (auth.uid() = id);
