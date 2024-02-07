import "./App.css";
import reactLogo from "./assets/react.svg";
import viteLogo from "/img/vite.svg";
//import { misTareas } from "./assets/datos.js";
import { TodoList } from "./components/todolist/Todolist";

import { useEffect, useState } from "react";

// traigo los datos desde assets
// // esta info la traje de la base dedatos
// const misTareas = [
//    {
//       id: 1,
//       tarea: "programar",
//       isCompletada: true,
//    },
//    {
//       id: 2,
//       tarea: "estudiar",
//       isCompletada: false,
//    },
// ];
function App() {
   // Estado para almacenar los datos de la API
   const [data, setData] = useState([]);
   // Estado para controlar si se está cargando o no
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      setTimeout(() => {
         fetchData();
      }, 2000);
   }, []);

   const fetchData = async () => {
      const response = await fetch("./db/datos.json");

      const jsonData = await response.json();
      setData(jsonData);
      setLoading(false);
   };

   return (
      <>
         <h1>Día 9 - TodoList App</h1>
         <img src={viteLogo} />
         <img src={reactLogo} />
         {loading ? <p>Cargando datos...</p> : <TodoList listaTareas={data} />}
      </>
   );
}

export default App;
