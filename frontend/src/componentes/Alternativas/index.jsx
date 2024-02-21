import * as C from './styles';

export const Alternativa = ({ id, texto, letras }) => {
    return (
        <C.Container>
            <div>
                <p>{letras}</p>
                <p>{texto}</p>
            </div>
        </C.Container>
    );
}