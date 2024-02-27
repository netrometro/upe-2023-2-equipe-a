import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

// Componente QuestaoList
export const QuestaoContainer = styled.div`
  margin-bottom: 1rem; /* Adiciona espaçamento inferior */
  border: 1px solid #ccc; /* Adiciona uma borda sólida cinza */
  border-radius: 5px; /* Adiciona bordas arredondadas */
  padding: 1rem; /* Adiciona espaçamento interno */
  background-color: #f5f5f5; /* Adiciona uma cor de fundo */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Adiciona uma sombra leve */
`;

// Componente Botão Deletar
export const DeleteButton = styled.button`
  margin-left: 1rem; /* Adiciona espaçamento à esquerda */
  padding: 0.5rem 1rem; /* Adiciona espaçamento interno */
  background-color: #dc3545; /* Cor de fundo do botão */
  color: #fff; /* Cor do texto do botão */
  border: none; /* Remove a borda */
  border-radius: 5px; /* Adiciona bordas arredondadas */
  cursor: pointer; /* Altera o cursor para indicar que é clicável */
  transition: background-color 0.3s ease; /* Adiciona uma transição suave */

  &:hover {
    background-color: #c82333; /* Cor de fundo do botão ao passar o mouse */
  }
`;
