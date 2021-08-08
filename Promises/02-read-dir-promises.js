const fs = require('fs').promises;

fs.readdir('./')
    .catch((err)=>console.log(err))
    .then(files=>{
        files.forEach(file => {
            fs.readFile(file)
                .then(data => console.log(`${file} : ${data.length}`))
                .catch(e => console.error(e))
        })
    })