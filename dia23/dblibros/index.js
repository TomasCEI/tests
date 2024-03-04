import express from "express";
import {PORT, domain, fullDomain} from "./config/config.js";
import {logger} from './middlewares/logger.js';
import { setHeaders } from "./middlewares/setHeaders.js";
import indexRoutes from './routes/index.routes.js';
import cors from 'cors'; // uso de cors mediante libreria externa

const app = express();
console.clear();

// También puedes configurar CORS con métodos específicos y encabezados personalizados
// con origen para 2 dominios

// Uso de MiddleWares
app.use(cors()); // Cross-Origin Resource Sharing
app.use(setHeaders);
app.use(express.json()); // procesa el json body para leer con req.body()
app.use(express.urlencoded({extended:false})); // leer datos de urlEncoded de req.body
app.use(logger);




// Rutas
app.get("/", (req, res)=> {
    res.setHeader("Content-Type", "text/html");

    const landingHTML = `
        <h1>Bienvenidos a nuestra API de Libros</h1>
    `;
    res.send(landingHTML);
})
/*
app.get("/seed", async(req, res) => {
    const libros = await Libros.bulkCreate([
        {
            "titulo": "El nombre del viento",
            "autor": "Patrick Rothfuss",
            "categoria": "Fantasía"
        },
        {
            "titulo": "1984",
            "autor": "George Orwell",
            "categoria": "Ciencia ficción"
        },
        {
            "titulo": "Libro 2 de George",
            "autor": "George Orwell",
            "categoria": "Ciencia ficción"
        },
        {
            "titulo": "Cien años de soledad",
            "autor": "Gabriel García Márquez",
            "categoria": "Realismo mágico"
        }
    ])
    res.json({msg: "Libros creados con exito"});
})

app.get("/users", async (req, res) => {
    const users= await Libros.findAll();
    res.json(users);
});

app.post("/users", async ( req, res) => {
    console.log("body es:", req.body);
    const user = await Libros.create(req.body)
    res.json(user);
})

app.put("/users/:id", async ( req, res) => {
    const user = await Libros.findByPk(req.params.id);
    if(user){
        await user.update(req.body);
        res.json(user);
    }else {
        res.status(404).json({msg: "usuario no encontrado"});
    }
    //console.log("user es:", user);
    //res.json(user);
})

app.delete("/users/:id", async (req, res)=> {
    const user = await Libros.findByPk(req.params.id);
    if(user){
        const userViejo=user;
        await user.destroy();
        res.json({ msg: "usuario eliminado correctamente", data: userViejo});
    } else {
        res.status(404).json({msg: "usuario no encontrado"});
    } 
})
*/
app.use("/API/v1/", indexRoutes);

// Alta de Servidor
app.listen(PORT, () => {
    console.log(`server corriendo en ${fullDomain}`)
})