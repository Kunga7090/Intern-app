-- Add URLs to real-org programs that were missing them,
-- and fix imprecise paths on existing URLs.

-- ── Add URLs to real programs ─────────────────────────────────────────────────

update public.internships set url = 'https://www.bu.edu/spark/'
where name = 'BU Spark! Software Fellowship';

update public.internships set url = 'https://www.dana-farber.org/research/departments-centers-and-labs/research-programs/pediatric-oncology/'
where name = 'Dana-Farber Cancer Research Intern';

update public.internships set url = 'https://www.csail.mit.edu/research'
where name = 'MIT CSAIL AI Research Assistant';

update public.internships set url = 'https://www.broadinstitute.org/education-outreach'
where name = 'Broad Institute Genomics Intern';

update public.internships set url = 'https://www.massgeneral.org/research/about/education-and-training'
where name = 'Mass General Hospital Research Fellow';

update public.internships set url = 'https://www.bso.org/learn/youth-family'
where name = 'Boston Symphony Orchestra Arts Intern';

update public.internships set url = 'https://www.somervilleartscouncil.org/'
where name = 'Somerville Arts Council Creative Intern';

update public.internships set url = 'https://www.bochcenter.org/'
where name = 'Wang Theatre Arts Administration Intern';

update public.internships set url = 'https://www.nantucketconservation.org/get-involved/'
where name = 'Nantucket Conservation Foundation Intern';

update public.internships set url = 'https://www.capecodtimes.com/'
where name = 'Cape Cod Times Journalism Intern';

update public.internships set url = 'https://greentownlabs.com/community/'
where name = 'Greentown Labs Climate Tech Intern';

update public.internships set url = 'https://www.hubspot.com/careers/students'
where name = 'HubSpot Growth Marketing Intern';

update public.internships set url = 'https://jobs.fidelity.com/students/'
where name = 'Fidelity Investments Finance Intern';

update public.internships set url = 'https://www.aboutwayfair.com/careers/internships'
where name = 'Wayfair Data Science Intern';

update public.internships set url = 'https://www.rapid7.com/careers/openings/?team=internships'
where name = 'Rapid7 Cybersecurity Intern';

update public.internships set url = 'https://www.biogen.com/en_us/careers/students-and-graduates.html'
where name = 'Biogen Neuroscience Research Intern';

update public.internships set url = 'https://www.ll.mit.edu/careers/student-opportunities'
where name = 'MIT Lincoln Laboratory Engineering Intern';

update public.internships set url = 'https://wi.mit.edu/education/undergraduate-graduate-students'
where name = 'Whitehead Institute Biology Research Intern';

update public.internships set url = 'https://careers.rtx.com/global/en/students'
where name = 'Raytheon Technologies Engineering Intern';

update public.internships set url = 'https://www.analog.com/en/about-adi/careers/students.html'
where name = 'Analog Devices Hardware Engineering Intern';

update public.internships set url = 'https://jobs.gevernova.com/'
where name = 'GE Vernova Grid Engineering Intern';

update public.internships set url = 'https://www.vrtx.com/careers/students-and-graduates'
where name = 'Vertex Pharmaceuticals Drug Discovery Intern';

update public.internships set url = 'https://www.wellington.com/en/careers/early-careers/'
where name = 'Wellington Management Finance Intern';

update public.internships set url = 'https://careers.statestreet.com/global/en/students-and-graduates'
where name = 'State Street Quantitative Finance Intern';

update public.internships set url = 'https://careers.massmutual.com/internships'
where name = 'MassMutual Engineering Intern';

update public.internships set url = 'https://www.draper.com/careers/internships'
where name = 'Draper Laboratory Robotics Intern';

update public.internships set url = 'https://www.whalingmuseum.org/learn/education-programs/'
where name = 'New Bedford Whaling Museum Arts Intern';

update public.internships set url = 'https://lawrencecommunityworks.org/get-involved/'
where name = 'Lawrence Community Works Nonprofit Intern';

update public.internships set url = 'https://www.mvfb.org/get-involved/volunteer/'
where name = 'Merrimack Valley Food Bank Intern';

update public.internships set url = 'https://sevenhills.org/careers/'
where name = 'Seven Hills Foundation Nonprofit Intern';

-- ── Fix imprecise/broken paths on existing programs ───────────────────────────

update public.internships set url = 'https://www.hms.harvard.edu/about/community-programs'
where name = 'Harvard Medical School SHARP Program';

update public.internships set url = 'https://www.wellesley.edu/summer/programs'
where name = 'Wellesley College Exploration Summer Program';

update public.internships set url = 'https://www.bentley.edu/undergraduate/pre-college-summer-programs'
where name = 'Bentley University Business Explore Program';

update public.internships set url = 'https://www.hbs.edu/mba/admissions/diversity/Pages/summer-venture.aspx'
where name = 'Harvard Business School Summer Venture in Management Program';

update public.internships set url = 'https://www.northeastern.edu/admissions/resources/summer-programs/'
where name = 'Northeastern PEAK Experiences';

update public.internships set url = 'https://www.techstars.com/accelerators/boston'
where name = 'Techstars Boston Startup Mentorship Program';
