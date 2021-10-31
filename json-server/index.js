const express = require('express')
const axios = require('axios')

// JSON Server GET request
axios.get('http://localhost:3000/users')
    .then(res => {
        data = res.data;
        console.log(data)
        data.forEach(data => {
            console.log(`${data.first_name} ${data.last_name} ${data.email}`)
        })
    })
    .catch(err => {
        console.log(err)
    })


// JSON Server POST request



// JSON Server modify data with PUT request