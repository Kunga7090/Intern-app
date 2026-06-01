-- Fix 14 programs identified by user: 12 broken/homepage links updated to direct
-- program pages, 2 deleted (no real HS program exists).

-- ── Updates ──────────────────────────────────────────────────────────────────

-- Was math.mit.edu/research/highschool/primes/ (program overview, not apply page)
update public.internships set url = 'https://math.mit.edu/research/highschool/primes/program/apply.html'
where name = 'MIT PRIMES (Program for Research in Mathematics, Engineering & Science)';

-- Was masstreasury.org/internships-and-fellowships (wrong domain, page broken)
update public.internships set url = 'https://www.masstreasury.gov/internships-fellowships'
where name = 'Massachusetts State Treasury Youth Finance Internship';

-- Was mass.gov/locations/department-of-conservation-and-recreation (location page, broken)
update public.internships set url = 'https://www.mass.gov/dcr-employment'
where name = 'MA Department of Conservation & Recreation (DCR) Internship';

-- Was worcesterma.gov (city homepage)
update public.internships set url = 'https://www.worcesterma.gov/youth-opportunities/youth-employment'
where name = 'City of Worcester Youth Employment Program';

-- Was bostonconservatory.berklee.edu (homepage, no program info)
update public.internships set url = 'https://bostonconservatory.berklee.edu/extension-programs'
where name = 'Boston Conservatory at Berklee Pre-College Program';

-- Was challiance.org (homepage)
update public.internships set url = 'https://www.challiance.org/community-health/youth-initiatives'
where name = 'Cambridge Health Alliance Community Health Internship';

-- Was decordova.org (homepage); actual teen program is Summer Studio via The Trustees
update public.internships set url = 'https://thetrustees.org/content/summer-studio-for-teens/'
where name = 'deCordova Sculpture Park Teen Docent Program';

-- Was pathwaystoscience.org redirect
update public.internships set url = 'https://www.sci-mi.org/bmp.html'
where name = 'Science Mentorship Institute - Biology Mentorship Program';

-- Was pathwaystoscience.org redirect
update public.internships set url = 'https://seagrant.whoi.edu/k-12/o-steam/'
where name = 'Ocean STEAM Powered Women (O-STEAM) Fellowship';

-- Was pathwaystoscience.org redirect; Eureka! is run by Girls Inc.
update public.internships set url = 'https://www.girlsincworcester.org/eureka'
where name = 'Eureka! Program';

-- Was pathwaystoscience.org redirect
update public.internships set url = 'https://www.marjotfoundation.org/apply'
where name = 'Marjot Foundation Independent research in Environmental Sciences';

-- Was pathwaystoscience.org redirect
update public.internships set url = 'https://www.umass.edu/uww/pre-college'
where name = 'Summer Pre-College Program Funding and Scholarships';

-- ── Deletes ──────────────────────────────────────────────────────────────────

-- MAPC only offers college-level internships; no high school program exists
delete from public.internships where name = 'Metropolitan Area Planning Council (MAPC) Internship';

-- MIT OCW has no Student Ambassador program; OCW High School highlights discontinued
delete from public.internships where name = 'MIT OpenCourseWare Student Ambassador Program';
