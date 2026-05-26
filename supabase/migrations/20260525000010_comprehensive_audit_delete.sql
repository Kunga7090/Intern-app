-- Delete programs confirmed to be college-only, adult-only, non-existent,
-- or linking only to homepages with no real HS program found.

delete from public.internships where name in (
  -- No HS program; financial literacy programs are adult/college-only
  'Eastern Bank Financial Literacy Internship',
  'Berkshire Hills Bancorp Community Banking Internship',

  -- Adult business mentorship, not a high school program
  'SCORE Boston Small Business Mentorship',

  -- Accelerator for startups; not a HS program
  'Techstars Boston Startup Mentorship Program',

  -- No formal HS internship program; only general volunteering
  'Merrimack Valley Food Bank Intern',

  -- Accelerator for adult/college startups, not HS
  'MassChallenge Youth Startup Mentorship',

  -- Requires college enrollment
  'HubSpot Growth Marketing Intern',

  -- College-only internship program
  'Massachusetts Department of Elementary & Secondary Education Internship',

  -- HS youth employment handled through futureBOS; no separate program
  'Boston Housing Authority Youth Employment Program',

  -- Requires college enrollment; 18+ minimum
  'Boston Office of Emergency Management Youth Preparedness Intern',

  -- No dedicated youth/HS program
  'Boston Water and Sewer Commission Youth Intern',

  -- College students only (requires current college enrollment)
  'MassDOT Transportation Planning Internship',

  -- Requires college enrollment
  'Massachusetts Environmental Police Youth Conservation Officer',

  -- Requires college enrollment and 2.5 GPA; not HS
  'Massachusetts Department of Public Health Youth Internship',

  -- 18+ and college enrollment required
  'MA Commission Against Discrimination (MCAD) Internship',

  -- No current openings; program effectively inactive
  'Charles River Watershed Association Internship',

  -- No active postings found; program inactive
  'Mystic River Watershed Association Internship',

  -- No HS program found
  'Community Servings Food is Medicine Internship',

  -- Rebranded to Health Leads; no student volunteer program currently
  'Project HEALTH Student Volunteer Program',

  -- No teen council program found
  'ArtsEmerson Teen Council',

  -- Program paused; no longer accepting applications
  'ArtsBoston Summer Internship',

  -- No HS internship; only adult docent/volunteer program
  'Cape Ann Museum Arts Internship',

  -- No HS program; internships are college/graduate level
  'Provincetown Art Association & Museum Internship',

  -- Only informal volunteering; no formal paid/HS internship program
  'NOAA Stellwagen Bank Sanctuary Science Internship',

  -- Redirects to Project SEARCH (developmental disabilities program only)
  'Spaulding Rehabilitation High School Volunteer Program',

  -- College students only
  'MAPC Internship',

  -- 18+ and college enrollment required; HS students use futureBOS
  'Boston Mayor''s Office Youth Internship'
);
