create index users_geo_index
  on users
  using GIST (point);

DROP FUNCTION IF EXISTS find_points_within_radius(
  DOUBLE PRECISION,
  DOUBLE PRECISION,
  INTEGER
);


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
    st_distance(point, st_point(long, lat)::geography) as dist_meters
  from users
  order by point <-> st_point(long, lat)::geography;
$$;