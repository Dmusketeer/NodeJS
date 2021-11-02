const os = require('os')


// os.cpus()
var value = os.cpus()
console.log("os.cplus ()=> ", value)

console.log("===============")

// os.arch()
console.log(os.arch())

console.log("===============")

// os.freemem()
let mem = os.freemem()
console.log(mem / (1024 * 1024 * 1024), 'GB')

console.log("===============")

// os.hostname()
console.log(os.hostname())

console.log("===============")

// os.homedir()
console.log(os.homedir())

console.log("===============")

// os.platform()
console.log(os.platform())

console.log("===============")

console.log(os.userInfo())
console.log(os.totalmem() / (1024 * 1024 * 1024))
console.log(os.type())