import { useState } from 'react'
import './Lightbox.css'

export const Lightbox= () => {

    const imagenes = [
        { id : 0 , src : "/assets/mac.jpg"   ,alt : 'Sonoma'},
        { id : 1 , src : "/assets/mac2.jpg"  ,alt : 'Cucamonga'},
    ]

    const [ lightbox , setLightbox] = useState("")

    const lightboxHandler = ( valor ) => setLightbox(valor)

    return (
        <>
            <div className="Grid">
                
                {imagenes.map( eachImg =>
                    <Imagen 
                        key={ eachImg.id }
                        {...eachImg }
                        lightboxHandler={lightboxHandler} />
                )}
            
            </div>

            <LightboxDiv 
                ruta={lightbox}
                lightboxHandler={ lightboxHandler }/>

        </>
    )
}

const Imagen = ( props ) => {
    const { id , src , alt , lightboxHandler } = props 
    return (
        <img 
            src={ src }
            alt={ alt }
            className="Grid-img"
            loading='lazy'
            onClick={ ()=> lightboxHandler( src )} />
    )
}
const LightboxDiv = ( props ) => {
    const { ruta , lightboxHandler } = props 
    return (
        <div className={`Lightbox ${ ruta ? 'isVisible' : '' }`}>
            <button
                onClick={ ()=> lightboxHandler("") } 
                className="Lightbox-btn">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                </svg>
            </button>
            <img src={ ruta } alt="Imagen Grande" className="Lightbox-img" />
        </div>
    )
}