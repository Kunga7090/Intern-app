-- Update generic homepage URLs to specific program/application pages
-- found through manual research.

update public.internships set url = 'https://www.bu.edu/spark/students/work/'
where name = 'BU Spark! Software Fellowship';

update public.internships set url = 'https://jobs.fidelity.com/en/students/internships/'
where name = 'Fidelity Investments Finance Intern';

update public.internships set url = 'https://www.johnhancock.com/about-us/community-investment/mlk-nonprofit.html'
where name = 'John Hancock Financial Literacy Youth Program';

update public.internships set url = 'https://www.sevenhills.org/careers/internships'
where name = 'Seven Hills Foundation Nonprofit Intern';

update public.internships set url = 'https://www.msbdc.org/wmass/internship/'
where name = 'Massachusetts Small Business Development Center Internship';
