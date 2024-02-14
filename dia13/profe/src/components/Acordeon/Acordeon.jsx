import { useState } from 'react'
import './Acordeon.css'

export const Acordeon= () => {

    const containers = [
        { id : "asdasdadasdasd" , h2 : 'Matrix' , p : 'Mi nombre es Neo' },
        { id : "xaxaaxaxa" , h2 : 'Frozen' , p : 'Haz un muñeco de nieveeeeeeee' },
        { id : "gbgbgbgbgbgbg" , h2 : 'Cars'   , p : 'Cachaw!!!' },
    ]

    const [ acordeon , setAcordeon ] = useState("")
    const acordeonHandler = ( valor ) => setAcordeon(valor)

    return (
        <div className='Acordeon'>

            {containers.map( eachContainer =>
                <Container 
                    key={ eachContainer.id }
                    {...eachContainer }
                    acordeon={ acordeon }
                    acordeonHandler={ acordeonHandler } />
            )}
           
            
        </div>
    )
}
const Container = ( props ) => {
    const { id , h2 , p , acordeon , acordeonHandler } = props 
    return (
        <div className="Acordeon-container ">
            <h2 className="Acordeon-h2" onClick={ ()=> acordeonHandler(id) }>
                { h2 }
            </h2>
            <p className={ `Acordeon-p ${ acordeon === id ? 'isVisible' : '' }`}>
                { p }
            </p>
        </div>
    )
}