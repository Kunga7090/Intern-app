-- Fix programs whose "Apply now" links went to generic research/career homepages
-- with no internship info visible. Verified by manual review.

-- BCH link was research.childrenshospital.org (research division homepage, no internship info)
update public.internships set url = 'https://jobs.bostonchildrens.org/working-at-childrens/internships/'
where name = 'Boston Children''s Hospital Research Internship';

-- NEB link was neb.com/en/about-neb/careers (generic careers page)
-- promoting-science-education page explicitly describes their HS summer internship
update public.internships set url = 'https://www.neb.com/en-us/promoting-science-education'
where name = 'New England Biolabs (NEB) Summer Internship';

-- Draper HS robotics intern link was draper.com/careers/internships (generic)
update public.internships set url = 'https://www.draper.com/education-programs/student-opportunities'
where name = 'Draper Laboratory Robotics Intern';

-- MIT CSAIL does not run a high school internship program; no such program exists
delete from public.internships where name = 'MIT CSAIL AI Research Assistant';

-- MIT Lincoln Lab High School Internship Program is explicitly suspended indefinitely
delete from public.internships where name = 'MIT Lincoln Laboratory Engineering Intern';
