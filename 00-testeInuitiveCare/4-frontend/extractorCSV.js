import fs from 'fs';
import csv from 'csv-parser';
import utf8 from 'utf8';
import encoding from 'encoding-japanese';
import { Buffer } from 'buffer';


let fileBuffer = fs.readFileSync('Relatorio_cadop.csv');
console.log(encoding.detect(fileBuffer))
const vetorBuffer = Buffer.from(fileBuffer)
console.log(vetorBuffer.slice(26,27))

/*
const results = [];
fs.createReadStream('Relatorio_cadop.csv',{ encoding: 'utf8', fd: null })
.pipe(csv( { separator: ';' } ,["Registro ANS","CNPJ","Razão Social","Nome Fantasia","Modalidade","Logradouro","Número","Complemento","Bairro","Cidade","UF","CEP","DDD","Telefone","Fax","Endereço eletrônico","Representante","Cargo Representante","Data Registro ANS"] ))
  .on('data', (data) => results.push(data))
  .on('end', () => {
    console.log(results)
    
  });*/

/*fs.createReadStream('Relatorio_cadop.csv',{ encoding: 'utf8', fd: null }).on('data', function(chunk) { 
    console.log(chunk)
  });*/

 /* fs.readFile('Relatorio_cadop.csv', 'utf8', function (err, data) {
    if (err) throw err;
    console.log(data.toString());
});*/

/*
try {
  const data = fs.readFileSync('Relatorio_cadop.csv', 'utf8')
  console.log(data)
} catch (err) {
  console.error(err)
}*/



  
