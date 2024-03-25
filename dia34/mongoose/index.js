import express from "express";
import cors from "cors";

import mongoose from 'mongoose';

const app = express();
console.clear();

// uso de middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

const connect = async() =>{
    const USER="tomassanchez";
    const PASS="kF2ecr3DIzfvVN54";
    const DB="cei";
    const url=`mongodb+srv://${USER}:${PASS}@cei-valencia.ulc7ujr.mongodb.net/${DB}`;
    await mongoose.connect(url)
    .then(()=> console.log("Connectado a MongoDB Atlas ONLINE"))
    .catch(e=> console.log("Error en la conexion", e));
}
connect();

const options= {
    collection: 'usuarios'
}


const alumnoSchema = new mongoose.Schema( {
    name: String,
    username: String,
    email: String,
    edad: Number,
    isAdmin: Boolean,
    hobbies: Array
}, options);
const Alumno =mongoose.model("Alumno", alumnoSchema);




// controllers

app.get("/", async (req, res, next)=> {

    // obtener todos los datos de todos los alumnos
    const result= await Alumno.find();
    res.json(result);
})

app.listen(3000, ()=> {
    console.log("Servidor corriendo en puerto http://localhost:3000");
})