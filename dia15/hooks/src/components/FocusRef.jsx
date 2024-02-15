import {useRef} from "react";

const FocusRef = () =>{
    const nameRef = useRef();

    const focus = ()=>{
        console.log("Usar Js para seleccionar el input")
        console.log(nameRef);
        nameRef.current.focus();
    }
        
    const blur = ()=> {
        console.log("Usar Js para salir del input")
        nameRef.current.blur();
    }

    const scrollToBottom = ()=> {
        console.log("Scroll hasta el input");
        nameRef.current.scrollIntoView({behavior: "smooth"});
    }

    const misEstilos = { marginBottom: "2000px" }
    
    return(
        <section>
            {/* Scroll to Botton */}
            <button onClick={scrollToBottom}>Bajar</button>
            <div className="separator" style={misEstilos}>Separador</div>

            {/* Focus y Blur */}
            <label htmlFor="name">Ingresa tu nombre</label>
            <input ref={nameRef} type="text" name="name" id="name" />
            <button onClick={focus}>Focus</button>
            <button onClick={blur}>Blur</button>
        </section>
    )
}

export default FocusRef;