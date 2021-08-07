// create Http server
// require('http')
// .createServer((req, res) => res.end('Hey Dheeraj'))
// .listen(3000);



const http= require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res)=>{
    res.end("<h1>Hey Dheeraj! </h1>");
})

server.listen(port,()=>{
    console.log(`server is listening on ${port}`);
})