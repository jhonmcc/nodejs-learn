const fs = require('fs')

fs.createReadStream('./files/img.jpg')
    .pipe(fs.createWriteStream('./files/img2.jpg'))
    .on('finish', () => console.log('escrita de stream finalizado')) // stream dispara um evento ao fim da execucao

