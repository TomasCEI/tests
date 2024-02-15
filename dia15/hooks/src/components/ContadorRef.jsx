import {useState, useEffect, useRef} from 'react';

const ContadorRef = ()=> {

    const [inputValue, setInputValue] = useState("");
    const count = useRef(0); // devuelve {current: valor}

    useEffect( ()=> {
        //console.log(count.current);
        count.current = count.current+1;
    })
    
    return (
        <>
            <input type="text" value={inputValue}
            onChange= {(e) => {
                setInputValue(e.target.value);
            }  }
            placeholder="Como te llamas?" />
            <div>
            Mi nombre es <strong>{inputValue}</strong>
            </div>
            <h1>Cantidad de renders: {count.current}</h1>
         </>
    )
}

export default ContadorRef;