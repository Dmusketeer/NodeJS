const zlib = require('zlib')
const fs = require('fs')

const zip = zlib.createGzip()
const read = fs.createReadStream('data.txt')
const write = fs.createWriteStream('data.txt.gz')

//Transform stream which is zipping the input file
read.pipe(zip).pipe(write)
console.log('Zipped successfully');
