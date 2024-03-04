import { Router} from 'express';
import {seedLibros, getAllLibros, createLibro, getLibroById, updateLibro, deleteLibro} from '../controllers/libros.controller.js';


const router = Router();

// todos los libros
router.get(     "/libros",      getAllLibros);
router.get (    "/libros/seed", seedLibros); // crear lista de libros base!

// CRUD: Create Read Update Delete
router.post(    "/libros",      createLibro);   // create
router.get(     "/libros/:id",  getLibroById);  // read
router.put(     "/libros/:id",  updateLibro);   // update
router.delete(  "/libros/:id",  deleteLibro);   // delete

// http://localhost:8000/libros/33/getLibros?id=33&orden=asc&q=autor
// urlParameter :id
// queryParameter ?id


// // todos
// router.get( "/autores", getAllLibros);

// // CRUD: Create Read Update Delete
// router.post(    "/autores",      createAutor);   // create
// router.get(     "/autores/:id",  getAutorById);  // read
// router.put(     "/autores/:id",  updateAutor);   // update
// router.delete(  "/autores/:id",  deleteAutor);   // delete




export default router;