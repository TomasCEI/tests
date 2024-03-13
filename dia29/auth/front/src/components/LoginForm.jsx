

import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom'; // redirige a donde querramos
import { easyFetch } from '../helpers/utils';


function LoginForm() {

    //const [formData, setFormData] = useState();
    //const {user, pass} = formData;

    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");

    const navegador = useNavigate();

    /*
    const handleInputChange = (e) => {
        const {name, value} = e.target; // obtengo del input el nombre y el valor

        // actualizo mi formData con el nuevo valor del input
        // conservando los valores anteriores
        setFormData({...formData, [name]:value});
    }

    const handleLogin = async () => {
        easyFetch({
            url: "http://localhost:3000/API/v1/auth/login",
            method: 'POST', 
            body: formData,
            callback: (data) => {
                console.log("EXITO loggedin!!! " , data);
                if(data.success) {
                    navegador("/lista");
                } else {
                    alert("Datos inválidos");
                }
            }
        })
    }
    */

    
    const handleSubmit= (e) => {
        e.preventDefault();

        easyFetch({
            url: "http://localhost:3000/API/v1/auth/login",
            method: 'POST', 
            body: JSON.stringify({user: user, pass: pass}),
            callback: (data) => {
                console.log("EXITO loggedin!!! " , data);

                if(data.success) {
                    navegador("/lista");
                } else {
                    alert("Datos inválidos");
                }
            }
        })
    }

    const formStyle=  {
        display: "flex",
        flexDirection: "column"
    }

    return (
      <>
        <form 
        onSubmit={handleSubmit} 
        style={formStyle}
        >
            <label htmlFor="user">Usuario</label>
            <input type="text" id="user" name="user"
            
                value={user}
                placeholder="Ingrese su usuario"
                //onChange={handleInputChange}
                onChange={(e)=>setUser(e.target.value)}
            />

            <label htmlFor="pass">Clave</label>
            <input type="password" id="pass" name="pass"
            
                value={pass}
                placeholder="Ingrese su clave"
                //onChange={handleInputChange}
                onChange={(e)=> setPass(e.target.value)}
            />

            <input type="submit" value="enviar" />
        </form>
        {/* <button onClick={handleLogin}>Login</button> */}
      </>
    )
  }

  export default LoginForm;