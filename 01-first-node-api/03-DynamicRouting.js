const http = require('http');
const querystring = require('querystring');
const port = process.env.PORT || 3000;

// func1
function respondText(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Dheeraj Tiwari');
}

// func2
function respondJSON(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ "name": "babe", "age": 24 }));
}

function respondEcho(req, res){
    const {input = '' } = querystring.parse(
        req.url.split('?').slice(1).join('')
    )
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(
        {
            normal: input,
            shouty: input.toUpperCase(),
            CharacterCount: input.length,
            backwords: input.split('').reverse().join('')
        }   
    ))
}
// errFunc
function responseNotFound(req, res) {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
}

// set the routes
const server = http.createServer((req, res) => {
    if (req.url === '/') return respondText(req, res) //text route
    if (req.url === '/json') return respondJSON(req, res) //json route
    if(req.url.match(/^\/echo/)) return respondEcho(req, res) //echo route

    responseNotFound(req, res) //error route
})


server.listen(port, () => {
    console.log(`server is lesten on ${port}`);
});