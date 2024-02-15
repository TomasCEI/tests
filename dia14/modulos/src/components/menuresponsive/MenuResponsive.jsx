import {useState} from "react";
import "./MenuResponsive.css";

const MenuResponsive = () => {

    const [isOpen, setIsOpen] = useState(false);

    const items = [
        {
            titulo: "home",
            href: "#"
        },
        {
            titulo: "Contacto",
            href: "#"
        },
        {
            titulo: "Productos",
            href: "#"
        },
    ]

    const toggleMenu = ()=> {
        console.log("isOpen vale:", isOpen);
        setIsOpen(!isOpen);
    }

    return (
        <header className="Header">
            <h1>Logo</h1>
            <nav className={`Header-nav ${isOpen ? "isVisible": ""}`}>
                <ul className="Header-ul">
                    {items.map( (item, index) => (
                            <Li key={index} {...item} />
                        )
                    )}
                </ul>
            </nav>
            
            {/* Boton Responsive de Menu */}
            <button onClick={toggleMenu} className="Header-btn">
                BtnIcon
            </button>
        </header>
    )
}

const Li = ({titulo, href}) => {
    //const {titulo} = props;
    return (
        <li className="Header-li">
            <a href={href}>{titulo}</a></li>
    )
}

export default MenuResponsive;