import { useState, createContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ContadorRef from './components/ContadorRef'
import FocusRef from './components/FocusRef'
import LoginUseContext from './components/LoginUseContext'

//export const LoginContext = createContext([]);


function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      {/* <h3>Contador Ref</h3>
      <ContadorRef /> */}

      {/* <h3>Focus Ref</h3>
      <FocusRef /> */}

      <h3>UseContext Login</h3>
      <LoginUseContext />
    </>
  );

}

export default App
