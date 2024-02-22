
import misLibros from '../db/datos.js'


const listaLibros=misLibros.libros;

// es el formato que va a tener mi respuesta en todas mis consultas del API
const responseLibros={
    data: listaLibros,
    msg: ""
};

// obtener todos los libros
export const getAllLibros = (req, res) => {
    responseLibros.data=listaLibros; // vuelvo a cargar la lista de libros
    responseLibros.msg="Todos los libros";
    responseLibros.cant=listaLibros.length;
    res.status(200).send(responseLibros);
}

export const getLibroById = (req, res) => {
    const idLibro=req.params.id;
    console.log(req.params);

    // reviso si id es un número
    if (isNaN(idLibro)) {
        responseLibros.msg="El id debe ser un número";
        delete responseLibros.data;
        res.status(400).send(responseLibros);
        return;
    }

    responseLibros.data=listaLibros.find((libro)=> libro.id==idLibro);
    responseLibros.msg="Libro con id: "+idLibro;
    console.log("Libros por id");
    res.status(200).send(responseLibros);
}

export const getLibrosByAuthor = (req, res) => {

}

export const getLibrosByCategorie = (req, res) => {

}

export const addLibro = (req, res) => {
    //console.log(req.body);
    const { titulo, autor, categoria} = req.body;
    const newId= Math.random();

    responseLibros.data.push({id:newId, titulo, autor, categoria});
    responseLibros.msg="Libro agregado con éxito";

    res.send(responseLibros);
}

export const removeLibro = (req, res) => {

    res.send("eliminar libro en desarrollo");
}

export const updateLibro = (req, res) => {
    
    res.send("actualizar libro en desarrollo");
}