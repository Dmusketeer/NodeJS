// We are hashing the contents of a file using node.js streams, node.js filesystem and SHA256 cryprographic hashing algorithm.
const crypto = require('crypto');
const fs = require('fs');

const algorithm = 'sha256'
const hash = crypto.createHash(algorithm);

const fileName = './data.txt'
const fileData = fs.ReadStream(fileName)

//passing the data to be hashed
fileData.on('data', (data) => hash.update(data))

//Creating the hash in the required format and writing it in file
fileData.on('end', () => {
    let gen_hash = hash.digest('hex');
    console.log('Hash generated using ' + algorithm + ' \nHashed output is :  ' + gen_hash + ' \nFile name is :  ' + fileName);
    fs.writeFileSync(fileName, gen_hash)
})