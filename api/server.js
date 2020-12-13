const express = require('express');

const carsRouter = require('../api/cars-router');

const server = express();

server.use(express.json());
server.use(carsRouter);

server.get('/', (req, res) => {
    res.send(`<h2>Let's put some cars in the database!<h2>`);
})

module.exports = server;
