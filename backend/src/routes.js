const express = require("express");
const Routes = express.Router(); // variável para chamada do Router
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// CRUD Questoes -> Rotas do CRUD para Questoes
// C
Routes.post("/CriarQuestoes", async (request, response) => {
  const { titulo, Alternativas, resposta } = request.body;

  try {
    const novaQuestao = await prisma.questao.create({
      data: {
        titulo: titulo,
        Alternativas: Alternativas,
        resposta: resposta,
      },
    });
    return response.status(201).json(novaQuestao);
  } catch (error) {
    console.error("Erro ao criar questão:", error);
    return response.status(500).json({ error: "Erro interno do servidor" });
  }
});

// R
Routes.get("/listarTodasQuestoes", async (request, response) => {
  try {
    const listaTodasQestoes = await prisma.questao.findMany();
    return response.status(200).json(listaTodasQestoes);
  } catch (error) {
    console.error("Erro ao listar questões:", error);
    return response.status(500).json({ error: "Erro interno do servidor" });
  }
});

// U
Routes.put("/UpdateQuestao", async (request, response) => {
  const { id, titulo, Alternativas, resposta } = request.body;

  try {
    const intId = parseInt(id);

    if (!intId) {
      return response.status(400).json("Id é obrigatório");
    }

    const QuestaoExiste = await prisma.questao.findUnique({
      where: { id: intId },
    });

    if (!QuestaoExiste) {
      return response.status(404).json("Questão não existe");
    }

    const update = await prisma.questao.update({
      where: { id: intId },
      data: {
        titulo: titulo,
        Alternativas: Alternativas,
        resposta: resposta,
      },
    });

    return response.status(200).json(update);
  } catch (error) {
    console.error("Erro ao atualizar questão:", error);
    return response.status(500).json({ error: "Erro interno do servidor" });
  }
});

// D
Routes.delete("/DeletarQuestao/:id", async (request, response) => {
  const { id } = request.params;

  try {
    const intId = parseInt(id);

    if (!intId) {
      return response.status(400).json("Id é obrigatório");
    }

    const QuestaoExiste = await prisma.questao.findUnique({
      where: { id: intId },
    });

    if (!QuestaoExiste) {
      return response.status(404).json("Questão não existe");
    }

    await prisma.questao.delete({ where: { id: intId } });

    return response.status(200).send();
  } catch (error) {
    console.error("Erro ao deletar questão:", error);
    return response.status(500).json({ error: "Erro interno do servidor" });
  }
});

// CRUD Alternativas -> Rotas do CRUD para Alternativas
// C
Routes.post("/CriarAlternativa", async (request, response) => {
  const { texto, letras } = request.body;

  try {
    const novaAlternativa = await prisma.alternativa.create({
      data: {
        texto: texto,
        letras: letras,
      },
    });
    return response.status(201).json(novaAlternativa);
  } catch (error) {
    console.error("Erro ao criar alternativa:", error);
    return response.status(500).json({ error: "Erro interno do servidor" });
  }
});

// R
Routes.get("/listarTodasAlternativas", async (request, response) => {
  try {
    const listaTodasAlternativas = await prisma.alternativa.findMany();
    return response.status(200).json(listaTodasAlternativas);
  } catch (error) {
    console.error("Erro ao listar alternativas:", error);
    return response.status(500).json({ error: "Erro interno do servidor" });
  }
});

// CRUD Usuario -> Rotas do CRUD para Usuario
// C
Routes.post("/CriarUsuario", async (request, response) => {
  const { nome, email } = request.body;

  try {
    const novaUser = await prisma.user.create({
      data: {
        nome: nome,
        email: email,
      },
    });
    return response.status(201).json(novaUser);
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    return response.status(500).json({ error: "Erro interno do servidor" });
  }
});

// R
Routes.get("/listarTodosUser", async (request, response) => {
  try {
    const listaTodosUser = await prisma.user.findMany();
    return response.status(200).json(listaTodosUser);
  } catch (error) {
    console.error("Erro ao listar usuários:", error);
    return response.status(500).json({ error: "Erro interno do servidor" });
  }
});

module.exports = Routes; // exportando as rotas
