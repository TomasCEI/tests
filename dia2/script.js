// ----------------------------------------
//           Definición de Funciones
// ----------------------------------------
// // función clásica
// function miFuncion(parametro) {
//    return;
// }
// // función asignada a variable
// const miFuncion = function (parametro) {
//    return;
// };
// // función flecha
// const miFuncion = (parametro) => {
//    return;
// };
// // funcion flecha simplificada
// const miFuncion = (parametro) => parametro;

// ----------------------------------------
//           Métodos de un array
// ----------------------------------------

let magos = [
   { nombre: "Harry", apellido: "Potter", casa: "Gryffindor" },
   { nombre: "Hermiony", apellido: "Granger", casa: "Gryffindor" },
   { nombre: "Draco", apellido: "Malfoy", casa: "Slytherin" },
   { nombre: "Jhon", apellido: "Deer", casa: "HufflePuff" },
];

// .forEach()   // NO DEVUELVE NADA
// .map()       // ARRAY con los elementos modificados del return (También edita los valores del array original)
// .filter()    // ARRAY con los elementos que cumplan la condición
// .some()      // BOOLEANO si se cumple la condición
// .every()     // BOOLEANO si todos los elementos cumplen la condición
// .find()      // ELEMENTO que cumpla la condición
// .findIndex() // INDICE del elemento que cumpla la condición

// return undefined;
// let magosEditados = magos.forEach((mago, indice) => {
//    mago.casa = "ViejaCasa";
//    magos[indice].casa = "ViejaCasa";
// });

// return un nuevo array con los elementos modificados
// let copiaMagos = magos.map((mago, indice) => {
//    mago.casa = "NuevaCasaaa";
//    return mago;
// });

// return un nuevo array con los elementos que cumplan la condición
// let magosFilter = magos.filter((mago, indice) => {
//    return mago.nombre.includes("a"); // Harry, Draco
//    return mago.casa === "HufflePuff";
//    // devolver una condición
//    return true;
// });
// console.log(magosFilter);

// return un booleano si se cumple la condición
// let magosSome = magos.some((mago, indice) => {
//    // devolver un booleano acorde a una condición
//    return mago.casa === "HufflePuff";
// });

// let magoFind = magos.find((mago, indice) => {
//    return mago.nombre.includes("H"); // harry
//    return mago.casa === "HufflePuff";
// });

// console.log(magoFind);

// EQUIVALENCIAS:
let magosFilter = magos.filter((mago, indice) => {
   return mago.casa === "HufflePuff";
});

// quito parantesis por ser un único parametro
// quito llaves de función por ser una única linea
// quito return por ser una única linea
let magosFilterBiz = magos.filter((mago) => mago.casa === "HufflePuff");

// -------------------------------
//           Callback
// -------------------------------
// function suma(param1, param2) {
//    return param1 + param2;
// }
// suma("argumento1", "argumento2"); // STRING es argumento de un parámetro
// suma(5, 25); // NUMBER es argumento de un parámetro

// miFuncion([]); // ARRAY es argumento de un parámetro
// miFuncion({}); // OBJECT es argumento de un parámetro
// miFuncion(suma); // FUNBCION es argumento de un parámetro => CALLBACK!

// // la función interna es una función de CallBack dentro de la función externa
// misNodos.addEventListener("click", function () {
//    // CALLBACK
// });

// --------------------------------------------------------------
//           Template Strings (comillas francesas, backticks)
// --------------------------------------------------------------
("comilla simple");
("comilla doble");
`comilla francesa`;
let nombre = "Leonel";
let apellido = "Messi";
let edad = 36;

// let miFrase = "Mi nombre es " + nombre + " " + apellido + " y tengo " + edad;

// // se rompe....
// let miFrase = "Mi nombre
//  es " + nombre + " " + apellido + " y tengo " + edad;

let miFrase = `Mi nombre es ${nombre} ${apellido} y tengo ${edad}`;
console.log(miFrase);

// ----------------------------------------
// TDZ (temporal dead zone)
// ----------------------------------------

{
   // TDZ comienza aquí
   // miVariable TDZ continua aquí
   // miVariable TDZ continua aquí
   //console.log(miVariable); // devuelve undefined + error ReferenceError (cannot access 'miVariable' before initialization)
   //   si no estuviera definida mas abajo devuelve: ReferenceError: miVariable is not defined

   // miVariable TDZ continua aquí
   let miVariable = "valor"; // TDZ termina aquí
   console.log(miVariable); // devuelve el valor
   // TDZ no existe aquí
   // TDZ no existe aquí
}

// con var se puede declarar luego pero no tiene valor.
// NO USAR VAR!! ESTA PROHIBIDO
{
   console.log(miVariable); // devuelve undefined
   var miVariable = "valor";
   console.log(miVariable); // devuelve el valor
}
