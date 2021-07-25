//importing express js module into our application
const express= require('express');

//initialization the app using the express.
var app = express();


/*
HTTP  methods
GET
POST 
PUT
PATCH
DELETE
request capture re

*/

app.get('/',(req,res)=>{
    res.send("<h1>hello world<h1>");
});


//internally used
//node -> http.createServer
app.listen(5000,()=>{
    console.log("listen on port number 5000")
})