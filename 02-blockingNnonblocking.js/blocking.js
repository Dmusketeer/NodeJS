
// this program blocks until it reads the file and then only it proceeds to end the program.
var fs = require("fs");
var data = fs.readFileSync('./input.txt');

console.log(data.toString());
console.log("Program Ended");