import misDatos from '../db/datos.js';


const listaLibros = misDatos.libros;

// formato de Respuesta
const responseAPI = {
    data: listaLibros,
    msg:"",
    status: "ok"
}

export const getAllLibros = (req, res) => {
    responseAPI.data=listaLibros;
    responseAPI.msg="Obtener libros";
    responseAPI.status="ok";
    res.status(200).send(responseAPI);

    // responseAPI.msg="No se encontraron libros";
    // responseAPI.status="error";
    // res.status(404).send(responseAPI);
}

export const createLibro = (req, res) => {

    const {titulo, autor, categoria} = req.body;
    const newId= Math.random();

    listaLibros.push({id:newId, titulo, autor, categoria});

    responseAPI.data=listaLibros;
    responseAPI.msg="Crear nuevo libro";
    responseAPI.status="ok";
    res.status(200).send(responseAPI);
}

export const getLibroById = (req, res) => {
    responseAPI.data="";
    responseAPI.msg="Obtener libros";
    responseAPI.status="ok";
    res.status(200).send(responseAPI);
}

export const updateLibro = (req, res) => {
    // 1. recibir datos del Body (json)
    console.clear();
    //console.log(req.body);
    const {id, titulo, autor, categoria } = req.body;

    // 2. obtener de la lista de libros , el libro a editar (id)
    const index = listaLibros.findIndex(libro => libro.id == id);

    // 3. actualizar el libro con los nuevos valores
    listaLibros[index] = {
        ...listaLibros[index],
        titulo,
        autor,
        categoria
    }
    

    // respondo con la nueva lista de libros ACTUALIZADA

    responseAPI.data=listaLibros;    
    responseAPI.cant=listaLibros.length;
    responseAPI.msg="Actualizar libro con valores específicos";
    responseAPI.status="ok";
    res.status(200).send(responseAPI);
}

export const deleteLibro = (req, res) => {
    // 1. recibir datos del Body (json)
    console.clear();

    // obtener el ID de la URL (no del body) ej: http://dominio.com/endpoint/:id
    const idLibro = req.params.id;


    // 2. obtener de la lista de libros , el indice del libro a eliminar (id)
    const index = listaLibros.findIndex(libro => libro.id == idLibro);

    if(index !== -1) {
        // 3. Eliminar el item del array
        //    eliminar un item, desde el indice seleccionado
        responseAPI.data=listaLibros[index];
        listaLibros.splice(index, 1);

        responseAPI.msg="Libro Eliminado";
        res.status(200).send(responseAPI);
    } else {
        // No se encontró 
        responseAPI.msg="No se encontró un libro para eliminar";
        res.status(404).send(responseAPI);
    }

}

