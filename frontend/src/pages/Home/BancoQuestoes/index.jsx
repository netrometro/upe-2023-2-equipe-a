import React, { useState, useEffect } from "react";
import axios from "axios";
import { Header } from "../../../componentes/Header";
import { QuestaoList } from "../../../componentes/Questoes/QuestaoList";
import * as C from "./styles";

export function BancoQuestoes() {
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
        <Header title={"Banco de Questões"}/>
        <QuestaoList />
      </C.Container>
    )
  }