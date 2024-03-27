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

    // MongoDB Atlas
    const USER="tomassanchez";
    const PASS="kF2ecr3DIzfvVN54";
    const DB="cei";
    //const url=`mongodb+srv://${USER}:${PASS}@cei-valencia.ulc7ujr.mongodb.net/${DB}`;


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
        strength: 1     // (1) insensible / (2) sensibilidad de Mayúsculas y Minúsculas
    }
}

const alumnoSchema = new mongoose.Schema( {
    nombre: String,
    //isAdmin: Boolean,
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

// obtener por nombre
app.get("/alu/:nombre", async (req, res, next) => {
    const { nombre } = req.params; 
    const alumno = await Alumno.findOne({nombre: nombre});
    res.json(alumno);

    // const buscarPorId = await Alumno.find({"_id":"66006a4483a82ec570e0b681"}).select({hobbies:0});
});

/*
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
});*/

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

    // devuelvo el nuevo alumno
    res.json(nuevoAlumno);

    // devuelvo lista completa
    const alus = await Alumno.find();
    res.json(alus);
});


app.post('/edit/', async (req, res, next) => {

    const alumno = await Alumno.findByIdAndUpdate("66008ec19cac9d26734d6708",{
        nombre: "Juancito2"
    }, { new: true });

    res.json(alumno);
});

app.post('/edit/:id', async (req, res, next) => {
    const {id} = req.params;

    const alumno = await Alumno.findByIdAndUpdate(id, {
        nombre: "Juancito2"
    }, { new: true });

    res.json(alumno);
});

// ----------- OPERADORES ------------

/*
$eq:    es igual al valor especificado.
$ne:    no es igual al valor especificado.
$gt:    es mayor que el valor especificado.
$gte:   es mayor o igual al valor especificado.
$lt:    es menor que el valor especificado.
$lte:   es menor o igual al valor especificado.
$in:    está en un array.
$nin:   no está en un array.
$exists: campo existe o no.
$regex: coincide con la expresión regular especificada.
*/
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


// --------- Uso de RegEx ------------

// que es? 
// buscar en un texto



// para ver detalles
// https://regexr.com/

// Usando el constructor RegExp
const regex1 = new RegExp('patrón');
// Escribiendo la expresión regular directamente
const regex2 = /patrón/;

const regex3 = /hola/;
const cadena1 = '¡Hola mundo!';

const regex4 = /hola/i; // i es para que no sea case sensitive
const regex5 = /hola/g; // g es para que sea global
const regex6 = /hola/m; // m es para que sea multiline
const regex7 = /hola/ig; // combinación de flags

// ejemplos:
// Define la expresión regular para buscar la palabra "gato" en el título
const regex = new RegExp('gato', 'i'); 
const productosConGato1 = await Producto.find({
    titulo: { $regex: regex }
  });
const productosConGato2 = await Producto.find({
    titulo: { $regex: /gato/i }
  });


// Metacaracteres $, ^, ., \w, \s

const regex8 = /^hola/; // empieza por hola
const texto = "Hola mundo\nHola amigos\nAdiós mundo";
const coincidencias = texto.match(/^Hola/gm);
console.log(coincidencias); // ["Hola", "Hola"]


const regex9 = /mundo$/; // termina por mundo!
const texto2 = "Hola mundo!\n¡Hola amigos!\nAdiós mundo";
const coincidencias2 = texto.match(/!$/gm);
console.log(coincidencias); // ["!", "!"]

const regex10 = /ga.o/; // ga seguido de cualquier caracter y luego o

const regex11 = /\w/; // cualquier caracter alfanumérico (no espacios, ni puntos)
const regex12 = /\w{4,5}/; // cualquier caracter alfanumérico que tenga entre 4 y 5 caracteres
const regex13 = /\s/; // cualquier espacio en blanco)
const regex14 = /\S/; // cualquier caracter que NO sea espacio en blanco

// Agrupar []
const regex15 = /[aeiou]rbol/; // cualquier vocal seguida de rbol
const regex16 = /[a-z]/; // cualquier letra minúscula
const regex17 = /[A-Z]/; // cualquier letra mayúscula
const regex18 = /[a-zA-Z0-9]/; // cualquier letra o número


// test devuelve true o false
if (regex3.test(cadena1)) {
    console.log('Coincidencia encontrada');
} else {
    console.log('No se encontraron coincidencias');
}


/*

PetPlantDeco+mmerce
Base de datos (MongoDB):

Colección de productos:
_id (ObjectId)
Nombre (string)
Descripción (string)
Precio (number)
Categoría (string)
Imagen (string)
Colección de usuarios:
_id (ObjectId)
Nombre (string)
Email (string)
Contraseña (string)
Dirección (string)
Teléfono (string)
Endpoints:

Productos:

/productos (GET): Listar productos.
/productos/filtrar (GET): Filtrar productos por categoría y precio.
/productos/:id (GET): Obtener un producto por ID.
/productos/carrito/agregar (POST): Agregar un producto al carrito.
/productos/carrito/eliminar (POST): Eliminar un producto del carrito.
/productos/carrito/modificar (POST): Modificar la cantidad de un producto en el carrito.
Usuarios:

/usuarios/registrar (POST): Registrar un usuario.
/usuarios/login (POST): Iniciar sesión.
/usuarios/info (GET): Obtener información del usuario.
/usuarios/modificar (POST): Modificar información del usuario.
*/


// Alta de Servidor
app.listen(3000, () => {
    console.log(`server corriendo en http://localhost:3000`)
})