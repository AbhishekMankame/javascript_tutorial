// Creating a simple web server

const http = require('http');
 // Here http is the important module that give networking capabilites such as building http servers

 const server = http.createServer((req, res) => {
    res.end('Hello from the server!!!');
 });

 // Note: Here 8000 is the port number and 127.0.0.1 is the host
 server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to requests on port 8000');
 });