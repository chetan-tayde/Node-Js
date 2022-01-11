// This is another bulit in module
// which is specially based on file system and path
const path = require('path')


// This method gives the path to the file
const filePath = path.join('/content/','subFolder','test.txt')
console.log(filePath)


// This method give the base file name
const base = path.basename(filePath)
console.log(base)


// This method is used for giving absolutePath of file
const absolutePath = path.resolve(__dirname,'content','subFolder','test.txt')
console.log(absolutePath)