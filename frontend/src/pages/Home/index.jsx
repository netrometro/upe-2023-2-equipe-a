import React, { useState, useEffect } from "react";
import axios from "axios";
import { QuestaoList } from "../../componentes/Questoes/QuestaoList";
import { Header } from "../../componentes/Header";
import * as C from "./styles"; // Importa os componentes estilizados do arquivo styles.js

export function Home() {
  const [questoes, setQuestoes] = useState([]);

  useEffect(() => {
    // Carregar questões ao montar o componente
    fetchQuestoes();
  }, []);

  const fetchQuestoes = async () => {
    try {
      const response = await axios.get("/listarTodasQuestoes");
      setQuestoes(response.data || []); // Define um valor padrão caso a resposta seja vazia ou falsa
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
      {Array.isArray(questoes) && questoes.map((questao) => (
        <C.QuestaoContainer key={questao.id}> {/* Usamos o componente estilizado QuestaoContainer */}
          <QuestaoList questao={questao} />
          <C.DeleteButton onClick={() => handleDeleteQuestao(questao.id)}>Deletar</C.DeleteButton> {/* Usamos o componente estilizado DeleteButton */}
        </C.QuestaoContainer>
      ))}
    </C.Container>
  );
}
