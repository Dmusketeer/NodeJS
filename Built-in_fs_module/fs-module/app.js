const fs = require('fs')
// read file
fs.readFile('./myFolder/note.txt', (err, data) => {
    if (err) {
        console.log(err)
    } else {
        console.log(data.toString())
    }
})
// write file
fs.writeFile('./myFolder/note.txt', 'A new message', (err, data) => {
    if (err) {
        console.log(err)
    } else {
        console.log('A new message created')
    }
})
// append file
fs.appendFile('./myFolder/note.txt', 'A new message 2\r\n', (err, data) => {
    if (err) {
        console.log(err)
    } else {
        console.log('A new message created')
    }
})
// create folder
if (!fs.existsSync('newfolder')) {
    fs.mkdir('newfolder', (err, data) => {
        if (err) {
            console.log(err)
        } else {
            console.log('A new folder created')
        }
    })
} else {
    console.log('The folder already exist')
}
// delete folder
if (fs.existsSync('newfolder')) {
    fs.rmdir('newfolder', (err, data) => {
        if (err) {
            console.log(err)
        } else {
            console.log('The folder deleted')
        }
    })
} else {
    console.log('The folder already deleted')
}
//delete file
if (fs.existsSync('./myFolder/note.txt')) {
    fs.unlink('./myFolder/note.txt', (err, data) => {
        if (err) {
            console.log(err)
        } else {
            console.log('The file is deleted')
        }
    })
} else {
    console.log('The file already deleted')
}
