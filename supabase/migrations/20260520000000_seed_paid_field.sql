-- Populate paid field for all existing internships based on known program types.
-- Reference: Image 7 shows Paid/Stipend badges for specific programs.

-- Explicitly paid programs (salary or hourly)
update public.internships set paid = 'paid'
where name ilike '%Dana-Farber%Workforce%'
   or name ilike '%Artists for Humanity%'
   or name ilike '%Today''s Interns%'
   or name ilike '%Boston Public Library%';

-- Stipend programs (one-time or nominal payment)
update public.internships set paid = 'stipend'
where paid is null and name in (
  'Massachusetts Institute of Technology Research Science Institute (RSI)',
  'Army Educational Outreach Program (AEOP) High School Apprenticeship',
  'Ragon Institute Summer Experience (RISE)',
  'Broad Summer Scholars Program',
  'Program in Mathematics for Young Scientists (PROMYS)',
  'Canada/USA Mathcamp',
  'Mass General Hospital (MGH) Youth Scholars Program',
  'BU RISE Internship',
  'Massachusetts Life Sciences Center High School Apprenticeship Challenge',
  'Tufts University Biomedical Engineering Research Scholars (TUBERS)',
  'New England Aquarium Teen Internships',
  'Museum of Science Academic Year/Summer Youth Internship Program'
);

-- All remaining programs with no known pay = unpaid
update public.internships set paid = 'unpaid'
where paid is null;
