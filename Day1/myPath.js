
//  tell the path name or join the two url:
const myvar = require('path');
const fileName = myvar.join(__filename);
const baseName = myvar.basename(fileName);
const extname = myvar.extname(baseName);


// pathName
// BaseName
// extentionName 
console.log(fileName); // file full path
console.log(baseName);//exact file name
console.log(extname);//extension of the file


