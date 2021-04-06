const fs = require('fs')

fs.readFile('./files/notes.txt', (err, contentTxt) => {
    if (err){
        console.log(err)
    }
    else{
        console.log(contentTxt.toString())
    }
})
