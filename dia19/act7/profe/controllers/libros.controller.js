
import { PORT, domain } from '../config/config.js';
import misLibros from '../db/datos.js'


const listaLibros=misLibros.libros;
const fulldomain=`${domain}:${PORT}`;

const responseLibros={
    data: listaLibros,
    msg: ""
};



export const getAllLibros= (req, res) => {
    // obtener libros
    responseLibros.data=listaLibros; // vuelvo a cargar la lista de libros
    responseLibros.msg="Todos los libros";
    responseLibros.cant=listaLibros.length;
    res.status(200).send(responseLibros);
}

export const removeLibro= (req, res) => {
}

export const addLibro= (req, res) => {
}

export const updateLibro= (req, res) => {
}