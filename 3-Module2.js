// we are not sharing this varible So
// we can name it as local varible since it locally available for the 
// for this files
const secret ='Super Secret';



// we are sharing this varible to another module
const vishal = 'vishal'
const mazhar = 'mazhar'

// if we want export this module to the another module 
// simpl we need to export this first by the following syntax

module.exports = {vishal, mazhar}