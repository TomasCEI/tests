
import './App.css'
import { TodoList } from './components/Todolist'

// esta info la traje de la base dedatos
const misTareas=[{
    id:1, tarea: "programar", isCompletada: false
  },{
    id:2, tarea: "estudiar", isCompletada: false
  }];

function App() {

  return (
    <>
    <h1>Mi programa</h1>
      <TodoList listaTareas={misTareas} />
    </>
  )
}

export default App
