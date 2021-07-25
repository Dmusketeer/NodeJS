const express = require('express'); // Include ExpressJS
const app = express(); // Create an ExpressJS app

// The body - parser module is middleware that parses user input and makes it available through the req.body property.
const bodyParser = require('body-parser'); // middleware

// application is going to use body - parser:
app.use(bodyParser.urlencoded({ extended: false }));
// 1.urlencoded indicates that we are parsing URL encoded data from the body.When working with forms, we use the urlencoded parser because by default, forms send data in URL encoded format.
//2.extended is an option allowing you to choose which library you want to use to parse the URL encoded data.By default, this option is set to true and will use the qs library.When set to false, like the example above, it uses the QueryString library.

// Route to Homepage
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/static/index.html');
});

// Route Path: '/'
// Route Handler:
// A function of request(req) and response(res)
// The server will respond to the get request by sending the file ‘/static/index.html’


// Route to Login Page
app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/static/login.html');
});

// Route Path: '/login'
// Route Handler:
// A function of request(req) and response(res)
// The server will respond to the get request by sending the file ‘/static/login.html’


app.post('/login', (req, res) => {
    // Insert Login Code Here
    let username = req.body.username;
    let password = req.body.password;
    console.log(`Username: ${username} Password: ${password}`);
    res.send('Thanks for login');
   
});

// app.post is a function of:
// Route Path: '/login'
// Route Handler:
// A function of request(req) and response(res)
// The username input is stored in a variable called username and the password input is stored in a variable called password.When the form is submitted, we respond by showing the user their username and password


const port = 3000 // Port we will listen on

// Function to listen on the port
app.listen(port, () => console.log(`This app is listening on port ${port}`))