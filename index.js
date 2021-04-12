/* eslint-disable camelcase */
/* eslint-disable no-console */
const express = require('express');
const cors = require('cors');
const pool = require('./db');

const app = express();
app.use(cors());

app.use(express.json());

app.get('/history', async (req, res) => {
  try {
    const allHistory = await pool.query('SELECT * FROM history');
    res.json(allHistory.rows);
  } catch (err) {
    console.log(err.message);
  }
});

app.get('/wallet', async (req, res) => {
  try {
    const allWallet = await pool.query('SELECT * FROM wallet');
    res.json(allWallet.rows);
  } catch (err) {
    console.log(err.message);
  }
});

app.get('/currency', async (req, res) => {
  try {
    const allCurrency = await pool.query('SELECT * FROM currency');
    res.json(allCurrency.rows);
  } catch (err) {
    console.log(err.message);
  }
});

app.get('/graph', async (req, res) => {
  try {
    const allGraph = await pool.query('SELECT * FROM graph');
    res.json(allGraph.rows);
  } catch (err) {
    console.log(err.message);
  }
});

app.get('/history/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const history = await pool.query('SELECT * FROM history WHERE history_id = $1', [id]);
    res.json(history.rows[0]);
  } catch (err) {
    console.log(err.message);
  }
});

app.get('/wallet/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const wallet = await pool.query('SELECT * FROM wallet WHERE wallet_id = $1', [id]);
    res.json(wallet.rows[0]);
  } catch (err) {
    console.log(err.message);
  }
});

app.get('/currency/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const currency = await pool.query('SELECT * FROM currency WHERE currency_id = $1', [id]);
    res.json(currency.rows[0]);
  } catch (err) {
    console.log(err.message);
  }
});

app.get('/graph/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const graph = await pool.query('SELECT * FROM graph WHERE graph_id = $1', [id]);
    res.json(graph.rows[0]);
  } catch (err) {
    console.log(err.message);
  }
});

app.post('/history', async (req, res) => {
  try {
    const { history_content } = req.body;
    const newHistory = await pool.query('INSERT INTO history (history_content) VALUES ($1) RETURNING *',
      [history_content]);
    res.json(newHistory.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

app.post('/wallet', async (req, res) => {
  try {
    const { wallet_content } = req.body;
    const newWallet = await pool.query('INSERT INTO wallet (wallet_content) VALUES ($1) RETURNING *',
      [wallet_content]);
    res.json(newWallet.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

app.post('/currency', async (req, res) => {
  try {
    const { currency_content } = req.body;
    const newCurrency = await pool.query('INSERT INTO currency (currency_content) VALUES ($1) RETURNING *',
      [currency_content]);
    res.json(newCurrency.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

app.post('/graph', async (req, res) => {
  try {
    const { graph_content } = req.body;
    const newGraph = await pool.query('INSERT INTO graph (graph_content) VALUES ($1) RETURNING *',
      [graph_content]);
    res.json(newGraph.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

app.put('/history/:id', async (req, res) => {
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
});

app.put('/wallet/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { wallet_content } = req.body;
    // eslint-disable-next-line no-unused-vars
    const updateWallet = await pool.query('UPDATE wallet SET wallet_content = $1 WHERE wallet_id = $2',
      [wallet_content, id]);
    res.json('Wallet updated');
  } catch (err) {
    console.error(err.message);
  }
});

app.put('/currency/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { currency_content } = req.body;
    // eslint-disable-next-line no-unused-vars
    const updateCurrency = await pool.query('UPDATE currency SET currency_content = $1 WHERE currency_id = $2',
      [currency_content, id]);
    res.json('Currency updated');
  } catch (err) {
    console.error(err.message);
  }
});

app.put('/graph/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { graph_content } = req.body;
    // eslint-disable-next-line no-unused-vars
    const updateGraph = await pool.query('UPDATE graph SET graph_content = $1 WHERE graph_id = $2',
      [graph_content, id]);
    res.json('Graph updated');
  } catch (err) {
    console.error(err.message);
  }
});

app.delete('/history/:id', async (req, res) => {
  try {
    const { id } = req.params;
    // eslint-disable-next-line no-unused-vars
    const deleteHistory = await pool.query('DELETE FROM history WHERE history_id = $1', [id]);
    res.json('history deleted');
  } catch (err) {
    console.err(err.message);
  }
});

app.delete('/wallet/:id', async (req, res) => {
  try {
    const { id } = req.params;
    // eslint-disable-next-line no-unused-vars
    const deleteWallet = await pool.query('DELETE FROM wallet WHERE wallet_id = $1', [id]);
    res.json('wallet deleted');
  } catch (err) {
    console.err(err.message);
  }
});

app.delete('/currency/:id', async (req, res) => {
  try {
    const { id } = req.params;
    // eslint-disable-next-line no-unused-vars
    const deleteCurrency = await pool.query('DELETE FROM currency WHERE currency_id = $1', [id]);
    res.json('currency deleted');
  } catch (err) {
    console.err(err.message);
  }
});

app.delete('/graph/:id', async (req, res) => {
  try {
    const { id } = req.params;
    // eslint-disable-next-line no-unused-vars
    const deleteGraph = await pool.query('DELETE FROM graph WHERE graph_id = $1', [id]);
    res.json('graph deleted');
  } catch (err) {
    console.err(err.message);
  }
});

app.listen(3001, () => {
  console.log('server is listening');
});
