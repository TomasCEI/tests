const estudiantesHP = [
   {
      nombre: "Harry",
      apellido: "Potter",
      casa: "Gryffindor",
      asignaturas: ["Defensa Contra las Artes Oscuras", "Pociones"],
   },
   {
      nombre: "Hermione",
      apellido: "Granger",
      casa: "Gryffindor",
      asignaturas: ["Arithmancy", "Pociones"],
   },
   {
      nombre: "Ron",
      apellido: "Weasley",
      casa: "Gryffindor",
      asignaturas: ["Cuidado de Criaturas Mágicas", "Adivinación"],
   },
   {
      nombre: "Draco",
      apellido: "Malfoy",
      casa: "Slytherin",
      asignaturas: ["Pociones", "Defensa Contra las Artes Oscuras"],
   },
   {
      nombre: "Luna",
      apellido: "Lovegood",
      casa: "Ravenclaw",
      asignaturas: ["Astronomía", "Cuidado de Criaturas Mágicas"],
   },
];

/* ------------------------------------------------------------------------------------------------
 * FOREACH: Recorrer array de alumnos, e imprimir su nombre por consola..
 * ------------------------------------------------------------------------------------------------
 * Parámetros:
 *   - Función callback: Una función que se ejecuta para cada elemento del array. En este caso, la función toma un 'estudiante' como argumento.
 * Return: No devuelve nada. El método 'forEach' de JavaScript no tiene un valor de retorno. Su propósito es ejecutar una función para cada elemento en el array.
 * Descripción: Este método recorre cada elemento del array 'estudiantesHP'. Para cada 'estudiante', ejecuta una función de flecha que imprime el valor de la propiedad 'nombre' de 'estudiante' en la consola. Como resultado, los nombres de todos los estudiantes en 'estudiantesHP' se imprimirán en la consola.
 */
console.log("Nombres de los estudiantes de Hogwarts:");
estudiantesHP.forEach((estudiante) => {
   console.log(estudiante.nombre);
});

/* ------------------------------------------------------------------------------------------------
 * MAP: Crear un nuevo array con los nombres completos de los estudiantes.
 * ------------------------------------------------------------------------------------------------
 * Parámetros:
 *   - Función callback: Una función que se ejecuta para cada elemento del array. En este caso, la función toma un 'estudiante' como argumento.
 * Return: Devuelve un nuevo array con los nombres completos de los estudiantes.
 * Descripción: Este método recorre cada elemento del array 'estudiantesHP'. Para cada 'estudiante', ejecuta una función de flecha que concatena el valor de las propiedades 'nombre' y 'apellido' de 'estudiante'.
 * ------------------------------------------------------------------------------------------------ */
const nombresCompletos = estudiantesHP.map(
   (estudiante) => `${estudiante.nombre} ${estudiante.apellido}`
);
console.log("Nombres completos de los estudiantes de Hogwarts:");
console.log(nombresCompletos);

// Puedes usar .map() para modificar cada item de mi lista, en este caso agregar la opción de nombre completo conservando todos los valores anteriores:
const estudiantesConNuevosDatos_v1 = estudiantesHP.map((estudiante) => {
   return {
      nombre: estudiante.nombre,
      apellido: estudiante.apellido,
      casa: estudiante.casa,
      asignaturas: estudiante.asignaturas,
      nombreCompleto: `${estudiante.nombre} ${estudiante.apellido}`,
   };
});
console.log("nuevos Datos: ", estudiantesConNuevosDatos_v1);

// Esta v2 realiza la misma función que la anterior, pero ayudandonos del operador spread (...) que veremos proximamente.
const estudiantesConNuevosDatos_v2 = estudiantesHP.map((estudiante) => {
   // creo un nuevo objeto con los datos del estudiante extra
   return {
      ...estudiante, // Esto copia todas las propiedades del estudiante previamente existente
      nombreCompleto: `${estudiante.nombre} ${estudiante.apellido}`, // Esto crea el nuevo atributo
   };
});
console.log("nuevos Datos v2: ", estudiantesConNuevosDatos_v2);

// Esta v3 realiza la misma función que la anterior, pero editando el objeto ORIGINAL!
estudiantesHP.map((estudiante) => {
   estudiante.nombreCompleto = `${estudiante.nombre} ${estudiante.apellido}`; // Se crea el nuevo atributo
});

console.log("nuevos Datos v3: ", estudiantesHP);

/* ------------------------------------------------------------------------------------------------
 * FILTER: Filtrar estudiantes que pertenecen a la casa Gryffindor.
 * ------------------------------------------------------------------------------------------------
 * Parámetros:
 *   - Función callback: Una función que se ejecuta para cada elemento del array. En este caso, la función toma un 'estudiante' como argumento.
 * Return: Devuelve un nuevo array con los estudiantes que pertenecen a la casa Gryffindor.
 * Descripción: Este método recorre cada elemento del array 'estudiantesHP'. Para cada 'estudiante', ejecuta una función de flecha que verifica si el valor de la propiedad 'casa' de 'estudiante' es igual a "Gryffindor". Si la condición es verdadera, el 'estudiante' se incluye en el nuevo array. Como resultado, se crea un nuevo array 'estudiantesGryffindor' con los estudiantes que pertenecen a la casa Gryffindor.
 * ------------------------------------------------------------------------------------------------ */

