import {useRef, useState, useEffect } from 'react';
import './Login.css';

// ej: https://netflix-proyecto.vercel.app/app/main

const Login = () => {

    // 3. probando use ref
    useEffect( ()=> {
        // mostrar cursor en el primer input
        usuarioRef.current.focus();
      }, [])

    const [login, setLogin] = useState({
        escrito:false,
        exito:false
    });
    const {escrito, exito} = login;

    const usuarioRef = useRef(null);
    const passwordRef = useRef(null);   

    // 1. Método JS tradicional
    const handleSubmit= (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        console.log(email+ " " + password);
    }

    // 2. Método con useRef
    const handleForm = (e) => {
        e.preventDefault();

        const user = usuarioRef.current.value;
        const pass = passwordRef.current.value;

        if(user === 'admin' && pass === '1234'){
            setLogin({escrito:true, exito:true});
            alert("Login exitoso");
        }else {
            setLogin({escrito:true, exito:false});
            alert("Login incorrecto");
        }
        console.log("Usuario: " + user + " Password: " + pass);
    }



    return (
        <div className="Login">
        <label htmlFor="email">Email</label>
        <input ref={usuarioRef} type="email" id="email" name="email" />

        <label htmlFor="password">Password</label>
        <input ref={passwordRef} type="password" id="password" name="password" />

        <button type="submit" onClick={handleForm}>Login</button>
        </div>
    )
}

export default Login;