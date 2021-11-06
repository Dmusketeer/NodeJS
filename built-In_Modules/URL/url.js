const url = require('url');
const newUrl = new URL(
    'https://www.tutorialspoint.com/reactjs/reactjs_state.htm');
console.log(newUrl);

const myUrl = url.parse('https://www.tutorialspoint.com:3000/reactjs/reactjs_state.htm')

console.log(myUrl);