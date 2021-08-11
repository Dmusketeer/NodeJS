const fs = require('fs');
const http = require('http');
const port = 3000;
const server = http.createServer((req, res) =>{
    fs.readFile("text.txt",(err,data)=>{
        res.writeHead(200,'Content-type','text/plain');
        if(err) console.log(err);
        res.end(data.toString());
    })
})

server.listen(port,()=>{
    console.log('listening on port '+port);
})