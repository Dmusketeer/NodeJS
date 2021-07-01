let http= require('http');
var server=http.createServer((req,res)=>{
    res.writeHead('this is response for a request.');
    res.end();
});
server.listen(3000);

