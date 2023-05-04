CREATE OR REPLACE FUNCTION find_points_within_radius(
  IN latitude DOUBLE PRECISION,
  IN longitude DOUBLE PRECISION,
  IN radius INTEGER
)
RETURNS SETOF users
AS $$
BEGIN
  RETURN QUERY
    SELECT *
    FROM users
    WHERE ST_DWithin(geom::geography, ST_MakePoint(longitude, latitude)::geography, radius);
END;
$$ LANGUAGE plpgsql;