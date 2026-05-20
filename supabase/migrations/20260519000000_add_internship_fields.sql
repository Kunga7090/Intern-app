-- Add org, blurb, seasons, grades, paid fields; expand type constraint

-- Drop old type constraint
alter table public.internships drop constraint if exists internships_type_check;

-- Add new constraint that includes 'hybrid' and 'remote'
alter table public.internships add constraint internships_type_check
  check (type in ('virtual', 'in-person', 'hybrid', 'remote'));

-- Add new columns (all nullable so existing rows still work)
alter table public.internships
  add column if not exists org text,
  add column if not exists blurb text,
  add column if not exists seasons text[],
  add column if not exists grades integer[],
  add column if not exists paid text check (paid in ('paid', 'unpaid', 'stipend'));

-- Index on paid for filter queries
create index if not exists internships_paid_idx on public.internships (paid);
