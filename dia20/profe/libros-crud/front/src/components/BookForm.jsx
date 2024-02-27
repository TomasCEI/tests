import { useState, useEffect } from 'react';
import { useNavigate  } from 'react-router-dom'; //redirects
import { easyFetch } from '../helpers/utils.js';

const FormularioDeLibro = ({libro, setLibroEditado}) => {

  const [formData, setFormData] = useState(libro);
  const { id, titulo, autor, categoria } = formData;
  const navigate = useNavigate();

  // useEffect(() => {
  //   console.log("el componente se ha montado");
  // }, []);

  // useEffect(() => {
  //   console.log("el componente se ha actualizado");
  //   setFormData(libro);
  // }, [libro]);

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    if(id){
      // try {
      //   const response = await fetch('http://localhost:8080/api/v1/libros/'+id, {
      //     method: 'PUT',
      //     headers: {
      //       'Content-Type': 'application/json'
      //     },
      //     body: JSON.stringify(formData)
      //   });
  
      //   if (!response.ok) {
      //     throw new Error('Hubo un problema al enviar los datos.');
      //   }
  
      //   const responseData = await response.json();
      //   console.log('Datos enviados correctamente:', responseData);
      // } catch (error) {
      //   console.error('Error al enviar los datos:', error.message);
      // }

      //setLibroEditado(null);

    } else {
      /*
      try {
        const response = await fetch('http://localhost:8080/api/v1/libros/', {
          method: 'POST',
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
      }*/
    }
  };


  
  const handleEditBook = () => {
    console.log('Editando libro con ID:', id);
    easyFetch({
      url: 'http://localhost:8080/api/v1/libros/'+id,
      method: 'PUT',
      body: formData,
      callback: (data) => {
        console.log('Datos enviados correctamente:', data);
        setLibroEditado(null);
      }
    });
  }

  const handleCreateBook = () => {
    console.log('Agregando nuevo libro');
    easyFetch({
      url: 'http://localhost:8080/api/v1/libros/',
      method: 'POST',
      body: formData,
      callback: (data) => {
        console.log('Libro creado correctamente:', data);
        navigate('/lista');  // Redirect to BookList si no estoy ahí
      }
    });
  }

  const handleRemoveBook = () => {
    console.log('Eliminando libro con ID:', id);
    easyFetch({
      url: 'http://localhost:8080/api/v1/libros/'+id,
      method: 'DELETE',
      callback: (data) => {
        console.log('Libro eliminado correctamente:', data);
        setLibroEditado(null);
      }
    });
  }

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
        {/* <button>
          Enviar
        </button> */}
      </form>

        { id ?  (
          <>
              <button onClick={handleEditBook}>Guardar</button>
              <button onClick={handleRemoveBook}>X</button>
          </>
            ) : (
              <button onClick={handleCreateBook}>Crear</button>
            )
        }
    </div>
  );
};

export default FormularioDeLibro;