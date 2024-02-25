//Arquivo para rotas 
const express = require("express");

const Questoes = [{id: 1,
  titulo: 'Qual é a capital do Brasil?',
  alternativas: ['Rio de Janeiro', 'Brasília', 'São Paulo', 'Salvador'],}];
const Routes = express.Router(); //variavel para chamada do Router

//CRUD -> Rotas do CRUD
//C
Routes.post("/AddQuestoes", (req, res ) => {
  const { titulo } = req.body?.titulo;
  Questoes.push({ titulo });
  return res.status(201).json(Questoes);
});

//R
Routes.get("/listarQuestoes" , (request, response) => {
  return response.status(200).json(Questoes)
})

//U

//D



//exportando as rotas
module.exports = Routes;