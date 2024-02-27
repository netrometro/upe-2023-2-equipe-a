import * as C from './styles';

export const Alternativa = ({ texto, letras }) => {
    return (
        <C.Container>
            <div>
                <p>{letras}</p>
                <p>{texto}</p>
            </div>
        </C.Container>
    );
}