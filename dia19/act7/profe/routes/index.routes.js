
import { Router } from "express";

import misLibros from '../db/datos.js'
import { PORT, domain } from '../config/config.js';

import {getAllLibros, removeLibro, addLibro, updateLibro} from '../controllers/libros.controller.js';

const router = Router();

const listaLibros=misLibros.libros;
const fulldomain=`${domain}:${PORT}`;

const responseLibros={
    data: listaLibros,
    msg: ""
};


// ----------------------------------------
//         Rutas Libros
// ----------------------------------------

// obtener libros
router.get('/libros', (req, res)=> {
    responseLibros.data=listaLibros; // vuelvo a cargar la lista de libros
    responseLibros.msg="Todos los libros";
    responseLibros.cant=listaLibros.length;
    res.status(200).send(responseLibros);
});
// para cuando muestre como mover controllers!
//router.get('/libros', getAllLibros);

router.get('/libros', (req, res)=> {
    // obtener libros
    responseLibros.data=listaLibros; // vuelvo a cargar la lista de libros
    responseLibros.msg="Todos los libros";
    responseLibros.cant=listaLibros.length;
    res.status(200).send(responseLibros);
});
router.get("/libros/:id", (req, res)=> {
    // obtener un libro por id
    res.send("GET /libros/:id");
});
router.post('/libros', (req, res)=> {
    // crear un libro

    console.log("body es: ",req.body)
    const {titulo, autor, categoria} = req.body;
    
    responseLibros.data.push({titulo, autor, categoria});
    responseLibros.msg="Agregando libro: "+titulo;
    

    //res.send("POST /libros");
    res.send(responseLibros);
})
router.delete('/libros/:id', (req, res)=> {
    // borrar un libro
    res.send("DELETE /libros/:id");
})




// ----------------------------------------
//         Rutas Autores
// ----------------------------------------




// ----------------------------------------
//         Rutas Categorías
// ----------------------------------------


/*


const helperCleanString = (str) => {
    return str.toString().trim().toLowerCase();
}

router.get("/libros", (req, res)=> {
    responseLibros.data=listaLibros; // vuelvo a cargar la lista de libros
    responseLibros.msg="Todos los libros";
    responseLibros.cant=listaLibros.length;
    res.status(200).send(responseLibros);
});

router.get("/libros/:id", (req, res)=> {
    const idLibro=req.params.id;

    // reviso si id es un número
    if (isNaN(idLibro)) {
        responseLibros.msg="El id debe ser un número";
        delete responseLibros.data;
        res.status(400).send(responseLibros);
        return;
    }

    responseLibros.data=listaLibros.find((libro)=> libro.id==idLibro);
    responseLibros.msg="Libro con id: "+idLibro;
    responseLibros.cant=listaLibros.length;
    console.log("Libros por id");
    res.send(responseLibros);
 });


 router.get("/libros/author/:author",  (req, res) => {
    const author=helperCleanString(req.params.author);
    responseLibros.data=listaLibros.filter((libro)=> helperCleanString(libro.autor).includes(author));
    responseLibros.msg="Buscando Autores con string: "+author;
    responseLibros.cant=responseLibros.data.length;
    console.log("Libros por autor", author);
    res.send(responseLibros);
})

router.get("/libros/categoria/:category",  (req, res) => {
    const cate=helperCleanString(req.params.category);
    responseLibros.data = listaLibros.filter((libro)=> helperCleanString(libro.categoria).includes(cate));
    responseLibros.msg="Buscando libros con categoría: "+cate;
    responseLibros.cant=responseLibros.data.length;
    console.log("Libros por categoría", cate);
    res.send(responseLibros);
})

router.get("/authors", (req, res) => {
    responseLibros.data = listaLibros.map((libro)=> libro.autor);
    responseLibros.msg="Lista de Autores";
    responseLibros.cant=responseLibros.data.length;
    res.send(responseLibros);
})

router.get("/categories", (req, res)=> {
    responseLibros.data = listaLibros.map((libro)=> libro.categoria);
    responseLibros.data = responseLibros.data.filter((autor, index, arr)=> arr.indexOf(autor)===index);
    responseLibros.msg="Lista de Categorías";
    responseLibros.cant=responseLibros.data.length;
    res.send(responseLibros);
})
*/
export default router;