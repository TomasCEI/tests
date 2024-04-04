
"use client"

import { useState } from 'react';
import { Header } from "@/components/Header";

export default function Home() {
    const [tareas, setTareas] = useState([]);
    const [txtTarea, setTxtTarea] = useState('');

    const agregarTarea = () => {
        if (txtTarea.trim() !== '') {
            setTareas([...tareas, { 
                                    id: Date.now(), 
                                    texto: txtTarea, 
                                    isCompletada: false 
                                }]);
                                setTxtTarea('');
        }
    };

    const quitarTarea = (idTarea) => {
        setTareas(tareas.filter(tarea => tarea.id !== idTarea));
    };

    const toggleTarea = (idTarea) => {
        setTareas(tareas.map(tarea => {
            if (tarea.id === idTarea) {
                return { ...tarea, isCompletada: !tarea.isCompletada };
            }
            return tarea;
        }));
    };

    return (
        // <>
        // <h1 className="text-3xl font-bold mb-4">Lista de Tareas</h1>
        // </>
        <div className="max-w-md mx-auto mt-8">
            <Header title="Lista de Tareas" />
            

            {tareas.length > 0 && (
                <><small>
                    Cant:{" "}
                    {tareas.filter(tarea => tarea.isCompletada).length}
                    /
                    {tareas.length}
                </small><br /></>)}

            <input
                type="text"
                className="border border-gray-300 px-3 py-2 rounded-md mb-4"
                placeholder="Agregar tarea..."
                value={txtTarea}
                onChange={(e) => setTxtTarea(e.target.value)}
            />
            <button
                className="bg-blue-500 text-white px-4 py-2 ml-2 rounded-md"
                onClick={agregarTarea}
            >
                Agregar tarea
            </button>
            <ul className="mt-4">
                {tareas.map(tarea => (
                    <li key={tarea.id} className="flex items-center mb-2">
                        <label>
                            <input
                                type="checkbox"
                                className="mr-2"
                                checked={tarea.isCompletada}
                                onChange={() => toggleTarea(tarea.id)}
                            />
                            <span className={tarea.isCompletada ? "line-through" : ""}>
                                {tarea.texto}
                            </span>
                        </label>
                        <button
                            className="ml-auto bg-red-500 text-white px-3 py-1 rounded-md"
                            onClick={() => quitarTarea(tarea.id)}
                        >
                            Borrar
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );

    
}
