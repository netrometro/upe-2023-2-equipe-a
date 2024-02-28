import QuestaoForm from './QuestaoForm'
import QuestaoList from './QuestaoList'

function QuestaoHome() {
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

export default QuestaoHome;