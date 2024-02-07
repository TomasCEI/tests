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

   // Hook useEffect, trabaja los estados de mi APP.
// 1. Cuando se crea el componente
// 2. Cuando se re-renderiza el componente
// 3. Cuando se elimina el componente

// ComponentDidMount()
useEffect( ()=> {
   console.log("Cargue mi componente App.jsx");
 
   // setTimeout es una funciòn que demora la ejecución de neustro codigo
   // parametro 1: la función
   // parametro 2: el tiempo
   // ej: setTimeout( func, tiempo) ;
   setTimeout( ()=> {
     fetchData();
   } , 2000);
 
 }, []) // se ejecuta cuanda carga el componente por primera vez
 
 
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
