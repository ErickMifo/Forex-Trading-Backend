/* eslint-disable camelcase */
/* eslint-disable no-console */
const pool = require('../db/db');

module.exports = {
  async index(req, res) {
    try {
      const allGraph = await pool.query('SELECT * FROM graph');
      res.json(allGraph.rows);
    } catch (err) {
      console.log(err.message);
    }
  },
  async show(req, res) {
    const { id } = req.params;
    try {
      const graph = await pool.query('SELECT * FROM graph WHERE graph_id = $1', [id]);
      res.json(graph.rows[0]);
    } catch (err) {
      console.log(err.message);
    }
  },
  async store(req, res) {
    try {
      const {
        graph_id, usd, gbp, graph_date,
      } = req.body;
      const newGraph = await pool.query('INSERT INTO graph (graph_id, usd, gbp, graph_date) VALUES ($1, $2, $3, $4) RETURNING *',
        [graph_id, usd, gbp, graph_date]);
      res.json(newGraph.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
  },
  async update(req, res) {
    try {
      const { id } = req.params;
      const { usd, gbp, graph_date } = req.body;
      // eslint-disable-next-line no-unused-vars
      const updateGraph = await pool.query('UPDATE graph SET (usd, gbp, graph_date) = ($1, $2, $3) WHERE graph_id = $4',
        [usd, gbp, graph_date, id]);
      res.json('Graph updated');
    } catch (err) {
      console.error(err.message);
    }
  },
  async destroy(req, res) {
    try {
      const { id } = req.params;
      // eslint-disable-next-line no-unused-vars
      const deleteGraph = await pool.query('DELETE FROM graph WHERE graph_id = $1', [id]);
      res.json('graph deleted');
    } catch (err) {
      console.err(err.message);
    }
  },
};
