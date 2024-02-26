import React from 'react';
import BookForm from './BookForm';

const BookAdd = ({ libroId }) => {


  const handleOnSubmit = (libro) => {
    console.log(`Editando libro con ID: ${libroId}`, libro);
    console.log(JSON.stringify(libro));
    // Aquí puedes enviar la solicitud al backend para editar el libro con el ID proporcionado.
  };

  return (
    <>
      <BookForm handleOnSubmit={handleOnSubmit} />
    </>
  );
};

export default BookAdd;