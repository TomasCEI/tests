import {useState, useRef} from 'react';

const ContadorRef = ()=> {

    const [inputValue, setInputValue] = useState("");
    const inputRef = useRef("");    // devuelve {current: ""}

    const [count, setCount] = useState(0);
    const countRef = useRef(0);     // devuelve {current: 0}

    const handleClickRef=() => {
        countRef.current=countRef.current+1; 
        console.log("incrementa SIN render:",countRef.current)
    }
    const handleClick = () => { 
        setCount(count+1); // incremento el state
        countRef.current=countRef.current+1;  // incremento el ref
    }
    
    return (
        <>
            <h4>input controlado por react (useState)</h4>
            <input  type="text" 
                    value={inputValue} 
                    onChange= { (e) => setInputValue(e.target.value)} 
                    placeholder="Como te llamas?" 
            />
            <div>
                On Change: <strong>{inputValue}</strong>
            </div>
            <hr />
            <h4>input NO controlado por react (useRef) </h4>
            <input  type="text"
                    onChange= {(e) => { inputRef.current=e.target.value }  }
                    placeholder="Como te llamas?" 
            />
            {/* función dummy para forzar un re-render de todo el componente */}
            <button onClick={handleClick}>Enviar</button>
            <div>
                On Submit: <strong>{inputRef.current}</strong>
            </div>
            <hr />
            <h3>Contador de renders: {count.current}</h3>
            <button onClick={handleClick}>Clicks con Render ({count})</button>
            <button onClick={handleClickRef}>Clicks sin Render ({countRef.current})</button>
         </>
    )
}

export default ContadorRef;