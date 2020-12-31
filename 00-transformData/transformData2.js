const fs = require('fs');
const pdf = require('pdf-parse');
 
let dataBuffer = fs.readFileSync('Padrao_TISS_Componente_Organizacional__202012.pdf');

pdf(dataBuffer).then( data => {
    const array = data.text.split('\n')

    array.map( (frase, index) => {
        if(frase.indexOf("Quadro 30") !== -1){
            console.log(frase)
            console.log(index)
        }
    })
    
})