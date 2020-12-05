/*
    0- obter usuario
    1- obter o número de telefone a partir do seu id
    2- obter o endereço do usuario pelo id
*/

//importando um módulo interno do node.js
const util = require('util')
const { promises } = require('fs')
const obterEnderecoAsync = util.promisify(obterEndereco)

function obterUsuario() {
    // quando der erro -> reject(erro)
    // quando tiver sucesso -> resolve
    return new Promise(function resolvePromise(resolve, reject){
        setTimeout(function() {
            //return reject (new Error('deu rim de vdd agr mlk!!'))
            return resolve({
                id: 1,
                nome: 'Gabriel',
                dataNascimento: new Date()
            })
        },1000 )
    })
    

}

function obterTelefone(idUsuario) {
    return new Promise(function resolverPromise(resolve, reject) {
        setTimeout(() => {
            return resolve({
                telefone: '920923289',
                ddd: 11,
            })
        }, 2000)
    })
    
}

function obterEndereco(idUsuario, callBack) {
    
    setTimeout(() => {
        return callBack(null, {
            rua: 'street',
            numero: 57
        })
    },2000);
}

// passo 1 -> adicionar a palavra async e automaticamente retornará uma promise
main()
async function main() {
    try{
        console.time('medida-promise')
        const usuario = await obterUsuario();
        //const telefone = await obterTelefone(usuario.id);
        //const endereco = await obterEnderecoAsync(usuario.id);
        const resultado = await Promise.all([
            obterTelefone(usuario.id),
            obterEnderecoAsync(usuario.id)
        ])
        const endereco = resultado[1]
        const telefone = resultado[0]
        console.log(`
            Nome: ${usuario.nome}
            Endereço: ${endereco.rua}, ${endereco.numero}
            Telefone: (${telefone.ddd})${telefone.telefone}
        `)
        console.timeEnd('medida-promise')
    }
    catch(error){
        console.error('Deu ruim', error)
    }
}