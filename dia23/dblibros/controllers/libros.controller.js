import misDatos from '../db/seed.js'; // lista de libros para seed
import { Libros } from '../db/sequelize.db.js'; // mis métodos de sequelizer


const listaLibros = misDatos.libros;

// formato de Respuesta
const responseAPI = {
    data: listaLibros,
    msg:"",
    status: "ok"
}

export const seedLibros = async (req, res) => {
    await Libros.truncate(); // vaciar tabla
    const libros = await Libros.bulkCreate(listaLibros);
    responseAPI.data=libros;
    responseAPI.msg="Lista de libros creada!";
    responseAPI.status="ok";
    res.status(200).send(responseAPI);
}

export const getAllLibros = async (req, res) => {
    responseAPI.data=await Libros.findAll();
    responseAPI.msg="Obtener libros";
    responseAPI.status="ok";
    res.status(200).send(responseAPI);
}

export const createLibro = async(req, res) => {
    delete req.body.id; // quito el id=0; que envío desde el front
    const newBook = await Libros.create(req.body)

    responseAPI.data=newBook;
    responseAPI.msg="Crear nuevo libro";
    responseAPI.status="ok";
    res.status(200).send(responseAPI);
}

export const getLibroById = async(req, res) => {

    const Libro = await Libros.findByPk(req.params.id);
    if(!Libro){
        responseAPI.msg="Libro no encontrado";
        responseAPI.status="ok";
        res.status(404).send(responseAPI);
        return;
    }

    await Libro.update(req.body);
    responseAPI.data=Libro;
    responseAPI.msg="Obtener libros por id";
    responseAPI.status="ok";
    res.status(200).send(responseAPI);
}

export const updateLibro = async(req, res) => {
    const Libro = await Libros.findByPk(req.params.id);
    if(!Libro){
        responseAPI.msg="Libro no encontrado";
        responseAPI.status="ok";
        res.status(404).send(responseAPI);
        return;
    }

    await Libro.update(req.body);
    // respondo con la nueva lista de libros ACTUALIZADA
    responseAPI.data=Libro;
    responseAPI.msg="Actualizar libro con valores específicos";
    responseAPI.status="ok";
    res.status(200).send(responseAPI);
}

export const deleteLibro = async(req, res) => {
    const Libro = await Libros.findByPk(req.params.id);
    if(!Libro){ // No se encontró 
        responseAPI.msg="No se encontró un libro para eliminar";
        res.status(404).send(responseAPI); return;
    }
    responseAPI.data=Libro;
    await Libro.destroy();
    responseAPI.msg="Libro Eliminado";
    res.status(200).send(responseAPI);
}

