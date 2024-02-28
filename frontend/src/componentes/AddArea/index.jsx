import React, { useState } from 'react';
import axios from 'axios';
import * as C from "./styles";

export const AddArea = ({ setListaAlternativas }) => {
    const [inputText, setInputText] = useState('');
    const [letra, setLetra] = useState('');

    const handleAddAlternativa = async () => {
        try {
            const response = await axios.post('/CriarAlternativa', { texto: inputText, letra });
            const novaAlternativa = response.data;
            setListaAlternativas(prevAlternativas => [...prevAlternativas, novaAlternativa]);
            setInputText('');
            setLetra('');
        } catch (error) {
            console.error('Erro ao criar alternativa:', error);
        }
    };

    return (
        <C.Container>
            <C.InputContainer>
                <input
                    type="text"
                    placeholder="Letra da alternativa"
                    value={letra}
                    onChange={e => setLetra(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Adicione uma alternativa"
                    value={inputText}
                    onChange={e => setInputText(e.target.value)}
                    onKeyUp={e => e.key === 'Enter' && handleAddAlternativa()}
                />
                <button onClick={handleAddAlternativa}>Adicionar</button>
            </C.InputContainer>
        </C.Container>
    );
};
