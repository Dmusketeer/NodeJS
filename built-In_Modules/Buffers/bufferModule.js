var buff = Buffer.alloc(20);
console.log(buff); //<Buffer 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00>

// create buffer from string,object and string
var buffer = Buffer.from('Dheeraj')
console.log(buffer);

// concat
var buff1 = Buffer.from('Dheeraj ')
var buff2 = Buffer.from('Tiwari ')
var buff3 = Buffer.concat([buff1, buff2])
console.log(buff3.toString()); // Dheeraj Tiwari


// buf.compare() : This method is used to compare buffers.It returns
//  0 : If both buffers are same
//  1 : If target buffer comes before the source buffer.
//- 1 : If source buffer comes before the target buffer.
var buffer1 = Buffer.from('Dheeraj');
var buffer2 = Buffer.from('Tiwari');
var output = buffer1.compare(buffer2);
console.log("buffer1 length is : ", buffer1.length)
console.log(output)
if (output < 0) {
    console.log(buffer1 + " comes before " + buffer2);
} else if (output == 0) {
    console.log(buffer1 + " is same as " + buffer2);
} else {
    console.log(output + " comes after " + buffer2);
}