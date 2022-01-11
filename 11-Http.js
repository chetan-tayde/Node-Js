const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome to the home page')
    }if(req.url === '/about'){
        res.end('Welcome to the about page')
    }
})

server.listen(5000,()=>{
    console.log("listening from the server")
})