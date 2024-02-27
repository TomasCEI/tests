import React, { useState } from 'react';
import { useNavigate  } from 'react-router-dom'; //redirects

const FormularioDeLibro = ({libro, setLibroEditado}) => {

  const [formData, setFormData] = useState(libro);
  const { id, titulo, autor, categoria } = formData;
  const navigate = useNavigate();

  const handleOnSubmit = async (e) => {
    e.preventDefault();

   
    if(id){
      console.log('Editando libro con ID:', id);
      setLibroEditado(null);
    } else {
      console.log('Agregando nuevo libro');
      // Redirect to BookList
      navigate('/lista'); 
    }
    return;

       try {
        const response = await fetch('http://localhost:8080/api/v1/libros/'+id, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });
  
        if (!response.ok) {
          throw new Error('Hubo un problema al enviar los datos.');
        }
  
        const responseData = await response.json();
        console.log('Datos enviados correctamente:', responseData);
      } catch (error) {
        console.error('Error al enviar los datos:', error.message);
      }

      setLibroEditado(null);
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
            value={titulo}
            placeholder="Ingrese el nombre del libro"
            onChange={handleInputChange}
          />

          <br />
          <label>Autor del Libro</label>
          <input
            className="input-control"
            type="text"
            name="autor"
            value={autor}
            placeholder="Ingrese el nombre del autor"
            onChange={handleInputChange}
          />
          
          <br />
          <label>Categoria</label>
          <input
            className="input-control"
            type="text"
            name="categoria"
            value={categoria}
            placeholder="Categoria"
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