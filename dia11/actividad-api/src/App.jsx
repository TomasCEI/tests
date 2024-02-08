import React, { useState } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

import UserList from "./components/UserList";
import RickCharacters from "./components/RickCharacters";

/**
 *  simulamos un layout con navegación
 *
 *  Agregue esta regla en el index.css:
 *
 * @media (prefers-color-scheme: light) {
 *    button.active {
 *       background: #61dafb;
 *    }
 *  }
 */
function App() {
   // Estado para controlar qué componente se muestra
   const [paginaActiva, setPaginaActiva] = useState("home");

   return (
      <div>
         <nav>
            {/* Botones para cambiar la página */}
            <button className={paginaActiva === "home" ? "active" : ""} onClick={() => setPaginaActiva("home")}>
               Home
            </button>
            <button className={paginaActiva === "about" ? "active" : ""} onClick={() => setPaginaActiva("about")}>
               About
            </button>
            <button className={paginaActiva === "contact" ? "active" : ""} onClick={() => setPaginaActiva("contact")}>
               Contact
            </button>
            <button className={paginaActiva === "users" ? "active" : ""} onClick={() => setPaginaActiva("users")}>
               User List
            </button>
            <button className={paginaActiva === "rick" ? "active" : ""} onClick={() => setPaginaActiva("rick")}>
               Rick Characters
            </button>
         </nav>

         {/* Renderiza el componente correspondiente */}
         {paginaActiva === "home" && <Home />}
         {paginaActiva === "about" && <About />}
         {paginaActiva === "contact" && <Contact />}

         {paginaActiva === "users" && <UserList />}
         {paginaActiva === "rick" && <RickCharacters />}
      </div>
   );
}

export default App;
