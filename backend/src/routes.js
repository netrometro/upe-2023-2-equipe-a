//Arquivo para rotas 
const express = require("express");
const Routes = express.Router(); //variavel para chamada do Router
const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();

//
const Questoes = [{id: 1,
  titulo: 'Qual é a capital do Brasil?',
  alternativas: ['Rio de Janeiro', 'Brasília', 'São Paulo', 'Salvador'],}];
//

//CRUD -> Rotas do CRUD
//C
Routes.post("/AddQuestoes", (request, response) => {
  const { titulo } = request.body?.titulo;
  Questoes.push({ titulo });
  return response.status(201).json(Questoes);
});

//R
Routes.get("/listarQuestoes" , (request, response) => {
  return response.status(200).json(Questoes)
})

//U

//D



//exportando as rotas
module.exports = Routes;