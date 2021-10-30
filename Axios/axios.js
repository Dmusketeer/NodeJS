const axios = require('axios');
const fs = require('fs')
// Axios GET request with callbacks
// axios.get('http://webcode.me').then(res => {
//     console.log(res.data)
// })


// Axios GET request with async / await

async function getRequest() {
    let res = await axios.get('http://webcode.me')
    let data = res.data
    console.log(data)
}

// getRequest()



// get github data
async function getGithubData() {
    let res = await axios.get('https://api.github.com/users/Dmusketeer')
    // console.log(res)
    let user = res.data
    console.log(user.login)
    console.log(user.followers)
}
// getGithubData()



// get image 

let config = {
    responseType: 'stream'
}
let url = 'https://images.dog.ceo/breeds/setter-english/n02100735_4870.jpg'
async function getImg() {
    let res = await axios.get(url, config)
    res.data.pipe(fs.createWriteStream('img.jpg'))//save the image to disk.
}
getImg()