const http = require('http');
const app = require('./app');
const server = http.createServer(app);
server.listen(port, () => {
    console.log(`Running server on port 8080...`);
});
