const fs = require('fs');
const fileName = 'async.js';
fs.readFile(fileName,(err,filedata)=>{
    if(err) return console.log(err)
    console.log(`${fileName} ,file size is : ${filedata.length}`);
})

// list of files in directory
// fs.readdir('../', (err, filedata) => {
//     if (err) return console.log(err)
//     console.log(`${filedata}`);
// })

fs.readdir('./', (err, filedata) => {
    if (err) return console.log(err)
    console.log(`${filedata}`);
})

