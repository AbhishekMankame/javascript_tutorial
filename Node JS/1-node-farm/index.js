const fs = require('fs'); // Here fs --> file system

const textIn = fs.readFileSync('./starter/txt/input.txt','utf-8');
console.log(textIn);

// Blocking, synchronous way
const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`
fs.writeFileSync('./starter/txt/output.txt', textOut);
console.log('File written!');
// const hello = 'Hello World';
// console.log(hello);

// Non-blocking, asynchrous way
fs.readFile('./starter/txt/start.txt', 'utf-8', (err, data) => {
    console.log(data);
});