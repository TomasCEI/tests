function Alumno() {
   const nombre = "Lucas";
   const curso = "Full Stack";
   return (
      <>
         <img src="https://picsum.photos/200/300" alt="imagen" />
         <h1>Hola, soy {nombre}</h1>
         <p>Estoy Cursando {curso}</p>
      </>
   );
}
export default Alumno;
