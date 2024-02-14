import { useState } from "react";
import "./Menu.css";

export const Menu = () => {
   const [isOpen, setIsOpen] = useState(true);

   const items = [{ titulo: "Home" }, { titulo: "About" }, { titulo: "Contact" }];

   const toggleMenu = () => {
      setIsOpen(!isOpen);
   };

   return (
      <>
         <header className="Header">
            <h1>Logo</h1>
            <nav className={`Header-nav ${isOpen ? "isVisible" : ""}`}>
               <ul className="Header-ul">
                  {items.map((item, index) => (
                     <Li key={index} {...item} />
                  ))}
               </ul>
            </nav>

            <button onClick={toggleMenu} className="Header-btn">
               Menú
            </button>
         </header>
      </>
   );
};

const Li = ({ titulo }) => {
   return <li className="Header-li">{titulo}</li>;
};
