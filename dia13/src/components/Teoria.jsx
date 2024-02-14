import { useState } from "react"

export const Teoria = () => {

    const [ numero , setNumero ] = useState(0)

    const aumentarHandler  = () => setNumero( numero + 1 )
    const disminuirHandler = () => setNumero( numero - 1 )
    const valeHandler = ( valor ) => setNumero(valor)

    const [ active , setActive ] = useState(true)

    const activeToggle = () => setActive( !active )
    const activeVale   = ( valor ) => setActive( valor )

    return (
        <>
            <h2>Teoria</h2>

            <div>
                <h3>{ active ? 'Si' : 'No'}</h3>
                <button onClick={ activeToggle }>Toggle</button>
                <button onClick={ ()=> activeVale(true)  }>Vale true</button>
                <button onClick={ ()=> activeVale(false) }>Vale false</button>
            </div>

            <div>
            <h3>{ numero }</h3>
                <button onClick={ aumentarHandler  }>Aumentar</button>
                <button onClick={ disminuirHandler }>Disminuir</button>
                <button onClick={ ()=> valeHandler(0) }>Numero vale 0</button>
                <button onClick={ ()=> valeHandler(1) }>Numero vale 1</button>
                <button onClick={ ()=> valeHandler(2) }>Numero vale 2</button>
            </div>

            
            

        </>
    )
}