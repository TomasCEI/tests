import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Strings from "./components/Strings/Strings";
import Article from "./components/Article/Article";
import Lists from "./components/Lists/Lists";
import Contador from "./components/Contador";
import Alumno from "./components/Alumno/Alumno";

function App() {
   const [count, setCount] = useState(0);

   return (
      <>
         <div>
            <Alumno nombre="Lucas" curso="Full Stack" />
            <Alumno nombre="Fran" curso="Diseño Web" />

            <Strings />
            <Article title="Título del artículo">
               Contenido del artículo
            </Article>
            <Contador />
            <Lists items={["Lechuga", "Tomate", "Puerros", "Chocolate"]} />
         </div>
         <div>
            <a href="https://vitejs.dev" target="_blank">
               <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
               <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
         </div>
         <h1>Vite + React</h1>
         <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
               count is {count}
            </button>
            <p>
               Edit <code>src/App.jsx</code> and save to test HMR
            </p>
         </div>
         <p className="read-the-docs">
            Click on the Vite and React logos to learn more
         </p>
      </>
   );
}

export default App;
