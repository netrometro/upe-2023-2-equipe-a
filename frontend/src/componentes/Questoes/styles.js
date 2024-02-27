import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem; /* Adicione espaçamento interno */
  border: 1px solid #ccc; /* Adicione uma borda sólida cinza */
  border-radius: 5px; /* Adicione bordas arredondadas */
  background-color: #f5f5f5; /* Adicione uma cor de fundo */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Adicione uma sombra leve */
  max-width: 600px; /* Defina a largura máxima */
  margin: 0 auto; /* Centralize horizontalmente */
  
  h1 {
    font-size: 1.5rem; /* Tamanho da fonte para o título */
    margin-bottom: 1rem; /* Adicione espaçamento inferior */
  }
  
  ul {
    list-style-type: none; /* Remova os marcadores de lista */
    padding: 0; /* Remova o espaçamento interno */
  }
  
  li {
    margin-bottom: 1rem; /* Adicione espaçamento inferior */
  }
  
  strong {
    margin-right: 0.5rem; /* Adicione espaçamento à direita para o texto em negrito */
  }
  
  p {
    color: red; /* Cor do texto de erro */
    font-weight: bold; /* Texto em negrito para mensagens de erro */
  }
  
  button {
    padding: 0.5rem 1rem; /* Adicione espaçamento interno */
    background-color: #007bff; /* Cor de fundo do botão */
    color: #fff; /* Cor do texto do botão */
    border: none; /* Remova a borda */
    border-radius: 5px; /* Adicione bordas arredondadas */
    cursor: pointer; /* Altere o cursor para indicar que é clicável */
    transition: background-color 0.3s ease; /* Adicione uma transição suave */
  }
  
  button:hover {
    background-color: #0056b3; /* Cor de fundo do botão ao passar o mouse */
  }
`;
