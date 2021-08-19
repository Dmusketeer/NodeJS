const express=require("express");
const bodyParser = require("body-parser");
const app = express();

const http =require("http").Server(app);
const path = require("path")
const io = require("socket.io")(http);
const mongoose = require("mongoose");


app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false}));
const PASSWORD = process.env.MONGODB_PASSWORD; 
const port = process.env.PORT || 3000;
const MONGODB_URL = `mongodb+srv://dheeraj:${PASSWORD}@atlastesting.1itdz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

mongoose.connect(MONGODB_URL,(err)=>{
    console.log('User connected! to BD successfully!!');
})
const Message = mongoose.model('Message',{
    name:String,
    message:String,
})

// const messages=[
//     {name:"Dheeraj",message:"hello Dheeraj"}, 
//     { name: "Prakhar", message: "hello Prakhar" }
// ]

app.get('/messages',(req,res)=>{
    Message.find({},(err,msg)=>{
        res.send(msg);
    })
   
})
app.post('/messages', (req, res) => {
    const message = new Message(req.body);
    message.save((err)=>{
        if(err)
            sendStatus(500);
            io.emit('message', req.body);
            res.sendStatus(200);    
    })  
})

io.on("connection",(socket)=>{
    console.log("user connected!!")
})

http.listen(3000,()=>{
    console.log(`Server is listen on ${port}`);
 })