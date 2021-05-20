// What is a Module in Node.js ?
//     Consider modules to be the same as JavaScript libraries.
//     A set of functions you want to include in your application.

// Include Modules
// To include a module, use the require() function with the name of the module:
 
<<<<<<< HEAD
var http = require('http');

// // Now your application has access to the HTTP module, and is able to create a server:

http.createServer(function(req,res){
    
        res.writeHead(200,{"contentType":"text/html"});
        res.end("hello !World");
}).listen(8080);

const fs = require('fs');
const path = require('path');
const filepath = path.join('../',"folderName","fileName") 
=======
// var http = require('http');

// // Now your application has access to the HTTP module, and is able to create a server:

// http.createServer(function(req,res){
    
//         res.writeHead(200,{"contentType":"text/html"});
//         res.end("hello !World");
// }).listen(8080);

// const fs = require('fs');
// const path = require('path');
// const filepath = path.join('../',"folderName","fileName") 
>>>>>>> dbd363938c678d42c2af354c3167037298be29ca


// Create Your Own Modules:
// You can create your own modules, and easily include them in your applications.
// The following example creates a module that returns a date and time object:


// Example:
// Create a module that returns the current date and time:
<<<<<<< HEAD
exports.myDateTime = function () {
    return Date();
};
=======
// exports.myDateTime = function () {
//     return Date();
// };
>>>>>>> dbd363938c678d42c2af354c3167037298be29ca
// Use the exports keyword to make properties and methods available outside the module file.


// Include Your Own Module
// Now you can include and use the module in any of your Node.js files.

// Example
// Use the module "myfirstmodule" in a Node.js file:

var http = require('http');
var dt = require('./myFirstModule');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("The date and time are currently: " + dt.myDateTime());
    res.end();
}).listen(8080);

