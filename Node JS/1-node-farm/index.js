// Creating a simple web server

const http = require('http');
 // Here http is the important module that give networking capabilites such as building http servers

 const server = http.createServer((req, res) => {
    console.log(req);
    res.end('Hello from the server!!!');
 });

 // Note: Here 8000 is the port number and 127.0.0.1 is the host
 server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to requests on port 8000');
 });

 // Explanation: Here we have created a simple web server using 'createServer' and passed in the call back function that executed each time getting new request that hits the server.
 // For incoming request on the local host IP on the port 8000
 // Then we hitted the url '127.0.0.1:8000' on the browser, so then uder the hood of NodeJS as even was fired due to which callback function was called.