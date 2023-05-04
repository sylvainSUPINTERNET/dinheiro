CREATE EXTENSION IF NOT EXISTS postgis;


CREATE TABLE users (
    id bigint primary key generated always as identity,
    name TEXT not null,
    phone TEXT not null,
    point GEOGRAPHY(POINT, 4326) NOT NULL,
    created_at timestamptz default now()
)