import { useState } from "react";

/*
const TodoList = () => {
  // Estado para almacenar la lista de tareas y el input de nueva tarea
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

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

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input type="text" placeholder="Nueva tarea" value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Agregar</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}
            style={{textDecoration: task.completed ? 'line-through' : 'none', cursor: 'pointer',}}
            onClick={() => toggleTask(index)} >
            {task.text}
          </li>
        ))}
      </ul>
    </div>
  );
};
*/

function App() {
   //const [count, setCount] = useState(0)
   // miVariable es la Variable
   // setMiVariable es una función que va a actualizar la variable
   //const [miVariable, setMiVariable] =useState(25); // le envìo el valor defecto

   const usersData = [
      { id: 1, nombre: "Tom", isAdmin: true, edad: 39 },
      { id: 2, nombre: "Laura", isAdmin: false, edad: 29, deporte: "futbol" },
      { id: 3, nombre: "Maria", isAdmin: false, edad: 12 },
      { id: 4, nombre: "Pedro", isAdmin: true, edad: 51 },
   ];

   const [usuarios, setUsuarios] = useState(usersData);

   // mis components
   const Componente = ({ prop1, prop2, prop3 }) => {
      return (
         <>
            <h1>soy un componente</h1>
            <ul>
               <li>{prop1}</li>
               <li>{prop2}</li>
               <li>{prop3}</li>
            </ul>
         </>
      );
   };

   // mis datos
   const props = {
      prop1: "valor1",
      prop2: "valor2",
      prop3: "valor3",
      prop4: "valor4",
   };

   const Usuario = ({ nombre, isAdmin, edad = 0, deporte = "no tiene" }) => {
      return (
         <>
            <li>
               nombre: {nombre}
               <br />
               edad: {edad}
            </li>
         </>
      );
   };

   return (
      <>
         <h1>Lista de Usuarios</h1>
         <button
            onClick={() => {
               //console.log("hola");
               const random = Math.random();
               //console.log("Random es:", random);

               //let semana=["lunes", "martes"];
               //semana=["Domingo", ...semana, "miercoles"];

               setUsuarios([...usuarios, { id: random, nombre: "Dolores", isAdmin: false, edad: 36 }]);
            }}>
            agregar Usuario
         </button>

         <ul>
            {usuarios.map((user) => (
               <Usuario key={user.id} {...user} />
            ))}
         </ul>
      </>
   );
}

export default App;
