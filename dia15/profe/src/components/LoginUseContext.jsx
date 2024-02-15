import {useState, createContext, useContext} from "react";

//import {LoginContext} from "../App"

const LoginContext = createContext([]);


const LoginUseContext = () => {

    const [logIn, setLogin] = useState(false);

    return (
        <LoginContext.Provider value={[logIn, setLogin]}>
            El usuario está {logIn?"Si":"No"}
            <Nav />
        </LoginContext.Provider>
    )
}

export default LoginUseContext;

const Nav = () => {
    return (
        <section>
        <nav>
            soy nav. 
        </nav>

        <LoginButton />
        </section>
      
    )
}

const LoginButton = () => {
    //const [logIn, setLogin] = useState(false);
    const [logIn, setLogin] = useContext(LoginContext);

    const handleLogin = ()=> {
        setLogin(!logIn);
    }
    return (
        <>
        Estas logueado ? {logIn?"Si":"No"}<br></br>
        <button onClick={handleLogin}>Login/LogOut</button>
        </>
        
    )
}