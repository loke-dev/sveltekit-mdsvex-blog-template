// This script loads environment variables from .env file
// and makes them available to the application

import { readFileSync } from 'fs';
import { resolve } from 'path';
import { config } from 'dotenv';

// Load environment variables from .env file
config();

// Read the .env file directly
try {
  const envPath = resolve(process.cwd(), '.env');
  const envContent = readFileSync(envPath, 'utf8');

  console.log('Environment variables loaded from .env file:');

  // Parse the .env file
  const envVars = {};
  envContent.split('\n').forEach(line => {
    const match = line.match(/^([^=]+)=(.*)$/);
    if (match) {
      const key = match[1].trim();
      const value = match[2].trim();
      envVars[key] = value;

      // Set the environment variable if not already set
      if (!process.env[key]) {
        process.env[key] = value;
      }
    }
  });

  // Log the environment variables (without showing full values for sensitive data)
  Object.keys(envVars).forEach(key => {
    const value = envVars[key];
    const displayValue = key.includes('KEY') || key.includes('SECRET') || key.includes('PASSWORD')
      ? value.substring(0, 10) + '...'
      : value;

    console.log(`${key}: ${displayValue}`);
  });

  console.log('\nEnvironment variables are now available in process.env');
} catch (error) {
  console.error('Error loading .env file:', error.message);
}