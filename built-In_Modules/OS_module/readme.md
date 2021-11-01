# ------------------------------ OS Module ------------------------------
OS is a node module used to provide information about the computer operating system. 
<b>Syntax : </b> 
const os= require('os')
## Advantages: 
- It provides functions to interact with the operating system.
- It provides the hostname of the operating system and returns the amount of free system memory in bytes.



## os methods:
- os.cpus() : This method is used to get the information of all the CPU/Core installed in the system. This method returns an array 
- os.arch() : This method is used to return the CPU architecture of operating system for which the node.js binary was compiled.
- os.freemem():This method is used to get the amount of free system memory in bytes. This method returns Integer.  
- os.hostname():This method is used to get the hostname of the operating system. This method returns String 
- os.homedir():This method is used to get the home directory of the current user. This method returns String 
- os.platform():This method is used to get the operating system platform as set during compile time of node.js 
- os.release():This method is used to get the operating system release.
- os.totalmem():This method is used to get the total amount of system memory in bytes.This method returns Integer
- os.type(): This method is used to get the operating system name as returned by Uname.
