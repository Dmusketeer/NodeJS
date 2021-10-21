const express = require('express');
const cookieParser = require('cookie-parser')
const sessions = require('session')

const app = express()

const port = process.env.PORT || 3000;

const oneDay = 1000 * 60 * 60 * 24;

app.use(sessions({

}))

app.listen(port, () => {
    console.log(`server is listening on port: ${port}`)
})