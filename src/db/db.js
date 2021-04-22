const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: 'postgres',
  password: process.env.PASSWORD,
  database: 'forex_database',
  host: 'db',
});

module.exports = pool;
