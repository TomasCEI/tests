import React, { useState, useEffect } from "react";

// https://rickandmortyapi.com/
// https://tomichgit.github.io/rick-and-morty-svelte-api/

/* ejemplo de try/catch */
const RickCharacters = () => {
   const [data, setData] = useState([]);
   const [loading, setLoading] = useState(true);
   const [page, setPage] = useState(1);

   const fetchCharacters = async () => {
      try {
         const response = await fetch("https://rickandmortyapi.com/api/character/?page=" + page);
         if (!response.ok) {
            throw new Error("Error al obtener los personajes");
         }
         const data = await response.json();
         console.log("DATA es", data);
         setData(data);
         setLoading(false);
      } catch (error) {
         console.error("Tuvimos un Error:", error);
         setLoading(false);
      }
   };

   useEffect(() => {
      fetchCharacters();
   }, [page]);

   return (
      <div>
         <h1>Lista de Personajes</h1>
         {loading ? (
            <p>Cargando...</p>
         ) : (
            <>
               {data.info.prev && (
                  <button
                     onClick={() => {
                        setPage(page - 1);
                     }}>
                     Prev
                  </button>
               )}
               {data.info.next && (
                  <button
                     onClick={() => {
                        setPage(page + 1);
                     }}>
                     Next
                  </button>
               )}
               <ul>
                  {data.results.map(({ id, name, image }) => (
                     <li key={id}>
                        {name}

                        <img src={image} alt={name} />
                     </li>
                  ))}
               </ul>
            </>
         )}
      </div>
   );
};

export default RickCharacters;
