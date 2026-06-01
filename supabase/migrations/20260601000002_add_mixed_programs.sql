-- Add 12 new verified programs across Computer Science, Engineering, Biology,
-- Environmental Science, Architecture, Journalism, Public Health, and Health categories.

insert into public.internships
  (name, city, type, category, featured, org, blurb, seasons, paid, deadline, application_opens, url)
values

-- ── STEM ──────────────────────────────────────────────────────────────────────
(
  'Research Science Institute (RSI)',
  'Cambridge', 'in-person', 'STEM', true,
  'MIT / Center for Excellence in Education',
  'Prestigious free 6-week summer research program for ~80 selected rising seniors to conduct advanced research under MIT faculty. One of the most competitive HS programs in the country — all costs covered including housing and meals.',
  ARRAY['Summer'], 'stipend', '2027-01-15', '2026-10-01',
  'https://www.cee.org/programs/apply-rsi'
),

-- ── Engineering ───────────────────────────────────────────────────────────────
(
  'MIT Lincoln Laboratory LLRISE',
  'Lexington', 'in-person', 'Engineering', true,
  'MIT Lincoln Laboratory',
  'Free 2-week residential engineering workshop for rising seniors to build and operate small radar systems (Doppler and range radar) with hands-on projects guided by MIT Lincoln Lab engineers.',
  ARRAY['Summer'], 'unpaid', '2027-03-01', '2026-12-01',
  'https://www.ll.mit.edu/outreach/llrise'
),
(
  'MassRobotics Jumpstart Fellowship',
  'Boston', 'in-person', 'Engineering', false,
  'MassRobotics',
  'Fellowship program for Massachusetts high school girls (rising juniors preferred, 16+) interested in robotics careers, with hands-on training and paid summer internship placements at local robotics and tech companies upon completion.',
  ARRAY['Summer', 'Fall', 'Spring'], 'stipend', null, '2026-09-01',
  'https://www.massrobotics.org/stem/jumpstart-fellowship/'
),
(
  'Wentworth ImpactLab Pre-College Program',
  'Boston', 'in-person', 'Engineering', false,
  'Wentworth Institute of Technology',
  'Two-week residential summer program for rising 11th–12th graders with hands-on courses in engineering, science, technology, and design — students live on campus and work on real-world projects.',
  ARRAY['Summer'], 'unpaid', '2027-05-15', '2027-02-01',
  'https://wit.edu/admissions/pre-college/impact-lab'
),

-- ── Computer Science ──────────────────────────────────────────────────────────
(
  'Congressional App Challenge',
  'Boston', 'remote', 'Computer Science', false,
  'U.S. House of Representatives',
  'Annual nationwide coding competition for high school students (grades 9–12) to create and submit original mobile, web, or game apps — winners showcase their apps before Congress. All Massachusetts congressional districts participate.',
  ARRAY['Fall', 'Spring'], 'unpaid', '2026-11-01', '2026-08-01',
  'https://www.congressionalappchallenge.us/students/student-registration/'
),

-- ── Biology ───────────────────────────────────────────────────────────────────
(
  'NIH Summer Internship Program (SIP)',
  'Various', 'in-person', 'Biology', false,
  'National Institutes of Health',
  'Paid 6–8 week summer research internship for rising seniors and recent graduates (17+) to conduct hands-on biomedical research under NIH principal investigators at campuses across the U.S. — U.S. citizens and permanent residents only.',
  ARRAY['Summer'], 'paid', '2027-03-01', '2026-11-01',
  'https://www.training.nih.gov/research-training/pb/sip/'
),

-- ── Environmental Science ─────────────────────────────────────────────────────
(
  'Mass Audubon Willow Tree Youth Leaders Internship',
  'Boston', 'in-person', 'Environmental Science', true,
  'Mass Audubon / Boston Nature Center',
  'Three-year paid internship for Boston youth introducing them to environmental education — interns facilitate nature programs, maintain wildlife sanctuary trails, and develop leadership skills at the Boston Nature Center.',
  ARRAY['Summer', 'Fall', 'Spring'], 'paid', null, null,
  'https://www.massaudubon.org/places-to-explore/wildlife-sanctuaries/boston-nature-center/projects/youth-leaders-internship-program'
),
(
  'MassCEC Clean Energy Internship Program',
  'Various', 'in-person', 'Environmental Science', false,
  'Massachusetts Clean Energy Center',
  'Paid internship program connecting Massachusetts vocational-technical high school students and recent graduates with clean energy companies statewide — spring, summer, and fall sessions available.',
  ARRAY['Summer', 'Fall', 'Spring'], 'paid', null, null,
  'https://www.masscec.com/clean-energy-internships'
),

-- ── Architecture ──────────────────────────────────────────────────────────────
(
  'Sasaki Foundation SEED Summer Internship',
  'Boston', 'in-person', 'Architecture', true,
  'Sasaki Foundation',
  'Paid ($15/hr, up to 27.5 hrs/week) 6-week summer internship for Boston and Metro North high school students (grades 9–12) exploring architecture, landscape architecture, interior design, and urban planning through real community design projects.',
  ARRAY['Summer'], 'paid', '2027-04-01', '2027-01-01',
  'https://www.sasakifoundation.org/seed/'
),

-- ── Journalism ────────────────────────────────────────────────────────────────
(
  'BU Summer Journalism Academy',
  'Boston', 'in-person', 'Journalism', false,
  'Boston University',
  'Three-week residential program for high school students ages 15–18 working with professional journalists on field reporting, writing under deadline, interviewing, and multimedia storytelling skills. Online option also available.',
  ARRAY['Summer'], 'unpaid', '2027-05-01', '2026-12-01',
  'https://combeyond.bu.edu/offering/summer-journalism-academy-bu/'
),

-- ── Public Health ─────────────────────────────────────────────────────────────
(
  'UMass Amherst Public Health Launchpad',
  'Amherst', 'in-person', 'Health', false,
  'UMass Amherst',
  'Two-week program introducing high school students to epidemiology, biostatistics, and public health data science through hands-on labs and real research applications. Available both in-person and online.',
  ARRAY['Summer'], 'unpaid', '2027-05-15', '2027-02-01',
  'https://www.umass.edu/uww/pre-college/charles-river/public-health-launchpad'
),
(
  'Harvard MEDscience Clinical & Research Programs',
  'Boston', 'in-person', 'Health', true,
  'Harvard Medical School',
  'One-week intensive programs for grades 9–12 covering clinical medicine, biomedical research, and medical technology — including simulated patient scenarios, lab work, and surgical robot design. Limited need-based scholarships for Greater Boston residents.',
  ARRAY['Summer'], 'unpaid', '2027-03-01', '2026-12-01',
  'https://www.hmsmedscience.org/'
);
