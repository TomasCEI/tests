import misLibros from '../db/datos.js'


const listaLibros=misLibros.libros;

// es el formato que va a tener mi respuesta en todas mis consultas del API
const responseLibros={
    data: listaLibros,
    msg: ""
};


export const getAllCategories = (req, res) => {
    const cate=helperCleanString(req.params.category);
    responseLibros.data = listaLibros.filter((libro)=> helperCleanString(libro.categoria).includes(cate));
    responseLibros.msg="Buscando libros con categoría: "+cate;
    responseLibros.cant=responseLibros.data.length;
    console.log("Libros por categoría", cate);
    res.send(responseLibros);
}