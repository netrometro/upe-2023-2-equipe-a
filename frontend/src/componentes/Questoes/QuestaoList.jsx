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

  return (
    <C.Container>
      <div>
        <h1>Listagem de Questões</h1>
        {isLoading && <p>Carregando...</p>}
        {error && <p>{error}</p>}
        <ul>
          {questoes.map((questao) => (
            <li key={questao.id}>
              <strong>Título:</strong> {questao.titulo} <br />
              <strong>Alternativas:</strong> {questao.alternativas.join(', ')} <br />
              <strong>Resposta:</strong> {questao.resposta} <br />
            </li>
          ))}
        </ul>
        <button onClick={handleRefresh}>Refresh</button>
      </div>
    </C.Container>
  );
};

