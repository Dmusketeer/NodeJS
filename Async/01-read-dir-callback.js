const fs = require('fs');
fs.readdir('./',(err, filedata)=>{
    if(err)return console.log(err)
    filedata.forEach((file)=>{
        fs.readFile(file,(err,fileD)=>{
            if(err)return console.log(err)
            console.log(`${file} : ${fileD.length}`)
        })
    })
    console.log('Done!')
})