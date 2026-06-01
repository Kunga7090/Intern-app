-- Add 13 new verified programs for Massachusetts high school students.
-- All confirmed HS-eligible with direct application URLs.

insert into public.internships
  (name, city, type, category, featured, org, blurb, seasons, paid, deadline, application_opens, url)
values

-- ── STEM ──────────────────────────────────────────────────────────────────────
(
  'MIT MITES Summer',
  'Cambridge', 'in-person', 'STEM', true,
  'MIT',
  'Free 6-week residential program for underrepresented rising 11th graders covering rigorous math, science, and engineering — all costs including housing and meals fully covered.',
  ARRAY['Summer'], 'stipend', '2027-02-01', '2026-11-01',
  'https://mites.mit.edu/when/summer/'
),
(
  'BU RISE Internship/Practicum',
  'Boston', 'in-person', 'STEM', true,
  'Boston University',
  'Selective 6-week summer program for high school juniors to conduct hands-on laboratory research with BU faculty mentors in biology, chemistry, engineering, and physics.',
  ARRAY['Summer'], 'stipend', '2027-02-15', '2026-12-01',
  'https://www.bu.edu/summer/high-school-programs/rise-internship-practicum/how-to-apply/'
),
(
  'Smith College Summer Science & Engineering Program (SSEP)',
  'Northampton', 'in-person', 'STEM', false,
  'Smith College',
  'Immersive 2-week residential program for high school students exploring hands-on science and engineering courses in chemistry, GIS, plant biodiversity, and solar energy on Smith''s campus.',
  ARRAY['Summer'], 'unpaid', '2027-05-01', '2027-01-01',
  'https://www.smith.edu/academics/programs-courses/precollege-programs/summer-science-engineering-program'
),
(
  'Wellesley College Pre-College Program',
  'Wellesley', 'in-person', 'STEM', false,
  'Wellesley College',
  'Residential summer program for grades 9–12 offering college-level courses in STEM, psychology, and writing taught by Wellesley faculty with on-campus housing.',
  ARRAY['Summer'], 'unpaid', '2027-04-01', '2027-01-15',
  'https://summer.wellesley.edu/highschoolprograms-2'
),
(
  'Brandeis University Genesis Pre-College Program',
  'Waltham', 'in-person', 'STEM', false,
  'Brandeis University',
  'Four-week residential summer program at Brandeis for high school students featuring college-level STEM courses in biology, chemistry, physics, and computer science.',
  ARRAY['Summer'], 'unpaid', '2026-06-01', '2026-03-01',
  'https://www.brandeis.edu/precollege/'
),

-- ── Biology ───────────────────────────────────────────────────────────────────
(
  'Broad Summer Scholars Program',
  'Cambridge', 'in-person', 'Biology', true,
  'Broad Institute of MIT and Harvard',
  'Selective 6-week paid summer internship ($3,600 stipend) for Greater Boston rising seniors to conduct original genomics and biomedical research with Broad Institute scientists — no prior lab experience required.',
  ARRAY['Summer'], 'paid', '2027-03-20', '2027-01-01',
  'https://www.broadinstitute.org/partnerships/education/k-12-outreach/broad-summer-scholars-program'
),
(
  'CURE Summer Research Program',
  'Boston', 'in-person', 'Biology', true,
  'Dana-Farber / Harvard Cancer Center',
  'Competitive paid 7–11 week summer research program for high school sophomores, juniors, and seniors (16+) to conduct mentored cancer research at Dana-Farber, including seminars and career development.',
  ARRAY['Summer'], 'paid', '2027-02-28', '2026-11-01',
  'https://cure.dfhcc.harvard.edu/'
),
(
  'The LEAH Project Wet Lab Internship',
  'Boston', 'in-person', 'Biology', true,
  'The LEAH Project / Biogen',
  'Paid 5-week wet lab research internship ($2,250) at Biogen combined with biotech company job shadowing; additional $2,000 paid during the school year for students who completed biology.',
  ARRAY['Summer', 'Fall', 'Spring'], 'paid', '2026-03-31', '2026-01-01',
  'https://www.leahproject.org/join-leah'
),

-- ── Health ────────────────────────────────────────────────────────────────────
(
  'HMS Project Success Summer Internship',
  'Boston', 'in-person', 'Health', true,
  'Harvard Medical School',
  'Paid 8-week summer research internship for Boston/Cambridge high school juniors and seniors to conduct real research in Harvard Medical School–affiliated laboratories under scientist mentorship.',
  ARRAY['Summer'], 'paid', '2027-02-04', '2026-11-01',
  'https://occe.hms.harvard.edu/paths-opportunity/project-success'
),
(
  'UMass Chan High School Health Careers Program (HSHCP)',
  'Worcester', 'in-person', 'Health', false,
  'UMass Chan Medical School',
  'Free 4-week residential program for current Massachusetts high school sophomores and juniors to explore biomedical research and healthcare careers with academic enrichment in science and math.',
  ARRAY['Summer'], 'unpaid', '2027-03-02', '2026-11-15',
  'https://www.umassmed.edu/gsbs/outreach-programs/high-school-health-careers-program/apply-now/'
),

-- ── Earth Science ─────────────────────────────────────────────────────────────
(
  'Maria Mitchell Association High School Natural Science Internship',
  'Nantucket', 'in-person', 'Earth Science', false,
  'Maria Mitchell Association',
  'Year-round paid internship for high school students (16+) in grades 9–12 on Nantucket working 2–5 shifts per week in coastal ecology, marine science, and environmental education.',
  ARRAY['Summer', 'Fall', 'Spring'], 'paid', null, null,
  'https://www.mariamitchell.org/high-school-natural-science-internship'
),

-- ── Nonprofit ─────────────────────────────────────────────────────────────────
(
  'ABCD Youth Internships',
  'Boston', 'in-person', 'Nonprofit', false,
  'Action for Boston Community Development',
  'Paid internship program for Boston youth ages 14–24 with hands-on community development experience, job coaching, resume building, T-pass, and career mentorship across multiple sites.',
  ARRAY['Summer', 'Fall', 'Spring'], 'paid', null, '2026-03-01',
  'https://bostonabcd.org/service/abcd-youth-internships/'
),

-- ── Architecture ──────────────────────────────────────────────────────────────
(
  'Boston Architectural College Summer Academy',
  'Boston', 'in-person', 'Architecture', false,
  'Boston Architectural College',
  'Two-week onsite summer program for all high school levels exploring architecture and design thinking with two tracks: Exploration (beginners) and Investigation (experienced); earns college credit and scholarship eligibility.',
  ARRAY['Summer'], 'unpaid', '2026-06-15', '2026-03-01',
  'https://the-bac.edu/pre-college/summer-academy-boston'
);
