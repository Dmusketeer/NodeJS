let count = 0;
setInterval(() => { //non-blocking 
    console.log(`${++count} Dheeraj`);
}, 1000);

setTimeout(() => {//non-blocking
    console.log(`hello from the past`)
    process.exit();

},6000);