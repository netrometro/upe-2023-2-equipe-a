import { useEffect, useState } from 'react';
import * as C from './styles';
import { AddArea } from '../../../componentes/AddArea';
import { ListAltern } from '../../../componentes/ListAltern';
import { Header } from '../../../componentes/Header';
import axios from 'axios';

export const ListaAlternativas = () => {
  const [listaAlternativas, setListaAlternativas] = useState([]);

  useEffect(() => {
    fetchAlternativas();
  }, []);

  const fetchAlternativas = async () => {
    try {
      const response = await axios.get('/listarTodasAlternativas');
      setListaAlternativas(response.data);
    } catch (error) {
      console.error('Erro ao obter lista de alternativas:', error);
    }
  };

  const handleAddAlternativa = async (texto, letras) => {
    try {
      const response = await axios.post('/CriarAlternativa', { texto, letras });
      const novaAlternativa = response.data;
      setListaAlternativas([...listaAlternativas, novaAlternativa]);
    } catch (error) {
      console.error('Erro ao criar alternativa:', error);
    }
  };

  return (
    <C.Container>
      <Header title={'Banco de Questões'} />
      <C.ListContainer>
        <C.Area>
          <C.ListHeader>Lista de Alternativas</C.ListHeader>

          <AddArea onAdd={handleAddAlternativa} />

          {listaAlternativas.map((item, index) => (
            <ListAltern key={index} alternativa={item} />
          ))}
        </C.Area>
      </C.ListContainer>
    </C.Container>
  );
};
