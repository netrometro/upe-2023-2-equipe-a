import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* Adicionado para centralizar verticalmente */
  height: 100vh;
  width: 100vw;
  background-color: #D6FFFF;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  input {
    padding: 10px;
    margin-right: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
  }

  button {
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
  }

  button:hover {
    background-color: #45a049;
  }
`;

export const ListContainer = styled.div`
  width: 80%; /* Adicionado para definir a largura da lista */
  max-width: 600px; /* Adicionado para limitar a largura da lista */
  margin-bottom: 20px;

  div {
    background-color: #FFF;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  p {
    margin: 0;
    font-size: 18px;
  }
`;
