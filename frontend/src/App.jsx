
import './App.css'
import Questao from './componentes/Questoes/Questao'
import { useState, useEffect } from 'react';
import { axios } from 'axios';


function App() {
  const [listaDeQuestoes, setListaDeQuestoes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3333/listarTodasQuestoes'); // Substitua 'sua_api_aqui' pela URL da sua API
        setListaDeQuestoes(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchData();
  }, []); // O array vazio como segundo argumento garante que o useEffect será executado apenas uma vez, equivalente ao componentDidMount.



  return (
    <>
      <div>
      <h1>Banco de Questões e Formulador de Provas</h1>
      <br/>
      <br/>
      <Questao  {...listaDeQuestoes} />
      </div>
    </>
  )
}

export default App
