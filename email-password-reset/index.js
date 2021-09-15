const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
require('dotenv').config()
const app = express()

// import modules
const users = require('./routes/user')
const resetPassword = require('./routes/resetPassword');

const Port = process.env.PORT || 5000

// middlewares
app.use(express.json());

// mongoose db connection
const password = process.env.mongod_password;
const MONGO_URI = `mongodb+srv://dheeraj:${password}@atlastesting.1itdz.mongodb.net/resetPassword?retryWrites=true&w=majority`;
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.Promise = global.Promise;

mongoose.connection.once("open", () => {
    console.log("Database Connected...");
});
mongoose.connection.on("error", (error) => {
    console.log("Error connecting database..."), error;
});


// routes
app.use('/api', users)
app.use('/api', resetPassword)

// default page
app.get('/', (req, res) => {
    res.send('Welcome to Express')
})

app.listen(Port, () => {
    console.log('listening on port ' + Port);
})
