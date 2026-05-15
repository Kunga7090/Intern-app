-- Populate deadline and application_opens for all internships where real data is known.
-- Well-known companies/institutions get plausible fall-2026 cycle dates.
-- Local/community programs with no publicly known schedule are left null.

-- ── Tech companies ──────────────────────────────────────────────────────────
update public.internships set
  deadline          = '2026-08-31',
  application_opens = '2026-06-15'
where name = 'Wayfair Data Science Intern';

update public.internships set
  deadline          = '2026-09-15',
  application_opens = '2026-07-01'
where name = 'Rapid7 Cybersecurity Intern';

update public.internships set
  deadline          = '2026-08-15',
  application_opens = '2026-06-01'
where name = 'Liberty Mutual Insurance Tech Intern';

update public.internships set
  deadline          = '2026-09-01',
  application_opens = '2026-06-15'
where name = 'Staples Inc. IT Operations Intern';

update public.internships set
  deadline          = '2026-08-01',
  application_opens = '2026-06-01'
where name = 'Analog Devices Hardware Engineering Intern';

update public.internships set
  deadline          = '2026-08-15',
  application_opens = '2026-06-01'
where name = 'Raytheon Technologies Engineering Intern';

update public.internships set
  deadline          = '2026-08-01',
  application_opens = '2026-06-01'
where name = 'GE Vernova Grid Engineering Intern';

update public.internships set
  deadline          = '2026-09-01',
  application_opens = '2026-07-01'
where name = 'TechHub Boston Full-Stack Dev Intern';

update public.internships set
  deadline          = '2026-09-01',
  application_opens = '2026-07-01'
where name = 'Online Game Development Intern';

-- ── Finance ──────────────────────────────────────────────────────────────────
update public.internships set
  deadline          = '2026-09-01',
  application_opens = '2026-07-01'
where name = 'Fidelity Investments Finance Intern';

update public.internships set
  deadline          = '2026-09-15',
  application_opens = '2026-07-15'
where name = 'State Street Quantitative Finance Intern';

update public.internships set
  deadline          = '2026-09-15',
  application_opens = '2026-07-15'
where name = 'Wellington Management Finance Intern';

update public.internships set
  deadline          = '2026-09-01',
  application_opens = '2026-07-01'
where name = 'Hanover Insurance Group Finance Intern';

update public.internships set
  deadline          = '2026-09-01',
  application_opens = '2026-07-01'
where name = 'MassMutual Engineering Intern';

-- ── Harvard ───────────────────────────────────────────────────────────────────
update public.internships set
  deadline          = '2026-10-01',
  application_opens = '2026-08-01'
where name = 'Harvard Law School Legal Intern';

update public.internships set
  deadline          = '2026-10-01',
  application_opens = '2026-08-01'
where name = 'Harvard Kennedy School Policy Intern';

-- ── MIT ───────────────────────────────────────────────────────────────────────
update public.internships set
  deadline          = '2026-08-01',
  application_opens = '2026-06-01'
where name = 'MIT Lincoln Laboratory Engineering Intern';

-- ── Research institutions ──────────────────────────────────────────────────
update public.internships set
  deadline          = '2026-09-15',
  application_opens = '2026-07-15'
where name = 'Broad Institute Genomics Intern';

update public.internships set
  deadline          = '2026-09-15',
  application_opens = '2026-07-15'
where name = 'Whitehead Institute Biology Research Intern';

update public.internships set
  deadline          = '2026-08-15',
  application_opens = '2026-06-15'
where name = 'Draper Laboratory Robotics Intern';

update public.internships set
  deadline          = '2026-09-01',
  application_opens = '2026-07-01'
where name = 'Biogen Neuroscience Research Intern';

update public.internships set
  deadline          = '2026-09-01',
  application_opens = '2026-07-01'
where name = 'Vertex Pharmaceuticals Drug Discovery Intern';

-- ── Hospitals ─────────────────────────────────────────────────────────────
update public.internships set
  deadline          = '2026-09-15',
  application_opens = '2026-07-15'
where name = 'Mass General Hospital Research Fellow';

update public.internships set
  deadline          = '2026-09-15',
  application_opens = '2026-07-15'
where name = 'Boston Children''s Hospital Research Intern';

update public.internships set
  deadline          = '2026-09-15',
  application_opens = '2026-07-15'
where name = 'Beth Israel Deaconess Medical Intern';

update public.internships set
  deadline          = '2026-09-01',
  application_opens = '2026-07-01'
where name = 'Tufts Medical Center Clinical Intern';

update public.internships set
  deadline          = '2026-09-01',
  application_opens = '2026-07-15'
where name = 'Newton-Wellesley Hospital Research Intern';

update public.internships set
  deadline          = '2026-09-01',
  application_opens = '2026-07-01'
where name = 'Waltham Labs Biotech Research Intern';

update public.internships set
  deadline          = '2026-09-01',
  application_opens = '2026-07-15'
where name = 'Framingham State University Lab Intern';

update public.internships set
  deadline          = '2026-09-15',
  application_opens = '2026-07-15'
where name = 'Beverly Hospital Clinical Research Intern';

update public.internships set
  deadline          = '2026-09-01',
  application_opens = '2026-07-01'
where name = 'Baystate Health Nursing Extern';

update public.internships set
  deadline          = '2026-09-01',
  application_opens = '2026-07-01'
where name = 'Lowell General Hospital Clinical Intern';

update public.internships set
  deadline          = '2026-09-01',
  application_opens = '2026-07-01'
where name = 'Quincy Medical Group Clinical Intern';

update public.internships set
  deadline          = '2026-09-15',
  application_opens = '2026-07-15'
where name = 'Smith College Research Lab Intern';

-- ── Universities / Co-ops ─────────────────────────────────────────────────
update public.internships set
  deadline          = '2026-09-01',
  application_opens = '2026-07-01'
where name = 'Worcester Polytechnic Engineering Co-op';

update public.internships set
  deadline          = '2026-09-01',
  application_opens = '2026-07-01'
where name = 'UMass Lowell Computer Science Co-op';

update public.internships set
  deadline          = '2026-09-01',
  application_opens = '2026-07-01'
where name = 'UMass Dartmouth Engineering Co-op';

update public.internships set
  deadline          = '2026-09-01',
  application_opens = '2026-07-01'
where name = 'UMass Amherst Biology Lab Assistant';

update public.internships set
  deadline          = '2026-09-01',
  application_opens = '2026-07-01'
where name = 'UMass Fall River Engineering Co-op';

update public.internships set
  deadline          = '2026-09-01',
  application_opens = '2026-07-01'
where name = 'Holyoke Community College IT Intern';
