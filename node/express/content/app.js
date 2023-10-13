// __dirname
// __filename
// module
// require
// process

// const names = require('./names')
// const n2 = require('./n2')
// console.log(names)


// const os = require("os")
// const user = os.userInfo()
// console.log(user)

// const osDetails = {
//     name: os.type(), release: os.release(), totalMemory: os.totalmem(),freeMem: os.freemem(),
// }
//     console.log(osDetails);





// const path = require('path')
// console.log(path.sep)

// const filePath = path.join('/content','subfolder','index.txt')

// console.log(filePath)

// const base = path.basename(filePath)
// console.log(base)


const { readFileSync,writeFileSync } = require('fs')

const first = readFileSync('./subfolder/first.txt',"utf-8")
const second = readFileSync('./subfolder/second.txt',"utf-8")
console.log(first,second)

writeFileSync('./subfolder/result.txt',first,second)