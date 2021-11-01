// md5 hashing algorithm

//Loading the crypto module in node.js
const crypto = require('crypto');
//creating hash object 
let hash = crypto.createHash('md5');
//passing the data to be hashed
data = hash.update('Dheeraj', 'utf-16')
//Creating the hash in the required format
gen_hash = data.digest('hex')
//Printing the output on the console
console.log("Hash : ", gen_hash)




