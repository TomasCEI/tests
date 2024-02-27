import {useState, useEffect} from 'react';

const BookForm = ({libro})=>{

    const [formData, setFormData] = useState(libro);
    const {titulo, autor, categoria, id} = formData;


    useEffect( ()=> {
        setFormData(libro);
        //console.log("Libro es", libro);
        //console.log("FormData es", formData);
    }, [libro])

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("ENVIANDO EL FORMULARIO CON REACT!");

        try{
            const url="http://localhost:3000/API/v1/libros/"+id;
            const response = await fetch(url, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            } )

            if(!response.ok){
                throw new Error ("Hubo un problema al enviar los datos");
            }

            const responseData = await response.json();
            console.log(responseData);


        }catch (error){
            console.log(error);
        }


    }

    const handleInputChange = (e) => {
        const {name, value} = e.target; // obtengo del input el nombre y el valor

        // actualizo mi formData con el nuevo valor del input
        // conservando los valores anteriores
        setFormData({...formData, [name]:value});
    }

    return (
        <>
        <form onSubmit={handleSubmit} className="main-form">
            <label>Nombre del Libro</label>
            <input 
                type="text"
                className="input-control"
                name="titulo"
                value={titulo}
                placeholder="Ingrese título del libro"
                onChange={ handleInputChange}
            /><br />

            <label>Autor del libro</label>
            <input 
                type="text"
                className="input-control"
                name="autor"
                value={autor}
                placeholder="Ingrese el autor del Libro"
                onChange={handleInputChange}
            /><br />

            <label>Categoría</label>
            <input 
                type="text"
                className="input-control"
                name="categoria"
                value={categoria}
                placeholder="Ingrese la categoría del Libro"
                onChange={handleInputChange}
            /><br />

            <button type="submit">Guardar</button>
        </form>
        </>
    )
}

export default BookForm;