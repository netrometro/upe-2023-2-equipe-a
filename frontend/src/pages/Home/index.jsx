// ListaAlternativas.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as C from './styles';
import { Header } from '../../../componentes/Header';
import { ListAltern } from '../../../componentes/ListAltern';
import { AddArea } from '../../../componentes/AddArea';

export const ListaAlternativas = () => {
  const [listaAlternativas, setListaAlternativas] = useState([]); // Inicializa como um array vazio
  const [texto, setTexto] = useState('');
  const [letra, setLetra] = useState('');

  useEffect(() => {
    fetchAlternativas();
  }, []);

  const fetchAlternativas = async () => {
    try {
      const response = await axios.get('/listarTodasAlternativas');
      // Verifica se response.data é um array antes de definir
      if (Array.isArray(response.data)) {
        setListaAlternativas(response.data);
      } else {
        console.error('Os dados recebidos não são um array:', response.data);
      }
    } catch (error) {
      console.error('Erro ao obter lista de alternativas:', error);
    }
  };

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

  return (
    <C.Container>
      <Header title={'Lista de Alternativas'} />
      <AddArea setListaAlternativas={setListaAlternativas} />
      <ListAltern listaAlternativas={listaAlternativas} />
    </C.Container>
  );
};
