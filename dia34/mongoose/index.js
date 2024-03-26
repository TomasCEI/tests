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
    const DB_USER="tomassanchez";
    const DB_PASS="kF2ecr3DIzfvVN54";
    const DB_DATABASE="cei";
    const DB_URL=`mongodb+srv://${DB_USER}:${DB_PASS}@cei-valencia.ulc7ujr.mongodb.net/${DB_DATABASE}`;
    // const url = `mongodb://127.0.0.1:27017/${DB}`;
    await mongoose.connect(DB_URL)
    .then(()=> console.log("Connectado a MongoDB Atlas ONLINE"))
    .catch(e=> console.log("Error en la conexion", e));
}
connect();

const options= {
    collection: 'usuarios',
    strict: true, // solo almacena los elementos que esten en nuestro esquema
    collation: {
        locale: "es",
        strength: 1        // fuerza del tipado al hacer búsquedas
    }
}

const alumnoSchema = new mongoose.Schema( {
    name: String,
    username: String,
    email: String,
    edad: Number,
    isAdmin: Boolean,
    hobbies: Array
}, options);
const Alumno = mongoose.model("Alumno", alumnoSchema);




// controllers

app.get("/", async (req, res, next)=> {
    // obtener todos los datos de todos los alumnos
    const result= await Alumno.find();
    res.json(result);
})

app.get("/nombre/:nombre/:edad", async (req, res, next)=> {

    const {nombre, edad} = req.params;

    // obtener todos los datos de todos los alumnos
    const result= await Alumno.find({name:nombre, edad:edad}).select({edad:0});
    res.json(result);
})


app.get("/usuarios/:id", async (req, res, next)=> {

    const {id} = req.params;
    console.log("id es", id);

    // obtener todos los datos de todos los alumnos
    try {
        const result= await Alumno.findById(id);
        res.json(result);
    } catch (error){
        res.json(error);
    }
})

app.post("/usuarioEstatico", async (req, res, next) => {
    const nuevoUsuario = new Alumno({
        name: "Lucas",
        username: "luquitas",
        edad: 18,
        isAdmin: true,
        hobbies: ["futbol", "basquet", "programación Full stack"],
        libroFavorito: "Harry Potter"
    });
    await nuevoUsuario.save();

    // Devolver el registro recién agregado
    res.json(nuevoUsuario); // incluye el _id

    // Devolver todos los alumnos
    const todosLosUsuarios = await Alumno.find();
    res.json(todosLosUsuarios);
})

app.post("/usuarios", async (req, res, next) => {

    const {name, username, edad, isAdmin=false, hobbies} = req.body;

    const nuevoUsuario = new Alumno({
        name: name,
        username: username,
        edad: edad,
        isAdmin: isAdmin,
        hobbies: hobbies
    });
    await nuevoUsuario.save();

    // Devolver el registro recién agregado
    res.json(nuevoUsuario); // incluye el _id

    // Devolver todos los alumnos
    // const todosLosUsuarios = await Alumno.find();
    // res.json(todosLosUsuarios);
});

app.put("/usuarios/:id", async (req, res, next) => {

    const {id} = req.params;
    const {name, username} = req.body;

    try {
        const alumnoEditado = await Alumno.findByIdAndUpdate( id, 
            { name, username }, { new: true }   // nos va a devolver el usuario actualizado!
        );
        // Devolver el registro recién agregado
        res.json(alumnoEditado);
    } catch (error){
        res.json(error);
    }
});

app.delete("/usuarios/:id", async (req, res, next) => {
    const {id} =req.params;
    try {
        const alumno = await Alumno.findByIdAndDelete(id);
        res.json({
            msg: "Alumno eliminado con exito", 
            alu: alumno,
            status: "ok"
        })
    } catch (error){
        res.json({
            msg: "No se pudo eliminar al usuario porque no existe el id: ",
            status: "error",
            id: id
        })
        //res.json(error);
    }

});

// ----------- OPERADORES ------------

/*
$eq:    (equal) es igual al valor especificado.
$ne:    (not equal) no es igual al valor especificado.
$gt:    (greater than) es mayor que el valor especificado.
$gte:   (greater or equal) es mayor o igual al valor especificado.
$lt:    (less than) es menor que el valor especificado.
$lte:   (less or equal) es menor o igual al valor especificado.
$in:    (in) está en un array.
$nin:   (not in) no está en un array.
$exists: campo existe o no.
$regex: coincide con la expresión regular especificada.
*/
app.get("/operadores", async (req, res, next) => {
    // usuarios mayores de 18 y menores de 65
    const usuarios = await Alumno.find({edad : {$gt:18, $lt:65} });
    // Usuarios que NO son admin
    const usersNotAdmin = await Alumno.find( {isAdmin: {$ne: true}} );
    // Usuarios que Juegan al Futbol o al volley
    const jugadoresDeFutbol = await Alumno.find ( {hobbies : { $in: ["futbol", "volley"] }});
    // usuarios que tengan el CAMPO hobbies
    const usersConHobbies = await Alumno.find ( { hobbies: { $exists: true }  })
    res.json(usersConHobbies);
});


app.listen(3000, ()=> {
    console.log("Servidor corriendo en puerto http://localhost:3000");
})