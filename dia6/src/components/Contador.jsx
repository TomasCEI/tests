import React, { useState } from "react";
const Contador = () => {
   const [contador, setContador] = useState(0);

   const incrementar = () => {
      setContador(contador + 1);
   };

   return (
      <>
         <h1>Soy una Contador</h1>
         <p>{contador}</p>
         <button onClick={() => setContador(contador + 1)}>+</button>
         <button onClick={incrementar}>+</button>
      </>
   );
};

export default Contador;
