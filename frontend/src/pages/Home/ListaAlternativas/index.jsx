import React, { useEffect, useState } from 'react';
import * as C from './styles';
import { Header } from '../../../componentes/Header';
import axios from 'axios';

export const ListaAlternativas = () => {
  const [listaAlternativas, setListaAlternativas] = useState([]);
  const [texto, setTexto] = useState('');
  const [letra, setLetra] = useState('');

  useEffect(() => {
    fetchAlternativas();
  }, []);

  const handleAddAlternativa = async () => {
    try {
      const response = await axios.post('/CriarAlternativa', { texto, letra });
      const novaAlternativa = response.data;
      setListaAlternativas([...listaAlternativas, novaAlternativa]);
      // Limpar os campos de texto e letra após adicionar a alternativa com sucesso
      setTexto('');
      setLetra('');
    } catch (error) {
      console.error('Erro ao criar alternativa:', error);
    }
  };

  const fetchAlternativas = async () => {
    try {
      const response = await axios.get('/listarTodasAlternativas');
      setListaAlternativas(response.data);
    } catch (error) {
      console.error('Erro ao obter lista de alternativas:', error);
    }
  };

  return (
    <C.Container>
      <Header title={'Lista de Alternativas'} />
      <C.InputContainer>
        <input
          type="text"
          placeholder="Texto da Alternativa"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
        />
        <input
          type="text"
          placeholder="Letra da Alternativa"
          value={letra}
          onChange={(e) => setLetra(e.target.value)}
        />
        <button onClick={handleAddAlternativa}>Adicionar Alternativa</button>
      </C.InputContainer>
      <C.ListContainer>
        {listaAlternativas.map((alternativa) => (
          <div key={alternativa.id}>
            <p>{alternativa.texto}</p>
            <p>{alternativa.letra}</p>
          </div>
        ))}
      </C.ListContainer>
    </C.Container>
  );
};
