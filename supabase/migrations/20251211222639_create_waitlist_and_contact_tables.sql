/*
  # Create waitlist and contact messages tables

  1. New Tables
    - `waitlist`
      - `id` (uuid, primary key)
      - `email` (text, unique, not null) - Email address of the user joining the waitlist
      - `created_at` (timestamptz, default now()) - Timestamp when the user joined

    - `contact_messages`
      - `id` (uuid, primary key)
      - `name` (text, not null) - Name of the person contacting us
      - `email` (text, not null) - Email address for follow-up
      - `message` (text, not null) - The message content
      - `created_at` (timestamptz, default now()) - Timestamp when the message was sent

  2. Security
    - Enable RLS on both tables
    - Allow anyone to insert into `waitlist` (public registration)
    - Allow anyone to insert into `contact_messages` (public contact form)
    - No read access for public users (admin only access)
*/

CREATE TABLE IF NOT EXISTS waitlist (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can join waitlist"
  ON waitlist
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Anyone can send contact messages"
  ON contact_messages
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
