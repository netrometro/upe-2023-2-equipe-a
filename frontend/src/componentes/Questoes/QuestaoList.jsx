import React, { useEffect, useState } from 'react';
import axios from 'axios';
import QuestaoForm from './QuestaoForm';
import { QuestaoPDF } from './QuestaoPDF';

const QuestaoList = () => {
  const [questoes, setQuestoes] = useState([]);
  const [destinatario, setDestinatario] = useState('');
  const [modalAberto, setModalAberto] = useState(false);
  const [questaoSelecionada, setQuestaoSelecionada] = useState(null);

  const fetchQuestoes = async () => {
    try {
      const response = await axios.get('http://localhost:3333/listarTodasQuestoes');
      const responseData = typeof response.data === 'string' ? JSON.parse(response.data) : response.data;
  
      if (Array.isArray(responseData)) {
        setQuestoes(responseData);
      } else {
        console.error('Erro: A resposta da API não é um array.', responseData);
      }
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

  async function deleteQuestao(questaoID) {
    await axios.delete(`http://localhost:3333/DeletarQuestao/${questaoID}`);
    handleRefresh();
  }

  const handleCompartilhar = (questaoID) => {
    const questao = questoes.find((q) => q.id === questaoID);
    setQuestaoSelecionada(questao);
    setModalAberto(true);
  };

  const handleEnviarEmail = async () => {
    try {
      await axios.post('http://localhost:3333/enviar-email', {
        destinatario,
        corpo: `Detalhes da Questão:
        Título: ${questaoSelecionada.titulo}
        Alternativas: ${questaoSelecionada.Alternativas}
        Resposta: ${questaoSelecionada.resposta}`,
      });

      setModalAberto(false);
      setDestinatario('');
      setQuestaoSelecionada(null);
    } catch (error) {
      console.error('Erro ao enviar o e-mail:', error);
    }
  };

  return (
    <div>
      <h1>Listagem de Questões</h1>
      <ul>
        {questoes.map((questao) => (
          <li key={questao.id}>
            <strong>Título:</strong> {questao.titulo} <br />
            <strong>Alternativas:</strong> {questao.Alternativas} <br />
            <strong>Resposta:</strong> {questao.resposta} <br />
            <button onClick={() => deleteQuestao(questao.id)}>Deletar Questao</button>
            <button onClick={() => handleCompartilhar(questao.id)}>Compartilhar Questao</button>
            <QuestaoPDF destinatario={destinatario} setDestinatario={setDestinatario} /> {/* Componente MyComponent */}
          </li>
        ))}
      </ul>
      {modalAberto && (
        <div>
          <br />
          <h3>Confirmação de Envio de Email</h3>
          <input
            type="email"
            placeholder="Digite o e-mail do destinatário"
            value={destinatario}
            onChange={(e) => setDestinatario(e.target.value)}
          />
          <button onClick={handleEnviarEmail}>Enviar E-mail</button>
          <button onClick={() => setModalAberto(false)}>Cancelar</button>
          <br />
          <br />
        </div>
      )}
      <button onClick={handleRefresh}>Refresh</button>
      <QuestaoForm/>
    </div>
  );
};

export default QuestaoList;
