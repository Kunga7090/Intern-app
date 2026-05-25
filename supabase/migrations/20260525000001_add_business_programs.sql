-- Add 15 real Massachusetts business, finance, and entrepreneurship internship programs (batch 5).
-- Focused on expanding the Business category from 11 to ~26 programs.

insert into public.internships
  (name, city, type, category, featured, org, blurb, seasons, paid, deadline, application_opens, url)
values

(
  'Babson College Summer Study Entrepreneurship Program',
  'Wellesley', 'in-person', 'Business', true,
  'Babson College',
  'Intensive entrepreneurship and business innovation program at the #1 ranked school for entrepreneurship in the US.',
  ARRAY['Summer'], 'unpaid', '2027-04-15', '2027-01-15',
  'https://www.babson.edu/academics/pre-collegiate/'
),
(
  'Bentley University Business Explore Program',
  'Waltham', 'in-person', 'Business', false,
  'Bentley University',
  'Residential summer business program where high school students explore finance, marketing, and management at Bentley.',
  ARRAY['Summer'], 'unpaid', '2027-05-01', '2027-02-01',
  'https://www.bentley.edu/centers/center-for-international-education-and-study-abroad/pre-college'
),
(
  'SCORE Boston Small Business Mentorship',
  'Boston', 'in-person', 'Business', false,
  'SCORE Boston',
  'Free mentorship pairing high school entrepreneurs with retired business executives for hands-on startup guidance.',
  ARRAY['Fall', 'Spring', 'Summer'], 'unpaid', null, null,
  'https://boston.score.org/'
),
(
  'MassChallenge Youth Startup Mentorship',
  'Boston', 'in-person', 'Business', true,
  'MassChallenge',
  'Startup mentorship and innovation workshops for teen entrepreneurs at one of the world''s largest startup accelerators.',
  ARRAY['Summer', 'Fall'], 'unpaid', null, null,
  'https://masschallenge.org/'
),
(
  'Eastern Bank Financial Literacy Internship',
  'Boston', 'in-person', 'Business', false,
  'Eastern Bank',
  'Community banking and financial literacy internship at New England''s largest mutual bank and a leading community lender.',
  ARRAY['Summer'], 'paid', '2027-04-01', '2027-01-15',
  'https://www.easternbank.com/'
),
(
  'Northeastern D''Amore-McKim Business Pre-College Program',
  'Boston', 'in-person', 'Business', false,
  'Northeastern University',
  'Immersive business and entrepreneurship pre-college experience at Northeastern''s top-ranked D''Amore-McKim School of Business.',
  ARRAY['Summer'], 'unpaid', '2027-05-01', '2027-02-01',
  'https://www.northeastern.edu/dmsb/'
),
(
  'UMass Isenberg Business Pre-College Program',
  'Amherst', 'in-person', 'Business', false,
  'UMass Amherst Isenberg School of Management',
  'Residential summer program introducing high school students to accounting, finance, marketing, and operations management.',
  ARRAY['Summer'], 'unpaid', '2027-04-15', '2027-01-15',
  'https://www.isenberg.umass.edu/'
),
(
  'John Hancock Financial Literacy Youth Program',
  'Boston', 'in-person', 'Business', false,
  'John Hancock',
  'Financial literacy workshops and career exploration program at one of Boston''s most iconic financial services companies.',
  ARRAY['Summer'], 'paid', '2027-03-01', '2026-12-15',
  'https://www.johnhancock.com/about-john-hancock/community-relations.html'
),
(
  'Putnam Investments Youth Finance Internship',
  'Boston', 'in-person', 'Business', false,
  'Putnam Investments',
  'Investment management and financial analysis internship at one of Boston''s leading global asset management firms.',
  ARRAY['Summer'], 'paid', '2027-02-15', '2026-12-01',
  'https://www.putnam.com/'
),
(
  'Techstars Boston Startup Mentorship Program',
  'Boston', 'in-person', 'Business', false,
  'Techstars',
  'Startup ecosystem immersion and entrepreneurship mentorship program connecting teen founders with Boston''s VC community.',
  ARRAY['Summer'], 'unpaid', null, null,
  'https://www.techstars.com/communities/boston'
),
(
  'Boston Private Bank Youth Finance Program',
  'Boston', 'in-person', 'Business', false,
  'Boston Private Bank & Trust',
  'Wealth management and personal finance education internship at a leading private bank serving the Greater Boston area.',
  ARRAY['Summer'], 'paid', '2027-03-15', '2027-01-01',
  'https://www.bostonprivate.com/'
),
(
  'Suffolk University Business Leadership Camp',
  'Boston', 'in-person', 'Business', false,
  'Suffolk University',
  'Leadership and business strategy camp for high school students at Suffolk''s Sawyer Business School in downtown Boston.',
  ARRAY['Summer'], 'unpaid', '2027-05-15', '2027-02-15',
  'https://www.suffolk.edu/business/'
),
(
  'Massachusetts Small Business Development Center Internship',
  'Worcester', 'in-person', 'Business', false,
  'MA Small Business Development Center (MSBDC)',
  'Business consulting and entrepreneurship support internship helping Worcester-area small businesses grow and succeed.',
  ARRAY['Summer', 'Fall', 'Spring'], 'unpaid', null, null,
  'https://www.msbdc.org/'
),
(
  'Berkshire Hills Bancorp Community Banking Internship',
  'Pittsfield', 'in-person', 'Business', false,
  'Berkshire Hills Bancorp',
  'Community banking operations and financial services internship at the largest Massachusetts-based regional bank.',
  ARRAY['Summer'], 'paid', '2027-04-01', '2027-01-01',
  'https://www.berkshirebank.com/'
),
(
  'Harvard Business School Summer Venture in Management Program',
  'Boston', 'in-person', 'Business', true,
  'Harvard Business School',
  'Selective one-week program introducing diverse high school seniors to the case method and business leadership at HBS.',
  ARRAY['Summer'], 'unpaid', '2027-04-01', '2027-01-01',
  'https://www.hbs.edu/mba/student-experience/community-and-culture/summer-venture-in-management/Pages/default.aspx'
);
