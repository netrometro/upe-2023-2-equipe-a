import { useState } from 'react';
import * as C from './styles';

export const ListAltern = ({ alternativa }) => {
  const [isChecked, setIsChecked] = useState(alternativa.selecionada);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <C.Container selecionada={isChecked}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
      />
      <label>{alternativa.texto}</label>
    </C.Container>
  );
};
