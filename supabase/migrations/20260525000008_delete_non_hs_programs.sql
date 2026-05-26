-- Delete programs confirmed to not accept high school students,
-- or where no actual youth/HS program was found after research.

delete from public.internships where name in (
  -- Boston Globe only offers college-level internships; explicitly no HS program
  'Boston Globe High School Journalism Internship',

  -- WBUR explicitly states they do NOT accept high school students
  'WBUR Youth Journalism Workshop',

  -- GBH internships require college enrollment; no teen/HS program exists
  'GBH Digital Media Teen Internship',

  -- No youth program found; company serves high-net-worth adults, not HS students
  'Boston Private Bank Youth Finance Program',

  -- Putnam acquired by Franklin Templeton; internship program requires college enrollment
  'Putnam Investments Youth Finance Internship'
);
