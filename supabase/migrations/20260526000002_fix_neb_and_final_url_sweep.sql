-- Fix NEB URL to specific Summer Internship Program page (was pointing to generic
-- "Promoting Science Education" overview). Also sweep remaining org-homepage links.

-- NEB: was /en-us/promoting-science-education (generic overview page)
update public.internships
set url = 'https://www.neb.com/en/promoting-science-education/summer-internship-program'
where name = 'New England Biolabs (NEB) Summer Internship';

-- MoS: "Engineering Design Workshop" is a permanent museum exhibit, not a program.
-- MoS does have a real 7-week paid Summer Youth Internship (ages 14-19) — update name and URL.
update public.internships
set name = 'Museum of Science Summer Youth Internship',
    url  = 'https://www.mos.org/careers/internships'
where name = 'Museum of Science Engineering Design Workshop';

-- SWE: update from swe.org homepage to the specific SWENext High School Leadership Academy page
update public.internships
set url = 'https://swe.org/outreach/high-school-leadership-academy-shla/'
where name = 'Society of Women Engineers (SWE) Teen Pipeline Program';

-- Fenway Health: no dedicated high school/teen internship program exists — only graduate-level placements
delete from public.internships where name = 'Fenway Health Youth Internship';
