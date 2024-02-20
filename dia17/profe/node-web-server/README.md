actividaD:


a partir del siguiente JSON:
{
    "libros": [
        {
            "id": 1,
            "titulo": "El nombre del viento",
            "autor": "Patrick Rothfuss",
            "categoria": "Fantasía"
        },
        {
            "id": 2,
            "titulo": "1984",
            "autor": "George Orwell",
            "categoria": "Ciencia ficción"
        },
        {
            "id": 3,
            "titulo": "Cien años de soledad",
            "autor": "Gabriel García Márquez",
            "categoria": "Realismo mágico"
        }
    ]
}

Creen las siguientes rutas en Express para obtener información específica:

- Obtener todos los libros: Crea una ruta que devuelva todos los libros del objeto JSON.
- Obtener un libro por su ID: Crea una ruta que acepte un parámetro de ruta para el ID de un libro y devuelva el libro correspondiente.
- Buscar libros por autor: Crea una ruta que acepte un parámetro de consulta para el autor y devuelva todos los libros escritos por ese autor.
- Buscar libros por categoría: Crea una ruta que acepte un parámetro de consulta para la categoría y devuelva todos los libros de esa categoría.
- Obtener lista de autores: Crea una ruta que devuelva una lista de todos los autores sin repetición.
- Obtener lista de categorías: Crea una ruta que devuelva una lista de todas las categorías sin repetición.


// pasar de un string a una url para los queries
https://onlinetools.com/utf8/url-encode-utf8




ejemplo para buscar x categoría:
// Definición de la función controladora para obtener libros por categoría
export const librosPorCategoria = (req, res) => {
    const categoria = req.params.categoria;
    // Aquí asumimos que `libros` es tu objeto JSON que contiene la lista de libros
    const librosCategoria = libros.filter(libro => libro.categoria === categoria);
    const jsonRes = {
        libros: librosCategoria,
        msg: `Libros de la categoría "${categoria}"`
    };
    res.status(200).json(jsonRes);
};

// Asignación de la ruta y la función controladora en el enrutador
router.get("/libros/categoria/:categoria", librosPorCategoria);