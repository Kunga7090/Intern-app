-- Fix category field for all real internship programs.
-- Previous seeds left these as 'General'; update to accurate subject categories.

update public.internships set category = 'STEM'
where name ilike '%Army Educational Outreach%AEOP%'
   or name ilike '%Broad Summer Scholars%'
   or name ilike '%Tufts%Biomedical Engineering Research Scholars%'
   or name ilike '%Northeastern Young Scholars%'
   or name ilike '%Museum of Science%Youth Internship%';

update public.internships set category = 'Biology'
where name ilike '%Ragon Institute Summer Experience%'
   or name ilike '%New England Aquarium Teen%'
   or name ilike '%Dana-Farber%Workforce%'
   or name ilike '%Mass General Hospital%Youth Scholars%'
   or name ilike '%MGH Youth Scholars%'
   or name ilike '%BU RISE%'
   or name ilike '%Massachusetts Life Sciences Center%';

update public.internships set category = 'Mathematics'
where name ilike '%Research Science Institute%RSI%'
   or name ilike '%PROMYS%'
   or name ilike '%Mathcamp%';

update public.internships set category = 'Computer Science'
where name ilike '%LEAH Knox Scholars%';

update public.internships set category = 'Arts'
where name ilike '%Artists for Humanity%';
