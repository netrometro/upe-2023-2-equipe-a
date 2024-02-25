//Arquivo para rotas 
const express = require("express");

const Questoes = [{ name: 'Brasil'}];
const Routes = express.Router(); //variavel para chamada do Router

//CRUD -> Rotas do CRUD
//C
Routes.post("/Questoes", (req, res ) => {
  const { name } = req.body?.titulo || {};

  Questoes.push({ name });
  return res.status(201).json(Questoes);
});

//R

//U

//D



//exportando as rotas
module.exports = Routes;