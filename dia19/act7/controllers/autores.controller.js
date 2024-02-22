import misLibros from '../db/datos.js'


const listaLibros=misLibros.libros;

// es el formato que va a tener mi respuesta en todas mis consultas del API
const responseLibros={
    data: listaLibros,
    msg: ""
};


export const getAllAuthors = (req, res) => {
    const author=helperCleanString(req.params.author);
    
    
    // responseLibros.data=listaLibros.filter((libro)=> helperCleanString(libro.autor)==author);

    // string.includes(substring)  // check if string contains a substring
    responseLibros.data=listaLibros.filter((libro) => helperCleanString(libro.autor).includes(author));


    responseLibros.msg="Buscando Autores con string: "+author;
    responseLibros.cant=responseLibros.data.length;
    console.log("Libros por autor", author);
    res.send(responseLibros);
}