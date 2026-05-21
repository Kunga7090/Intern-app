-- Fill org, blurb, and seasons for programs missed by the previous seed migration.

-- GROW
update public.internships set
  org     = 'Boston University',
  blurb   = 'Summer research program for young women from underrepresented backgrounds at Greater Boston universities.',
  seasons = ARRAY['Summer']
where name ilike '%GROW%Greater Boston Research Opportunities%'
   or name ilike '%Greater Boston Research Opportunities for Young Women%';

-- Paul Revere House
update public.internships set
  org     = 'Paul Revere Memorial Association',
  blurb   = 'One-week hands-on museum internship at Paul Revere''s historic 1680 home in Boston''s North End.',
  seasons = ARRAY['Summer']
where name ilike '%Paul Revere House%';

-- Museum of Fine Arts Boston Teen Programs
update public.internships set
  org     = 'Museum of Fine Arts, Boston',
  blurb   = 'Paid creative internship at one of the world''s great art museums, supporting education and community programming.',
  seasons = ARRAY['Summer']
where name ilike '%Museum of Fine Arts%Teen%'
   or name ilike '%MFA%Teen%';

-- Boston Society for Architecture
update public.internships set
  org     = 'Boston Society for Architecture',
  blurb   = 'Summer internship introducing high school students to architecture, urban design, and the built environment.',
  seasons = ARRAY['Summer']
where name ilike '%Boston Society for Architecture%'
   or name ilike '%BSA%Arch%Design%High School%';

-- Massachusetts Supreme Judicial Court Judicial Youth Corps
update public.internships set
  org     = 'Massachusetts Supreme Judicial Court',
  blurb   = 'Civic education and law internship placing high schoolers in Massachusetts courts and government offices.',
  seasons = ARRAY['Summer']
where name ilike '%Supreme Judicial Court%'
   or name ilike '%Judicial Youth Corps%';
