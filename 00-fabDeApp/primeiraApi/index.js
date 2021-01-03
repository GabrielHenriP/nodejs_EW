const express = require('express');

const server = express();

//[1] query params = ?nome=nodejs
//[2] route params = /curso/2
//[3] request body = { nome: 'nodejs' , tipo:'backend'}

[1]
server.get('/qp', (req,res) => {
  const nome = req.query.nome;
  return res.json({ estudo: `aprendendo ${nome}`})
})

[2]
server.get('/rp/:id', (req,res) => {
  const id = req.params.id;
  return res.json({ estudo: `${id} da requisição`})
})

server.listen(3000, ()=> console.log('server started at http://localhost:3000'))
