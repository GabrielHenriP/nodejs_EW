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

function checkCurso(req,res,next) {
  if(!req.body.name){
    return res.status(400).json({error: 'nome do curso é obrigatorio'})
  }
  return next()
}

function checkIndex(req, res, next) {
  const curso = cursos[req.params.index];
  if(!curso){
    return res.status(400).json({error: 'curso não existe'})
  }
  return next()
}

//[1]
server.get('/qp', (req,res) => {
  const nome = req.query.nome;
  return res.json({ estudo: `aprendendo ${nome}`})
})

//[2]
server.get('/cursos/:index', checkIndex ,(req,res) => {
  const { index } = req.params;
  return res.json(cursos[index]);
})

server.get('/cursos', (req,res) => {
  return res.json(cursos);
})

server.post('/cursos', checkCurso ,(req,res) => {
  const { name } = req.body;
  cursos.push(name)
  return res.json(cursos)
})

server.put('/cursos/:index', checkIndex ,checkCurso ,(req, res) => {
  const { index } = req.params;
  const { name } = req.body;

  cursos[index] = name;
  return res.json(cursos)
})

server.delete('/cursos/:index', checkIndex ,(req, res) => {
  const { index } = req.params;
  cursos.splice(index, 1);

  return res.json(cursos)
})

server.listen(3000, ()=> console.log('server started at http://localhost:3000'))
