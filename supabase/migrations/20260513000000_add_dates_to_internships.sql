-- Surface deadline and application-open dates on internship cards
alter table public.internships
  add column if not exists deadline          date,
  add column if not exists application_opens date;

create index if not exists internships_deadline_idx
  on public.internships (deadline)
  where deadline is not null;

create index if not exists internships_application_opens_idx
  on public.internships (application_opens)
  where application_opens is not null;
