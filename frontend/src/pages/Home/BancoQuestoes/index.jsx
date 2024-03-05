import React from "react";
import { Header } from "../../../componentes/Header";
import * as C from "./styles";
import QuestaoForm from "../../../componentes/Questoes/QuestaoForm";
import { QuestaoList } from "../../../componentes/Questoes/QuestaoList";

export function BancoQuestoes() {

    return (
      <>
        <Header />
        <C.MacroContainer>
          <C.BankContainer>
            <h1>Banco de Questões e Formulador de Provas</h1>
            <br/>
            <QuestaoForm />
            <br/>
            <QuestaoList />
          </C.BankContainer>
        </C.MacroContainer>
        
      </>
    )
  
  }