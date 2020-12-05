const EventEmitter = require('events')

class MeuEmissor extends EventEmitter {

}

const meuEmissor = new MeuEmissor()

const nomeEvento = 'usuario:click'
meuEmissor.on(nomeEvento, function (click) {
    console.log('um usuario clicou', click)
})

/*
meuEmissor.emit(nomeEvento, 'na barra de rolagem')
let count = 0
setInterval( function () {
    meuEmissor.emit(nomeEvento, 'no Ok' + (count++))
}, 1000)*/

const stdin = process.openStdin()

stdin.addListener('data', function(value) {
    console.log(`vc digitou ${value.toString().trim() }`)
})