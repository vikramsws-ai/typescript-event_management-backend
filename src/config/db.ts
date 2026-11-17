import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pg;

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

async function testDatabase() {
  try {
    const result = await pool.query('SELECT current_database()');

    console.log('PostgreSQL connected!');
    console.log('Database:', result.rows[0].current_database);
  } catch (error) {
    console.error('Database connection failed:', error);
  }
}
