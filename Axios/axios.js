const axios = require('axios');

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
getGithubData()
