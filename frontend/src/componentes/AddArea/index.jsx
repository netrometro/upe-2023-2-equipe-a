import { React, useState } from 'react';
import * as C from "./styles";

export const AddArea = () => {
    const [inputText, setInputText] = useState('');

    const handleKeyUp = (e) => {
        if (e.key === 'Enter') {
            // Aqui você pode adicionar a lógica para adicionar uma nova tarefa
            console.log('Adicionar tarefa:', inputText);
            setInputText('');
        }
    };

    return (
        <C.Container>
            <div className="image">+</div>
            <input
                type="text"
                placeholder="Adicione uma alternativa"
                value={inputText}
                onChange={e => setInputText(e.target.value)}
                onKeyUp={handleKeyUp} // Aqui está a correção
            />
        </C.Container>
    );
};
