// callback sincrona
function message(){
    console.log("funcao message")
}

function callBackSync(){
    message()
    console.log("Rodando callBackParam")
}

callBackSync()

// callback assincrona 
const fs = require('fs')

function asyncCallback() {
    console.log('\nChamada do asyncCallback')
    fs.readFile('./files/notes.txt', (err, data) => {
        if (err){
            console.log(err)
        }
        console.log(data.toString())
    })
    console.log('Finalizado do asyncCallback')
}

asyncCallback()