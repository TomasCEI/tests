import bcrypt from 'bcrypt';
import { mongo_db } from "../db/mongoose.db.js";
import { User } from "../models/user.model.js";
import { Task } from "../models/task.model.js";

mongo_db(); // Conexión a la base de datos

// formato de Respuesta
const responseAPI = {
    data: [],
    msg:"",
    status: "ok"
}



export const getAllTasks = async (req, res, next) => {

        try {
            // Busca todas las tareas en la base de datos
            const tasks = await Task.find();
            res.status(200).json(tasks); // Devuelve las tareas en formato JSON
        } catch (error) {
            next(error);
        }
   
}


export const createTask = async (req, res, next) => {

try {
    const { title } = req.body;
    const userId = req.user.id; // Se asume que el usuario está autenticado y su ID se encuentra en req.user
    
    
    // Crea una nueva tarea asociada al usuario actual
    const newTask = new Task({ title, user: userId });
    await newTask.save();

    responseAPI.data=newTask;
    responseAPI.msg="Tarea creada correctamente";

    res.status(201).json(responseAPI);
} catch (error) {
    next(error);
}
};


export const completeTask = async (req, res, next) => {

    try {
       
        responseAPI.msg="Tarea completada";
    
        res.status(201).json(responseAPI);
    } catch (error) {
        next(error);
    }
}