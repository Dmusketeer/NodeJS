const fs = require('fs').promises;

const fileName = 'mytxt.txt';

fs.readFile(fileName)
    .then(data=>console.log(`${fileName} : ${data}`))
    .catch(e=>console.error(e))


    