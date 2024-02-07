import { useEffect } from "react";

function Strings() {
   const nombre = "Lucas";
   const isAdulto = true;

   useEffect(() => {
      console.clear();
      //console.log("se ejecuto el componente Strings");

      // Truthy y Falsy
      if (" ") {
         // 1, -1, 0.1, -0.1, "hola", " ", "false", true, [], [1,2,3], {}, {a:1}
         console.log("True (Truthy)");
      } else {
         // 0, "", false, null, undefined, NaN
         console.log("False (Falsy)");
      }
   }, []);

   return (
      <>
         <h1>Hola, soy {nombre}</h1>

         {/* Operador Ternario  */}
         {isAdulto ? (
            <div>soy adulto</div>
         ) : (
            <>
               <div>soy menor</div>
               <br></br>
            </>
         )}

         {/* Operador AND */}
         {isAdulto && <div>soy adultooo</div>}

         {/* Operador OR */}
         {isAdulto || <div>soy menorrr</div>}

         {/* Operador NOT */}
         {!isAdulto && <div>soy menorrr</div>}
      </>
   );
}

export default Strings;
