const express = require('express')
require('dotenv').config()

const app = express()

const port = process.env.PORT || 3000
const host = process.env.HOST
const db = process.env.DATABASE

app.get('/', (req, res) => {
    res.send(`${port} ${host} ${db}`)
})

app.listen(port, () => {
    console.log(`listening on PORT ${port}`)
})


