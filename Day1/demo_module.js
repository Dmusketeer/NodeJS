var http = require('http');
var dt = require('./myFirstModeule');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("The date and time are currently: " + dt.myDateTime());
    res.end();
}).listen(8080);
console.log("Dheeraj Tiwari");

var s_c = require('./square_cube.js');

const fnc = (a)=>{
    console.log(`square of ${a} is :` + s_c.sqr(a));
    console.log(`cube of ${a} is :` + s_c.cube(a));
}
fnc(5);