

//nodeJs runs on a server- backend unlike vanilla JS  which runs on a browser- frontend
//the console is the terminal window

console.log('Hello World')
//global is the key word for window object
console.log(global)
//common core modules
//CommonJS modules instead of ES6 modules

const os = require('os')
const path = require('path')
console.log(os.type())

console.log(os.version())

console.log(os.homedir())

console.log(__dirname)
console.log(__filename)

console.log(path.dirname(__filename))
console.log(path.basename(__filename))
console.log(path.extname(__filename))

console.log("\nbetter version for path usage")

console.log(path.parse(__filename))