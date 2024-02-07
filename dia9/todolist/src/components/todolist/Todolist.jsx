import { useState } from "react";
import "./Todolist.css";
import Confetti from "react-confetti";

export const TodoList = ({ listaTareas }) => {
   /* ------------------------------------------ */
   /* 1. Uso de Hooks y declaración de variables */
   /* ------------------------------------------ */

   const [tareas, setTareas] = useState(listaTareas); // Lista de Tareas
   const [textoTarea, setTextoTarea] = useState(""); // Texto para el input

   /* ------------------------ */
   /* 2. Creación de Funciones */
   /* ------------------------ */

   const agregarTarea = () => {
      console.log("Agregando tarea");
      const random = Math.floor(Math.random() * 1000);

      const nuevaTarea = textoTarea.trim(); // quita espacios delante o detras
      if (nuevaTarea) {
         const tareasModificables = [...tareas, { id: random, tarea: nuevaTarea, isCompletada: false }];
         setTareas(tareasModificables);
         setTextoTarea("");
      }
   };

   const completarTarea = (id) => {
      console.log("Completar Tarea", id);
      // crear una copia de mis tareas para poder modificarlas!
      const tareasModificables = [...tareas];
      // Obtener Tarea
      // const tarea = tareas.find((t) => t.id == id);
      // Obtener TareaIndex
      const index = tareasModificables.findIndex((t) => t.id == id);
      // Hacer las modificaciones
      tareasModificables[index].isCompletada = !tareasModificables[index].isCompletada;
      setTareas(tareasModificables);
   };

   const quitarTarea = (id) => {
      console.log("Quitar tarea", id);
      const tareasModificables = tareas.filter((t) => t.id != id);
      setTareas(tareasModificables);
   };

   // Otros Componentes
   const Tarea = ({ id, tarea, isCompletada }) => (
      <li className="item">
         <span className={isCompletada ? "completada" : ""} onClick={() => completarTarea(id)}>
            <strong>{id}. </strong>
            {tarea}
         </span>
         <button className="btnDelete" onClick={() => quitarTarea(id)}>
            X
         </button>
      </li>
   );

   /* -------------------------------- */
   /* 3. Creación de Vistas / Interfaz */
   /* -------------------------------- */

   return (
      <div className="todolist">
         <h2>Componente - TodoList</h2>
         <input
            type="text"
            placeholder="Nueva Tarea"
            value={textoTarea}
            onChange={(e) => {
               setTextoTarea(e.target.value);
            }}
         />
         <button onClick={agregarTarea}>Agregar</button>
         <h3> 👉 {textoTarea} 👈 </h3>
         {/*
         
         Listado de tareas activas! 
         
         */}
         <h3>Mis tareas pendientes:</h3>
         <ul>
            {/* {!tareas.length && <>No hay tareas</>} */}
            {tareas.filter((t) => t.isCompletada == false).length == 0 && (
               <>
                  Haz completado todas tus tareas!
                  <Confetti numberOfPieces="1000" recycle={false} />
               </>
            )}
            {tareas.map((tarea) => {
               if (!tarea.isCompletada) {
                  return <Tarea key={tarea.id} {...tarea} />;
               }
            })}
         </ul>
         {/*
         
         Listado de tareas completadas! 

         */}
         <h3>Mis tareas completadas:</h3>
         <ul>
            {/* {!tareas.length && <>No hay tareas</>} */}
            {tareas.filter((t) => t.isCompletada == true).length == 0 && <>No hay tareas</>}
            {tareas.map((tarea) => {
               if (tarea.isCompletada) return <Tarea key={tarea.id} {...tarea} />;
            })}
         </ul>
      </div>
   );
};
/*
   return (
      <div>
         <h1>Todo List</h1>
         <div>
            <input type="text" placeholder="Nueva tarea" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
            <button onClick={addTask}>Agregar</button>
         </div>
         <ul>
            {tasks.map((task, index) => (
               <li key={index} style={{ textDecoration: task.completed ? "line-through" : "none", cursor: "pointer" }} onClick={() => toggleTask(index)}>
                  {task.text}
               </li>
            ))}
         </ul>
      </div>
   );

// Función para agregar una nueva tarea a la lista
const addTask = () => {
  if (newTask.trim() !== '') {
    setTasks([...tasks, { text: newTask, completed: false }]);
    setNewTask('');
  }
};

// Función para marcar una tarea como completada o incompleta
const toggleTask = (index) => {
  const updatedTasks = [...tasks];
  updatedTasks[index].completed = !updatedTasks[index].completed;
  setTasks(updatedTasks);
};

*/
