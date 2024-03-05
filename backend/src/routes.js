//Arquivo para rotas 
const express = require("express");
const Routes = express.Router(); //variavel para chamada do Router
const {PrismaClient} = require("@prisma/client");
const { response } = require("express");
const prisma = new PrismaClient();



//CRUD Questoes -> Rotas do CRUD para Questoes
//C
Routes.post("/CriarQuestoes", async (request, response) => {
  const { titulo, Alternativas,resposta  } = request.body;
  //Questoes.push({ titulo });
  const novaQuestao = await prisma.questao.create({
    data: {
      titulo: titulo,
      Alternativas: Alternativas,
      resposta: resposta
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
Routes.put("/UpdateQuestao", async (request, response) => {
  //, titulo, Alternativas, resposta
  const {id, titulo, Alternativas, resposta} = request.body;

  const intId = parseInt(id);

  //verifica se o id existe
  if (!intId) {
    return response.status(400).json("Id é obrigatorio");
  }

  //verifica se a questao existe
  const QuestaoExiste = await prisma.questao.findUnique({ where: { id: intId } });
  if (!QuestaoExiste) {
    return response.status(404).json("Questao nao exite");
  }
  
  //Faz a substituiçao dos valores
  const update = await prisma.questao.update({
    where: { 
      id: intId
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
    return response.status(400).json("Id é obrigatorio");
  }
  //verifica se a questao realmente existe
  const QuestaoExiste = await prisma.questao.findUnique({
    where: { id: intId },
  });
  if (!QuestaoExiste) {
    return response.status(404).json("Questao nao existe");
  }
  //questao existe, manda dleetar
  await prisma.questao.delete({ where: { id: intId } });
  //retorna ok pra operaçao de deletar a questao pelo id
  return response.status(200).send();
});


//CRUD Alternativas -> Rotas do CRUD para Alternativas
//C
Routes.post("/CriarAlternativa", async (request, response) => {
  const { texto , letras  } = request.body;
  const novaAlternativa = await prisma.alternativa.create({
    data: {
      texto: texto,
      letras: letras
    }
  });
  return response.status(201).json(novaAlternativa);
});
//R
Routes.get("/listarTodasAlternativas" , async (request, response) => {

  const listaTodasAlternativas = await prisma.alternativa.findMany();

  return response.status(200).json(listaTodasAlternativas);
})
//U
//D


//CRUD Usuario -> Rotas do CRUD para Usuario
//C
Routes.post("/CriarUsuario", async (request, response) => {
  const { nome , email  } = request.body;
  const novaUser = await prisma.user.create({
    data: {
      nome: nome,
      email: email
    }
  });
  return response.status(201).json(novaUser);
});
//R
Routes.get("/listarTodosUser" , async (request, response) => {

  const listaTodosUser = await prisma.user.findMany();

  return response.status(200).json(listaTodosUser);
})
//U
//D


//exportando as rotas
module.exports = Routes;