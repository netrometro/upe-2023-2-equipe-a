
import { useEffect, useState } from 'react';
import axios from 'axios';

const QuestaoList = () => {
  const [questoes, setQuestoes] = useState([]);

  const fetchQuestoes = async () => {
    try {
      const response = await axios.get('http://localhost:3333/listarTodasQuestoes');
      
      // Verificar se a resposta é uma string e tentar convertê-la para um array
      const responseData = typeof response.data === 'string' ? JSON.parse(response.data) : response.data;
  
      // Verificar se responseData é um array
      if (Array.isArray(responseData)) {
        setQuestoes(responseData);
      } else {
        console.error('Erro: A resposta da API não é um array.', responseData);
      }
    } catch (error) {
      console.error('Erro ao buscar questões:', error);
    }
  };
  /*
  const fetchQuestoes = async () => {
    try {
      //http://localhost:3333/
      const response = await axios.get('listarTodasQuestoes');
      console.log('Tipo da resposta:', typeof response.data);
      setQuestoes(response.data); 
    } catch (error) {
      console.error('Erro ao buscar questões:', error);
    }
  };
  */
  useEffect(() => {
    fetchQuestoes();
  }, []);

  const handleRefresh = () => {
    fetchQuestoes();
  };

  //Funçao deletar questao
  async function deleteQuestao(questaoID) {
    const response = await axios.delete(
      `http://localhost:3333/DeletarQuestao/${questaoID}`
    );
    handleRefresh();
  }

    async function CompartilharQuestao(questaoID) {
      //funçao criada somente para visualizaçao do botao sem quebrar o sistema
      await handleRefresh();
    }

    async function GerarPDFQuestao(questaoID) {
      //funçao criada somente para visualizaçao do botao sem quebrar o sistema
      await handleRefresh();
    }

  return (
    <div>
      <h1>Listagem de Questões</h1>
      <ul>
        {questoes.map((questao) => (
          <>
            <li key={questao.id}>
              <strong>Título:</strong> {questao.titulo} <br />
              <strong>Alternativas:</strong> {questao.Alternativas} <br />
              <strong>Resposta:</strong> {questao.resposta} <br />
            </li>
            <button onClick={() => deleteQuestao(questao.id)}>
              Deletar Questao
            </button>
            <button onClick={() => CompartilharQuestao(questao.id)}>
            Compartilhar Questao
            </button>
            <button onClick={() => GerarPDFQuestao(questao.id)}>
            Gerar PDF
            </button>
          </>
        ))}
      </ul>
      <button onClick={handleRefresh}>Refresh</button>
    </div>
  );
};

export default QuestaoList;
