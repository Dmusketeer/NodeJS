# ------------------------------ File System(fs) Module ------------------------------
Node.js is a JavaScript runtime built on Chrome’s V8 JavaScript engine. Node.js helps developers to write JavaScript code to run on the server-side, to generate dynamic content and deliver to the web clients.

The two features that make Node.js stand-out are:
- Event-driven
- Non-blocking I/O model


### To handle file operations like creating, reading, deleting, etc., Node.js provides an inbuilt module called FS (File System).All file system operations can have synchronous and asynchronous forms depending upon user requirements.

<i><b>Syntax</b> : 
const fs = require('fs'); </i>

## Common use for File System module:

- Read Files
- Write Files
- Append Files
- Close Files
- Delete Files


## What is Synchronous and Asynchronous approach?

<b>Synchronous approach</b>: They are called blocking functions as it waits for each operation to complete, only after that, it executes the next operation, hence blocking the next command from execution i.e. a command will not be executed until & unless the query has finished executing to get all the result from previous commands. <br/>
<b>Asynchronous approach</b>: They are called non-blocking functions as it never waits for each operation to complete, rather it executes all operations in the first go itself. The result of each operation will be handled once the result is available i.e. each command will be executed soon after the execution of the previous command. While the previous command runs in the background and loads the result once it is finished processing the data.
<br/>
<br/>

# [File System Methods](https://www.w3schools.com/nodejs/ref_fs.asp) 
## [Reference](https://www.geeksforgeeks.org/node-js-file-system/)


