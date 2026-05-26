-- Fix Brigham & Women's link from main hospital homepage to the Student Success
-- Jobs Program (SSJP) — a real, active paid year-round internship for Boston HS students.

update public.internships
set url = 'https://www.brighamandwomens.org/about-bwh/community-health-equity/student-success-jobs-program/student-success-jobs-program'
where name = 'Brigham and Women''s Hospital Community Health Internship';
