import express from 'express';
import cors from 'cors';

import { csvInObject } from './extractorCSV';

//console.log(csvInObject)
const server = express();

server.listen(3333);
server.use(cors());
server.use(express.json())

server.get('/',(req,res)=>{
  const { wordSearch } = req.body;
  const op = csvInObject.filter( operadora => {
    return operadora['Nome Fantasia'].toLowerCase().indexOf(wordSearch.toLowerCase()) !== -1
  })

  return res.json( op )
})

