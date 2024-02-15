import React, { useState, useEffect } from "react";
import "../styles/RickAndMorty.css";
import { PersonajesTarjeta } from "./PersonajesTarjeta";
import { DisplayMsg } from "./DisplayMsg";

import { PersonajesFiltros } from "./PersonajesFiltros";

// https://rickandmortyapi.com/
// https://tomichgit.github.io/rick-and-morty-svelte-api/

/* ejemplo de try/catch */
const PersonajesLista = () => {
   /** -----------------------------------
    * 1. Creación de variables y Hooks
    * ------------------------------------ */

   const [data, setData] = useState({});
   //const [info, setInfo] = useState({});
   //const [personajes, setPersonajes] = useState([]);
   const [loading, setLoading] = useState(true);
   const [page, setPage] = useState(1);
   const [filters, setFilters] = useState({
      species: "",
      //hobbies: "",
      status: "",
      name: "",
   });
   //const [input, setInput] = useState("");
   const [filteredResults, setFilteredResults] = useState([]); // filtro de datos sin recargar

   const { info = {}, results = [] } = data;

   useEffect(() => {
      //fetchCharacters();
      console.clear();
      setTimeout(() => {
         fetchCharacters();
      }, 1000);
   }, [page, filters]);

   /** ---------------------------------------
    * 2. Creación de funciones y componentes
    * ---------------------------------------- */

   const fetchCharacters = async () => {
      try {
         //const selectFilters = filter ? `&species=${filters}` : "";

         // Creat string from filters
         // const filters = {
         //    species: "Human",
         //    status: "",
         // };

         // Function to convert filters object into a query string
         const createQueryStringFromObject = (filters) => {
            const itemAtributes = Object.keys(filters);
            let string = "";
            itemAtributes.map((key) => {
               // si el valor del objeto es un string vacío, no lo incluimos
               if (filters[key] !== "") {
                  string += `&${key}=${filters[key]}`;
               }
            });
            return string;
         };

         const selectFilters = createQueryStringFromObject(filters);
         console.log("selectFilters", selectFilters);

         const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}${selectFilters}`);
         if (!response.ok) {
            setData({ info: {}, results: [] });
            return;
         }
         if (!response.ok) {
            throw new Error("Error al obtener los personajes");
         }
         const data = await response.json();
         console.log("DATA es", data);

         setData(data);
         //setInfo(data.info);
         //setPersonajes(data.results);

         // filtro de array sin recargar
         setFilteredResults(data.results);

         setLoading(false);
      } catch (error) {
         console.error("Tuvimos un Error:", error);
         setLoading(false);
      }
   };

   /** ---------------------------------------
    * 3. Renderizado de Componente
    * ---------------------------------------- */

   return (
      <div className="RickCharacters">
         <h1>Lista de Personajes</h1>
         {loading ? (
            <div className="loading">Cargando Personajes...</div>
         ) : (
            <>
               <PersonajesFiltros data={data} page={page} setPage={setPage} filters={filters} setFilters={setFilters} filteredResults={filteredResults} setFilteredResults={setFilteredResults} />

               {!filteredResults.length && (
                  <div className="" style={{ width: "80vw" }}>
                     {/* <p>No se encontraron personajes</p> */}
                     <DisplayMsg icon="genetics" color="success" msg="No se encontraron personajes" />
                  </div>
               )}

               <div className="grid">
                  {filteredResults.map((personaje) => (
                     <PersonajesTarjeta key={personaje.id} {...personaje} />
                  ))}
               </div>
            </>
         )}
      </div>
   );
};

export default PersonajesLista;
