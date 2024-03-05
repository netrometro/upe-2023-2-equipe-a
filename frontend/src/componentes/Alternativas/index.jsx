import * as C from './styles';

export const Alternativa = ({ texto, letra }) => {
  return (
    <C.Container>
      <div>
        <p>{texto}</p>
        <p>{letra}</p>
      </div>
    </C.Container>
  );
};
