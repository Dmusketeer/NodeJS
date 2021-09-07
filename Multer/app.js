const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser');
require('dotenv').config();
const path = require('path')
const mongodb = require('mongodb');
const app = express();
const Port = process.env.PORT || 3000;
const fs = require('fs');

// use the middleware body parser
app.use(bodyParser.urlencoded({ extended: true }))


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
    }
})

var upload = multer({
    storage: storage
})

// consfiguring mongodb

const MongoClient = mongodb.MongoClient;
const url = 'mongodb://127.0.0.1:27017/Images'
MongoClient.connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}, (err, client) => {
    if (err) return console.log(err);
    db = client.db('Images')
    app.listen(5000, () => {
        console.log('Mongo is listening on port 5000')
    })
}
)


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'))
})
// configure the single file upload
app.post('/uploadfile', upload.single('myFile'), (req, res, next) => {
    const file = req.file;
    if (!file) {
        const error = new Error('Please upload a file')
        error.httpStatusCode = 400;
        return next(error);
    }
    res.send(file);
})

// configure the multiple file upload
app.post('/uploadmultiple', upload.array('myFiles', 12), (req, res, next) => {
    const files = req.files;
    if (!files) {
        const error = new Error('Please upload a files')
        error.httpStatusCode = 400;
        return next(error);
    }
    res.send(files);
})

app.listen(Port, () => {
    console.log('listening on port ' + Port);
})