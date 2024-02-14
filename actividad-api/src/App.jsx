import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Personajes } from './components/Personajes'
import  Lugares  from './components/Lugares'
import { Episodios } from './components/Episodios'

function App() {
  const [count, setCount] = useState(0);
  const [paginaActual, setPaginaActual] = useState("personajes");
  /**
      // imprimir la sección HOME
      // imprimir la sección Contacto
      // imprimir la sección acerca De 
   **/

  return (
    <>
      <nav>
          <button className={`item ${paginaActual==="personajes" ? "active":""}`} onClick={()=> setPaginaActual("personajes")}>
            Personajes
          </button>
          <button className={ paginaActual==="lugares" ? "active":""} onClick={()=> setPaginaActual("lugares")}>
            Lugares
          </button>
          <button className={ paginaActual==="episodios" ? "active":""} onClick={()=> setPaginaActual("episodios")}>
            Episodios
          </button>
      </nav>

      {paginaActual ==="personajes" && <Personajes />}
      {paginaActual ==="lugares" && <Lugares />}
      {paginaActual ==="episodios" && <Episodios />}
      
    </>
  )
}

export default App
