const EventEmitter = require("events");
const customEmmiter = new EventEmitter();

// on is for listening the event
customEmmiter.on('response',(name,id)=>{
  console.log(`first callback logic is here like ${name} with id ${id}`)
})
customEmmiter.on('response',()=>{
  console.log(`Second callback logic here`)
})
customEmmiter.on('response',()=>{
  console.log(`Third call back logic here
  we can give multiple logic`)
})

// emit is use for emmiting
customEmmiter.emit('response', 'chetan','20')