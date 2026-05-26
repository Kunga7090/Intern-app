-- Update programs to direct application/program pages instead of homepages.

update public.internships set url = 'https://malegislature.gov/StateHouse/EducationalOpportunities/Internships'
where name = 'Massachusetts State House Page Program';

update public.internships set url = 'https://www.boston.gov/departments/youth-employment-and-opportunity/youth-jobs'
where name = 'Boston City Council Youth Internship';

update public.internships set url = 'https://www.cambridgema.gov/Services/mayorssummeryouthemploymentprogram'
where name = 'Cambridge Office of the City Manager Youth Employment';

update public.internships set url = 'https://www.sec.state.ma.us/divisions/state-house-tours/volunteer.htm'
where name = 'Massachusetts Secretary of State Civic Education Internship';

update public.internships set url = 'https://www.springfieldworks.net/resources/'
where name = 'City of Springfield Youth Jobs Program';

update public.internships set url = 'https://www.mass.gov/info-details/internships-at-the-attorney-generals-office'
where name = 'Massachusetts Attorney General''s Office Youth Internship';

update public.internships set url = 'https://masstreasury.org/internships-and-fellowships'
where name = 'Massachusetts State Treasury Youth Finance Internship';

update public.internships set url = 'https://www.mass.gov/locations/department-of-conservation-and-recreation'
where name = 'MA Department of Conservation & Recreation (DCR) Internship';

update public.internships set url = 'https://www.suffolk.edu/business/degrees-programs/management-entrepreneurship/summer-high-school-program'
where name = 'Suffolk University Business Leadership Camp';

update public.internships set url = 'https://www.umass.edu/uww/pre-college/residential/business-ethics'
where name = 'UMass Isenberg Business Pre-College Program';

update public.internships set url = 'https://jobs.fidelity.com/en/students/career-discovery-programs/'
where name = 'Fidelity Investments Finance Intern';

update public.internships set url = 'https://research.childrenshospital.org/'
where name = 'Boston Children''s Hospital Research Internship';

update public.internships set url = 'https://www.neb.com/en/about-neb/careers'
where name = 'New England Biolabs (NEB) Summer Internship';

update public.internships set url = 'https://ccmnh.org/internship-opportunties'
where name = 'Cape Cod Museum of Natural History Youth Naturalist Intern';

update public.internships set url = 'https://bwsi.mit.edu/apply-now/'
where name = 'MIT Beaver Works Summer Institute';

update public.internships set url = 'https://math.mit.edu/research/highschool/primes/program/apply.html'
where name = 'MIT PRIMES High School Research Program';

update public.internships set url = 'https://www.girlsangle.org/page/membership.html'
where name = 'Girls'' Angle Math Program';

update public.internships set url = 'https://www.wpi.edu/academics/pre-collegiate/summer-programs'
where name = 'WPI Frontiers Summer Program';

update public.internships set url = 'https://www.challiance.org/community-health/youth-initiatives'
where name = 'Cambridge Health Alliance Youth Health Internship';

update public.internships set url = 'https://www.brighamandwomens.org/about-bwh/community-health-equity/youth-programs'
where name = 'Brigham and Women''s Hospital Research Internship';

update public.internships set url = 'https://www.savetheharbor.org/teen-employment'
where name = 'Save the Harbor/Save the Bay Teen Employment';

update public.internships set url = 'https://www.clarku.edu/summer-programs/'
where name = 'Clark STEM for Girls Summer Program';
