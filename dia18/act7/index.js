import misLibros from './db/datos.js'
import express from "express"; // ES modules

import { PORT } from './config/config.js';
//import { timeLog } from './middlewares/logger.js';


const app = express();
console.clear();

//utilizar el middleWare timeLog 
//app.use(timeLog);



app.get("/libros", (req, res)=> {
    res.setHeader("Content-Type", "application/json");
    misLibros.msg="Libros encontrados";
    misLibros.cant=misLibros.libros.length;
    res.statusCode=200;
    res.send(misLibros);
});

app.get("/libros/:id", (req, res)=> {
    const idLibro=req.params.id;
    console.log("Libros por id");
    res.send("Objeto de Libro");
 });


app.get("/libros/author/:author", (req, res) => {
    const id=req.params.author;
    console.log("Libros por autor");
    res.send("Libros por autor");
})

app.get("/libros/categoria/:category", (req, res) => {
   res.send("Libros por categoría");
})

app.get("/authors", (req, res) => {
    res.send("Lista de Autores");
})

app.get("/categories", (req, res)=> {
    res.send("Lista de Categorías")
})


app.listen(PORT, ()=> {
    console.log(`Server is running on port http://localhost:${PORT}`)
} )