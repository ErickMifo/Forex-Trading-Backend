/* eslint-disable camelcase */
/* eslint-disable no-console */
const express = require('express');
const cors = require('cors');
const socketio = require('socket.io');
const http = require('http');

const HOST = '0.0.0.0';

const PORT = process.env.PORT || 3001;
const app = express();
const server = http.createServer(app);

const fetch = require('node-fetch');
require('dotenv').config();

const apiKey = process.env.API_KEY;
const frontEndURL = 'http://localhost:3000/';

app.use(express.json());
app.use(cors());
const options = {
  cors: true,
  origins: [frontEndURL],
};

const io = socketio(server, options);

setInterval(async () => {
  const responseCurrency = await fetch(`https://free.currconv.com/api/v7/convert?q=GBP_USD&compact=ultra&apiKey=${apiKey}`);
  const currencyJson = await responseCurrency.json();
  io.emit('GBPUSD', currencyJson);
  console.log(currencyJson);
}, 300000);

// Creating variables to store today's date and three days ago to use on the fetch URL.
let today = new Date();
const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
const yyyy = today.getFullYear();
today = `${yyyy}-${mm}-${dd}`;

const ThreeDaysAgo = dd - 3;
const past = `${yyyy}-${mm}-${ThreeDaysAgo}`;

setInterval(async () => {
  const responseGraph = await fetch(`https://free.currconv.com/api/v7/convert?apiKey=${apiKey}&q=EUR_USD,EUR_GBP&compact=ultra&date=${past}&endDate=${today}`);
  const GraphJson = await responseGraph.json();
  io.emit('graph', GraphJson);
  console.log(GraphJson);
}, 300000);

app.use('/', require('./src/routes'));

server.listen(PORT, HOST, () => console.log(`Server running on port ${PORT}`));
