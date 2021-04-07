// promises sao objetos que representa a execucao correta ou com falha de uma operacao assincrona
const fs = require('fs')

const lerArquivo = (pathFile) => new Promise((resolve, reject) => {
    fs.readFile(pathFile, (err, data) =>{
        if (err){
            reject(err)
        }else{
            resolve(data.toString())
        }
    })
})

console.log('Iniciando execucao da promise')

lerArquivo('./files/notes.txt')
    .then(data => console.log(data))
    .catch(err => console.log(err))

console.log('Finalizando execucao da promise')