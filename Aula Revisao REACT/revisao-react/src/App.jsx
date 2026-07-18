import { useState } from 'react'
import Header from './components/Header'
import CardUsuario from './components/CardUsuario'

function App() {
  const nomeDoUsuario = 'React +Prati'
  const [concluidas, setConcluidas] = useState(0)

  // return (
  //   <div className="App">
  //     <h1>Bem vindo ao {nomeDoUsuario}</h1>
  //     <p>Este é o ponto de partida
  //     </p>
  //   </div>
  // )
  return (
    <>
    <Header />

    <CardUsuario nome="Gilmar" curso="React" />
    <CardUsuario nome="Paulo" curso="JavaScript" />
    <CardUsuario nome="Guilherme" curso="Full Stack" />

    <p>Tarefas concluídas: {concluidas}</p>
    <button onClick={() => setConcluidas(concluidas + 1)}>Concluir Tarefa</button>
  
    </>
  )
}
  
export default App
