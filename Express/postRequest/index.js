const express = require('express');
const app= express();
const port=3000;
const bodyParser = require('body-parser');

app.use(express.urlencoded({ extended: true}));
app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/index.html");
});
app.post('/', (req, res) => {
    var email = req.body.email;
    var password = req.body.password;
    var checkbox = req.body.checkbox;
    console.log(`${email},${password},${checkbox}`);
})


app.listen(port,()=>{
    console.log("server is listening");
});
