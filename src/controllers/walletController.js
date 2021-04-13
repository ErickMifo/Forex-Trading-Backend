/* eslint-disable camelcase */
/* eslint-disable no-console */
const pool = require('../db/db');

module.exports = {
  async index(req, res) {
    try {
      const allWallet = await pool.query('SELECT * FROM wallet');
      res.json(allWallet.rows);
    } catch (err) {
      console.log(err.message);
    }
  },
  async show(req, res) {
    const { id } = req.params;
    try {
      const wallet = await pool.query('SELECT * FROM wallet WHERE wallet_id = $1', [id]);
      res.json(wallet.rows[0]);
    } catch (err) {
      console.log(err.message);
    }
  },
  async store(req, res) {
    try {
      const { wallet_id, usd, gbp } = req.body;
      const newWallet = await pool.query('INSERT INTO wallet (wallet_id, usd, gbp) VALUES ($1, $2, $3) RETURNING *',
        [wallet_id, usd, gbp]);
      res.json(newWallet.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
  },
  async update(req, res) {
    try {
      const { id } = req.params;
      const { usd, gbp } = req.body;
      // eslint-disable-next-line no-unused-vars
      const updateWallet = await pool.query('UPDATE wallet SET (usd, gbp) = ($1, $2) WHERE wallet_id = $3',
        [usd, gbp, id]);
      res.json('Wallet updated');
    } catch (err) {
      console.error(err.message);
    }
  },
  async destroy(req, res) {
    try {
      const { id } = req.params;
      // eslint-disable-next-line no-unused-vars
      const deleteWallet = await pool.query('DELETE FROM wallet WHERE wallet_id = $1', [id]);
      res.json('wallet deleted');
    } catch (err) {
      console.err(err.message);
    }
  },
};
