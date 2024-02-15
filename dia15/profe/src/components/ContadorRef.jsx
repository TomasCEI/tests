import { useState, useEffect, useRef } from 'react'

/**
 * Persiste los valores entre Renders
 * Su función es similar a la de useState, pero
 * no fuerza a un re-render
 * 
 * - obtener la referencia de un elemento del DOM
 * - 
 */
function ContadorRef() {
    const [inputValue, setInputValue] = useState("");
    //const [count, setCount] = useState(0)
    const count = useRef(0);
    
    useEffect(() => {
       // setCount(count +1);
      count.current = count.current + 1;
    });

    return (
      <>
        <input
          type="text"
          placeholder='Cual es tu nombre?'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <div>
        Mi nombre es <strong>{inputValue}</strong>
        </div>
        <h1>Cantidad de Renders: {count.current}</h1>
      </>
    );
  
  }

  export default ContadorRef;