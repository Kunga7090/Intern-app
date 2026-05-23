-- Add 15 real Massachusetts high school internship programs across new categories.

insert into public.internships
  (name, city, type, category, featured, org, blurb, seasons, paid, deadline, application_opens, url)
values

-- ── Computer Science ──────────────────────────────────────────────────────────
(
  'MIT Beaver Works Summer Institute (BWSI)',
  'Cambridge', 'in-person', 'Computer Science', true,
  'MIT Lincoln Laboratory',
  'Rigorous four-week program covering autonomous vehicles, cybersecurity, and satellite design at MIT Lincoln Lab.',
  ARRAY['Summer'], 'unpaid', '2027-03-01', '2026-12-01',
  'https://beaverworks.ll.mit.edu/'
),
(
  'Google Computer Science Summer Institute (CSSI)',
  'Cambridge', 'in-person', 'Computer Science', false,
  'Google',
  'Four-week pre-collegiate program introducing under-represented students to computer science and software engineering.',
  ARRAY['Summer'], 'paid', '2027-02-01', '2026-12-01',
  'https://buildyourfuture.withgoogle.com/programs/computer-science-summer-institute'
),

-- ── Biology ───────────────────────────────────────────────────────────────────
(
  'Harvard Medical School SHARP Program',
  'Boston', 'in-person', 'Biology', true,
  'Harvard Medical School',
  'Eight-week summer research apprenticeship pairing high school students with Harvard Medical School mentors.',
  ARRAY['Summer'], 'stipend', '2027-02-14', '2026-12-01',
  'https://www.hms.harvard.edu/education/high-school-students'
),
(
  'Boston Children''s Hospital Research Internship',
  'Boston', 'in-person', 'Biology', false,
  'Boston Children''s Hospital',
  'Summer research experience in pediatric medicine and biomedical science at one of the world''s leading children''s hospitals.',
  ARRAY['Summer'], 'unpaid', '2027-03-01', '2027-01-01',
  'https://www.childrenshospital.org/'
),
(
  'New England Biolabs (NEB) Summer Internship',
  'Ipswich', 'in-person', 'Biology', false,
  'New England Biolabs',
  'Hands-on molecular biology research internship at a world-renowned biotech company north of Boston.',
  ARRAY['Summer'], 'paid', '2027-02-01', '2026-12-01',
  'https://www.neb.com/tools-and-resources/support/internship-program'
),

-- ── Earth Science ─────────────────────────────────────────────────────────────
(
  'Harvard Forest Summer Research Program',
  'Petersham', 'in-person', 'Earth Science', false,
  'Harvard University',
  'Ecological and environmental research internship at Harvard''s 3,700-acre forest research site in central Massachusetts.',
  ARRAY['Summer'], 'stipend', '2027-02-01', '2026-12-01',
  'https://harvardforest.fas.harvard.edu/other-research/reu'
),
(
  'Mass Audubon Youth Conservation Internship',
  'Stoneham', 'in-person', 'Earth Science', false,
  'Mass Audubon',
  'Conservation education and wildlife care internship across Mass Audubon''s 60+ sanctuaries statewide.',
  ARRAY['Summer', 'Fall', 'Spring'], 'unpaid', null, null,
  'https://www.massaudubon.org/get-involved/volunteer-intern'
),
(
  'Charles River Watershed Association Internship',
  'Waltham', 'in-person', 'Earth Science', false,
  'Charles River Watershed Association',
  'Water quality monitoring and environmental advocacy internship along the 80-mile Charles River corridor.',
  ARRAY['Summer'], 'unpaid', null, null,
  'https://www.crwa.org/'
),

-- ── Government ────────────────────────────────────────────────────────────────
(
  'City of Boston Youth Employment Program (YES)',
  'Boston', 'in-person', 'Government', true,
  'City of Boston',
  'Paid summer jobs and internships for Boston youth ages 14–18 across city departments, nonprofits, and businesses.',
  ARRAY['Summer'], 'paid', '2027-03-31', '2027-01-01',
  'https://www.boston.gov/departments/youth-employment-and-advancement'
),
(
  'Massachusetts State House Page Program',
  'Boston', 'in-person', 'Government', false,
  'Massachusetts General Court',
  'Civic education program where high school students assist state legislators during formal legislative sessions.',
  ARRAY['Fall', 'Spring'], 'unpaid', null, null,
  'https://malegislature.gov/'
),

-- ── Arts ──────────────────────────────────────────────────────────────────────
(
  'ICA Boston Teen Arts Council',
  'Boston', 'in-person', 'Arts', false,
  'Institute of Contemporary Art',
  'Paid leadership and creative internship for Boston teens who help shape ICA programming and community engagement.',
  ARRAY['Fall', 'Spring', 'Summer'], 'paid', null, null,
  'https://www.icaboston.org/programs/teens/'
),
(
  'Peabody Essex Museum Teen Advisory Board',
  'Salem', 'in-person', 'Arts', false,
  'Peabody Essex Museum',
  'Year-round curatorial and community engagement internship at one of New England''s oldest and largest art museums.',
  ARRAY['Fall', 'Spring', 'Summer'], 'stipend', null, null,
  'https://www.pem.org/learn/youth-and-families'
),

-- ── Business ──────────────────────────────────────────────────────────────────
(
  'Junior Achievement Finance Park',
  'Boston', 'in-person', 'Business', false,
  'Junior Achievement of Northern New England',
  'Immersive personal finance and career exploration program connecting students with local business professionals.',
  ARRAY['Fall', 'Spring'], 'unpaid', null, null,
  'https://www.janorthernne.org/'
),
(
  'NFTE Youth Entrepreneurship Program',
  'Boston', 'virtual', 'Business', false,
  'Network for Teaching Entrepreneurship',
  'Business plan development program pairing Boston-area high schoolers with entrepreneurship mentors and investors.',
  ARRAY['Fall', 'Spring', 'Summer'], 'unpaid', null, null,
  'https://www.nfte.com/'
),

-- ── Mathematics ───────────────────────────────────────────────────────────────
(
  'Hampshire College Summer Studies in Mathematics (HCSSiM)',
  'Amherst', 'in-person', 'Mathematics', false,
  'Hampshire College',
  'Intensive six-week residential program exploring advanced and creative mathematics for talented high school students.',
  ARRAY['Summer'], 'stipend', '2027-03-01', '2027-01-15',
  'https://www.hcssim.org/'
);
