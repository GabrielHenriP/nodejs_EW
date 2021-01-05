const fs = require('fs'); 
const csv = require('csv-parser');
const encoding = require('encoding-japanese');
const { Buffer } = require('buffer');
const iconv = require('iconv-lite');


let fileBuffer = fs.readFileSync('Relatorio_cadop.csv', 'latin1');
console.log(fileBuffer)
console.log(encoding.detect(fileBuffer))
let fileBuffer2 = fs.readFileSync('file_utf-8.txt');
//console.log(encoding.detect(fileBuffer2))



fs.createReadStream('Relatorio_cadop.csv', {encoding: 'latin1'})
    .on('error', () => {
        // handle error
    })

    .pipe(csv({separator: ';'}, ["Registro ANS","CNPJ","Razão Social","Nome Fantasia","Modalidade","Logradouro","Número","Complemento","Bairro","Cidade","UF","CEP","DDD","Telefone","Fax","Endereço eletrônico","Representante","Cargo Representante","Data Registro ANS"]))
    .on('data', (row) => {
      
      //for(let key in row)
        //console.log(iconv.decode(iconv.encode(row[key], 'ascii'), 'utf-8'));
        console.log(row)
        

      //console.log(iconv.encodingExists('ascii'))
      //console.log(encoding.detect(row))
      //console.log(encoding.detect(fileBuffer))
    })

    .on('end', () => {
        // handle end of CSV
    })

    
    