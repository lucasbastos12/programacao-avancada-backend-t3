const EventEmitter = require('events')// uma classe que emite ou ouve enventos
const fs = require('fs')
const { futimesSync } = require('fs')
const path = require('path')

const emitter = new EventEmitter()//criação da instancia e emite evento

emitter.on('log',(message)=>{//a função de retorno para quando o evento for emitido
    fs.appendFile(path.join(__dirname,'log.txt'), message, (err)=>{
        if(err) throw err
    })//vai anexar o message no arquivo .txt

    console.log('rodando...')
})

function log(message){
    emitter.emit('log', message)//a função recebe o parametro message e onde e emitido o log
}

module.exports = log//exporta para qualquer lugar da aplicação