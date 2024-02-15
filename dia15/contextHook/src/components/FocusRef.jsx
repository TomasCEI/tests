import {useRef} from "react";

const FocusRef = () =>{
    const myInputRef = useRef();

    const focus = ()=>{
        console.log("Usar el Método de JS para seleccionar el input")
        console.log(myInputRef);
        myInputRef.current.focus(); // pasamos el focus al input
    }
        
    const blur = ()=> {
        console.log("Usar el Método de JS para salir del input")
        myInputRef.current.focus(); // pasamos el focus del btn al input
        myInputRef.current.blur();  // quitamos el focus del input
    }

    const scrollToBottom = ()=> {
        console.log("Scroll hasta el input");
        // utilizamos el método scrollIntoView para hacer scroll hasta el input
        myInputRef.current.scrollIntoView({behavior: "smooth"});
    }

    return(
        <section>
            {/* Scroll to Botton */}
            <button onClick={scrollToBottom}>Bajar</button>
            <div className="separator" style={{ marginBottom: "2000px" }}>Separador</div>

            {/* Focus y Blur */}
            <label htmlFor="name">Ingresa tu nombre </label>
            <input ref={myInputRef} type="text" name="name" id="name" /><br />
            <button onClick={focus}>Focus</button> &nbsp;
            <button onClick={blur}>Focus y luego Blur</button>
        </section>
    )
}

export default FocusRef;