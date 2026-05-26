-- Update URLs for programs whose specific path returned 403 (bot-blocked).
-- The organizations are real; updating to org homepage so users can navigate.

update public.internships set url = 'https://www.wpi.edu/academics/pre-collegiate/'
where name = 'WPI Frontiers Summer Program';

update public.internships set url = 'https://www.mos.org/'
where name = 'Museum of Science Engineering Design Workshop';

update public.internships set url = 'https://fenwayhealth.org/'
where name = 'Fenway Health Youth Internship';

update public.internships set url = 'https://swe.org/'
where name = 'Society of Women Engineers (SWE) Teen Pipeline Program';

update public.internships set url = 'https://www.easternbank.com/'
where name = 'Eastern Bank Financial Literacy Internship';

update public.internships set url = 'https://www.johnhancock.com/'
where name = 'John Hancock Financial Literacy Youth Program';

update public.internships set url = 'https://www.putnam.com/'
where name = 'Putnam Investments Youth Finance Internship';

update public.internships set url = 'https://www.bostonprivate.com/'
where name = 'Boston Private Bank Youth Finance Program';

update public.internships set url = 'https://www.msbdc.org/'
where name = 'Massachusetts Small Business Development Center Internship';

update public.internships set url = 'https://www.berkshirebank.com/'
where name = 'Berkshire Hills Bancorp Community Banking Internship';

update public.internships set url = 'https://www.mass.gov/massdot'
where name = 'MassDOT Transportation Planning Internship';

update public.internships set url = 'https://www.mass.gov/environmental-police'
where name = 'Massachusetts Environmental Police Youth Conservation Officer';

update public.internships set url = 'https://www.mass.gov/ago'
where name = 'Massachusetts Attorney General''s Office Youth Internship';

update public.internships set url = 'https://www.mass.gov/dph'
where name = 'Massachusetts Department of Public Health Youth Internship';

update public.internships set url = 'https://www.mass.gov/mcad'
where name = 'MA Commission Against Discrimination (MCAD) Internship';

update public.internships set url = 'https://www.mass.gov/treasury'
where name = 'Massachusetts State Treasury Youth Finance Internship';

update public.internships set url = 'https://www.mass.gov/dcr'
where name = 'MA Department of Conservation & Recreation (DCR) Internship';

update public.internships set url = 'https://www.vrtx.com/careers/'
where name = 'Vertex Pharmaceuticals Drug Discovery Intern';

update public.internships set url = 'https://www.csail.mit.edu/'
where name = 'MIT CSAIL AI Research Assistant';

update public.internships set url = 'https://www.bostonconservatory.berklee.edu/'
where name = 'Boston Conservatory at Berklee Pre-College Program';

update public.internships set url = 'https://www.griffinmuseum.org/'
where name = 'The Griffin Museum of Photography Teen Program';

update public.internships set url = 'https://www.analog.com/'
where name = 'Analog Devices Hardware Engineering Intern';

update public.internships set url = 'https://www.mvfb.org/'
where name = 'Merrimack Valley Food Bank Intern';

update public.internships set url = 'https://www.neb.com/'
where name = 'New England Biolabs (NEB) Summer Internship';

update public.internships set url = 'https://projecthealth.org/'
where name = 'Project HEALTH Student Volunteer Program';
