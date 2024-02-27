
import { useEffect, useState } from 'react';
import axios from 'axios';

const QuestaoList = () => {
  const [questoes, setQuestoes] = useState([]);

  const fetchQuestoes = async () => {
    try {
      const response = await axios.get('http://localhost:3333/listarTodasQuestoes');
      setQuestoes(response.data); 
    } catch (error) {
      console.error('Erro ao buscar questões:', error);
    }
  };

  useEffect(() => {
    fetchQuestoes();
  }, []);

  const handleRefresh = () => {
    fetchQuestoes();
  };

  return (
    <div>
      <h1>Listagem de Questões</h1>
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
  );
};

export default QuestaoList;
