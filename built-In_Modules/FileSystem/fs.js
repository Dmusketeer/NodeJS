const fs = require('fs')

// =================================== reading files
// Asysnchronous read
// fs.readFile('text.txt', (err, data) => {
//     if (err) console.log(err);
//     // console.log(data); // will return buffer
//     console.log(data.toString());
// })

// // Synchronous read
// const data = fs.readFileSync('text.txt')
// console.log(data.toString());


// Writing to the files
// var data1 = 'Hello how are you ! what\'s Going On.'
// fs.writeFile('text1.txt', data1, (err) => {
//     if (err) console.log(err);
//     console.log("data written successfully!");
//     fs.readFile('text1.txt', (err, data) => {
//         if (err) console.log(err);
//         console.log(data.toString());
//     })
// })



// open a file
fs.open('text1.txt', 'r+', (err, fd) => {
    if (err) console.log(err)
    console.log(fd);
    console.log("File open successfully");
    // Close the open file
    fs.close(fd, function (err) {
        if (err) {
            console.log(err);
        }
        console.log("File closed successfully.");
    })
})



// delete the file

fs.unlink('text1.txt', function (err) {
    console.log(err);
    console.log("file Successfully deleted");
})

