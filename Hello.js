const path = require('path')
const process = require('process')

//print hello world
console.log('Hello World');

const dir = path.dirname(__dirname);
console.log(dir);



//seperator
const seperator = path.sep;
console.log(seperator)

//extension name
const filepath = 'downloads/vs/vscode/learning/nodejs/global/server.js'
const extName = path.extname(filepath);
console.log(extName)


// Access the process object and get the PID
const currentPID = process.pid;

// Print the PID to the console
console.log(`The PID of the current running process is: ${currentPID}`);



