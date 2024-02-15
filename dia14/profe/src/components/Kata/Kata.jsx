import { useState } from "react"

export const Kata = () => {

    const [ booleano1 , setBooleano1 ] = useState(true)
    const [ booleano2 , setBooleano2 ] = useState(false)

    const toggle1Handler = () => setBooleano1(!booleano1)
    const toggle2Handler = () => setBooleano2(!booleano2)

    return (
        <>
            <h2>Kata de State</h2>
            <h3>{ booleano1 ? 'Si' : 'No'}</h3>
            <h3>{ booleano1 ? 'isVisible' : '' }</h3>
            <div className={ `Div ${ booleano1 ? 'isVisible' : '' } Div` }></div>
            <button onClick={ toggle1Handler } >Toggle</button>
        

            <h3>{ booleano2 ? 'Si' : 'No'}</h3>
            <h3>{ booleano2 ? 'isVisible' : '' }</h3>
            <div className={ `Div ${ booleano2 ? 'isVisible' : '' } Div` }></div>
            <button onClick={ toggle2Handler } >Toggle</button>

        </>
    )
}