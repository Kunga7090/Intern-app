-- Add 8 new verified programs across Neuroscience, Psychology, Social Science,
-- Film, STEM Research, and Data Science categories.

insert into public.internships
  (name, city, type, category, featured, org, blurb, seasons, paid, deadline, application_opens, url)
values

-- ── Neuroscience ──────────────────────────────────────────────────────────────
(
  'MGH Youth Neurology Research Program',
  'Boston', 'in-person', 'Neuroscience', true,
  'Massachusetts General Hospital',
  'Paid 6–8 week full-time summer research internship for rising seniors and recent HS graduates (Massachusetts residents) to work directly in neurology and neuroscience labs at MGH/Harvard, with weekly sessions from leading neurologists and clinical exposure.',
  ARRAY['Summer'], 'paid', '2027-03-01', '2026-11-01',
  'https://www.massgeneral.org/neurology/education-and-training/youth-research-and-education'
),

-- ── Psychology ────────────────────────────────────────────────────────────────
(
  'BU Academic Immersion in Psychology',
  'Boston', 'in-person', 'Psychology', false,
  'Boston University',
  'Three-week residential summer program for rising juniors and seniors combining psychology coursework with hands-on research — students design and conduct their own experiments under BU faculty supervision.',
  ARRAY['Summer'], 'unpaid', '2027-04-01', '2026-12-01',
  'https://www.bu.edu/summer/high-school-programs/academic-immersion/psychology/'
),
(
  'Clark University Discover Psychology Summer Academy',
  'Worcester', 'in-person', 'Psychology', false,
  'Clark University',
  'One-week day program for rising 11th and 12th graders exploring clinical, cognitive, developmental, and social psychology through faculty-led lectures and hands-on activities. An advanced two-week residential research intensive is also available.',
  ARRAY['Summer'], 'unpaid', '2027-06-15', '2027-03-01',
  'https://www.clarku.edu/psychology/summer-academy/'
),

-- ── STEM Research ─────────────────────────────────────────────────────────────
(
  'Tufts Summer Research Experience',
  'Medford', 'in-person', 'STEM', false,
  'Tufts University',
  'Six-week summer lab research program for rising juniors and seniors (16+) with placements in neuroscience, biology, engineering, and other fields under Tufts faculty mentors — includes both cohort coursework and individual research projects.',
  ARRAY['Summer'], 'unpaid', '2027-04-01', '2026-12-01',
  'https://universitycollege.tufts.edu/pre-college/browse/tufts-summer-research-experience'
),

-- ── Social Science ────────────────────────────────────────────────────────────
(
  'American Anthropological Association Virtual HS Internship',
  'Remote', 'remote', 'Social Science', false,
  'American Anthropological Association',
  'Four-week remote internship (~10 hrs/week) where high school students adapt contemporary anthropological research for K–12 audiences and work on public education projects — no prior anthropology experience required.',
  ARRAY['Summer'], 'unpaid', '2027-05-01', '2027-03-01',
  'https://americananthro.org/practice-teach/virtual-high-school-internship/'
),

-- ── Film ──────────────────────────────────────────────────────────────────────
(
  'Fresh Films Boston Youth Film Program',
  'Boston', 'in-person', 'Film', true,
  'Fresh Films',
  'Paid ($16.25/hour, 100 hours) 5-week summer program for Boston Public High School students to rotate through all film crew positions — camera, sound, editing — creating professional-quality films. No experience required; alumni have IMDb credits and work at major studios.',
  ARRAY['Summer'], 'paid', '2027-04-01', '2027-01-01',
  'https://freshfilms.org/ma/'
),
(
  'Filmmakers Collaborative FC Academy',
  'Boston', 'in-person', 'Film', false,
  'Filmmakers Collaborative',
  'After-school and summer filmmaking program across 40+ towns in Greater Boston where students write, shoot, and edit their own short film in one week, learning scriptwriting, cinematography, and editing from working film professionals.',
  ARRAY['Summer', 'Fall', 'Spring'], 'unpaid', null, null,
  'https://filmmakerscollab.org/fc-academy/'
),

-- ── Data Science ──────────────────────────────────────────────────────────────
(
  'Wharton High School Data Science Competition',
  'Remote', 'remote', 'Data Science', false,
  'University of Pennsylvania Wharton',
  'Free annual national data science competition for high school students ages 14–18 — teams analyze real-world datasets and present findings, competing alongside 700+ teams from 48 countries. No prior data science experience required.',
  ARRAY['Fall', 'Spring'], 'unpaid', null, '2026-09-01',
  'https://wsb.wharton.upenn.edu/wharton-data-competition/'
);
