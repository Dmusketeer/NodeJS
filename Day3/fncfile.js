//create server object
// var http = require('http');

// http.createServer(function (req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.end('Hello World!');
// }).listen(8080);


// A list of Node.js global objects are given below:

// __dirname
// __filename
// Console
// Process
// Buffer
// setImmediate(callback[, arg][, ...])
// setInterval(callback, delay[, arg][, ...])
// setTimeout(callback, delay[, arg][, ...])
// clearImmediate(immediateObject)
// clearInterval(intervalObject)
// clearTimeout(timeoutObject)

// console.log(__dirname);
// console.log(__filename);


// There are three console methods that are used to write any node.js stream:

// console.log()
// console.error()
// console.warn()

// console.error(new Error("Hell! This is a wrong method."));

// const name = 'Dheeraj';
// console.warn(`Don't mess with me ${name}! Don't mess with me!`);

// Node.js REPL
// The term REPL stands for Read Eval Print and Loop.

// Node.js Package Manager
// Node Package Manager provides two main functionalities:

// It provides online repositories for node.js packages / modules which are searchable on search.nodejs.org
// It also provides command line utility to install Node.js packages, do version management and dependency management of Node.js packages.

// to check version npm -v 
// Installing Modules using npm

// npm install <package Name>


// Global vs Local Installation

// 1.By default, npm installs dependency in local mode.Here local mode specifies the folder where Node application is present.

// 2.Globally installed packages / dependencies are stored in system directory

// npm ls  ---->list down all the locally installed modules.

// npm install express - g

// Uninstalling a Module
// To uninstall a Node.js module, use the following command:

// // npm uninstall packagename.

// Searching a Module
// //npm search express


// Node.js OS

// const os = require('os');
// console.log("os.freemem(): \n", os.freemem());
// console.log("os.homedir(): \n", os.homedir());
// console.log("os.hostname(): \n", os.hostname());
// console.log("os.endianness(): \n", os.endianness());
// console.log("os.loadavg(): \n", os.loadavg());
// console.log("os.platform(): \n", os.platform());
// console.log("os.release(): \n", os.release());
// console.log("os.tmpdir(): \n", os.tmpdir());
// console.log("os.totalmem(): \n", os.totalmem());
// console.log("os.type(): \n", os.type());
// console.log("os.uptime(): \n", os.uptime());



//                                         // Node.js Timer
// Node.js Timer functions are global functions.You don't need to use require() function in order to use timer functions. Let's see the list of timer functions.


// Set timer functions:

// setImmediate(): It is used to execute setImmediate.
// setInterval(): It is used to define a time interval.
// setTimeout(): () - It is used to execute a one - time callback after delay milliseconds.
// Clear timer functions:

// clearImmediate(immediateObject): It is used to stop an immediateObject, as created by setImmediate
// clearInterval(intervalObject): It is used to stop an intervalObject, as created by setInterval
// clearTimeout(timeoutObject): It prevents a timeoutObject, as created by setTimeout

// setInterval(()=>{
//     console.log("hey Dheeraj");
// },1000);


// var i = 0;
// setInterval(()=>{
//     i++;
//     console.log(i);
// },1000);


// var recursive = ()=>{
//     console.log("1000 milliseconds is completed.");
//     setTimeout(recursive,1000);
// }
// recursive();



// Node.js Errors
// The Node.js applications generally face four types of errors:

// Standard JavaScript errors i.e. < EvalError >, <SyntaxError>, <RangeError>, <ReferenceError>, <TypeError>, <URIError> etc.
// System errors
// User-specified errors
// Assertion errors


// Throws with a ReferenceError because b is undefined  
// try {
//     const a = 1;
//     const c = a + b;
// } catch (err) {
//     console.log(err);
// }


// Node.js DNS
//                              The Domain Name System(DNS) is the phonebook of the Internet.
// The Node.js DNS module contains methods to get information of given hostname.Let's see the list of commonly used DNS functions:

// dns.getServers()
// dns.setServers(servers)
// dns.lookup(hostname[, options], callback)
// dns.lookupService(address, port, callback)
// dns.resolve(hostname[, rrtype], callback)
// dns.resolve4(hostname, callback)
// dns.resolve6(hostname, callback)
// dns.resolveCname(hostname, callback)
// dns.resolveMx(hostname, callback)
// dns.resolveNs(hostname, callback)
// dns.resolveSoa(hostname, callback)
// dns.resolveSrv(hostname, callback)
// dns.resolvePtr(hostname, callback)
// dns.resolveTxt(hostname, callback)
// dns.reverse(ip, callback)

// will print  Domain name system.
// const dns = require('dns');
// dns.lookup('www.facebook.com', (err, addresses, family) => {
//     console.log('addresses:', addresses);
//     console.log('family:', family);
// });


//print the localhost name using lookupService() function.
// const dns = require('dns');
// dns.lookupService('69.171.250.35', 22, (err, hostname, service) => {
//     console.log(hostname, service);
//     // Prints: localhost  
// });




//                                                  Node.js Net
// Node.js provides the ability to perform socket programming.We can create chat application or communicate client and server applications using socket programming in Node.js.The Node.js net module contains functions for creating both servers and clients.



//                                                  Node.js Crypto
// The Node.js Crypto module supports cryptography.It provides cryptographic functionality that includes a set of wrappers for open SSL's hash HMAC, cipher, decipher, sign and verify functions.

// What is Hash
// A hash is a fixed - length string of bits i.e.procedurally and deterministically generated from some arbitrary block of source data.

// What is HMAC
// HMAC stands for Hash - based Message Authentication Code.It is a process for applying a hash algorithm to both data and a secret key that results in a single final hash.





//                                                Node.js TLS / SSL
// What is TLS / SSL
// TLS stands for Transport Layer Security.It is the successor to Secure Sockets Layer(SSL).TLS along with SSL is used for cryptographic protocols to secure communication over the web.
// TLS uses public - key cryptography to encrypt messages.It encrypts communication generally on the TCP layer.





//                       The Nodemailer Module
// The Nodemailer module makes it easy to send emails from your computer.



var nodemailer = require('nodemailer'); //include the module in any application

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: '@gmail.com',
        pass: ''
    }
});

var mailOptions = {
    from: '@gmail.com',
    to: '@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});



// To send an email to more than one receiver, add them to the "to" property of the mailOptions object, separated by commas:
