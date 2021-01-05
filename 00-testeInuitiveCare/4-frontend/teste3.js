const fs = require('fs');

const fileBuffer = fs.readFileSync('Relatorio_cadop.csv', 'latin1');

const boxText = fileBuffer.split('\n').map( bloco => bloco.split("\r").filter(Boolean))
let text = boxText.map( text => text[0])

const header = text[0].split(';').map(string => string.slice(1, string.length-1))
console.log(header)
const data = text.slice(1,text.length-1)//vetor de string

//console.log(data.slice(data.length-100,data.length-1))

data.map( string => {
  
  let temp = string.split(';').map(string => string.slice(1, string.length-1))
  let obj = {}
  for(let i=0; i< 19; i++){
    //console.log(header[i])
    obj[header[i]] = temp[i]
  }
  console.log(obj)
  
})

 /*
let temp = string.split(';')
  let obj = {}
  for(let i=0; i< 19; i++){
    //console.log(header[i])
    obj[header[i]] = temp[i]
  }
  console.log(obj)
 }*/
 

