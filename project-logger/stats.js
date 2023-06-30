const os = require('os')//importa o 'os' do node.js que fernece metodos para interação com o S.O
const log = require('./logger')//importação da função do logger

setInterval(()=>{
    
    const { freemem, totalmem } = os // traz informação sobre a memoria livre e a memoria total do sistema

    const total = parseInt(totalmem()/1024/1024)
    const freeMem = parseInt(freemem()/1024/1024)
    const usage = 100 - parseInt((freeMem/total)*100)//calcula a porcentagem de uso da memoria

    const stats = { //o objeto stats que contém as informações de memoria dentro dele
        total: `${total} MB`,
        freeMem: `${freeMem} MB`,
        usage: `${usage}%`
    }

    console.clear()
    console.log('++++ MEMORY STATS ++++')
    console.table(stats)//imprime uma tabela no console com as estatísticas de memória contidas no objeto stats

    log(`${JSON.stringify(stats)}\n`)//converte em string json a função no logger

}, 1000)