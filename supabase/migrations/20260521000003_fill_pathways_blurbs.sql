-- Add org, blurb, and seasons for programs scraped from pathwaystoscience.org
-- and LEAH Knox Scholars (CollegeVine scraper, category-only migration missed it).

-- LEAH Knox Scholars
update public.internships set
  org     = 'LEAH Knox Foundation',
  blurb   = 'Computer science and STEM scholarship program for high school students in the Boston area.',
  seasons = ARRAY['Summer']
where name ilike '%LEAH Knox Scholars%';

-- Eureka! Program
update public.internships set
  org     = 'Clark University',
  blurb   = 'Hands-on STEM exploration program for high school students at Clark University in Worcester.',
  seasons = ARRAY['Summer']
where name ilike '%Eureka!%' or name ilike '%Eureka Program%';

-- Ocean STEAM Powered Women (O-STEAM) Fellowship
update public.internships set
  org     = 'Woods Hole Oceanographic Institution',
  blurb   = 'Fellowship introducing young women to ocean science, engineering, and marine research in Falmouth.',
  seasons = ARRAY['Summer']
where name ilike '%O-STEAM%' or name ilike '%Ocean STEAM Powered Women%';

-- Science Mentorship Institute - Biology Mentorship Program
update public.internships set
  org     = 'Wellesley College',
  blurb   = 'One-on-one biology research mentorship pairing high school students with college scientists at Wellesley.',
  seasons = ARRAY['Summer']
where name ilike '%Science Mentorship Institute%Biology%'
   or name ilike '%SMI%Biology%';

-- Marjot Foundation Independent research in Environmental Sciences
update public.internships set
  org     = 'Marjot Foundation',
  blurb   = 'Independent environmental science research fellowship for high school students in Worcester.',
  seasons = ARRAY['Summer']
where name ilike '%Marjot Foundation%';

-- Summer Pre-College Program Funding and Scholarships
update public.internships set
  org     = 'UMass Amherst',
  blurb   = 'Financial assistance program supporting Massachusetts high school students attending summer pre-college programs.',
  seasons = ARRAY['Summer']
where name ilike '%Summer Pre-College Program Funding%'
   or name ilike '%Pre-College Program Funding and Scholarships%';
