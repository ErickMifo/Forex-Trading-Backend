const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: 'postgres',
  password: process.env.PASSWORD,
  database: 'forex_database',
  host: 'localhost',
  port: process.env.PORT,
});
module.exports = pool;
