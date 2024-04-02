import React, { useState, useEffect } from 'react';

function TaskComponent() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    useEffect(() => {
        // Función para obtener todas las tareas al cargar el componente
        const fetchTasks = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/v1/tasks/getall');
                if (response.ok) {
                    const tasksData = await response.json();
                    setTasks(tasksData);
                } else {
                    console.error('Error fetching tasks:', response.status);
                }
            } catch (error) {
                console.error('Error fetching tasks:', error);
            }
        };

        fetchTasks(); // Llamada a la función para obtener todas las tareas
    }, []); // El segundo argumento [] indica que se ejecutará solo una vez al cargar el componente


    // const handleAddTask2 = () => {
    //     if (newTask.trim() !== '') {
    //         setTasks([...tasks, { id: Date.now(), title: newTask }]);
    //         setNewTask('');
    //     }
    // };

    // const handleRemoveTask2 = (taskId) => {
    //     setTasks(tasks.filter(task => task.id !== taskId));
    // };

    const handleAddTask = () => {
        if (newTask.trim() !== '') {
            fetch('http://localhost:3000/api/v1/task/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ title: newTask })
            })
            .then(response => response.json())
            .then(newTask => {
                setTasks([...tasks, newTask]);
                setNewTask('');
            })
            .catch(error => console.error('Error adding task:', error));
        }
    };

    const handleRemoveTask = (taskId) => {
        fetch('http://localhost:3000/api/v1/task/complete', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: taskId })
        })
        .then(response => {
            if (response.ok) {
                setTasks(tasks.filter(task => task.id !== taskId));
            } else {
                console.error('Error completing task:', response.status);
            }
        })
        .catch(error => console.error('Error completing task:', error));
    };

    return (
        <div>
            <h2>Tareasss</h2>
            <input
                type="text"
                placeholder="agregar una tarea"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
            />
            <button onClick={handleAddTask}>Add Task</button>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        {task.title}
                        <button onClick={() => handleRemoveTask(task.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TaskComponent;