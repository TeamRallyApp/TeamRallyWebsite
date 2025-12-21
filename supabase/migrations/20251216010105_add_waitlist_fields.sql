/*
  # Add additional fields to waitlist table

  1. Changes
    - Add `first_name` (text, not null) - User's first name
    - Add `last_name` (text, not null) - User's last name
    - Add `state` (text, not null) - State of residence
    - Add `age` (integer, not null) - User's age
    - Add `hobbies_sports` (text, not null) - User's hobbies and sports interests
    - Add `beta_tester` (boolean, default false) - Whether user wants to beta test

  2. Notes
    - Using IF NOT EXISTS pattern to avoid errors on re-runs
    - All new fields are required to gather comprehensive user information
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'waitlist' AND column_name = 'first_name'
  ) THEN
    ALTER TABLE waitlist ADD COLUMN first_name text NOT NULL DEFAULT '';
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'waitlist' AND column_name = 'last_name'
  ) THEN
    ALTER TABLE waitlist ADD COLUMN last_name text NOT NULL DEFAULT '';
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'waitlist' AND column_name = 'state'
  ) THEN
    ALTER TABLE waitlist ADD COLUMN state text NOT NULL DEFAULT '';
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'waitlist' AND column_name = 'age'
  ) THEN
    ALTER TABLE waitlist ADD COLUMN age integer NOT NULL DEFAULT 0;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'waitlist' AND column_name = 'hobbies_sports'
  ) THEN
    ALTER TABLE waitlist ADD COLUMN hobbies_sports text NOT NULL DEFAULT '';
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'waitlist' AND column_name = 'beta_tester'
  ) THEN
    ALTER TABLE waitlist ADD COLUMN beta_tester boolean NOT NULL DEFAULT false;
  END IF;
END $$;