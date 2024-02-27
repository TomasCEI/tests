
import React, { useState, useEffect } from 'react';

import BookForm from './BookForm';

const BookList = () => {
    const [libros, setLibros] = useState([]);
    const [libroEditado, setLibroEditado] = useState(null);

    useEffect(() => {
      fetchLibros();
    }, [libros]);

    const fetchLibros = async () => {
        try {
          const response = await fetch('http://localhost:8080/api/v1/libros');
          if (!response.ok) {
            throw new Error('Error al obtener los libros');
          }
          const data = await response.json();
          setLibros(data.data);
        } catch (error) {
          console.error(error);
        }
    };

    const handleEditLibro = (libro) => {
        console.log(`Editar libro con ID: ${libro.id}`);
        setLibroEditado(libro);
      };


  return  (
    <>
    <h2>Lista de Libros</h2>
        <div className="cardList">
            {libros.map(libro => (
            <div className="card" key={libro.id}>
                <strong>Título:</strong> {libro.titulo}, <strong>Autor:</strong> {libro.autor}, <strong>Categoría:</strong> {libro.categoria}
                <button onClick={() => handleEditLibro(libro)}>Editar</button>
            </div>
            ))}
        </div>
        {libroEditado && <BookForm libro={libroEditado} setLibroEditado={setLibroEditado} />}
    </>
    );
};

export default BookList;