const express = require('express');
const cookieParser = require('cookie-parser')
const sessions = require('express-session')

const app = express()

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));
app.use(cookieParser());

const oneDay = 1000 * 60 * 60 * 24;

app.use(sessions({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized: true,
    cookie: { maxAge: oneDay },
    resave: false
}))

const myusername = 'Dheeraj'
const mypassword = '123'
// a variable to save a session
var session;

app.get('/', (req, res) => {
    session = req.session;
    if (session.userid) {
        res.send("Welcome User <a href=\'/logout'>click to logout</a>");
    } else
        res.sendFile('views/index.html', { root: __dirname })
});


app.post('/user', (req, res) => {
    if (req.body.username == myusername && req.body.password == mypassword) {
        session = req.session;
        session.userid = req.body.username;
        console.log(req.session)
        res.send(`Hey there, welcome <a href=\'/logout'>click to logout</a>`);
    }
    else {
        res.send('Invalid username or password');
    }
})


app.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
});


app.listen(port, () => {
    console.log(`server is listening on port: ${port}`)
})