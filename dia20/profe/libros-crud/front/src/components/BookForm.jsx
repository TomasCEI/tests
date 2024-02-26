import React, { useState } from 'react';
//import { v4 as uuidv4 } from 'uuid';

const FormularioDeLibro = ({libro}) => {
//    const FormularioDeLibro = (props) => {
//   const [libro, setLibro] = useState({
//     titulo: props.libro ? props.libro.titulo : '',
//     autor: props.libro ? props.libro.autor : '',
//     cantidad: props.libro ? props.libro.cantidad : '',
//     precio: props.libro ? props.libro.precio : '',
//     fecha: props.libro ? props.libro.fecha : ''
//});
  const [formData, setFormData] = useState(libro);

  //const [errorMsg, setErrorMsg] = useState('');
  const { titulo, autor, precio, cantidad } = libro;

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    //let errorMsg = '';

    
    const data=JSON.stringify(formData);
    console.log("data es: ", data);


    //   const libro = {
    //     id: 5, // uuidv4(),
    //     titulo,
    //     autor,
    //     precio,
    //     cantidad,
    //     fecha: new Date()
    //   };


      try {
        const response = await fetch('http://localhost:8080/api/v1/libros/'+5, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          //body: JSON.stringify(libro)
          body: data
        });
  
        if (!response.ok) {
          throw new Error('Hubo un problema al enviar los datos.');
        }
  
        const responseData = await response.json();
        console.log('Datos enviados correctamente:', responseData);
      } catch (error) {
        console.error('Error al enviar los datos:', error.message);
      }

    //setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
      const { name, value } = event.target;
      setFormData({ ...formData, [name]: value });

  };

  return (
    <div className="main-form">
      {/* {errorMsg && <p className="errorMsg">{errorMsg}</p>} */}
      <form onSubmit={handleOnSubmit}>
          <label>Nombre del Libro</label>
          <input
            className="input-control"
            type="text"
            name="titulo"
            //value={titulo}
            value={formData.titulo}
            placeholder="Ingrese el nombre del libro"
            onChange={handleInputChange}
          />

          <br />
          <label>Autor del Libro</label>
          <input
            className="input-control"
            type="text"
            name="autor"
            //value={autor}
            value={formData.autor}
            placeholder="Ingrese el nombre del autor"
            onChange={handleInputChange}
          />
          
          <br />
          <label>Cantidad</label>
          <input
            className="input-control"
            type="number"
            name="cantidad"
            //value={cantidad}
            value={formData.cantidad}
            placeholder="Ingrese la cantidad disponible"
            onChange={handleInputChange}
          />
          
          <br />
          <label>Precio del Libro</label>
          <input
            className="input-control"
            type="text"
            name="precio"
            //value={precio}
            value={formData.precio}
            placeholder="Ingrese el precio del libro"
            onChange={handleInputChange}
          />
          
          <br />
        <button variant="primary" type="submit" className="submit-btn">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default FormularioDeLibro;