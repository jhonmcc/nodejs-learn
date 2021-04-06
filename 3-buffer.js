const fs = require('fs')

fs.readFile('./files/img.jpg', (erro, resBuffer) => {
    if (erro){
        console.log(erro)
    } else {
        console.log(resBuffer) 
        // veras que ele ira imprimir uma msg muito louca esse é o resultado do buffer
        // no caso voce pode re-escrever o buffer numa nova imagem com o comando abaixo comentado
        // fs.writeFile('./files/img2.jpg', resBuffer, erro => {
        //     if (erro){
        //         console.log(erro)
        //     }
        //     console.log('imagem escrita do buffer')
        // })
    }
})



