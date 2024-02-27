import { useState } from 'react';
import axios from 'axios';

const QuestaoForm = ({ onQuestaoSubmit }) => {
  const [titulo, setTitulo] = useState('');
  const [alternativas, setAlternativas] = useState('');
  const [resposta, setResposta] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!titulo || !alternativas || !resposta) {
      console.error('Por favor, preencha todos os campos');
      return;
    }

    try {
      const novaQuestao = {
        titulo,
        alternativas: alternativas.split(',').map((alt) => alt.trim()), 
        resposta,
      };

      await axios.post('http://localhost:3333//CriarQuestoes', novaQuestao);

      setTitulo('');
      setAlternativas('');
      setResposta('');

      onQuestaoSubmit();
    } catch (error) {
      console.error('Erro ao criar questão:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Criar Nova Questão</h2>
      <label>
        Título:
        <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
      </label>
      <br />
      <label>
        Alternativas (separadas por vírgula):
        <input type="text" value={alternativas} onChange={(e) => setAlternativas(e.target.value)} />
      </label>
      <br />
      <label>
        Resposta:
        <input type="text" value={resposta} onChange={(e) => setResposta(e.target.value)} />
      </label>
      <br />
      <button type="submit">Criar Questão</button>
    </form>
  );
};

export default QuestaoForm;