const estudiantesGryffindor = estudiantesHP.filter((estudiante) => {
   // realizo la operación del condicional. Si el return es true, se incluye en el nuevo array, si es false, no se incluye
   if (estudiante.casa === "Gryffindor") {
      return true;
   } else {
      return false;
   }
});

// la versión anterior se puede simplificar de la siguiente manera, preguntando si la condición es true o false
const estudiantesGryffindor_v2 = estudiantesHP.filter(
   (estudiante) => estudiante.casa === "Gryffindor"
);

console.log("Estudiantes de Gryffindor:");
console.log(estudiantesGryffindor);

/* ------------------------------------------------------------------------------------------------
 * FIND: Encontrar el primer estudiante que pertenece a la casa Slytherin.
 * ------------------------------------------------------------------------------------------------
 * Parámetros:
 *   - Función callback: Una función que se ejecuta para cada elemento del array. En este caso, la función toma un 'estudiante' como argumento.
 * Return: Devuelve el primer estudiante que pertenece a la casa Slytherin.
 * Descripción: Este método recorre cada elemento del array 'estudiantesHP'. Para cada 'estudiante', ejecuta una función de flecha que verifica si el valor de la propiedad 'casa' de 'estudiante' es igual a "Slytherin". Si la condición es verdadera, el 'estudiante' se devuelve y se detiene la iteración.
 * ------------------------------------------------------------------------------------------------ */

const primerSlytherin = estudiantesHP.find((estudiante) => {
   // true encuentra el item, false busca el siguiente..
   return estudiante.casa === "Slytherin";
});

// versión simplificada de la anterior
const primerSlytherin_v2 = estudiantesHP.find(
   (estudiante) => estudiante.casa === "Slytherin"
);

console.log("Primer estudiante de Slytherin:");
console.log(primerSlytherin);

/* ------------------------------------------------------------------------------------------------
 * SOME: Verificar si algún estudiante estudia Astronomía.
 * ------------------------------------------------------------------------------------------------
 * Parámetros:
 *   - Función callback: Una función que se ejecuta para cada elemento del array. En este caso, la función toma un 'estudiante' como argumento.
 * Return: Devuelve un booleano que indica si algún estudiante estudia Astronomía.
 * Descripción: Este método recorre cada elemento del array 'estudiantesHP'. Para cada 'estudiante', ejecuta una función de flecha que verifica si el array 'asignaturas' de 'estudiante' incluye "Astronomía". Si la condición es verdadera, se devuelve true y se detiene la iteración del resto de elementos de la lista.
 * ------------------------------------------------------------------------------------------------ */
const estudiaAstronomia = estudiantesHP.some((estudiante) =>
   estudiante.asignaturas.includes("Astronomía")
);
console.log("¿Algun estudiante estudia Astronomía?");
console.log(estudiaAstronomia); // true o false

/* ------------------------------------------------------------------------------------------------
 * EVERY: Verificar si todos los estudiantes estudian Pociones.
 * ------------------------------------------------------------------------------------------------
 * Parámetros:
 *   - Función callback: Una función que se ejecuta para cada elemento del array. En este caso, la función toma un 'estudiante' como argumento.
 * Return: Devuelve un booleano que indica si todos los estudiantes estudian Pociones.
 * Descripción: Este método recorre cada elemento del array 'estudiantesHP'. Para cada 'estudiante', ejecuta una función de flecha que verifica si el array 'asignaturas' de 'estudiante' incluye "Pociones". Si la condición es verdadera para todos los estudiantes, se devuelve true. De lo contrario, se devuelve false.
 * ------------------------------------------------------------------------------------------------ */
const todosEstudianPociones = estudiantesHP.every((estudiante) =>
   estudiante.asignaturas.includes("Pociones")
);
console.log("¿Todos los estudiantes estudian Pociones?");
console.log(todosEstudianPociones); // true o false

/* ------------------------------------------------------------------------------------------------
 * FINDINDEX: Encontrar el índice del primer estudiante que pertenece a la casa Ravenclaw.
 * ------------------------------------------------------------------------------------------------
 * Parámetros:
 *   - Función callback: Una función que se ejecuta para cada elemento del array. En este caso, la función toma un 'estudiante' como argumento.
 * Return: Devuelve el índice del primer estudiante que pertenece a la casa Ravenclaw.
 * Descripción: Este método recorre cada elemento del array 'estudiantesHP'. Para cada 'estudiante', ejecuta una función de flecha que verifica si el valor de la propiedad 'casa' de 'estudiante' es igual a "Ravenclaw". Si la condición es verdadera, se devuelve el índice del 'estudiante' y se detiene la iteración.
 * ------------------------------------------------------------------------------------------------ */
const indiceRavenclaw = estudiantesHP.findIndex(
   (estudiante) => estudiante.casa === "Ravenclaw"
);
console.log("Indice del array de estudiante de Ravenclaw:", indiceRavenclaw); // indice
// con el indice puedo acceder al objeto en el array
console.log("Y el estudiante es: ", estudiantesHP[indiceRavenclaw]); // estudiante

/* ------------------------------------------------------------------------------------------------
 * REVERSE: Revierto el orden de mi vector
 * ------------------------------------------------------------------------------------------------
 * ------------------------------------------------------------------------------------------------ */
estudiantesHP.reverse();
console.log("Estudiantes de Hogwarts al reves:", estudiantesHP);
