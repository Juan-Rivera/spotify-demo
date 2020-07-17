const express = require("express");

const db = require("../data/db.js");

const server = express();
server.use(express.json());

server.get('/', (req, res) => {
    res.send('Server is running');
});

module.exports = server;