const {readFile,writeFile} = require('fs').promises


const start = async()=>{
    try{
      const first = await readFile('./content/first.txt','utf-8')
      const second = await readFile('./content/second.txt','utf-8')
      await writeFile(
        './content/third1.txt',`THIS IS AWESOME: ${first} ${second}`,{flag: 'a'}
      )
      console.log(first, second)
    }catch(error){
      console.log(error)
    }
  }
  start()