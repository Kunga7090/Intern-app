-- Remove placeholder/fake internship entries that have no real organization
-- and cannot link to an actual application. These were auto-generated seed data.

delete from public.internships where name in (
  'Remote Web Dev Bootcamp Assistant',
  'Virtual Biology Lab — UMass Online',
  'TechHub Boston Full-Stack Dev Intern',
  'Virtual Machine Learning Fellowship',
  'Online Game Development Intern',
  'Remote UX Research Internship',
  'Remote Environmental Science Intern',
  'Remote Biotech Data Analysis Intern',
  'Virtual Civil Rights Law Clinic Intern',
  'Remote Education Policy Research Intern',
  'Remote Full-Stack Engineering Fellowship',
  'Virtual Public Health Policy Intern',
  'Remote Social Media Marketing Intern',
  'Online K-12 Curriculum Design Intern',
  'Remote Cybersecurity Analyst Intern',
  'Virtual Environmental Law Clinic Intern',
  'Remote Content Marketing Strategist Intern',
  'Online Biology Tutoring Program Intern',
  'Online Arts Education Curriculum Intern',
  'Remote Legal Research Assistant',
  'Virtual Nonprofit Grant Writing Intern',
  'Remote Product Management Fellowship',
  'Springfield Marketing Co-op',
  'Brockton Area Transit Marketing Intern'
);
