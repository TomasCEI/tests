// Utilizando CommonJS
const cowsay = require("cowsay");
const { Alumno1, Alumno2 } = require("./bbdd.js");

// Utilizando ES Modules
// recuerda cambiar a type="module" en el package.json
// import cowsay from "cowsay";
// import { Alumno1, Alumno2 } from "./bbdd.js";

console.clear();

console.log(":✅ HOLAAA");

console.log(Alumno2);

console.log(
   cowsay.say({
      text: "I'm a moooodule",
      e: "oO",
      T: "U ",
   })
);

function estadoDeLaCarrera(valorInicial) {
   let estado = valorInicial;
   function setEstado(nuevoValor) {
      estado = nuevoValor;
   }
   //function obtenerEstado() {
   const obtenerEstado = () => {
      return estado;
   };
   return [obtenerEstado, setEstado];
}

const [obtenerEstado, setEstado] = estadoDeLaCarrera("Jhon Cena");

console.log(obtenerEstado());

setEstado("Jhon Cena 2");
console.log(obtenerEstado());

//const { nombre, edad, curso } = Alumno1;
//const A_alumno= [nombre, edad, curso];

// deconstrucción de objeto a array
function toArrayAlumno(Alumno1) {
   const { nombre, edad, curso } = Alumno1;
   return [nombre, edad, curso];
}
const [nombre, edad, curso] = toArrayAlumno(Alumno1);

// deconstrucción de array a objeto
function toObjectAlumno(A_alumno) {
   return {
      nombre: A_alumno[0],
      edad: A_alumno[1],
      curso: A_alumno[2],
   };
}
toObjectAlumno([nombre, edad, curso]);
