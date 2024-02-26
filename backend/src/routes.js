//Arquivo para rotas 
const express = require("express");
const Routes = express.Router(); //variavel para chamada do Router
const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();

//CRUD -> Rotas do CRUD
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
  })
  return response.status(201).json(novaQuestao);
});

//R
Routes.get("/listarTodasQuestoes" , async (request, response) => {

  const listaTodasQestoes = await prisma.questao.findMany();

  return response.status(200).json(listaTodasQestoes)
})

//U

//D



//exportando as rotas
module.exports = Routes;