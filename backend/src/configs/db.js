import pkg from 'pg';
const { Client } = pkg;

import dotenv from 'dotenv';
dotenv.config();
// Define a function to connect to PostgreSQL
export const connectToPostgreSql = () => {
  const client = new Client({
    user: process.env.user,
    host: process.env.host,
    database: process.env.database,
    password: process.env.password,
    port: process.env.port,
  });

  // Connect to PostgreSQL
  client.connect()
    .then(() => console.log('Connected to PostgreSQL'))
    .catch(err => console.error('Error connecting to PostgreSQL:', err));

  return client; // Return the PostgreSQL client instance
};
