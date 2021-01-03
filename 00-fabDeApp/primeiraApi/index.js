const express = require('express');

const server = express();
server.use(express.json())

//[1] query params = ?nome=nodejs
//[2] route params = /curso/2
//[3] request body = { nome: 'nodejs' , tipo:'backend'}

const cursos = ['Nodejs', 'js', 'react'];


server.use((req, res, next) => {
  console.log(`um middleware global: chamada em ${req.url}`);
  return next();
})

//[1]
server.get('/qp', (req,res) => {
  const nome = req.query.nome;
  return res.json({ estudo: `aprendendo ${nome}`})
})

//[2]
server.get('/cursos/:index', (req,res) => {
  const { index } = req.params;
  return res.json(cursos[index]);
})

server.get('/cursos', (req,res) => {
  return res.json(cursos);
})

server.post('/cursos', (req,res) => {
  const { name } = req.body;
  cursos.push(name)
  return res.json(cursos)
})

server.put('/cursos/:index', (req, res) => {
  const { index } = req.params;
  const { name } = req.body;

  cursos[index] = name;
  return res.json(cursos)
})

server.delete('/cursos/:id', (req, res) => {
  const { index } = req.params;
  cursos.splice(index, 1);

  return res.json(cursos)
})

server.listen(3000, ()=> console.log('server started at http://localhost:3000'))
