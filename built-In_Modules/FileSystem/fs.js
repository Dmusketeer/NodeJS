const fs = require('fs')


// Asysnchronous read
fs.readFile('text.txt', (err, data) => {
    if (err) console.log(err);
    // console.log(data); // will return buffer
    console.log(data.toString());
})


// Synchronous read
const data = fs.readFileSync('text.txt')
console.log(data.toString());