const fs = require('fs');
const pdf = require('pdf-parse');
const ObjectsToCsv = require('objects-to-csv');
 
let dataBuffer = fs.readFileSync('Padrao_TISS_Componente_Organizacional__202012.pdf');

pdf(dataBuffer).then( data => {
    const arrayPhrases = data.text.split('\n').filter( phrase => {
        return /[A-Za-z0-9]/.test(phrase)
    }).map(phrase => phrase.trim())

    let indexsToSlice = [];
    arrayPhrases.forEach( (phrase, index) => {
        
        if(phrase.indexOf("Quadro 30") !== -1 || phrase.indexOf("5 ANS") !== -1)
            indexsToSlice.push(index)  
    })
    const arrayTable_1 = arrayPhrases.slice(indexsToSlice[0]+4, indexsToSlice[1]+1)
        .map( phrase => {
            let data = {
                'Código': phrase.split(" ").slice(0,1).join(" "),
                'Descrição da categoria': phrase.split(" ").slice(1,phrase.length).join(" ")
            }
            return data
        })
    

    indexsToSlice = [];
    arrayPhrases.forEach( (phrase, index) => {
        if(phrase.indexOf("Quadro 31") !== -1 || phrase.indexOf("168 Guia de tratamento odontológico") !== -1)
            indexsToSlice.push(index)  
    })
    const arrayTable_2 = arrayPhrases.slice(indexsToSlice[0]+3, indexsToSlice[1]+1)
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

    indexsToSlice = [];
    arrayPhrases.forEach( (phrase, index) => {
        phrase.trim()
        if(phrase.indexOf("3 Exclusão") !== -1)
            indexsToSlice.push(index)  
    })
    const arrayTable_3 = arrayPhrases.slice(indexsToSlice[0]-2, indexsToSlice[0]+1)
        .map( phrase => {
            let data = {
                'Código': phrase.split(" ").slice(0,1).join(" "),
                'Descrição da categoria': phrase.split(" ").slice(1,phrase.length).join(" ")
            }
            return data
        })

    const tables = [arrayTable_1, arrayTable_2, arrayTable_3]
    
    let  numberTable = 30
    const tablesCsv = tables.map( table => {
        (async () => {

            const csv = new ObjectsToCsv(table);
            await csv.toDisk(`./Teste_Intuitive_Care_Gabriel/Quadro_${numberTable}.csv`);

          })();
          numberTable++;
    })

})