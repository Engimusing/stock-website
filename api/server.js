const express = require("express");
const server = express();

const setup = require('./setup');
setup(server);

server.get('/', (req, res) => {
    res.send({message: "Api up!"})
})

module.exports = server;