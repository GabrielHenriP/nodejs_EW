/*
    0- obter usuario
    1- obter o número de telefone a partir do seu id
    2- obter o endereço do usuario pelo id
*/

//importando um módulo interno do node.js
const util = require('util')
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

const usuarioPromise = obterUsuario()
// para monipular o sucesso usamos a função .then
// para monipular os erros usamos .catch
// 
usuarioPromise
    .then(function(usuario) {
        return obterTelefone(usuario.id)
        .then( function resolverTelefone(result) {
            return {
                usuario: {
                    nome: usuario.nome,
                    id: usuario.id,
                },
                telefone: result
            }
        })
    })
    .then(function (resultado) {
        const endereco = obterEnderecoAsync(resultado.usuario.id)
        
        return endereco.then(function resolverEndereco(result) {
            return {
                usuario: resultado.usuario,
                telefone: resultado.telefone,
                endereco: result
            }
        })
    })
    .then(function (resultado) {
        console.log(`
            Nome: ${resultado.usuario.nome}
            Endereço: ${resultado.endereco.rua}, ${resultado.endereco.numero}
            Telefone: (${resultado.telefone.ddd})${resultado.telefone.telefone}
        `)
    })
    .catch(function(error){
        console.error('DEU RUIM', error)
    })
