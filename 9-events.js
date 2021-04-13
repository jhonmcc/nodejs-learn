const events = require('events')

const eventEmitter = new events.EventEmitter();

// criando um manipulador 
var meuEventoEscutador = () => {
    console.log('Ouvi o grito')
}

// assinando o manipulador a um evento
eventEmitter.on('grite',  meuEventoEscutador)

// disparando o evento
eventEmitter.emit('grite')