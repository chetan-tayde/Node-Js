// Modules
// in Common js every file is Modules ust the encapsulated code
// we can separate the varible and funtion that we want



const name = require('./3-Module2')
const sayHello = require('./2-Module1')

// see Module Alternative file for the reference
const data = require('./4-ModuleAlternative')
console.log(data);

require('./5-Shock')

console.log(name);
sayHello('chetan');
sayHello(name.vishal);
sayHello(name.mazhar);

