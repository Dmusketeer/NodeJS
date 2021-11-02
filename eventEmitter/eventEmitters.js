// Importing events
const axios = require('axios')
const eventEmitter = require('events')
// Initializing event emitter instances
const eventEmitter = new EventEmitter()

// Registering to Event
var registerEvents = async function startGettingData() {
    let res = await axios.get('https://api.github.com/users/Dmusketeer')
    let getData = res.data
    console.log('program Started')
    console.log('Number of Followers: ', getData.followers)
    eventEmitter.emit('data_received');
}

eventEmitter.on('connection', registerEvents);

// Triggering Event
eventEmitter.on('data_received', () => {
    console.log('data received succesfully.');
    console.log('program Ended')
})

eventEmitter.emit('connection');





// o/p :
// program started
// Number of Followers : 3
// data received succesfully
// program ended

