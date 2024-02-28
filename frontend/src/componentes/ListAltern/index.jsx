import React from 'react';
import * as C from './styles';

export const ListAltern = ({ listaAlternativas }) => {
  return (
    <C.Container>
      {Array.isArray(listaAlternativas) ? (
        listaAlternativas.map((alternativa, index) => (
          <div key={index}>
            <label>{alternativa.texto}</label>
            <label>{alternativa.letra}</label>
          </div>
        ))
      ) : (
        <p>Nenhuma alternativa disponível.</p>
      )}
    </C.Container>
  );
};
