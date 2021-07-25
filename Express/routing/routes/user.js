const express = require('express');

const router = express.Router();


//path : '/user'

router.get('/', (req, res) => {
    res.send("<h2>Get request by<h2>");
});


// Dynamic routing we use : for dynamic routes ,we can also pass multiple paras
// path:  '/users/dheeraj'
router.get('/:name', (req, res)=>{
    res.send("<h2>Get request by<h2>"+ req.params.name);
});

//path : '/user/user-create'
router.post('/user-create', (req, res) => {
    res.send("post request for user");
});

//path : '/user/user-update'
router.put('/user-update', (req, res) => {
    res.send("put request for user");
});

//path : '/user/user-delete'
router.delete('/user-delete', (req, res) => {
    res.send("delete request for user");
});

module.exports = router;