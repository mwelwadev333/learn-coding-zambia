/*
  # Learn Code Zambia Database Schema

  ## Overview
  Creates the core database structure for the Learn Code Zambia platform,
  enabling user profile management, progress tracking, and gamification features.

  ## New Tables
  
  ### `profiles`
  Stores user profile information and leaderboard data:
  - `id` (uuid, primary key) - References auth.users
  - `username` (text, unique) - User's display name
  - `is_subscribed` (boolean) - Subscription status for Airtel Money payments
  - `xp_points` (int) - Experience points for Zambian leaderboard ranking
  - `study_goal_minutes` (int) - Daily study goal in minutes (default: 30)
  - `last_seen` (timestamptz) - Last activity timestamp
  - `created_at` (timestamptz) - Account creation timestamp
  - `theme` (text) - User's preferred theme (light/dark)

  ### `progress`
  Tracks course completion for gamification and course locking:
  - `id` (serial, primary key) - Auto-incrementing ID
  - `user_id` (uuid) - References auth.users
  - `course_id` (text) - Course identifier: 'js', 'python', 'sql', 'go'
  - `module_id` (int) - Module number within the course
  - `is_completed` (boolean) - Completion status
  - `completed_at` (timestamptz) - When the module was completed
  - Unique constraint on (user_id, course_id, module_id)

  ## Security
  
  1. Row Level Security (RLS) enabled on all tables
  2. Users can only access their own profile data
  3. Users can only view and modify their own progress records
  
  ## Notes
  
  - XP points are used for the Zambian leaderboard ranking system
  - Course locking logic: Course N unlocks only when Course N-1 is 100% complete
  - Default study goal is 30 minutes per day
  - Subscription status determines access to premium features
*/

-- Create profiles table
CREATE TABLE IF NOT EXISTS profiles (
  id uuid REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  username text UNIQUE NOT NULL,
  is_subscribed boolean DEFAULT false,
  xp_points int DEFAULT 0,
  study_goal_minutes int DEFAULT 30,
  last_seen timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now(),
  theme text DEFAULT 'light'
);

-- Create progress table
CREATE TABLE IF NOT EXISTS progress (
  id serial PRIMARY KEY,
  user_id uuid REFERENCES auth.users ON DELETE CASCADE NOT NULL,
  course_id text NOT NULL,
  module_id int NOT NULL,
  is_completed boolean DEFAULT false,
  completed_at timestamptz,
  UNIQUE(user_id, course_id, module_id)
);

-- Enable Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE progress ENABLE ROW LEVEL SECURITY;

-- Profiles RLS Policies
CREATE POLICY "Users can view own profile"
  ON profiles FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile"
  ON profiles FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can delete own profile"
  ON profiles FOR DELETE
  TO authenticated
  USING (auth.uid() = id);

-- Progress RLS Policies
CREATE POLICY "Users can view own progress"
  ON progress FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own progress"
  ON progress FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own progress"
  ON progress FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own progress"
  ON progress FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_progress_user_id ON progress(user_id);
CREATE INDEX IF NOT EXISTS idx_progress_course_id ON progress(course_id);
CREATE INDEX IF NOT EXISTS idx_profiles_xp_points ON profiles(xp_points DESC);
