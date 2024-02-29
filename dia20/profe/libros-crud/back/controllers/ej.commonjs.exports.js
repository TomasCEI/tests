
/**
 *  Ejemplo de archivo de controllers usando CommonJS en vez de ES Modules
 */

const {v4:uuidv4} = require('uuid');
const {libros} = require('../db/datos.js');

const getLibros = (req, res, next) => {
    res.status(200).json(libros);
}

const postLibros = (req, res, next) => {
    const {titulo, autor, categoria} = req.body;
    const newLibro = {
        id: uuidv4(),
        titulo,
        autor,
        categoria
    }
    libros.push(newLibro);
    res.status(201).json(newLibro);
}

const putLibros = (req, res, next) => {
    const {id} = req.params;
    const {titulo, autor, categoria} = req.body;
    const libro = libros.find(libro => libro.id === id);
    if (libro) {
        libro.titulo = titulo;
        libro.autor = autor;
        libro.categoria = categoria;
        res.status(200).json(libro);
    } else {
        res.status(404).json({msg: `No se encontró ningún libro con el ID ${id}`});
    }
}

const delLibros = (req, res, next) => {
    const {id} = req.params;
    const index = libros.findIndex(libro => libro.id === id);
    if (index !== -1) {
        libros.splice(index, 1);
        res.status(200).json({msg: `Libro con ID ${id} eliminado`});
    } else {
        res.status(404).json({msg: `No se encontró ningún libro con el ID ${id}`});
    }
}

module.exports = {
    getLibros,
    postLibros,
    putLibros,
    delLibros
}

