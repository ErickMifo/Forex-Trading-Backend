/* eslint-disable camelcase */
/* eslint-disable no-console */
const pool = require('../db/db');

module.exports = {
  async index(req, res) {
    try {
      const allHistory = await pool.query('SELECT * FROM history');
      res.json(allHistory.rows);
    } catch (err) {
      console.log(err.message);
    }
  },
  async show(req, res) {
    const { id } = req.params;
    try {
      const history = await pool.query('SELECT * FROM history WHERE history_id = $1', [id]);
      res.json(history.rows[0]);
    } catch (err) {
      console.log(err.message);
    }
  },
  async store(req, res) {
    try {
      const { history_id, history_content } = req.body;
      const newHistory = await pool.query('INSERT INTO history (history_id, history_content) VALUES ($1, $2) RETURNING *',
        [history_id, history_content]);
      res.json(newHistory.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
  },
  async update(req, res) {
    try {
      const { id } = req.params;
      const { history_content } = req.body;
      // eslint-disable-next-line no-unused-vars
      const updateHistory = await pool.query('UPDATE history SET history_content = $1 WHERE history_id = $2',
        [history_content, id]);
      res.json('History updated');
    } catch (err) {
      console.error(err.message);
    }
  },
  async destroy(req, res) {
    try {
      const { id } = req.params;
      // eslint-disable-next-line no-unused-vars
      const deleteHistory = await pool.query('DELETE FROM history WHERE history_id = $1', [id]);
      res.json('history deleted');
    } catch (err) {
      console.err(err.message);
    }
  },
};
