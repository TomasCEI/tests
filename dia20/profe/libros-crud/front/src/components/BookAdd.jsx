import React from 'react';
import BookForm from './BookForm';

const BookAdd = () => {


  // const handleOnSubmit = (libro) => {
  //   console.log(`Editando libro con ID: ${libroId}`, libro);
  //   console.log(JSON.stringify(libro));
  //   // Aquí puedes enviar la solicitud al backend para editar el libro con el ID proporcionado.
  // };
  const emptyBook= {id: 0, titulo:'', autor:'', categoria:''}

  return (
    <>
      <BookForm libro = {emptyBook}/>
    </>
  );
};

export default BookAdd;