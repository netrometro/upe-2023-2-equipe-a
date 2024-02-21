//import { useState } from 'react'
import './App.css'
import Questao from './componentes/Questao'

function App() {

  const questao = { //criado para testar o frontend enquanto nao da pra puxar do banco de dados
    id: 1,
    titulo: 'Qual é a capital do Brasil?',
    alternativas: ['Rio de Janeiro', 'Brasília', 'São Paulo', 'Salvador'],
  };

  return (
    <>
      <div>
      <h1>Projeto teste Gerencia de Configuraçao</h1>
      <Questao  {...questao} />
      </div>
    </>
  )
}

export default App
