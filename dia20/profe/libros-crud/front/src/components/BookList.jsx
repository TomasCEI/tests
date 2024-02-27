
import React, { useState, useEffect } from 'react';
import { easyFetch } from '../helpers/utils.js';
import BookForm from './BookForm';

const BookList = () => {
    const [libros, setLibros] = useState([]);
    const [libroEditado, setLibroEditado] = useState(null);

    useEffect(() => {
      fetchLibros();
    }, [libroEditado]);

    const fetchLibros = async () => {

        // try {
        //   const response = await fetch('http://localhost:8080/api/v1/libros');
        //   if (!response.ok) {
        //     throw new Error('Error al obtener los libros');
        //   }
        //   const data = await response.json();
        //   setLibros(data.data);
        // } catch (error) {
        //   console.error(error);
        // }

        // const data = await easyFetch({url: 'http://localhost:8080/api/v1/libros'});
        // console.log("DATOS ES:",data);
        easyFetch({
            url: 'http://localhost:8080/api/v1/libros/',
            callback: (data) => {
              console.log('Libros obtenidos:', data);
              setLibros(data.data);
            }
          });
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
                <strong> {libro.titulo}</strong><br />
                <strong>Autor:</strong> {libro.autor}
                <strong>Categoría:</strong> {libro.categoria}
                <button onClick={() => handleEditLibro(libro)}>Editar</button>
            </div>
            ))}
        </div>
        {/* incluyo un "key" para que se re-renderize el componente cuando cambie el libroEditado */}
        {/* incluyo "setLibroEditado" para ponerlo en Null una vez cambiados los datos, así se cierra el modal/formulario */}
        {libroEditado && <BookForm key={libroEditado.id} libro={libroEditado} setLibroEditado={setLibroEditado} />}
    </>
    );
};

export default BookList;