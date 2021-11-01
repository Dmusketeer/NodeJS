// loading the crypto module
const crypto = require('crypto');
// creating hash onject
const hash = crypto.createHash('whirlpool')
// passing the data to be hashed
data = hash.update('whirlpool', 'utf-8')
// creating the hash in required format
gen_hash = data.digest('hex')
// printing the object
console.log('whirlpool hash :', gen_hash)