-- Seed dummy internship data for development and demo purposes
insert into public.internships (name, city, type, category, featured) values
  ('BU Spark! Software Fellowship',       'Boston',      'in-person', 'Computer Science', true),
  ('Dana-Farber Cancer Research Intern',  'Boston',      'in-person', 'Biology',          true),
  ('MIT CSAIL AI Research Assistant',     'Cambridge',   'in-person', 'Computer Science', false),
  ('Greentown Labs Climate Tech Intern',  'Somerville',  'in-person', 'Engineering',      false),
  ('Worcester Community Health Fellow',   'Worcester',   'in-person', 'Biology',          false),
  ('Springfield Marketing Co-op',         'Springfield', 'in-person', 'Marketing',        false),
  ('Remote Web Dev Bootcamp Assistant',   'Boston',      'virtual',   'Computer Science', false),
  ('HubSpot Growth Marketing Intern',     'Cambridge',   'virtual',   'Marketing',        false),
  ('Virtual Biology Lab — UMass Online',  'Worcester',   'virtual',   'Biology',          false),
  ('MassTLC Engineering Externship',      'Boston',      'virtual',   'Engineering',      false);
