import React, { useEffect, useState } from 'react';
import * as C from './styles';
import { AddArea } from '../../../componentes/AddArea';
import { Header } from '../../../componentes/Header';
import axios from 'axios';
import { ListAltern } from '../../../componentes/ListAltern';

export const ListaAlternativas = () => {
  const [listaAlternativas, setListaAlternativas] = useState([]);

  useEffect(() => {
    fetchAlternativas();
  }, []);

  const handleAddAlternativa = async (texto, letra) => {
    try {
      const response = await axios.post('/CriarAlternativa', { texto, letra });
      const novaAlternativa = response.data;
      setListaAlternativas([...listaAlternativas, novaAlternativa]);
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
      <C.ListContainer>
        <C.Area>
          <C.ListHeader>Lista de Alternativas</C.ListHeader>

          <AddArea onAdd={handleAddAlternativa} />

          {listaAlternativas.map((alternativa, index) => (
            <ListAltern key={index} alternativa={alternativa} />
          ))}
        </C.Area>
      </C.ListContainer>
    </C.Container>
  );
};
