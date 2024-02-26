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

  //verifica se o id existe
  if (!id) {
    return response.status(400).json("Id is mandatory");
  }

  //verifica se a questao existe
  const QuestaoExiste = await prisma.todo.findUnique({ where: { id } });
  if (!todoAlreadyExist) {
    return response.status(404).json("Todo not exist");
  }

  //Faz a substituiçao dos valores
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
Routes.delete("/DeletarQuestao/:id", async (request, response) => {
  //pega o id dos parametros da URL
  const { id } = request.params;

  //verifica de o ID veio na URL
  const intId = parseInt(id);
  if (!intId) {
    return response.status(400).json("Id is mandatory");
  }

  //verifica se a questao realmente existe
  const QuestaoAlreadyExist = await prisma.todo.findUnique({
    where: { id: intId },
  });
  if (!todoAlreadyExist) {
    return response.status(404).json("Todo not exist");
  }

  //questao existe, manda dleetar
  await prisma.todo.delete({ where: { id: intId } });

  //retorna ok pra operaçao de deletar a questao pelo id
  return response.status(200).send();
});


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