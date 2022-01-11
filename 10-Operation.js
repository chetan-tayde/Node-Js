const fs = require('fs')
fs.writeFileSync('text.txt','Welcome to chetans new file')
fs.appendFileSync('text.txt','This is appended text')
fs.renameSync('text.txt','new.txt')