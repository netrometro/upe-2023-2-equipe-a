import styled from "styled-components";

export const Container = styled.div`
  padding: 5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f5f5f5;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
  max-width: 600px; 
  margin: 10px auto; 
  
  h1 {
    font-size: 1.5rem; 
    margin-bottom: 1rem;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    margin-bottom: 1rem; 
  }
  
  strong {
    margin-right: 0.5rem;
  }
  
  p {
    color: red;
    font-weight: bold;
    margin-bottom: 5px
  }
  
  button {
    padding: 0.5rem 1rem; 
    background-color: #007bff; 
    color: #fff;
    border: none; 
    border-radius: 5px;
    cursor: pointer; 
    transition: background-color 0.3s ease; 
  }
  
  button:hover {
    background-color: #0056b3; 
  }
`;
