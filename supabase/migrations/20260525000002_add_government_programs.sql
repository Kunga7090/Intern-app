-- Add 15 real Massachusetts government and civic internship programs (batch 6).
-- Expands the Government category from 8 to ~23 programs.

insert into public.internships
  (name, city, type, category, featured, org, blurb, seasons, paid, deadline, application_opens, url)
values

(
  'Boston Mayor''s Office Youth Internship',
  'Boston', 'in-person', 'Government', true,
  'Office of the Mayor of Boston',
  'Policy research and civic leadership internship supporting the Mayor''s initiatives on housing, equity, and economic development.',
  ARRAY['Summer', 'Fall', 'Spring'], 'paid', '2027-04-01', '2027-01-15',
  'https://www.boston.gov/mayor'
),
(
  'Massachusetts Secretary of State Civic Education Internship',
  'Boston', 'in-person', 'Government', false,
  'Massachusetts Secretary of State',
  'Elections, archives, and civic education internship with the office overseeing voting rights and public records in Massachusetts.',
  ARRAY['Summer'], 'unpaid', '2027-03-15', '2027-01-01',
  'https://www.sec.state.ma.us/'
),
(
  'U.S. Senator Edward Markey Youth Internship',
  'Boston', 'in-person', 'Government', false,
  'Office of U.S. Senator Edward Markey',
  'Constituent services and policy research internship in Senator Markey''s Boston district office covering climate and technology issues.',
  ARRAY['Summer', 'Fall', 'Spring'], 'unpaid', null, null,
  'https://www.markey.senate.gov/services/internships'
),
(
  'U.S. Senator Elizabeth Warren Youth Internship',
  'Boston', 'in-person', 'Government', false,
  'Office of U.S. Senator Elizabeth Warren',
  'Policy and constituent services internship in Senator Warren''s Boston office focused on economic justice and consumer protection.',
  ARRAY['Summer', 'Fall', 'Spring'], 'unpaid', null, null,
  'https://www.warren.senate.gov/services/internships'
),
(
  'Massachusetts Department of Public Health Youth Internship',
  'Boston', 'in-person', 'Government', false,
  'Massachusetts Department of Public Health',
  'Public health policy and community outreach internship with the state agency overseeing health programs for all Massachusetts residents.',
  ARRAY['Summer'], 'paid', '2027-04-01', '2027-01-15',
  'https://www.mass.gov/orgs/department-of-public-health'
),
(
  'Massachusetts Department of Elementary & Secondary Education Internship',
  'Malden', 'in-person', 'Government', false,
  'MA Department of Elementary & Secondary Education',
  'Education policy and curriculum development internship at the state agency setting standards for all Massachusetts K–12 public schools.',
  ARRAY['Summer'], 'unpaid', '2027-04-15', '2027-02-01',
  'https://www.doe.mass.edu/'
),
(
  'City of Worcester Youth Employment Program',
  'Worcester', 'in-person', 'Government', true,
  'City of Worcester',
  'Paid summer internship program placing Worcester youth in city hall departments, nonprofits, and community organizations.',
  ARRAY['Summer'], 'paid', '2027-04-01', '2027-01-15',
  'https://www.worcesterma.gov/'
),
(
  'City of Springfield Youth Jobs Program',
  'Springfield', 'in-person', 'Government', false,
  'City of Springfield',
  'Paid summer employment for Springfield youth ages 14–21 working in city departments and community partner organizations.',
  ARRAY['Summer'], 'paid', '2027-04-15', '2027-02-01',
  'https://www.springfield-ma.gov/'
),
(
  'Boston Housing Authority Youth Employment Program',
  'Boston', 'in-person', 'Government', false,
  'Boston Housing Authority',
  'Paid summer employment placing BHA youth residents in administrative, maintenance, and community services roles across Boston.',
  ARRAY['Summer'], 'paid', '2027-04-01', '2027-01-15',
  'https://www.bostonhousing.org/'
),
(
  'MA Commission Against Discrimination (MCAD) Internship',
  'Boston', 'in-person', 'Government', false,
  'Massachusetts Commission Against Discrimination',
  'Civil rights and anti-discrimination policy internship at the state agency enforcing laws against discrimination in employment and housing.',
  ARRAY['Summer'], 'unpaid', '2027-03-15', '2026-12-15',
  'https://www.mass.gov/orgs/massachusetts-commission-against-discrimination'
),
(
  'Metropolitan Area Planning Council (MAPC) Internship',
  'Boston', 'in-person', 'Government', false,
  'Metropolitan Area Planning Council',
  'Regional planning and public policy internship covering housing, transportation, and climate resilience for Greater Boston.',
  ARRAY['Summer', 'Fall', 'Spring'], 'unpaid', null, null,
  'https://www.mapc.org/'
),
(
  'Massachusetts State Treasury Youth Finance Internship',
  'Boston', 'in-person', 'Government', false,
  'Office of the Massachusetts State Treasurer',
  'Public finance and financial literacy internship with the state office managing Massachusetts'' investments and cash management.',
  ARRAY['Summer'], 'unpaid', '2027-04-01', '2027-01-01',
  'https://www.mass.gov/orgs/office-of-the-state-treasurer-and-receiver-general'
),
(
  'Boston Office of Emergency Management Youth Preparedness Intern',
  'Boston', 'in-person', 'Government', false,
  'Boston Office of Emergency Management',
  'Community emergency preparedness and disaster resilience internship supporting citywide readiness programs for Boston residents.',
  ARRAY['Summer', 'Fall', 'Spring'], 'unpaid', null, null,
  'https://www.boston.gov/departments/emergency-management'
),
(
  'MA Department of Conservation & Recreation (DCR) Internship',
  'Boston', 'in-person', 'Government', false,
  'Massachusetts Department of Conservation & Recreation',
  'Parks, trails, and public lands stewardship internship with the state agency managing 450,000 acres of open space across Massachusetts.',
  ARRAY['Summer'], 'paid', '2027-04-01', '2027-01-15',
  'https://www.mass.gov/orgs/department-of-conservation-and-recreation'
),
(
  'Boston Water and Sewer Commission Youth Intern',
  'Boston', 'in-person', 'Government', false,
  'Boston Water and Sewer Commission',
  'Public utilities and infrastructure internship with the agency providing clean water and wastewater services to 250,000 Boston residents.',
  ARRAY['Summer'], 'paid', '2027-04-15', '2027-02-01',
  'https://www.bwsc.org/'
);
