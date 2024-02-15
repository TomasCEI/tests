import React, { useState } from "react";
import Home from "./components/Home";

import UserList from "./components/UserList";
import PersonajesLista from "./components/PersonajesLista";

/**
 *  simulamos un layout con navegación
 *
 *  Agregue esta regla en el index.css:
 *
 */
function App() {
   // Estado para controlar qué componente se muestra
   const [paginaActiva, setPaginaActiva] = useState("listaPersonajes");

   return (
      <div>
         <nav>
            {/* Botones para cambiar la página */}
            <button className={paginaActiva === "home" ? "active" : ""} onClick={() => setPaginaActiva("home")}>
               Home
            </button>
            <button className={paginaActiva === "users" ? "active" : ""} onClick={() => setPaginaActiva("users")}>
               User List
            </button>
            <button className={paginaActiva === "listaPersonajes" ? "active" : ""} onClick={() => setPaginaActiva("listaPersonajes")}>
               Personajes
            </button>
         </nav>

         {/* Renderiza el componente correspondiente */}
         {paginaActiva === "home" && <Home />}

         {paginaActiva === "users" && <UserList />}
         {paginaActiva === "listaPersonajes" && <PersonajesLista />}
      </div>
   );
}

export default App;
