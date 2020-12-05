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



obterUsuario(function lidarUsuario(erro, usuario){
    //no javascript null || "" || 0 === false
    if(erro){
        console.error("deu ruim em usuario", erro)
        return;
    }

    obterTelefone(usuario.id, function lidarTelefone(erro1, telefone) {
        if(erro1){
            console.error("deu ruim em telefone", erro)
            return;
        }
        obterEndereco(usuario.id, function lidarEndereco (erro2, endereco) {
            if(erro2){
                console.error("deu ruim em endereco", erro)
                return;
            }

            console.log(`
               Nome: ${usuario.nome}
               Endereço: ${endereco.rua}, ${endereco.numero}
               Telefone: (${telefone.ddd})${telefone.telefone}
            `)
        })
    })
})


