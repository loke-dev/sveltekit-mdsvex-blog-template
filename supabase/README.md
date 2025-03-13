# Supabase Setup for Blog Comments

This directory contains the necessary SQL migrations to set up the Supabase database for the blog comments functionality.

## Setup Instructions

1. Create a new Supabase project at [https://supabase.com](https://supabase.com)

2. Configure Authentication Providers:
   - Go to Authentication > Providers
   - Enable Email/Password, GitHub, and Google providers
   - For GitHub:
     - Create a new OAuth app at [GitHub Developer Settings](https://github.com/settings/developers)
     - Set the Authorization callback URL to `https://your-supabase-project.supabase.co/auth/v1/callback`
     - Copy the Client ID and Client Secret to Supabase
   - For Google:
     - Create a new OAuth app at [Google Cloud Console](https://console.cloud.google.com/apis/credentials)
     - Set the Authorized redirect URI to `https://your-supabase-project.supabase.co/auth/v1/callback`
     - Copy the Client ID and Client Secret to Supabase

3. Run the SQL Migration:
   - Go to SQL Editor in your Supabase dashboard
   - Copy and paste the contents of `migrations/20240313_comments.sql`
   - Run the SQL script

4. Set up Environment Variables:
   - Copy your Supabase URL and anon key from the API settings
   - Add them to your `.env` file:
     ```
     PUBLIC_SUPABASE_URL=your_supabase_url
     PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
     ```

5. Enable Row Level Security (RLS):
   - Go to Authentication > Policies
   - Ensure RLS is enabled for both `profiles` and `comments` tables
   - Verify that the policies created by the migration are in place

## Database Schema

### Profiles Table
Stores user profile information:
- `id`: UUID (primary key, references auth.users)
- `email`: TEXT (user's email)
- `display_name`: TEXT (user's display name)
- `avatar_url`: TEXT (URL to user's avatar)
- `created_at`: TIMESTAMP (when the profile was created)

### Comments Table
Stores blog post comments:
- `id`: UUID (primary key)
- `post_slug`: TEXT (slug of the blog post)
- `user_id`: UUID (references profiles.id)
- `content`: TEXT (comment content)
- `created_at`: TIMESTAMP (when the comment was created)

## Security

The setup includes Row Level Security policies to ensure:
- Anyone can view profiles and comments
- Only authenticated users can create comments
- Users can only update or delete their own comments
- Users can only update their own profiles