// const superhero=require('superhero');
// console.log(superhero.random());
// Create own server:
const http = require('http');
const hostname = "localhost";
const port = 3000;
const server = http.createServer((req, res)=>{
    console.log(req.headers);
    res.statusCode=200;
    res.setHeader('Content-Type','text/http');
    res.end('<html><body><h1> Server connection success:) </h1></body></html>');
});
server.listen(port,hostname,()=>{
    console.log(`server running at http://${hostname}:${port}`);
});
