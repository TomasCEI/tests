import { useState } from 'react'
import './Slider.css'

export const Slider = () => {

    const imagenes = [
        { id : 0 , src : '/assets/carees.jpeg'      , alt : 'Careers'    },
        { id : 1 , src : '/assets/elio.jpg'         , alt : 'Elio'       },
        { id : 2 , src : '/assets/win-or-lose.jpg'  , alt : 'Win or Lose'},
    ]

    const [ active , setActive ] = useState(0)

    const nextHandler = () => {
        setActive( active + 1 )

        if( active >= 2 ){
            setActive(0)
        }
    }
    const prevHandler = () => {
        setActive( active - 1 )

        if( active <= 0 ){
            setActive(2)
        }
    }
    const pointHandler = ( valor ) => setActive(valor)

    return (
        <>
            <div className="Slider">
                <div className="Slider-container">
                    
                    { imagenes.map( eachImg =>
                        <Imagen key={ eachImg.id } {...eachImg } active={ active } />
                    )}
                    
                </div>

                <Flechas 
                    prevHandler={ prevHandler }
                    nextHandler={ nextHandler }  />
                
                <ul className="Slider-points">
                    
                    {imagenes.map( eachImg =>
                        <Punto 
                            key={ eachImg.id } 
                            {...eachImg } 
                            active={ active }
                            pointHandler={ pointHandler }  />
                    )}
                    
                </ul>
            </div>
        
        </>
    )
}
const Imagen = ( props ) => {
    const { id, src , alt , active } = props 
    return (
        <img 
            className={ `Slider-img ${ active === id ? 'isVisible' : ''}` } 
            src={ src }     
            alt={ alt } />
    )
}
const Punto = ( props ) => {
    const { id , active , pointHandler } = props 
    return (
        <li className="Slider-point">
            <button 
                className={ `Slider-btn ${ active === id ? 'isSelected' : '' }` } 
                onClick={ ()=> pointHandler(id) }></button>
        </li>
    )
}
const Flechas = ( props ) => {
    const { nextHandler , prevHandler } = props 
    return (
        <>
            <button className="Slider-next" onClick={ nextHandler }>Next</button>
            <button className="Slider-prev" onClick={ prevHandler }>Prev</button>
        </>
    )
}




export const SliderSinCSS = () => {

    const [ active , setActive ] = useState(0)

    const nextHandler = () => {
        setActive( active + 1 )

        if( active >= 2 ){
            setActive(0)
        }
    }
    const prevHandler = () => {
        setActive( active - 1 )

        if( active <= 0 ){
            setActive(2)
        }
    }
    const pointHandler = ( valor ) => setActive(valor)

    return (
        <>
            <div className="Slider">
                <div className="Slider-container">
                    { active === 0 && <img src="" alt="Imagen 0" className="Slider-img" />}
                    { active === 1 && <img src="" alt="Imagen 1" className="Slider-img" />}
                    { active === 2 && <img src="" alt="Imagen 2" className="Slider-img" />}
                </div>

                <button className="Slider-next" onClick={ nextHandler }>Next</button>
                <button className="Slider-prev" onClick={ prevHandler }>Prev</button>

                <ul className="Slider-points">
                    <li className="Slider-point">
                        <button className="Slider-btn" onClick={ ()=> pointHandler(0) }>0</button>
                    </li>
                    <li className="Slider-point">
                        <button className="Slider-btn" onClick={ ()=> pointHandler(1) }>1</button>
                    </li>
                    <li className="Slider-point">
                        <button className="Slider-btn" onClick={ ()=> pointHandler(2) }>2</button>
                    </li>
                </ul>
            </div>
        
        </>
    )
}