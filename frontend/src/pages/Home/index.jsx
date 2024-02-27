import React, { useState, useEffect } from "react";
import axios from "axios";
import { QuestaoList } from "../../componentes/Questao/QuestaoList";
import * as C from './styles';
import { Header } from "../../componentes/Header";

export function Home() {
  const [questoes, setQuestoes] = useState([]);

  useEffect(() => {
    // Carregar questões ao montar o componente
    fetchQuestoes();
  }, []);

  const fetchQuestoes = async () => {
    try {
      const response = await axios.get("/listarTodasQuestoes");
      setQuestoes(response.data);
    } catch (error) {
      console.error("Erro ao buscar questões:", error);
    }
  };

  const handleDeleteQuestao = async (id) => {
    try {
      await axios.delete(`/DeletarQuestao/${id}`);
      fetchQuestoes(); // Atualiza a lista de questões após deletar
    } catch (error) {
      console.error("Erro ao deletar questão:", error);
    }
  };

  return (
    <C.Container>
      <Header />
      {questoes.map((questao) => (
        <div key={questao.id}>
          <QuestaoList />
          <button onClick={() => handleDeleteQuestao(questao.id)}>Deletar</button>
        </div>
      ))}
    </C.Container>
  );
}
