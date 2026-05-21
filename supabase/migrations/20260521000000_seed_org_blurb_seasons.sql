-- Populate org, blurb, and seasons for all known real programs.
-- These fields were added in 20260519000000 but never seeded.

-- Army AEOP
update public.internships set
  org     = 'U.S. Army',
  blurb   = 'Paid apprenticeship across Army research labs and partner universities.',
  seasons = ARRAY['Summer']
where name ilike '%Army Educational Outreach%AEOP%';

-- Ragon Institute RISE
update public.internships set
  org     = 'Ragon Institute (MGH / MIT / Harvard)',
  blurb   = 'Immunology and HIV research for students from underrepresented backgrounds.',
  seasons = ARRAY['Summer']
where name ilike '%Ragon Institute Summer Experience%';

-- New England Aquarium
update public.internships set
  org     = 'New England Aquarium',
  blurb   = 'Hands-on marine science and conservation internship at the New England Aquarium.',
  seasons = ARRAY['Summer']
where name ilike '%New England Aquarium Teen%';

-- Tufts TUBERS
update public.internships set
  org     = 'Tufts University',
  blurb   = 'Hands-on biomedical engineering research experience for high school students.',
  seasons = ARRAY['Summer']
where name ilike '%Tufts%Biomedical Engineering Research Scholars%';

-- Northeastern YSP
update public.internships set
  org     = 'Northeastern University',
  blurb   = 'STEM research and academic enrichment program for Boston-area high schoolers.',
  seasons = ARRAY['Summer']
where name ilike '%Northeastern Young Scholars%';

-- MA Life Sciences Center
update public.internships set
  org     = 'MA Life Sciences Center',
  blurb   = 'Paid STEM apprenticeships at life sciences companies across Massachusetts.',
  seasons = ARRAY['Summer']
where name ilike '%Massachusetts Life Sciences Center%';

-- MIT RSI
update public.internships set
  org     = 'MIT / CEE',
  blurb   = 'Highly selective six-week research program — one of the most prestigious in the country.',
  seasons = ARRAY['Summer']
where name ilike '%Research Science Institute%RSI%';

-- Broad Summer Scholars
update public.internships set
  org     = 'Broad Institute',
  blurb   = 'Six-week paid biomedical research at the Broad Institute of MIT and Harvard.',
  seasons = ARRAY['Summer']
where name ilike '%Broad Summer Scholars%';

-- PROMYS
update public.internships set
  org     = 'Boston University',
  blurb   = 'Six-week residential mathematics program exploring number theory and mathematical thought.',
  seasons = ARRAY['Summer']
where name ilike '%PROMYS%';

-- Canada/USA Mathcamp
update public.internships set
  org     = 'Mathematical Sciences Research Institute',
  blurb   = 'Intensive five-week summer program for mathematically talented high school students.',
  seasons = ARRAY['Summer']
where name ilike '%Mathcamp%';

-- MGH Youth Scholars
update public.internships set
  org     = 'Massachusetts General Hospital',
  blurb   = 'Mentored biomedical research experience at one of the nation''s top hospitals.',
  seasons = ARRAY['Summer']
where name ilike '%MGH Youth Scholars%' or name ilike '%Mass General Hospital%Youth Scholars%';

-- BU RISE
update public.internships set
  org     = 'Boston University',
  blurb   = 'Research in Science & Engineering internship for underrepresented high school students.',
  seasons = ARRAY['Summer']
where name ilike '%BU RISE%';

-- Museum of Science
update public.internships set
  org     = 'Museum of Science',
  blurb   = 'Behind-the-scenes museum operations and STEM education experience in Boston.',
  seasons = ARRAY['Summer', 'Fall', 'Spring']
where name ilike '%Museum of Science%Youth Internship%';

-- Artists for Humanity
update public.internships set
  org     = 'Artists For Humanity',
  blurb   = 'Paid creative employment and arts education for Boston teens.',
  seasons = ARRAY['Summer', 'Fall', 'Spring']
where name ilike '%Artists for Humanity%';

-- Dana-Farber Workforce Development
update public.internships set
  org     = 'Dana-Farber Cancer Institute',
  blurb   = 'Paid academic-year internship in cancer research and clinical operations.',
  seasons = ARRAY['Fall', 'Spring']
where name ilike '%Dana-Farber%Workforce%';

-- Today's Interns
update public.internships set
  org     = 'Today''s Interns',
  blurb   = 'Connecting Massachusetts high school students with paid internship opportunities.',
  seasons = ARRAY['Summer', 'Fall', 'Spring']
where name ilike '%Today''s Interns%';

-- Boston Public Library
update public.internships set
  org     = 'Boston Public Library',
  blurb   = 'Teen internship program supporting library services, programming, and digital literacy.',
  seasons = ARRAY['Summer', 'Fall', 'Spring']
where name ilike '%Boston Public Library%';
