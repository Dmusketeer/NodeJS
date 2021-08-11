// creating the server using built in http module

const http = require('http');
const port = process.env.PORT || 3000 ;

const server=http.createServer((req, res) => {
   res.writeHead(200, {'Content-Type': 'application/json'});
   res.end('HELLO DHEERAJ!'); 
})


server.listen(port,()=>{
    console.log(`listening on port ${port}`);
})