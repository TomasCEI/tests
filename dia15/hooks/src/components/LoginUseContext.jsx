import {useState, useContext, createContext} from 'react';

// si soy un componente externo, debo exportar el context, e importarlo en mi componente
//export const LoginContext = createContext([]);
const LoginContext = createContext([]);

const LoginUseContext = () => {
    const [logIn, setLogin] = useState(false);

    return (
            <LoginContext.Provider value={[logIn, setLogin]}>
                El usuario esta {logIn? "Si":"No"}
                <Nav  />
            </LoginContext.Provider>
    )
}

export default LoginUseContext;

const Nav = ()=>{
    return (
        <section>
        <nav> soy nav </nav>
        <LoginButton />
        </section>
    )
}

// si soy un componente externo, debo exportar el context, e importarlo en mi componente
//import {LoginContext} from './components/LoginUseContext';
const LoginButton = () => {
    //const [logIn, setLogin] = useState(false);
    const [logIn, setLogin] = useContext(LoginContext);

    const handleLogin= ()=>{
        setLogin(!logIn);
    }
    return (<>
            Estas logueado? {logIn?"Si":"No"}<br></br>
            <button onClick={handleLogin}>Login/Logout</button>
        </>)
}