const express = require('express');

const router = express.Router();

//path :  '/pro'   ;
router.get('/',(req, res) => {
    res.send("Product home page");
});

//path :  '/pro/get-details'   ;
router.get('/get-details', (req, res) => {
    res.send("Product details page");
});

//path :  '/pro/price'   ;
router.get('/price', (req, res) => {
    res.send("Product price page");
});

//path :  '/pro/product-page'
router.get('/product-page', (req, res) => {
    res.send("get request for product");
});
//path :  '/pro/product-create'
router.post('/product-create', (req, res) => {
    res.send("post request for product");
});
//path :  '/pro/product-update'
router.put('/product-update', (req, res) => {
    res.send("put request fot product");
});
//path :  '/pro/product-delete'
router.delete('/product-delete', (req, res) => {
    res.send("delete request for product");
});

module.exports = router;  // don't forget it .