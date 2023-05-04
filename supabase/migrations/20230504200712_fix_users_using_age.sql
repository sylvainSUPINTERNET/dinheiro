
--- Don't compute age on DB side ( we can't use efficiant index , keep just the birthdate )
ALTER TABLE users
  DROP COLUMN age;

create or replace function nearby_users(lat float, long float, radius float )
returns setof record
language sql
as $$
  select id, 
    st_astext(point),
    phone,
    created_at,
    firstname,
    lastname,
    country_code,
    job_title,
    description_profil,
    working_place,
    main_picture_url,
    birthdate,
    st_distance(point, st_point(long, lat)::geography) as dist_meters
  from users
    where st_distance(point, st_point(long, lat)::geography) < radius
    order by point <-> st_point(long, lat)::geography;
$$;