import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as C from './styles';
import QuestaoForm from './QuestaoForm';
import jsPDF from 'jspdf';

const QuestaoList = () => {
  const [questoes, setQuestoes] = useState([]);
  const [destinatario, setDestinatario] = useState('');
  const [modalAberto, setModalAberto] = useState(false);
  const [questaoSelecionada, setQuestaoSelecionada] = useState(null);

  const fetchQuestoes = async () => {
    try {
      const response = await axios.get('http://localhost:3333/listarTodasQuestoes');
      const responseData = response.data;

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

  const deleteQuestao = async (questaoID) => {
    try {
      await axios.delete(`http://localhost:3333/DeletarQuestao/${questaoID}`);
      handleRefresh();
    } catch (error) {
      console.error('Erro ao deletar questão:', error);
    }
  };

  const GerarPDFQuestao = async (questaoID) => {
    try {
      const questao = questoes.find((q) => q.id === questaoID);
      if (!questao) {
        console.error('Questão não encontrada.');
        return;
      }

      const doc = new jsPDF();
      doc.text(`Título: ${questao.titulo}`, 10, 10);
      doc.text(`Alternativas: ${questao.Alternativas}`, 10, 20);
      doc.text(`Resposta: ${questao.resposta}`, 10, 30);
      doc.save('questao.pdf');
    } catch (error) {
      console.error('Erro ao gerar PDF da questão:', error);
    }
  };

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
    <C.Container>
      <h1>Listagem de Questões</h1>
      <ul>
        {questoes.map((questao) => (
          <li key={questao.id}>
            <strong>Título:</strong> {questao.titulo} <br />
            <strong>Alternativas:</strong> {questao.Alternativas} <br />
            <strong>Resposta:</strong> {questao.resposta} <br />
            <button onClick={() => deleteQuestao(questao.id)}>
              Deletar Questão
            </button>
            <button onClick={() => handleCompartilhar(questao.id)}>Compartilhar Questão</button>
            <button onClick={() => GerarPDFQuestao(questao.id)}>
              Gerar PDF
            </button>
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
          <br /><br />
        </div>
      )}
      <button onClick={handleRefresh}>Refresh</button>
      <QuestaoForm />
    </C.Container>
  );
};

export default QuestaoList;
