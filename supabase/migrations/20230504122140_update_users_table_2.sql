ALTER TABLE users ADD COLUMN country_code TEXT NOT NULL;
ALTER TABLE users ADD COLUMN job_title TEXT NOT NULL;
ALTER TABLE users ADD COLUMN description_profil TEXT NOT NULL;
ALTER TABLE users ADD COLUMN working_place TEXT NOT NULL;

CREATE TABLE criteria (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL
);

CREATE TABLE label (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL
);

CREATE TABLE question (
    id SERIAL PRIMARY KEY,
    question_text TEXT NOT NULL
);

CREATE TABLE user_criteria (
  user_id BIGINT REFERENCES users(id) ON DELETE CASCADE,
  criterion_id BIGINT REFERENCES criteria(id) ON DELETE CASCADE,
  PRIMARY KEY (user_id, criterion_id)
);

CREATE TABLE user_label (
  user_id BIGINT REFERENCES users(id) ON DELETE CASCADE,
  label_id BIGINT REFERENCES label(id) ON DELETE CASCADE,
  PRIMARY KEY (user_id, label_id)
);

CREATE TABLE user_question (
  user_id BIGINT REFERENCES users(id) ON DELETE CASCADE,
  question_id BIGINT REFERENCES question(id) ON DELETE CASCADE,
  PRIMARY KEY (user_id, question_id)
);