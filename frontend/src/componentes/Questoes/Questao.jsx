

const Questao = ({ id, titulo, alternativas, resposta }) => {

  
  return (
    <div className="questao-prova">
      <h3>Questao Numero {id}:</h3>
      <h3>{titulo}</h3>
      <ul>
        {alternativas.map((alternativa, index) => (
          <li key={index}>{alternativa}</li>
        ))}
      </ul>
      <h5>{resposta}</h5>
    </div>
  );
};

export default Questao;
