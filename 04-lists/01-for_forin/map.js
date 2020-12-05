const service = require('./service');

Array.prototype.meuMap = function (callback) {
    const novoArrayMapeado = []

    for( let i = 0; i <= this.length-1;i++){
        const result = callback(this[i], i)
        novoArrayMapeado.push(result);
    }
    return novoArrayMapeado
}

async function main (){
    try {
        const result = await service.obterPessoas('a');
        //const names =[];

        /*
        const names = result.results.meuMap((pessoa, indice) =>{
            return `[${indice} ${pessoa.name}]`
        })*/

        /*
        result.results.forEach(item => {
            names.push(item.name)
        });*/

        /*
        const names = result.results.map( pessoa => {
            return pessoa.name
        })*/

        const names = result.results.map( pessoa => pessoa.name )

        console.log('nomes: '+names)

    } catch (error) {
        console.error('DEU RUIM: '+ error)
    }
}

main()