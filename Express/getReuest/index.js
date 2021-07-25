// const express = require('express');
// const app = express();
// const port=3000;


// app.get('/',(req,res)=>{
//     res.send("Hello Dheeraj");
// })

// app.listen(port,()=>{
//     console.log("server listening on");
// })




// routes:
const express = require('express');
const app= express();
const port = 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html"); // render html page
})

// app.get('/',(req,res)=>{
//     res.send("This is home page");
// })

// app.get('/About', (req, res) => {
//     res.send("This is About page");
// })

// app.get('/product', (req, res) => {
//     res.send("This is product page");
// })

app.listen(port,()=>{
    console.log("server is listening");
})
