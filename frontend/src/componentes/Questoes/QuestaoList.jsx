import { useEffect, useState } from 'react';
import axios from 'axios';
import * as C from './styles';

export const QuestaoList = () => {
  const [questoes, setQuestoes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchQuestoes = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.get('http://localhost:3333/listarTodasQuestoes');
      
      if (response && response.data && Array.isArray(response.data)) {
        setQuestoes(response.data);
      } else {
        setError('Erro: A resposta da API não retornou um array válido.');
      }
    } catch (error) {
      setError('Erro ao buscar questões: ' + error.message);
    } finally {
      setIsLoading(false);
    }
  };

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

