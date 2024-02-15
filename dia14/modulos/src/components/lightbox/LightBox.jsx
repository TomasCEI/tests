import {useState} from "react";

const LightBox = () => {
    // primer atributo VARIABLE
    // segundo atributo Funciòn que actuali VARIABLE
    // tercer valor es el VALOR INICIAL de la VARIABLE
    const [isOpen, setIsOpen] = useState(false);

    const toggleLightBox = ()=> {
        setIsOpen(!isOpen);
    }

 return (
    <section>
        <button onClick={toggleLightBox}>Abrir Lightbox</button>
        {isOpen && 
        <div>
            <div className="Lightbox-backdrop"></div>
            <button onClick={toggleLightBox}>X</button>
            <h3>Contenido del lightbox</h3>
        </div>}
    </section>
 )
}

export default LightBox;