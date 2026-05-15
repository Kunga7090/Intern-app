-- Populate deadline and application_opens for manually-added real-world internship programs.
-- Dates reflect each program's known annual cycle, adjusted to the 2026-2027 application season.
-- Programs with no reliably known schedule are left null.

-- ── Featured programs ────────────────────────────────────────────────────────

-- MIT RSI: applications open October, deadline mid-January (annual cycle)
update public.internships set
  deadline          = '2027-01-15',
  application_opens = '2026-10-01'
where name = 'Massachusetts Institute of Technology Research Science Institute (RSI)';

-- Broad Summer Scholars: applications open December, deadline February
update public.internships set
  deadline          = '2027-02-01',
  application_opens = '2026-12-01'
where name = 'Broad Summer Scholars Program';

-- MGH Youth Scholars: applications open December, deadline February
update public.internships set
  deadline          = '2027-02-15',
  application_opens = '2026-12-01'
where name = 'Mass General Hospital (MGH) Youth Scholars Program';

-- BU RISE: applications open January, deadline March
update public.internships set
  deadline          = '2027-03-01',
  application_opens = '2027-01-01'
where name = 'BU RISE Internship';

-- PROMYS (BU): applications open February, deadline April
update public.internships set
  deadline          = '2027-04-01',
  application_opens = '2027-02-01'
where name = 'Program in Mathematics for Young Scientists (PROMYS)';

-- ── Non-featured programs ─────────────────────────────────────────────────────

-- AEOP High School Apprenticeship: applications open November, deadline January
update public.internships set
  deadline          = '2027-01-31',
  application_opens = '2026-11-01'
where name = 'Army Educational Outreach Program (AEOP) High School Apprenticeship';

-- Canada/USA Mathcamp: applications open January, deadline March 15
update public.internships set
  deadline          = '2027-03-15',
  application_opens = '2027-01-01'
where name = 'Canada/USA Mathcamp';

-- Dana-Farber academic-year internship: spring application for fall start
update public.internships set
  deadline          = '2026-07-31',
  application_opens = '2026-05-01'
where name = 'Dana-Farber Cancer Institute''s Office of Workforce Development Student Training Academic-year Internship Program';

-- MA Life Sciences Center Apprenticeship Challenge: applications open January, deadline March
update public.internships set
  deadline          = '2027-03-01',
  application_opens = '2027-01-01'
where name = 'Massachusetts Life Sciences Center High School Apprenticeship Challenge';

-- Museum of Science summer internship: applications open February, deadline April
update public.internships set
  deadline          = '2027-04-01',
  application_opens = '2027-02-01'
where name = 'Museum of Science Academic Year/Summer Youth Internship Program';

-- New England Aquarium Teen Internships: applications open January, deadline March
update public.internships set
  deadline          = '2027-03-01',
  application_opens = '2027-01-01'
where name = 'New England Aquarium Teen Internships';

-- Northeastern YSP: applications open November, deadline March
update public.internships set
  deadline          = '2027-03-01',
  application_opens = '2026-11-01'
where name = 'Northeastern Young Scholars Program (YSP)';

-- Ragon Institute RISE: applications open November, deadline February
update public.internships set
  deadline          = '2027-02-01',
  application_opens = '2026-11-01'
where name = 'Ragon Institute Summer Experience (RISE)';

-- Tufts TUBERS: applications open January, deadline March
update public.internships set
  deadline          = '2027-03-01',
  application_opens = '2027-01-01'
where name = 'Tufts University Biomedical Engineering Research Scholars (TUBERS)';
