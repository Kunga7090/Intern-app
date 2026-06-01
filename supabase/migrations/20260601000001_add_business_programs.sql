-- Add 6 verified business/entrepreneurship/finance programs for MA high school students.
-- All confirmed HS-eligible with direct application URLs.

insert into public.internships
  (name, city, type, category, featured, org, blurb, seasons, paid, deadline, application_opens, url)
values

-- ── Entrepreneurship ──────────────────────────────────────────────────────────
(
  'Babson College Arthur M. Blank School Summer Program',
  'Wellesley', 'in-person', 'Entrepreneurship', true,
  'Babson College',
  'Hands-on summer program for rising HS juniors and seniors with 50+ courses in entrepreneurship, finance, technology, and leadership taught by Babson faculty. Choose residential, commuter, or online. Earn a Babson digital credential for your college application.',
  ARRAY['Summer'], 'unpaid', '2027-05-01', '2027-01-01',
  'https://www.babson.edu/summer-at-babson/high-school-learners/the-arthur-m-blank-school-summer-program/'
),
(
  'TiE Young Entrepreneurs (TYE) Boston',
  'Boston', 'in-person', 'Entrepreneurship', true,
  'TiE Boston',
  '7-month program where Boston-area high school students build a real startup alongside peers, with mentorship from founders and industry experts — and a chance to compete for up to $9,000 in seed funding.',
  ARRAY['Fall', 'Spring'], 'unpaid', null, '2026-09-01',
  'https://www.tye-boston.org/program'
),
(
  'Tufts Entrepreneurship & Innovation Bootcamp',
  'Medford', 'in-person', 'Entrepreneurship', false,
  'Tufts University',
  '2-week residential or commuter summer program for grades 10–12 where students design, build, and pitch a real startup or social enterprise using design thinking, business planning, and leadership skills.',
  ARRAY['Summer'], 'unpaid', '2027-05-01', '2026-12-01',
  'https://universitycollege.tufts.edu/pre-college/browse/entrepreneurship-innovation-bootcamp'
),

-- ── Marketing ─────────────────────────────────────────────────────────────────
(
  'Emma Bowen Foundation Media & Tech Internship',
  'Boston', 'hybrid', 'Marketing', true,
  'Emma Bowen Foundation',
  'Paid summer internship placing high school seniors (18+, 3.0+ GPA) with major media and tech companies — ESPN, Bloomberg, Paramount, FOX, and others — with professional development and mentorship throughout.',
  ARRAY['Summer'], 'paid', '2027-02-01', '2026-11-01',
  'https://www.emmabowenfoundation.org/apply'
),

-- ── Business ──────────────────────────────────────────────────────────────────
(
  'Bentley University Pre-College Business Program',
  'Waltham', 'in-person', 'Business', false,
  'Bentley University',
  'Residential summer program for rising HS juniors and seniors exploring business, finance, sports management, and entrepreneurship through college-level courses taught by Bentley faculty on campus.',
  ARRAY['Summer'], 'unpaid', '2027-04-15', '2027-01-01',
  'https://www.bentley.edu/precollege/'
),

-- ── Finance ───────────────────────────────────────────────────────────────────
(
  'CLA (CliftonLarsonAllen) High School Internship',
  'Boston', 'in-person', 'Finance', false,
  'CliftonLarsonAllen LLP',
  'Paid 4-week summer internship for students ages 16–18 interested in accounting and professional services — gain hands-on experience in tax preparation, financial analysis, audit procedures, and consulting alongside experienced mentors.',
  ARRAY['Summer'], 'paid', null, null,
  'https://www.claconnect.com/en/careers/high-school-internship'
);
