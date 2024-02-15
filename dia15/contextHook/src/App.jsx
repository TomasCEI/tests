import { useState } from 'react'
import './App.css'
import ContadorRef from './components/ContadorRef'
import FocusRef from './components/FocusRef'
import LoginUseContext from './components/LoginUseContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h3>UseContext Login</h3>
        <LoginUseContext />
        <hr />

      <h3>useRef vs useState</h3>
      <ContadorRef />
      <hr />

      <h3>Focus Ref (Manipulación del Dom)</h3>
      <FocusRef />
      <hr />

     
    </>
  )
}

export default App
