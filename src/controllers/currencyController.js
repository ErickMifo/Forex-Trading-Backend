/* eslint-disable camelcase */
/* eslint-disable no-console */
const pool = require('../db/db');

module.exports = {
  async index(req, res) {
    try {
      const allCurrency = await pool.query('SELECT * FROM currency');
      res.json(allCurrency.rows);
    } catch (err) {
      console.log(err.message);
    }
  },
  async show(req, res) {
    const { id } = req.params;
    try {
      const currency = await pool.query('SELECT * FROM currency WHERE currency_id = $1', [id]);
      res.json(currency.rows[0]);
    } catch (err) {
      console.log(err.message);
    }
  },
  async store(req, res) {
    try {
      const { currency_id, usd, gbp } = req.body;
      const newCurrency = await pool.query('INSERT INTO currency (currency_id, usd, gbp) VALUES ($1, $2, $3) RETURNING *',
        [currency_id, usd, gbp]);
      res.json(newCurrency.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
  },
  async update(req, res) {
    try {
      const { id } = req.params;
      const { usd, gbp } = req.body;
      // eslint-disable-next-line no-unused-vars
      const updateCurrency = await pool.query('UPDATE currency SET (usd, gbp) = ($1, $2) WHERE currency_id = $3',
        [usd, gbp, id]);
      res.json('Currency updated');
    } catch (err) {
      console.error(err.message);
    }
  },
  async destroy(req, res) {
    try {
      const { id } = req.params;
      // eslint-disable-next-line no-unused-vars
      const deleteCurrency = await pool.query('DELETE FROM currency WHERE currency_id = $1', [id]);
      res.json('currency deleted');
    } catch (err) {
      console.err(err.message);
    }
  },
};
