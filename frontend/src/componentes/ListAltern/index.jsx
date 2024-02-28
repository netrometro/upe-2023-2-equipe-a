import { useState } from 'react';
import * as C from './styles';

export const ListAltern = ({ alternativa }) => {

  return (
    <C.Container>
      <label>{alternativa.texto}</label>
      <label>{alternativa.letra}</label>
    </C.Container>
  );
};
