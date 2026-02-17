// For PostgreSQL
const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: 8443,
});

(async () => {
  try {
    const client = await pool.connect();
    console.log('PostgreSQL connected successfully!');
    client.release();
  } catch (err) {
    console.error('PostgreSQL connection error:', err.stack);
  }
})();

module.exports = {
  query: (text, params) => pool.query(text, params),
  pool,  // if you ever need direct pool access
};

module.exports = pool;