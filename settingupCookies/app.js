const express = require('express')
const cookieParser = require('cookie-parser')

//setup express app
const app = express()

// let’s you use the cookieParser in your application
app.use(cookieParser());

//set a simple for homepage route
app.get('/', (req, res) => {
    res.send('welcome to a simple HTTP cookie server');
});



//a get route for adding a cookie
app.get('/setcookie', (req, res) => {
    res.cookie(`Cookie token name`, `encrypted cookie string Value`);
    res.send('Cookie have been saved successfully');
});


// get the cookie incoming request
app.get('/getcookie', (req, res) => {
    //show the saved cookies
    console.log(req.cookies)
    res.send(req.cookies);
});


//Secure cookies
// attributes to make this cookie more secure.
// >--HTTPonly 
// >--secure
// >--sameSite

//a get route for adding a cookie
app.get('/setcookieSec', (req, res) => {
    res.cookie(`Cookie token name`, `encrypted cookie string Value`, {
        maxAge: 5000,
        // expires works the same as the maxAge
        expires: new Date('01 12 2021'),
        secure: true,
        httpOnly: true,
        sameSite: 'lax'
    });
    res.send('Cookie have been saved successfully & Securely');
});



// delete the saved cookie
app.get('/deletecookie', (req, res) => {
    //show the saved cookies
    res.clearCookie()
    res.send('Cookie has been deleted successfully');
});



//server listening to port 8000
app.listen(4000, () => console.log('The server is running port 4000...'));
