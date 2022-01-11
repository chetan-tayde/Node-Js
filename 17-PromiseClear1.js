// console.log("start");

// function loginUser(email, password, callback){
//   setTimeout(() => {
//     console.log("We are getting data")
//     callback({usermail: email})
//   }, 2000);
// }

// function loginVideos(email,callback){
//   setTimeout(()=>{
//   callback({usermail: email})
//   callback(['video1','video2','video3']);
//   },3000)
// }

// const user = loginUser("chetan@gmail.com", 1234, user=>{
//   console.log(user);

//   loginVideos(user.usermail, video=>{
//     console.log(video)
//   })
// });

// console.log("finish")


// To avoid multiple callback we use promises
// This is for resolve
console.log("This is first task")

const promise = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    console.log("This is second task")
    resolve({user:"chetan"})
  })
})
promise.then(user=>{
  console.log(user)
})

console.log("This is third task")




// this is for reject
console.log("This is first task")
const promise = new Promise((resolve,reject)=>{
  setTimeout(()=>{
  console.log("This is second task")
 reject(new Error("This is error that we encounter"))
  },2000)
})
promise.then(user=>{
  console.log(user)
}).catch(err=>{
  console.log(err.message)
})