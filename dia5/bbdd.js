const Alumno1 = { nombre: "Pepe", edad: 23, curso: "Full Stack" };
const Alumno2 = { nombre: "Juan", edad: 24, curso: "Full Stack" };

// Utilizando CommonJS
module.exports = { Alumno1, Alumno2 };

// Utilizando ES Modules
// recuerda cambiar a type="module" en el package.json
// export const Alumno1 = { nombre: "Pepe", edad: 23, curso: "Full Stack" };
// export const Alumno2 = { nombre: "Juan", edad: 24, curso: "Full Stack" };
