const { port } = require('./config');

const server = require('./server');

server.listen(port, () => {
    console.log(`\n *** server listening on port: ${port} *** \n`)
})