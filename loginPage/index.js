const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config();
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;
const loginRoute = require('./routes/login')
const signupRoute = require('./routes/signup')


app.use(express.json());
// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
// mongoose db
const Db_password = process.env.MONGO_PASSWORD;
const DB_URL = `mongodb+srv://dheeraj:${Db_password}@atlastesting.1itdz.mongodb.net/EjsLogin?retryWrites=true&w=majority`;
mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.Promise = global.Promise;
mongoose.connection.once('open', () => {
    console.log('DataBase Connected...');
})
mongoose.connection.on('error', (error) => {
    console.log('Connection Error...')
})


// routes
app.get('/', (req, res) => {
    res.send('<h1>Welcome!</h1>')
})

app.use('/api', signupRoute)
app.use('/api', loginRoute)

app.listen(port, () => {
    console.log(`server is listening on ${port}`);
})


