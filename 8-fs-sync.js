
const {readFileSync, writeFileSync} = require('fs')


// It is used for the getting files from other file 
const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');
console.log(first, second)


// It is used for the write and ,make new file
writeFileSync(
    './content/result-sync.txt',
    `here is the result: ${first}, ${second}`,
)