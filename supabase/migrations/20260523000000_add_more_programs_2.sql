-- Add 15 more real Massachusetts high school internship programs.
-- Priority: Earth Science, Government, Mathematics (most underrepresented categories).

insert into public.internships
  (name, city, type, category, featured, org, blurb, seasons, paid, deadline, application_opens, url)
values

-- ── Earth Science ─────────────────────────────────────────────────────────────
(
  'Woods Hole Sea Education Association (SEA) Internship',
  'Falmouth', 'in-person', 'Earth Science', true,
  'Sea Education Association',
  'Hands-on ocean science research and seamanship training aboard SEA''s research vessels out of Woods Hole.',
  ARRAY['Summer'], 'stipend', '2027-03-01', '2026-12-01',
  'https://www.sea.edu/'
),
(
  'Mystic River Watershed Association Internship',
  'Medford', 'in-person', 'Earth Science', false,
  'Mystic River Watershed Association',
  'Water quality monitoring, stream ecology fieldwork, and community science along the Mystic River corridor.',
  ARRAY['Summer', 'Fall', 'Spring'], 'unpaid', null, null,
  'https://mysticriver.org/'
),
(
  'Cape Cod Museum of Natural History Internship',
  'Brewster', 'in-person', 'Earth Science', false,
  'Cape Cod Museum of Natural History',
  'Natural history education and field research internship covering coastal ecosystems and wildlife of Cape Cod.',
  ARRAY['Summer'], 'unpaid', null, null,
  'https://www.ccmnh.org/'
),
(
  'NOAA Stellwagen Bank Sanctuary Science Internship',
  'Scituate', 'in-person', 'Earth Science', false,
  'NOAA Office of National Marine Sanctuaries',
  'Marine science and ocean conservation internship at one of New England''s premier national marine sanctuaries.',
  ARRAY['Summer'], 'unpaid', '2027-04-01', '2027-01-01',
  'https://stellwagen.noaa.gov/'
),

-- ── Government ────────────────────────────────────────────────────────────────
(
  'Boston City Council Youth Internship',
  'Boston', 'in-person', 'Government', true,
  'Boston City Council',
  'Policy research and civic engagement internship supporting Boston City Councillors in constituent services and legislation.',
  ARRAY['Summer', 'Fall', 'Spring'], 'unpaid', null, null,
  'https://www.boston.gov/city-council'
),
(
  'Cambridge Office of the City Manager Youth Employment',
  'Cambridge', 'in-person', 'Government', false,
  'City of Cambridge',
  'Summer paid employment program placing Cambridge youth ages 14–21 in city departments, nonprofits, and local businesses.',
  ARRAY['Summer'], 'paid', '2027-04-15', '2027-02-01',
  'https://www.cambridgema.gov/'
),
(
  'MassDOT Transportation Planning Internship',
  'Boston', 'in-person', 'Government', false,
  'Massachusetts Department of Transportation',
  'Transportation planning and infrastructure policy internship with the state agency overseeing roads, rail, and aviation.',
  ARRAY['Summer'], 'paid', '2027-03-01', '2027-01-01',
  'https://www.mass.gov/orgs/massachusetts-department-of-transportation'
),
(
  'Massachusetts Environmental Police Youth Conservation Officer',
  'Boston', 'in-person', 'Government', false,
  'Massachusetts Environmental Police',
  'Outdoor law enforcement and conservation education program introducing youth to environmental protection careers.',
  ARRAY['Summer'], 'unpaid', null, null,
  'https://www.mass.gov/orgs/massachusetts-environmental-police'
),

-- ── Mathematics ───────────────────────────────────────────────────────────────
(
  'MIT PRIMES (Program for Research in Mathematics, Engineering & Science)',
  'Cambridge', 'in-person', 'Mathematics', true,
  'MIT',
  'Year-long mentored research program pairing high school students with MIT mathematicians and scientists.',
  ARRAY['Fall', 'Spring', 'Summer'], 'unpaid', '2026-12-01', '2026-09-01',
  'https://math.mit.edu/research/highschool/primes/'
),
(
  'Girls'' Angle Math Mentorship Program',
  'Cambridge', 'in-person', 'Mathematics', false,
  'Girls'' Angle',
  'A math club for girls that connects high school students with women mathematicians through weekly mentored sessions.',
  ARRAY['Fall', 'Spring'], 'unpaid', null, null,
  'https://www.girlsangle.org/'
),
(
  'MathPath Summer Program',
  'Boston', 'virtual', 'Mathematics', false,
  'MathPath',
  'Accelerated summer program for mathematically talented students exploring number theory, combinatorics, and proof writing.',
  ARRAY['Summer'], 'stipend', '2027-04-01', '2027-01-01',
  'https://www.mathpath.org/'
),

-- ── Arts ──────────────────────────────────────────────────────────────────────
(
  'Boston Children''s Theatre Apprenticeship',
  'Boston', 'in-person', 'Arts', false,
  'Boston Children''s Theatre',
  'Performing arts apprenticeship for teen actors and stage technicians at New England''s oldest children''s theatre.',
  ARRAY['Fall', 'Spring', 'Summer'], 'unpaid', null, null,
  'https://www.bostonchildrenstheatre.org/'
),
(
  'deCordova Sculpture Park Teen Docent Program',
  'Lincoln', 'in-person', 'Arts', false,
  'deCordova Sculpture Park and Museum',
  'Teen docent and arts education internship at one of New England''s largest outdoor sculpture parks.',
  ARRAY['Summer', 'Fall', 'Spring'], 'unpaid', null, null,
  'https://www.decordova.org/'
),

-- ── STEM ──────────────────────────────────────────────────────────────────────
(
  'Draper Laboratory STEM Apprenticeship',
  'Cambridge', 'in-person', 'STEM', true,
  'Charles Stark Draper Laboratory',
  'Paid engineering and applied science apprenticeship at Draper, a leading independent R&D lab focused on national security and space.',
  ARRAY['Summer'], 'paid', '2027-02-15', '2026-12-01',
  'https://www.draper.com/careers/internships'
),
(
  'Marine Biological Laboratory (MBL) High School Internship',
  'Woods Hole', 'in-person', 'STEM', false,
  'Marine Biological Laboratory',
  'Research internship at one of the world''s leading marine and biomedical science institutions in Woods Hole.',
  ARRAY['Summer'], 'stipend', '2027-03-01', '2027-01-01',
  'https://www.mbl.edu/education/summer-courses-and-programs'
);
