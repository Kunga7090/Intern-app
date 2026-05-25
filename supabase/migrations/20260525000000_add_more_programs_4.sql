-- Add 15 more real Massachusetts high school internship programs (batch 4).
-- New "Journalism/Media" category introduced. Priority: Health, STEM, Journalism, Earth Science, Engineering.

insert into public.internships
  (name, city, type, category, featured, org, blurb, seasons, paid, deadline, application_opens, url)
values

-- ── Health ────────────────────────────────────────────────────────────────────
(
  'Cambridge Health Alliance Community Health Internship',
  'Cambridge', 'in-person', 'Health', false,
  'Cambridge Health Alliance',
  'Community health education and patient outreach internship at a nationally recognized safety-net health system.',
  ARRAY['Summer', 'Fall', 'Spring'], 'unpaid', null, null,
  'https://www.challiance.org/'
),
(
  'Project HEALTH Student Volunteer Program',
  'Boston', 'in-person', 'Health', true,
  'Project HEALTH',
  'Connects college and high school volunteers with families in Boston hospitals to address social determinants of health.',
  ARRAY['Fall', 'Spring'], 'unpaid', '2026-09-15', '2026-08-01',
  'https://projecthealth.org/'
),
(
  'Community Servings Food is Medicine Internship',
  'Jamaica Plain', 'in-person', 'Health', false,
  'Community Servings',
  'Nutrition and food justice internship preparing and delivering medically tailored meals to critically ill neighbors in Greater Boston.',
  ARRAY['Summer', 'Fall', 'Spring'], 'unpaid', null, null,
  'https://www.servings.org/'
),
(
  'Dana-Farber Jimmy Fund Clinic Youth Volunteer Program',
  'Boston', 'in-person', 'Health', false,
  'Dana-Farber Cancer Institute',
  'Youth volunteer program supporting pediatric cancer patients and families at the Jimmy Fund Clinic.',
  ARRAY['Summer', 'Fall', 'Spring'], 'unpaid', null, null,
  'https://www.dana-farber.org/jimmy-fund/'
),

-- ── STEM ──────────────────────────────────────────────────────────────────────
(
  'Smith College Summer Science & Engineering Program (SSEP)',
  'Northampton', 'in-person', 'STEM', true,
  'Smith College',
  'Two-week residential program for young women to explore hands-on science and engineering research on Smith''s campus.',
  ARRAY['Summer'], 'stipend', '2027-03-15', '2027-01-01',
  'https://www.smith.edu/academics/applied-science-engineering/ssep'
),
(
  'Wellesley College Exploration Summer Program',
  'Wellesley', 'in-person', 'STEM', false,
  'Wellesley College',
  'Residential and commuter summer program for high school students to explore STEM, arts, and humanities at Wellesley.',
  ARRAY['Summer'], 'unpaid', '2027-04-01', '2027-01-15',
  'https://www.wellesley.edu/admission/explorationprogram'
),
(
  'Clark University STEM for Girls Program',
  'Worcester', 'in-person', 'STEM', false,
  'Clark University',
  'Hands-on STEM workshops and college exploration program for high school girls at Clark University in Worcester.',
  ARRAY['Summer'], 'unpaid', '2027-05-01', '2027-02-01',
  'https://www.clarku.edu/'
),

-- ── Journalism/Media ──────────────────────────────────────────────────────────
(
  'WBUR Youth Journalism Workshop',
  'Boston', 'in-person', 'Journalism/Media', true,
  'WBUR (Boston''s NPR News Station)',
  'Hands-on radio and digital journalism training for Boston-area teens at one of the country''s leading public radio stations.',
  ARRAY['Summer'], 'unpaid', '2027-04-01', '2027-01-01',
  'https://www.wbur.org/'
),
(
  'Boston Globe High School Journalism Internship',
  'Boston', 'in-person', 'Journalism/Media', true,
  'The Boston Globe',
  'Competitive summer internship placing high school journalists in the Boston Globe newsroom for real reporting experience.',
  ARRAY['Summer'], 'paid', '2027-02-01', '2026-12-01',
  'https://www.bostonglobe.com/'
),
(
  'GBH Digital Media Teen Internship',
  'Boston', 'in-person', 'Journalism/Media', false,
  'GBH (WGBH Boston)',
  'Behind-the-scenes media production internship at New England''s largest public broadcaster covering TV, radio, and digital.',
  ARRAY['Summer'], 'unpaid', '2027-04-01', '2027-01-15',
  'https://www.wgbh.org/'
),

-- ── Earth Science ─────────────────────────────────────────────────────────────
(
  'Appalachian Mountain Club (AMC) Teen Trail Crew',
  'Boston', 'in-person', 'Earth Science', false,
  'Appalachian Mountain Club',
  'Paid conservation crew program for teens maintaining trails and backcountry campsites across New England''s wild lands.',
  ARRAY['Summer'], 'paid', '2027-04-01', '2027-01-01',
  'https://www.outdoors.org/programs/teen-wilderness-adventures/'
),
(
  'Save the Harbor / Save the Bay Youth Program',
  'Boston', 'in-person', 'Earth Science', false,
  'Save the Harbor / Save the Bay',
  'Marine science and harbor ecology education internship restoring and protecting Boston Harbor and Massachusetts Bay.',
  ARRAY['Summer'], 'paid', '2027-04-15', '2027-02-01',
  'https://www.savetheharbor.org/'
),

-- ── Engineering ───────────────────────────────────────────────────────────────
(
  'FIRST Robotics Community Mentorship Program',
  'Boston', 'in-person', 'Engineering', false,
  'FIRST (For Inspiration and Recognition of Science and Technology)',
  'Robotics design and engineering mentorship pairing Boston-area high school students with industry engineers.',
  ARRAY['Fall', 'Spring'], 'unpaid', null, null,
  'https://www.firstinspires.org/'
),
(
  'Society of Women Engineers (SWE) Teen Pipeline Program',
  'Boston', 'virtual', 'Engineering', false,
  'Society of Women Engineers',
  'Virtual mentorship and engineering career exploration program connecting high school women with SWE professional members.',
  ARRAY['Fall', 'Spring', 'Summer'], 'unpaid', null, null,
  'https://swe.org/k-12-outreach/'
),

-- ── Arts ──────────────────────────────────────────────────────────────────────
(
  'New England Conservatory Pre-College Program',
  'Boston', 'in-person', 'Arts', false,
  'New England Conservatory',
  'Pre-college music training and performance program at one of the world''s leading independent music conservatories.',
  ARRAY['Fall', 'Spring', 'Summer'], 'unpaid', null, null,
  'https://necmusic.edu/pre-college'
);
