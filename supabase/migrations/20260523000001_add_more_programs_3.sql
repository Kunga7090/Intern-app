-- Add 15 more real Massachusetts high school internship programs (batch 3).
-- New "Health" category introduced. Priority: STEM, Health, Mathematics, Government, Arts.

insert into public.internships
  (name, city, type, category, featured, org, blurb, seasons, paid, deadline, application_opens, url)
values

-- ── STEM ──────────────────────────────────────────────────────────────────────
(
  'WPI Frontiers Summer Program',
  'Worcester', 'in-person', 'STEM', true,
  'Worcester Polytechnic Institute',
  'Immersive two-week summer program where high school students tackle real engineering and science challenges at WPI.',
  ARRAY['Summer'], 'unpaid', '2027-04-01', '2027-01-01',
  'https://www.wpi.edu/academics/pre-collegiate/frontiers'
),
(
  'Northeastern PEAK Experiences',
  'Boston', 'in-person', 'STEM', false,
  'Northeastern University',
  'Hands-on STEM workshops and research labs for high school students run by Northeastern faculty and graduate students.',
  ARRAY['Summer'], 'unpaid', '2027-05-01', '2027-02-01',
  'https://peakexperiences.northeastern.edu/'
),
(
  'MIT Splash Weekend',
  'Cambridge', 'in-person', 'STEM', false,
  'MIT',
  'Two-day weekend program where MIT students teach over 200 classes on math, science, humanities, and more to high schoolers.',
  ARRAY['Fall'], 'unpaid', '2026-10-01', '2026-09-01',
  'https://esp.mit.edu/learn/Splash/'
),
(
  'Museum of Science Engineering Design Workshop',
  'Boston', 'in-person', 'STEM', false,
  'Museum of Science Boston',
  'Project-based engineering and design internship supporting museum exhibits and outreach programs in Boston.',
  ARRAY['Summer', 'Fall', 'Spring'], 'unpaid', null, null,
  'https://www.mos.org/educators/professional-learning'
),

-- ── Health ────────────────────────────────────────────────────────────────────
(
  'Boston Public Health Commission Youth Internship',
  'Boston', 'in-person', 'Health', true,
  'Boston Public Health Commission',
  'Paid public health internship exploring disease prevention, health equity, and community wellness programs across Boston.',
  ARRAY['Summer'], 'paid', '2027-04-01', '2027-01-15',
  'https://www.boston.gov/departments/public-health-commission'
),
(
  'Brigham and Women''s Hospital Community Health Internship',
  'Boston', 'in-person', 'Health', false,
  'Brigham and Women''s Hospital',
  'Community health education and research internship at one of the nation''s top academic medical centers.',
  ARRAY['Summer'], 'unpaid', '2027-03-01', '2027-01-01',
  'https://www.brighamandwomens.org/'
),
(
  'Fenway Health Youth Internship',
  'Boston', 'in-person', 'Health', false,
  'Fenway Health',
  'Health equity and LGBTQ+ health advocacy internship at a nationally recognized Boston community health center.',
  ARRAY['Summer', 'Fall', 'Spring'], 'unpaid', null, null,
  'https://fenwayhealth.org/'
),
(
  'Spaulding Rehabilitation High School Volunteer Program',
  'Boston', 'in-person', 'Health', false,
  'Spaulding Rehabilitation Network',
  'Clinical observation and patient support volunteer program at one of the top rehabilitation hospitals in the US.',
  ARRAY['Summer', 'Fall', 'Spring'], 'unpaid', null, null,
  'https://www.spauldingrehab.org/'
),

-- ── Mathematics ───────────────────────────────────────────────────────────────
(
  'Boston Math Circle',
  'Boston', 'in-person', 'Mathematics', false,
  'Boston Math Circle',
  'Weekly enrichment program for high school students featuring university mathematicians exploring advanced problem solving.',
  ARRAY['Fall', 'Spring'], 'unpaid', null, null,
  'https://www.bostonmathcircle.org/'
),
(
  'MIT OpenCourseWare Student Ambassador Program',
  'Cambridge', 'virtual', 'Mathematics', false,
  'MIT OpenCourseWare',
  'Remote program where motivated students contribute to math education outreach and create content for global learners.',
  ARRAY['Fall', 'Spring', 'Summer'], 'unpaid', null, null,
  'https://ocw.mit.edu/'
),
(
  'Worcester Math Circle Mentorship',
  'Worcester', 'in-person', 'Mathematics', false,
  'WPI Department of Mathematical Sciences',
  'Math enrichment and competition prep mentorship for Worcester-area high school students led by WPI faculty.',
  ARRAY['Fall', 'Spring'], 'unpaid', null, null,
  'https://www.wpi.edu/academics/departments/mathematical-sciences'
),

-- ── Government ────────────────────────────────────────────────────────────────
(
  'Massachusetts Attorney General''s Office Youth Internship',
  'Boston', 'in-person', 'Government', true,
  'Massachusetts Attorney General''s Office',
  'Law and policy internship supporting consumer protection, civil rights, and environmental enforcement at the state AG''s office.',
  ARRAY['Summer'], 'unpaid', '2027-03-15', '2027-01-01',
  'https://www.mass.gov/orgs/office-of-the-attorney-general'
),
(
  'Boston Parks & Recreation Summer Youth Employment',
  'Boston', 'in-person', 'Government', false,
  'City of Boston Parks & Recreation',
  'Paid summer employment for Boston teens maintaining parks, running youth programs, and leading community recreation events.',
  ARRAY['Summer'], 'paid', '2027-04-15', '2027-02-01',
  'https://www.boston.gov/departments/parks-and-recreation'
),

-- ── Arts ──────────────────────────────────────────────────────────────────────
(
  'GrubStreet Young Adult Writing Intensive',
  'Boston', 'in-person', 'Arts', false,
  'GrubStreet',
  'Creative writing workshops and mentorship for teen writers at one of the largest independent writing centers in the US.',
  ARRAY['Summer', 'Fall', 'Spring'], 'unpaid', null, null,
  'https://grubstreet.org/classes/young-adult/'
),
(
  'ArtsEmerson Teen Council',
  'Boston', 'in-person', 'Arts', false,
  'ArtsEmerson',
  'Paid teen arts advisory council shaping programming at Emerson College''s professional performing arts presenter.',
  ARRAY['Fall', 'Spring'], 'paid', null, null,
  'https://artsemerson.org/'
);
