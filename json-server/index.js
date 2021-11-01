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


// // JSON Server POST request

axios.post('http://localhost:3000/users/', {
    id: 6,
    first_name: 'Fred',
    last_name: 'Blair',
    email: 'freddyb34@yahoo.com'
}).then(res => {
    console.log(res.data)
}).catch(err => console.log(err))



// // JSON Server modify data with PUT request

axios.put('http://localhost:3000/users/6/', {
    first_name: 'Fred',
    last_name: 'Blair',
    email: 'freddyb34@gmail.com'
}).then(res => {
    console.log(res.data)
}).catch(err => console.log(err))


// // JSON Server DELETE request

axios.delete('http://localhost:3000/users/1/')
    .then(res => console.log(res.data))
    .catch(err => console.log(err))


// JSON Server sorting data

axios.get('http://localhost:3000/users?_sort=last_name&_order=desc')  //asc and desc
    .then(res => {
        data = res.data;
        data.forEach(e => {
            console.log(`${e.first_name}, ${e.last_name}, ${e.email}`)
        })
    }).catch(err => console.log(err))


// JSON Server operators
// We can use _gte and _lte for getting a specific range of data.
axios.get('http://localhost:3000/users?_lte=4') //_gte and _lte
    .then(res => console.log(res.data))
    .catch(err => console.log(err))



// JSON Server full text search
// A full text search can be performed with the q parameter.

axios.get('http://localhost:3000/users?q=yahoo')
    .then(res => console.log(res.data))
    .catch(err => console.log(err))