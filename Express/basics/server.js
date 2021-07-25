const express=require('express');
const app= express();
const path= require('path');//use to create proper path.
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {    //route1
    // res.send("hello express"); //simple text
    // res.send('<h2>hello express<h2>');//html tags
    res.sendFile(path.resolve(__dirname + '/index.html'));//html file   notice use + sign.
});

app.get('/about', (req, res) => {  //route2
    res.sendFile(path.resolve(__dirname + '/about.html'));//html file   notice use + sign.
});

app.listen(port,()=>console.log(`listening on port ${port}`))