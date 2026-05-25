-- Add 15 real Massachusetts arts, music, theatre, and museum internship programs (batch 7).
-- Expands the Arts category from ~17 to ~32 programs.

insert into public.internships
  (name, city, type, category, featured, org, blurb, seasons, paid, deadline, application_opens, url)
values

(
  'Boston Ballet Pre-Professional Summer Intensive',
  'Boston', 'in-person', 'Arts', true,
  'Boston Ballet',
  'Elite summer dance training for advanced high school students taught by Boston Ballet School faculty and company artists.',
  ARRAY['Summer'], 'unpaid', '2027-03-01', '2026-12-01',
  'https://www.bostonballet.org/school/boston-ballet-school/summer-dance-program/'
),
(
  'Isabella Stewart Gardner Museum Teen Internship',
  'Boston', 'in-person', 'Arts', false,
  'Isabella Stewart Gardner Museum',
  'Year-round teen arts leadership and curatorial internship at one of the most beloved art museums in the United States.',
  ARRAY['Fall', 'Spring', 'Summer'], 'paid', null, null,
  'https://www.gardnermuseum.org/education/teens'
),
(
  'Huntington Theatre Company Teen Arts Program',
  'Boston', 'in-person', 'Arts', false,
  'Huntington Theatre Company',
  'Theatre arts education and production internship at Boston''s leading professional theatre company and Tony Award winner.',
  ARRAY['Fall', 'Spring', 'Summer'], 'unpaid', null, null,
  'https://www.huntingtontheatre.org/education/'
),
(
  'American Repertory Theater (ART) Youth Programs',
  'Cambridge', 'in-person', 'Arts', false,
  'American Repertory Theater at Harvard',
  'Immersive theatre education and production internship at Harvard''s world-renowned professional theatre company.',
  ARRAY['Fall', 'Spring', 'Summer'], 'unpaid', null, null,
  'https://americanrepertorytheater.org/learn/youth/'
),
(
  'Boston Lyric Opera Young Artists Program',
  'Boston', 'in-person', 'Arts', false,
  'Boston Lyric Opera',
  'Vocal training and opera production internship for talented high school singers at New England''s premier opera company.',
  ARRAY['Fall', 'Spring', 'Summer'], 'unpaid', null, null,
  'https://www.blo.org/education/'
),
(
  'Berklee College of Music Five-Week Summer Performance Program',
  'Boston', 'in-person', 'Arts', true,
  'Berklee College of Music',
  'Intensive five-week summer music performance and production program at the world''s most prominent contemporary music college.',
  ARRAY['Summer'], 'unpaid', '2027-04-01', '2027-01-01',
  'https://college.berklee.edu/programs/summer/5-week'
),
(
  'MassArt Pre-College Summer Program',
  'Boston', 'in-person', 'Arts', false,
  'Massachusetts College of Art and Design',
  'Residential and commuter pre-college studio art program at the only freestanding public art college in the United States.',
  ARRAY['Summer'], 'unpaid', '2027-05-01', '2027-02-01',
  'https://www.massart.edu/admissions/pre-college-program/'
),
(
  'Boston Conservatory at Berklee Pre-College Program',
  'Boston', 'in-person', 'Arts', false,
  'Boston Conservatory at Berklee',
  'Pre-college music, dance, and musical theatre training program at one of the leading performing arts conservatories in the US.',
  ARRAY['Summer'], 'unpaid', '2027-04-15', '2027-01-15',
  'https://www.bostonconservatory.berklee.edu/admissions/pre-college'
),
(
  'Worcester Art Museum Teen Docent Program',
  'Worcester', 'in-person', 'Arts', false,
  'Worcester Art Museum',
  'Year-round teen docent and gallery guide training internship at one of the oldest and largest art museums in New England.',
  ARRAY['Fall', 'Spring', 'Summer'], 'stipend', null, null,
  'https://www.worcesterart.org/education/teens/'
),
(
  'Provincetown Art Association & Museum Internship',
  'Provincetown', 'in-person', 'Arts', false,
  'Provincetown Art Association & Museum',
  'Gallery arts education and curatorial internship at the historic arts community that launched American modernism on Cape Cod.',
  ARRAY['Summer'], 'unpaid', null, null,
  'https://www.paam.org/education'
),
(
  'Cape Ann Museum Arts Internship',
  'Gloucester', 'in-person', 'Arts', false,
  'Cape Ann Museum',
  'Art history, curation, and community arts education internship celebrating the legacy of the Gloucester artists'' colony.',
  ARRAY['Summer', 'Fall', 'Spring'], 'unpaid', null, null,
  'https://www.capeannmuseum.org/'
),
(
  'Danforth Art Museum Youth Internship',
  'Framingham', 'in-person', 'Arts', false,
  'Danforth Art Museum',
  'Contemporary art education and gallery operations internship at MetroWest''s premier fine arts museum and school.',
  ARRAY['Summer', 'Fall', 'Spring'], 'unpaid', null, null,
  'https://danforth.framingham.edu/'
),
(
  'ArtsBoston Summer Internship',
  'Boston', 'in-person', 'Arts', false,
  'ArtsBoston',
  'Arts marketing and audience engagement internship at the nonprofit connecting Greater Boston audiences with arts and culture.',
  ARRAY['Summer'], 'paid', '2027-04-01', '2027-01-15',
  'https://www.artsboston.org/'
),
(
  'Boston Children''s Chorus Youth Leadership Program',
  'Boston', 'in-person', 'Arts', false,
  'Boston Children''s Chorus',
  'Choral performance and civic youth leadership program that uses music to bridge Boston''s diverse communities.',
  ARRAY['Fall', 'Spring', 'Summer'], 'unpaid', null, null,
  'https://www.bostonchildrenschorus.org/'
),
(
  'The Griffin Museum of Photography Teen Program',
  'Winchester', 'in-person', 'Arts', false,
  'Griffin Museum of Photography',
  'Photography education and gallery internship at one of New England''s leading museums dedicated entirely to the art of photography.',
  ARRAY['Fall', 'Spring', 'Summer'], 'unpaid', null, null,
  'https://www.griffinmuseum.org/education/'
);
