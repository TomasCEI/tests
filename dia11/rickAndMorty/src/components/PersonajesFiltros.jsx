import { useState, useEffect } from "react";

export const PersonajesFiltros = ({ data, page, setPage, filters, setFilters, setFilteredResults }) => {
   const [input, setInput] = useState("");

   const { info = {}, results = [] } = data;
   const [cantFiltered, setCantfiltered] = useState(results.length);

   // filtro de array sin recargar
   const searchCurrent = async (search) => {
      //"use server";
      //const comments = await getComments();
      const filterData = results.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()) || item.species.toLowerCase().includes(search.toLowerCase())).slice(0, 20);

      console.log(filterData);
      setCantfiltered(filterData.length);
      setFilteredResults(filterData);
   };

   console.log("re-render barra filtros");
   return (
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
               value={input}
               onChange={(e) => {
                  const cleanInput = e.target.value.trim();
                  // borrar filtro
                  // if (input == "") {
                  //    setFilters({ ...filters, name: "" });
                  // }
                  console.log(cleanInput, cleanInput.length);
                  //if (cleanInput.length > 3) {
                  //setFilters({ ...filters, name: cleanInput });
                  setInput(cleanInput);
                  //}
               }}
            />
            <button onClick={() => setFilters({ ...filters, name: input })}>Search</button>

            <button onClick={() => searchCurrent(input)}>
               Filter Page ({cantFiltered}/{results.length})
            </button>
         </div>
         {JSON.stringify(filters)}
      </div>
   );
};
