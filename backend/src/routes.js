//Arquivo para rotas 
const express = require("express");
const Routes = express.Router(); //variavel para chamada do Router
const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();


//CRUD Questoes -> Rotas do CRUD para Questoes
//C
Routes.post("/CriarQuestoes", async (request, response) => {
  const { titulo ,Alternativas,resposta  } = request.body;
  //Questoes.push({ titulo });
  const novaQuestao = await prisma.questao.create({
    data: {
      titulo: titulo,
      Alternativas: Alternativas,
      resposta: resposta,
    }
  });
  return response.status(201).json(novaQuestao);
});
//R
Routes.get("/listarTodasQuestoes" , async (request, response) => {

  const listaTodasQestoes = await prisma.questao.findMany();

  return response.status(200).json(listaTodasQestoes);
})
//U
Routes.put("/UpdateQuestoes", async (request, response) => {

  const {id, titulo, Alternativas, resposta} = request.body;

  const update = await prisma.questao.put({
    where: {
      id,
    },
     data:{
      titulo: titulo,
      Alternativas: Alternativas,
      resposta: resposta,
     },
  });

  return response.status(200).json(update);

})
//D



//CRUD Alternativas -> Rotas do CRUD para Alternativas
//C
//R
//U
//D


//CRUD Usuario -> Rotas do CRUD para Usuario
//C
//R
//U
//D


//exportando as rotas
module.exports = Routes;