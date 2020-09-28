const express = require("express");
const server = express();

const authRouter = require("./routes/authRoutes")

const setup = require('./setup');
setup(server);

server.use(authRouter)

server.get('/', (req, res) => {
    res.send({message: "Api up!"})
})

module.exports = server;