const fs = require('fs'); // Here fs --> file system

// const textIn = fs.readFileSync('./starter/txt/input.txt','utf-8');
// console.log(textIn);

// Blocking, synchronous way
// const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`
// fs.writeFileSync('./starter/txt/output.txt', textOut);
// console.log('File written!');
// const hello = 'Hello World';
// console.log(hello);

// Non-blocking, asynchrous way
fs.readFile('./starter/txt/start.txt', 'utf-8', (err, data1) => {
    if(err) return console.log('ERROR!!!');

    fs.readFile(`./starter/txt/${data1}.txt`,'utf-8', (err,data2) => {
        console.log(data2);
        fs.readFile(`./starter/txt/append.txt`,'utf-8', (err,data3) => {
        console.log(data3);
            // Writing a file in Async way
            fs.writeFile(`./starter/txt/final1.txt`, `${data2}\n${data3}`, 'utf-8', err => {
                console.log('Your file has been written!!!!');
            });
    });
    });



    // console.log(data); // Note: Here text also works file instead of data
});
console.log('Will read file!');