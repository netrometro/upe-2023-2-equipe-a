

const Questao = ({ id, titulo, alternativas, resposta }) => {
  return (
    <div className="questao-prova">
      <h3>{titulo}</h3>
      <ul>
        {alternativas.map((alternativa, index) => (
          <li key={index}>{alternativa}</li>
        ))}
      </ul>
    </div>
  );
};

export default Questao;
