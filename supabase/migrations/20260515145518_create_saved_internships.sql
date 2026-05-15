-- Saves a user's hearted internships
create table if not exists saved_internships (
  id             uuid primary key default gen_random_uuid(),
  user_id        uuid not null references auth.users(id) on delete cascade,
  internship_id  uuid not null references internships(id) on delete cascade,
  created_at     timestamptz not null default now(),
  unique(user_id, internship_id)
);

alter table saved_internships enable row level security;

create policy "saved_internships_select_own" on saved_internships
  for select to authenticated using (auth.uid() = user_id);

create policy "saved_internships_insert_own" on saved_internships
  for insert to authenticated with check (auth.uid() = user_id);

create policy "saved_internships_delete_own" on saved_internships
  for delete to authenticated using (auth.uid() = user_id);

create index if not exists saved_internships_user_id_idx on saved_internships(user_id);
