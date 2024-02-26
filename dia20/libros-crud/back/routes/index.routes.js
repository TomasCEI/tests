import { Router} from 'express';
import {getAllLibros, createLibro, getLibroById, updateLibro, deleteLibro} from '../controllers/libros.controller.js';



const router = Router();

// todos los libros
router.get(     "/libros",      getAllLibros);

// CRUD: Create Read Update Delete
router.post(    "/libros",      createLibro);   // create
router.get(     "/libros/:id",  getLibroById);  // read
router.put(     "/libros/:id",  updateLibro);   // update
router.delete(  "/libros/:id",  deleteLibro);   // delete


// // todos
// router.get( "/autores", getAllLibros);

// // CRUD: Create Read Update Delete
// router.post(    "/autores",      createAutor);   // create
// router.get(     "/autores/:id",  getAutorById);  // read
// router.put(     "/autores/:id",  updateAutor);   // update
// router.delete(  "/autores/:id",  deleteAutor);   // delete




export default router;