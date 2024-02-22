import { Router } from "express";

import misLibros from '../db/datos.js'
import { getAllLibros, getLibroById,  removeLibro, addLibro, updateLibro, getLibrosByAuthor, getLibrosByCategorie } from "../controllers/libros.controller.js";
import { getAllAuthors }  from "../controllers/autores.controller.js";
import { getAllCategories }  from "../controllers/categorias.controller.js";

const router = Router();

const listaLibros=misLibros.libros;

// es el formato que va a tener mi respuesta en todas mis consultas del API
const responseLibros={
    data: listaLibros,
    msg: ""
};

const helperCleanString = (str) => {
    return str.toString().trim().toLowerCase();
}

// ----------------------------
//      Rutas de Libros
// ----------------------------

/* moví la función a Controlladores
router.get("/libros", (req, res)=> {
    //res.send(listaLibros);
    responseLibros.data=listaLibros; // vuelvo a cargar la lista de libros
    responseLibros.msg="Todos los libros";
    responseLibros.cant=listaLibros.length;
    res.status(200).send(responseLibros);
});*/
router.get("/libros", getAllLibros);
router.get("/libros/:id", getLibroById);
router.get("/libros/author/:author", getLibrosByAuthor);
router.get("/libros/categoria/:category", getLibrosByCategorie);

router.post("/libros", addLibro); // AGREGAR NUEVO LIBRO
router.delete("/libros/:id", removeLibro); // Eliminar Libro
router.put("/libros/:id", updateLibro);





router.get("/libros/author/:author",  getAllAuthors)

router.get("/libros/categoria/:category",  getAllCategories)


// ----------------------------
//      Rutas de Autores
// ----------------------------
router.get("/authors", (req, res) => {
    responseLibros.data = listaLibros.map((libro)=> libro.autor);

    // Distintas maneras de eliminar duplicados de un array

    // usando forEach
    // const uniqueAuthors=[];
    // responseLibros.data.forEach((autor)=> {
    //     if (!uniqueAuthors.includes(autor)) {
    //         uniqueAuthors.push(autor);
    //     }
    // });
    // responseLibros.data=uniqueAuthors;

    // usando new Set()  
    // crea una Set, y luego lo convierte en array con el spread Operator
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
    responseLibros.data = [...new Set(responseLibros.data)];
    
    // usando Método Filter
    // el indexOf(value) devuelve el PRIMER índice en el que se encuentra un elemento dado en el array, o -1 si no se encuentra
    // responseLibros.data = responseLibros.data.filter((autor, index, arr)=> arr.indexOf(autor)===index);

    // usando Método Reduce
    // https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
    // responseLibros.data = responseLibros.data.reduce((acc, autor)=> {
    //     if (!acc.includes(autor)) {
    //         acc.push(autor);
    //     }
    //     return acc;
    // }, []);

    responseLibros.msg="Lista de Autores";
    responseLibros.cant=responseLibros.data.length;
    res.send(responseLibros);
})



// ----------------------------
//      Rutas de Categorías
// ----------------------------
router.get("/categories", (req, res)=> {
    responseLibros.data = listaLibros.map((libro)=> libro.categoria);

    responseLibros.data = responseLibros.data.filter((autor, index, arr)=> arr.indexOf(autor)===index);

    responseLibros.msg="Lista de Categorías";
    responseLibros.cant=responseLibros.data.length;
    res.send(responseLibros);
})





export default router;