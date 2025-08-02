## Node JS

Node.js is a javascript runtime built on Google's open-source V8 javascript engine.
Node js is like a container or environment in which a program written in javascript can be executed.

### Node.js Pros

- Single-threaded, based on event driven, non-blocking I/O model
- Perfect for building fast and scalable data-intensive apps.
- NPM: huge library of open-source packages available for everyone for free.
- Very active developer community.

### Use Node.js

- API with database behind it (preferably No SQL)
- Data streaming (think YouTube)
- Real-time chat application
- Server-side web application

### Don't use Node.js

- Applications with heavy server-side processing (CPU-intensive)

## Synchronous and Asynchronous Code

Synchronous code is also called blocking code. Because here each line blocks the execution of the other line. As certain operations can only be executed after the one is finished.

<code>
const fs = require('fs');

// Blocking code execution
const input = fs.readFileSync('input.txt','utf-8');
console.log(input);

</code>

Asynchronous JS

<pre>
const fs = require('fs');

// Non-blocking code execution
fs.readFile('input.txt','utf-8', (err,data) => {
    console.log(data);
});
console.log('Reading file...');
 </pre>
