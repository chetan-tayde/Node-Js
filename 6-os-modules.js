// This are some built in module 
// called os module specially use for operating system
const os = require('os')


// use for current user info
const user = os.userInfo()
console.log(user);


// Method return system uptime in seconds
const time = os.uptime()
console.log('The system uptime is: '+ time)


// current os info method putting into the object
const osDetails = {
    names:os.type(),
    releaseDate: os.release(),
    freeMemory:os.freemem(),
    totalMemory:os.totalmem()
}
console.log(osDetails)