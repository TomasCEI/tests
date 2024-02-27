
import misLibros from '../db/datos.js'


const listaLibros=misLibros.libros;

// es el formato que va a tener mi respuesta en todas mis consultas del API
const responseLibros={
    data: listaLibros,
    msg: ""
};

const helperCleanString = (str) => {
    return str.toString().trim().toLowerCase();
}

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


export const addLibro = (req, res) => {
    //console.log(req.body);
    const { titulo, autor, categoria} = req.body;
    const newId= Math.random();

    responseLibros.data.push({id:newId, titulo, autor, categoria});
    responseLibros.msg="Libro agregado con éxito";

    res.send(responseLibros);
}

export const removeLibro = (req, res) => {
    const idLibro=req.params.id;

     // Buscamos el índice del libro en la lista de libros
     const index = listaLibros.findIndex(libro => libro.id == idLibro);

    if (index !== -1) {
        // Si encontramos el libro, lo eliminamos de la lista de libros
        listaLibros.splice(index, 1);

        // Actualizamos la respuesta para enviar
        responseLibros.data = [];
        responseLibros.msg = `Libro con ID ${idLibro} eliminado`;
        responseLibros.cant = listaLibros.length;

        res.status(200).send(responseLibros);
    } else {
        // Si no se encuentra el libro con el id proporcionado, devolvemos un mensaje de error
        responseLibros.msg =`No se encontró ningún libro con el ID ${idLibro}`;
        res.status(404).send(responseLibros);
    }
}

export const updateLibro = (req, res) => {
    const { titulo, autor, categoria, id } = req.body;
    
    // Buscamos el índice del libro en la lista de libros
    const index = listaLibros.findIndex(libro => libro.id === id);

    if (index !== -1) {
        // Si encontramos el libro, actualizamos sus datos
        listaLibros[index] = {
            ...listaLibros[index],
            titulo,
            autor,
            categoria
        };

        // Actualizamos la respuesta para enviar
        responseLibros.data = listaLibros;
        responseLibros.msg = `Libro con ID ${id} actualizado`;
        responseLibros.cant = listaLibros.length;

        res.status(200).send(responseLibros);
    } else {
        // Si no se encuentra el libro con el id proporcionado, devolvemos un mensaje de error
        responseLibros.msg =`No se encontró ningún libro con el ID ${idLibro}`;
        res.status(404).send(responseLibros);
    }
}



// ----------------------------

export const getLibrosByAuthor = (req, res) => {
    const author = req.params.author; // Obtener el autor de los parámetros de la solicitud

    // Filtrar los libros por autor (exacto) ej: "Gabriel García Márquez" == "gabriel garcia marquez"
    const librosPorAutor = listaLibros.filter(libro => helperCleanString(libro.autor) == helperCleanString(author)); 

    // Filtrar los libros por autor (incluye) ej: "Gabriel García Márquez" == "gabri"
    // const librosPorAutor = listaLibros.filter(libro => helperCleanString(libro.autor).includes(author));

    if (librosPorAutor.length > 0) {
        res.status(200).send({
            data: librosPorAutor,
            msg: `Libros del autor: ${author}`,
            cant: librosPorAutor.length
        });
    } else {
        responseLibros.msg =`No se encontró ningún libro con el autor: ${author}`;
        res.status(404).send(responseLibros);
    }

}

export const getLibrosByCategorie = (req, res) => {
    // const author = req.params.author; // Obtener el autor de los parámetros de la solicitud
    // const librosPorAutor = listaLibros.filter(libro => libro.autor === author); // Filtrar los libros por autor

    // if (librosPorAutor.length > 0) {
    //     res.status(200).send({
    //         data: librosPorAutor,
    //         msg: `Libros del autor: ${author}`,
    //         cant: librosPorAutor.length
    //     });
    // } else {
    //     responseLibros.msg =`No se encontró ningún libro con el autor: ${author}`;
    //     res.status(404).send(responseLibros);
    // }
    res.status(200).send("getLibrosByCategorie en desarrollo")
}
