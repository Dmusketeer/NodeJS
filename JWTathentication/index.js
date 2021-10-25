const express = require('express')
require('dotenv').config()
// const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const app = express()

const port = process.env.PORT || 3000
app.use(express.json())


const posts = [{
    userName: "Dheeraj",
    "title": "car"
}, {
    userName: "prakhar",
    title: "baleno"
}]

// require('crypto').randomBytes(64).toString('hex')

app.get('/', authenticateToken, (req, res) => {
    res.status(200).json(posts.filter(post => {
        post.userName === req.user.name
    }))

})

app.post('/login', (req, res) => {
    // authenticate user
    const username = req.body.userName
    var user = { name: username }
    const accessToken = jwt.sign(user, process.env.ACCESS_JWT_KEY)
    res.json({ accessToken: accessToken })
})

function authenticateToken(req, res, next) {
    const authHeader = req.header['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)
    jwt.verify(token, process.env.ACCESS_JWT_KEY, (err, user) => {
        if (err) return res.sendStatus(403)
        req.user = user
        next()
    })
}
app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
})