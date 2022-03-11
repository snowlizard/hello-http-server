// write your code here
const http = require('http');

const server = http.createServer( (req, res) => {
    console.log(`Recieved ${req.method} request for ${req.url}`);

    res.writeHead(200, {'content-type': 'text/plain'});
    res.end('Hello World');
});

server.listen(8080, 'localhost', null, () => {
    console.log('server is listening on localhost:8080');
})