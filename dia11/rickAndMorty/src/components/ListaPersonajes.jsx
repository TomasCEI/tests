import React, { useState, useEffect } from "react";
import "../styles/RickAndMorty.css";
import { CharacterCard } from "./CharacterCard";
import { DisplayMsg } from "./DisplayMsg";

// https://rickandmortyapi.com/
// https://tomichgit.github.io/rick-and-morty-svelte-api/

/* ejemplo de try/catch */
const ListaPersonajes = () => {
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
   const [input, setInput] = useState("");
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
               <div className="sticky">
                  <header className="header">
                     <div>{info.prev && <button onClick={() => setPage(page - 1)}> Prev </button>}</div>
                     <div>
                        <span>Personajes</span> {info.count} - <span>Página</span> {page}/{info.pages}
                     </div>
                     <div>{info.next && <button onClick={() => setPage(page + 1)}> Next </button>}</div>
                  </header>

                  <div className="filters">
                     <div>
                        <button className={filters.species == "Alien" ? "active" : ""} title="Únicamente Aliens" onClick={() => setFilters({ ...filters, species: "Alien" })}>
                           <span className="material-symbols-outlined">microbiology</span>
                        </button>
                        <button className={filters.species == "Human" ? "active" : ""} title="Únicamente Humanos" onClick={() => setFilters({ ...filters, species: "Human" })}>
                           <span className="material-symbols-outlined">barefoot</span>
                        </button>
                        <button className={filters.species == "" ? "active" : ""} title="Todos" onClick={() => setFilters({ ...filters, species: "" })}>
                           <span className="material-symbols-outlined">microbiology</span>
                           <span className="material-symbols-outlined">barefoot</span>
                        </button>
                     </div>

                     <div>
                        <button className={filters.status == "Alive" ? "active" : ""} title="Vivos" onClick={() => setFilters({ ...filters, status: "Alive" })}>
                           <span className="material-symbols-outlined c-green">favorite</span>
                        </button>
                        <button className={filters.status == "Dead" ? "active" : ""} title="Fallecidos" onClick={() => setFilters({ ...filters, status: "Dead" })}>
                           <span className="material-symbols-outlined c-red">heart_broken</span>
                        </button>
                        <button className={filters.status == "" ? "active" : ""} title="Ambos" onClick={() => setFilters({ ...filters, status: "" })}>
                           <span className="material-symbols-outlined c-green">favorite</span>
                           <span className="material-symbols-outlined c-red">heart_broken</span>
                        </button>
                     </div>
                     <input
                        type="text"
                        placeholder="Nombre..."
                        onChange={(e) => {
                           const cleanInput = e.target.value.trim();
                           // borrar filtro
                           // if (input == "") {
                           //    setFilters({ ...filters, name: "" });
                           // }
                           //console.log(input, input.length);
                           //if (cleanInput.length > 3) {
                           //setFilters({ ...filters, name: cleanInput });
                           setInput(cleanInput);
                           //}
                        }}
                     />
                     <button onClick={() => setFilters({ ...filters, name: input })}>Search</button>
                  </div>
                  {JSON.stringify(filters)}
               </div>

               {!results.length && (
                  <div className="" style={{ width: "80vw" }}>
                     {/* <p>No se encontraron personajes</p> */}
                     <DisplayMsg icon="genetics" color="success" msg="No se encontraron personajes" />
                  </div>
               )}

               <div className="grid">
                  {results.map((personaje) => (
                     <CharacterCard key={personaje.id} {...personaje} />
                  ))}
               </div>
            </>
         )}
      </div>
   );
};

export default ListaPersonajes;
