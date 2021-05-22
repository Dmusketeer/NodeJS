// exports.area=(width,height)=>width*height;
// exports.perimeter=(width,height)=>2*(width+height);
                // or
module.exports={
    Area:(r)=>Math.PI*r*r,
    area: (width, height) => width * height,
    perimeter: (width, height) => 2 * (width + height),
    currentDateTime: Date(),// currentDateTime is the property not a function.
    directoryName:__dirname,
    fileName:__filename

}