
import './App.css'
import QuestaoForm from './componentes/Questoes/QuestaoForm'
import QuestaoList from './componentes/Questoes/QuestaoList'

function App() {
  return (
    <>
      <div>
      <h1>Banco de Questões e Formulador de Provas</h1>
      <br/>
      <QuestaoForm />
      <br/>
      <QuestaoList />
      </div>
    </>
  )
}

export default App
