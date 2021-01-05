const fs = require('fs'); 
const csv = require('csv-parser');

class ExtractCSVText {
  constructor(){
    this.handleExtractCSVText()
  }

  handleExtractCSVText() {
    const dataText = [];

    return fs.createReadStream('Relatorio_cadop.csv', {encoding: 'latin1'}).pipe(csv({separator: ';'}, ["Registro ANS","CNPJ","Razão Social","Nome Fantasia","Modalidade","Logradouro","Número","Complemento","Bairro","Cidade","UF","CEP","DDD","Telefone","Fax","Endereço eletrônico","Representante","Cargo Representante","Data Registro ANS"])).on('data', (row) => {
  
        dataText.push(row)
        
      }).on('end', () => {
          // handle end of CSV
          //console.log(dataText)  
          return dataText                
      })
  }
}

module.exports = new ExtractCSVText()




    

    
    