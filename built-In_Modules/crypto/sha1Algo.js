// import crypto module
const crypto = require('crypto');
// create hash object
const hash = crypto.createHash('sha1')
// passing the data to be hashed
data = hash.update('SHA1', 'utf-8')
// creating a hash in require format
gen_hash = data.digest('hex')
// print generated hash
console.log('sha1 hash : ', gen_hash)

