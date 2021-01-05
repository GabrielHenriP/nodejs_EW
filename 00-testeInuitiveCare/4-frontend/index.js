import express from 'express';
import cors from 'cors';

const server = express();

server.listen(3333);
server.use(cors());
server.use(express.json())

server.get('/',(req,res)=>{
  res.json({ ok: "okkkkkkk"})
})

