-- Add sample deadline and application_opens dates to demonstrate the feature on cards
update public.internships set
  deadline          = '2026-08-15',
  application_opens = '2026-06-01'
where name = 'BU Spark! Software Fellowship';

update public.internships set
  deadline          = '2026-07-01',
  application_opens = '2026-05-20'
where name = 'Dana-Farber Cancer Research Intern';

update public.internships set
  deadline          = '2026-06-30',
  application_opens = '2026-04-01'
where name = 'Google Cambridge Software Engineering Intern';

update public.internships set
  deadline          = '2026-09-01',
  application_opens = '2026-07-15'
where name = 'Northeastern Co-op AI Research Fellow';

update public.internships set
  deadline          = '2026-08-01',
  application_opens = '2026-06-10'
where name = 'UMass Amherst CS Research Fellow';

update public.internships set
  deadline          = '2026-07-20',
  application_opens = '2026-05-01'
where name = 'MIT CSAIL AI Research Assistant';

update public.internships set
  deadline          = '2026-06-15',
  application_opens = '2026-03-01'
where name = 'HubSpot Growth Marketing Intern';

update public.internships set
  deadline          = '2026-07-10',
  application_opens = '2026-05-05'
where name = 'Greentown Labs Climate Tech Intern';
