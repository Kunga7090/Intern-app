-- Add application URL to internships so cards can link to the program page
alter table public.internships
  add column if not exists url text;
