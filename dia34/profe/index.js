import express from "express";
import cors from 'cors'; // uso de cors mediante libreria externa

import mongoose from "mongoose";

const app = express();
console.clear();

// Uso de MiddleWares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));


const dbConnect = async () => {
    //const url = `mongodb://localhost:27017/fullstack`;
    const url = `mongodb://127.0.0.1:27017/fullstack`;

    await mongoose.connect(url)
    .then ( ()=> console.log('Conectado a mongoDB'))
    .catch ( e => next(e));
    
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
 
    // .then ( ()=> console.log('Conectado a mongoDB'))
    // .catch ( e => console.log("Error de conexión", e));
}
dbConnect();

// Los esquemas Suele ir en archivo aparte

const options= {
    collection: 'alumnos', // nombre de la colección
    // versionKey: '', // nombre del campo de versión vacío para no agregarla
    strict: true,       // Opcional: solo guardar lo que está en el esquema
    collation: {        // Opcional
        locale: 'es',   // idioma
        strength: 2     // (1) insensible / (2) sensibilidad de Mayúsculas y Minúsculas
    }
}

const alumnoSchema = new mongoose.Schema( {
    nombre: String,
    isAdmin: Boolean,
    edad: Number,
    hobbies: Array,
    ciudad: String
}, options);


const Alumno = mongoose.model('Alumno', alumnoSchema);


app.get('/', async (req, res, next) => {
    const datos= await Alumno.find();
    res.json(datos);

    //const datos= await Alumno.find({}, { __v: 0, hobbies: 0 });
});

app.get("/id/:id", async (req, res, next) => {
    const { id } = req.params; // 66006a4483a82ec570e0b681
    const buscarPorId = await Alumno.findById(id);
    res.json(buscarPorId);

    // const buscarPorId = await Alumno.find({"_id":"66006a4483a82ec570e0b681"}).select({hobbies:0});
});

app.get('/new', async (req, res, next) => {
    const nuevoAlumno = new Alumno({
        nombre: "Juan",
        isAdmin: true,
        edad: 25,
        hobbies: ["futbol", "tenis"],
        ciudad: "Madrid"
    });
    await nuevoAlumno.save();

    res.json(nuevoAlumno);
});

app.post('/new', async (req, res, next) => {
    const { nombre, isAdmin, edad, hobbies, ciudad } = req.body;
    const nuevoAlumno = new Alumno({
        nombre,
        isAdmin,
        edad,
        hobbies,
        ciudad
    });
    await nuevoAlumno.save();

    // devuelvo lista completa
    const alus = await Alumno.find();
    res.json(alus);
});


app.get('/edit', async (req, res, next) => {
    const alumno = await Alumno.findByIdAndUpdate("66008ec19cac9d26734d6708",{
        nombre: "Juancito2"
    }, { new: true });

    res.json(alumno);
});


app.get("/operadores", async (req, res, next) => {
    // trae alumnos con edad mayor a 20 y menor a 30
    const alumnos = await Alumno.find({edad: {$gt: 20, $lt: 30}});
    res.json(alumnos);

    // trae a todos los alumnos que no son admin
    const alumnos1 = await Alumno.find({isAdmin: {$ne: true}});

    // traer a todso los alumnos que NO se llamen jhon
    const alumnos1b = await Alumno.find({isAdmin: {$ne: "jhon"}});

    // trae alumnos que tengan futbol o tenis como hobbie
    const alumnos2 = await Alumno.find({hobbie: {$in: ["futbol", "tenis"]}});

    // trae alumnos que no tengan basquet como hobbie
    const alumnos3 = await Alumno.find({hobbie: {$nin: ["basquet"]}});
});

// Alta de Servidor
app.listen(3000, () => {
    console.log(`server corriendo en http://localhost:3000`)
})