const express = require('express');
var product = require('./routes/product')
var users = require('./routes/user')
var items = require('./routes/items')
var app = express();
var path = require('path');
var port = 3000;


app.use('/pro',product); //pro name must be same in the product.js file.
app.use('/user',users); //u name must be same in the user.js file.
// app.use('/item',items); //it name must be same in the items.js file.






//home page:
app.get('/', (req, res) => {
    res.send("This is the home page");
});


// for user routes:
// app.get('/user', (req, res)=>{
//     res.send("get request for user");
// });
// app.post('/user-create', (req, res) => {
//     res.send("post request for user");
// });
// app.put('/user-update', (req, res) => {
//     res.send("put request for user");
// });
// app.delete('/user-delete', (req, res) => {
//     res.send("delete request for user");
// });

// for product routes:
// app.get('/product', (req, res) => {
//     res.send("get request for product");
// });
// app.post('/product-create', (req, res) => {
//     res.send("post request for product");
// });
// app.put('/product-update', (req, res) => {
//     res.send("put request fot product");
// });
// app.delete('/product-delete', (req, res) => {
//     res.send("delete request for product");
// });


app.listen(port,()=>{
    console.log("server is listening on port 3000");
})