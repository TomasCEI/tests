import { useState, useEffect } from "react";
import { DisplayMsg } from "./DisplayMsg";

const PersonajesModal = ({ handleOpen, id, image, name, gender, species, status, location, origin, episode, type }) => {
   const [episodes, setEpisodes] = useState([]);

   useEffect(() => {
      // extra el id (último item) de cada episodio rickandmortyapi.com/api/episode/1
      const episodeIds = episode.map((epi) => epi.split("/").pop());
      console.log("episodeIds", episodeIds);
      getEpisodesData(episodeIds.splice(0, 10));
   }, []);

   const getEpisodesData = async (episodeIds) => {
      const url = `https://rickandmortyapi.com/api/episode/${episodeIds.join(",")}`;
      const response = await fetch(url);
      console.log("Url es", url);
      const data = await response.json();

      // si devuelve un solo item, es objeto, si no un array. Asi que lo convierto siempre en array para hacer un map.
      const arrayData = Array.isArray(data) ? data : [data];
      console.log("Data Episodes es", arrayData);
      setEpisodes(arrayData);
   };

   return (
      <div className="modal">
         <div className="modal-content">
            <span className="close" onClick={handleOpen}>
               X
            </span>

            <div className="modal-info">
               <div className="userCard" style={{ minWidth: "200px" }}>
                  <h3>{name}</h3>

                  <div className="imgBox">
                     <img className={`${status == "Alive" ? "b-green" : ""} ${status == "Dead" ? "b-red" : ""}`} src={image} alt={name} />

                     <div>
                        {status === "Alive" && <span className="material-icons c-green">favorite</span>}
                        {status === "Dead" && <span className="material-icons c-red">heart_broken</span>}
                     </div>
                  </div>

                  {/* iconos de stats */}
                  <div className="flexBetween">
                     <div>
                        <span className="material-symbols-outlined">microbiology</span>
                        <span className="material-symbols-outlined">barefoot</span>
                     </div>
                     <div>{species}</div>
                  </div>

                  <div className="flexBetween">
                     <div>
                        <span className="material-symbols-outlined" title="desconocido">
                           transgender
                        </span>
                        <span className="material-symbols-outlined" title="Masculino">
                           male
                        </span>
                        <span className="material-symbols-outlined" title="Femenino">
                           female
                        </span>
                     </div>
                     <div>{gender}</div>
                  </div>

                  {type && (
                     <div>
                        <DisplayMsg icon="genetics" color="success" msg={type} />
                     </div>
                  )}
               </div>

               <div>
                  <h3>Lugar</h3>
                  <p>{location.name}</p>
                  <h3>Origen</h3>
                  <p>{origin.name}</p>
                  <h3>Episodios</h3>
                  <div>
                     {episodes.map((epi, index) => {
                        return <button key={index}>#{epi.episode}</button>;
                     })}

                     {/* {getEpisodesInfo(episode)} */}
                     {/* {episode.slice(0, 10).map((epi, index) => {
                        const numCap = epi.split("/").pop();
                        return (
                           <button
                              key={index}
                              onClick={() => {
                                 window.open(`${epi}`, "_blank");
                              }}>
                              #{numCap} {epi}
                           </button>
                        );
                     })} */}
                     {episode.length > 10 && <button>...</button>}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export const PersonajesTarjeta = (props) => {
   const [isOpen, setIsOpen] = useState(false);

   // deconstruyo en linea aparte para seguir teniendo el objeto "props" para CharacterModal
   const { id, image, name, gender, species, status, location, origin, episode, type } = props;

   const handleOpen = () => {
      setIsOpen((isOpen) => !isOpen);
   };
   return (
      <>
         {isOpen && <PersonajesModal handleOpen={handleOpen} {...props} />}

         <div className="userCard" onClick={handleOpen}>
            <h3>{name}</h3>
            <span className="episodeCountIcon">
               <span className="material-symbols-outlined">video_library</span>
               <span>{episode.length}</span>
            </span>

            <div className="imgBox">
               <img className={`${status == "Alive" ? "b-green" : ""} ${status == "Dead" ? "b-red" : ""}`} src={image} alt={name} />

               <div>
                  {status === "Alive" && <span className="material-icons c-green">favorite</span>}
                  {status === "Dead" && <span className="material-icons c-red">heart_broken</span>}
               </div>
            </div>

            {/* iconos de stats */}
            <div className="flexBetween">
               <div>
                  <span className="material-symbols-outlined">microbiology</span>
                  <span className="material-symbols-outlined">barefoot</span>
               </div>
               <div>{species}</div>
            </div>

            <div className="flexBetween">
               <div>
                  <span className="material-symbols-outlined" title="desconocido">
                     transgender
                  </span>
                  <span className="material-symbols-outlined" title="Masculino">
                     male
                  </span>
                  <span className="material-symbols-outlined" title="Femenino">
                     female
                  </span>
               </div>
               <div>{gender}</div>
            </div>

            {type && (
               <div>
                  <DisplayMsg icon="genetics" color="success" msg={type} />
               </div>
            )}
         </div>
      </>
   );
};
