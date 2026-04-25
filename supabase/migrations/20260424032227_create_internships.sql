-- Create internships table for listing available internship opportunities
create table if not exists public.internships (
  id         uuid primary key default gen_random_uuid(),
  name       text not null,
  city       text not null,
  type       text not null check (type in ('virtual', 'in-person')),
  category   text not null,
  featured   boolean not null default false,
  created_at timestamptz not null default now()
);

alter table public.internships enable row level security;

create index if not exists internships_city_idx     on public.internships (city);
create index if not exists internships_featured_idx on public.internships (featured);

-- Public read for unauthenticated users
create policy "internships_select_anon" on public.internships
  for select to anon using (true);

-- Public read for authenticated users
create policy "internships_select_authenticated" on public.internships
  for select to authenticated using (true);
