const fs = require('fs');
const pdf = require('pdf-parse');
 
let dataBuffer = fs.readFileSync('Padrao_TISS_Componente_Organizacional__202012.pdf');

pdf(dataBuffer).then( data => {
    const arrayPhrases = data.text.split('\n').filter( phrase => {
        return /[A-Za-z0-9]/.test(phrase)
    })

    let indexs = [];
    arrayPhrases.forEach( (phrase, index) => {
        phrase.trim()
        if(phrase.indexOf("Quadro 30") !== -1 || phrase.indexOf("5 ANS") !== -1)
            indexs.push(index)  
    })
    const arrayTable_1 = arrayPhrases.slice(indexs[0]+4, indexs[1]+1).map( phrase => {
        return phrase.slice(2, phrase.length-1)
    })
    

    indexs = [];
    arrayPhrases.forEach( (phrase, index) => {
        phrase.trim()
        if(phrase.indexOf("Quadro 31") !== -1 || phrase.indexOf("168 Guia de tratamento odontológico") !== -1)
            indexs.push(index)  
    })
    const arrayTable_2 = arrayPhrases.slice(indexs[0]+3, indexs[1]+1).map(phrase=>phrase.trim())
        .filter( phrase => {
            return phrase.length > 2 && phrase !== 'Padrão TISS - Componente Organizacional – dezembro de 2020'
        })
        .map( (phrase,index, arrayOrigin) => {
            
            let data= {}
            if(/^\d/.test(phrase) && !(/\d$/.test(phrase))){
                data = {
                    'Código':phrase.split(" ").slice(0,1).join(" "),
                    'Descrição da categoria': phrase.split(" ").slice(1,phrase.length+2).join(" ")
                }
            }
          
            if(/\d$/.test(phrase)){
              data = {
                'Código': phrase,
                'Descrição da categoria': arrayOrigin[index+1]+" "+arrayOrigin[index+2]
              }
            }
          
            return data
          })  

    indexs = [];
    arrayPhrases.forEach( (phrase, index) => {
        phrase.trim()
        if(phrase.indexOf("3 Exclusão") !== -1)
            indexs.push(index)  
    })
    const arrayTable_3 = arrayPhrases.slice(indexs[0]-2, indexs[0]+1).map( phrase => {
        return phrase.slice(2, phrase.length-1)
    })

    const tables = [arrayTable_1, arrayTable_2, arrayTable_3]

    const tablesObject = tables.map( table => {
        return table.map( (phrase, index) => {
            let data = {
                codigo: index+1,
                descricao: phrase
            }
            return data
        })
    })

    console.log(arrayTable_2)
   
    
})