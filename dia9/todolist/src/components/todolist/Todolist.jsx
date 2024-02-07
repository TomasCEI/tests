import {  useState } from 'react'

export const TodoList= ({listaTareas})=>{

    // Lista de Tareas
    const [tareas, setTareas] = useState(listaTareas);
    // Texto para el input
    const [textoTarea, setTextoTarea] = useState('');

    const agregarTarea = ()=>{
        console.log("Agregando tarea");
    }

    const completarTarea = () => {
        console.log("Compltear Tarea");
    }

    return (
        <>
        <h2>soy TodoList</h2>
        <input type="text" placeholder="Nueva Tarea" value={textoTarea}
        onChange={(e)=> {
            setTextoTarea(e.target.value)
        }}/>

        <button onClick={agregarTarea}>Agregar</button>

        <h3>Lista</h3>
        <ul>
            {
                tareas.map( (tarea)=> (
                    <li key={tarea.id}>{tarea.tarea}</li>
                ))
            }
        </ul>


        </>
    )

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
}













/*
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
