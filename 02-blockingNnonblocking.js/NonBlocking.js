// this program does not wait for file reading and proceeds to print "Program Ended" and at the same time, the program without blocking continues reading the file.
var fs = require("fs");

fs.readFile('input.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});

console.log("Program Ended");