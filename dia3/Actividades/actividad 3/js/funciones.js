/**
 * Capturar elementos
 */
const cuadros = document.querySelectorAll(".cuadro"); // Selecciona todos los elementos con la clase "cuadro" y los guarda en la variable "cuadros"
const controles = document.querySelectorAll("input"); // Selecciona todos los elementos <input> y los guarda en la variable "controles"
const codigoColor = document.querySelector("p"); // Selecciona el parrafo del codigo de color y lo guarda en la variable "codigoColor"

function hexadecimal(r, g, b) {
   // Define una función llamada "hexadecimal" que toma tres argumentos: r, g, b
   let codigo = []; // Crea un array vacío llamado "codigo"
   for (let i = 0; i < arguments.length; i++) {
      // Inicia un bucle for que recorre los argumentos pasados a la función
      codigo.push(
         (Number(arguments[i]) < 16 ? "0" : "") +
            Number(arguments[i]).toString(16)
      ); // Agrega al array "codigo" el valor hexadecimal (16) correspondiente a cada argumento. si el valor es menor a 16 lo completo con un cero delante. Tostring lo convierte en texto.
      /**
       * El objeto arguments es una variable local disponible en todas las funciones que no son funciones flecha . Puedes hacer referencia a los argumentos de una función dentro de esa función utilizando su objeto arguments. Em el código convierte cada argumento a su equivalente hexadecimal y lo agrega al array "codigo".
       */
   }

   return `#${codigo.join("")}`; // Devuelve una cadena que representa el código hexadecimal formado por los valores en el array "codigo"
   /**
    * la función join() se utiliza para unir los elementos de un array en una sola cadena.
    */
}

controles.forEach(function (control, indice) {
   // Itera sobre cada elemento en "controles" usando la función forEach
   control.addEventListener("input", function () {
      // Agrega un evento de escucha para el evento "input" a cada elemento en "controles"
      cuadros[0].style.backgroundColor = hexadecimal(
         controles[0].value,
         controles[1].value,
         controles[2].value
      ); // Cambia el color de fondo del primer elemento en "cuadros" utilizando los valores de los tres controles de entrada

      codigoColor.innerHTML = hexadecimal(
         controles[0].value,
         controles[1].value,
         controles[2].value
      ); // Actualiza el contenido del elemento <p> con el código hexadecimal generado a partir de los valores de los controles de entrada

      cuadros[indice + 1].style.backgroundColor = hexadecimal(
         indice == 0 ? control.value : 0,
         indice == 1 ? control.value : 0,
         indice == 2 ? control.value : 0
      ); // Cambia el color de fondo del elemento en "cuadros" correspondiente al índice actualizado utilizando los valores de los controles de entrada
   });
});

/**
 * --------------------------------------------------------------------------------------------
 */

/**
 * Agregar un botón general de "Guardar Color" para que cada vez que lo presione, se almacene en un array el color seleccionado:
 */

const guardarColorBtn = document.createElement("button"); // Crea un botón
guardarColorBtn.textContent = "Guardar Color"; // Establecer el texto del botón

const buttonContainer = document.createElement("div"); // Crear el contenedor del botón
buttonContainer.classList.add("button-container"); // Agregar clase al contenedor

// Agregar el contenedor al body
document.body.appendChild(buttonContainer);
// Agregar el botón al contenedor
buttonContainer.appendChild(guardarColorBtn);

guardarColorBtn.addEventListener("click", function () {
   // Agrega un evento de escucha para el evento "click" al botón "Guardar Color"
   const color = codigoColor.innerHTML; // Obtiene el código hexadecimal actualmente mostrado en el elemento <p>
   guardarColor(color); // Llama a la función guardarColor y pasa el código hexadecimal como argumento
});

/*

function guardarColor(color) { // Define la función guardarColor que toma un argumento de color
  console.log(`Color guardado: ${color}`); // Imprime el color guardado en la consola para comprobar que funciona
}

*/

/**
 * --------------------------------------------------------------------------------------------
 */

/**
 * Agregar una lista que vaya mostrando cada uno de los colores guardados mostrando su código RGB y un circulo relleno con ese color:
 */

// function guardarColor(color) {
//   // Crear una lista
//   const lista = document.createElement("li");
//   lista.textContent = `Color guardado: ${color}`;

//   // Crear un círculo relleno
//   const circle = document.createElement("div");
//   circle.classList.add("circle");
//   circle.style.backgroundColor = color;

//   // Agregar el círculo relleno al elemento de lista
//   lista.appendChild(circle);

//   // Agregar el elemento de lista a la lista existente o crear una nueva lista si no existe

//     const nuevaListaColores = document.createElement("ul");
//     nuevaListaColores.classList.add("lista-colores");
//     nuevaListaColores.appendChild(lista);
//     document.body.appendChild(nuevaListaColores);

// }

/**
 * lo anterior no funciona como se desea, pues se crea una lista nueva con solo un color cada vez que se pulsa el boton. Acontinuación se soluciona esto buscando que si la lista ya esta creada se añadan los colores a esa lista y si no esta creada que se cree usando if:
 */

function guardarColor(color) {
   // Crear una lista si no existe
   let listaColores = document.querySelector(".lista-colores");
   if (!listaColores) {
      //si no captura nada por que no existe la clase entonces crear una lista y añadirle la clase, y añadir la lista al body
      listaColores = document.createElement("ul");
      listaColores.classList.add("lista-colores");
      document.body.appendChild(listaColores);
   }

   /**
    * Permitir almacenar un máximo de 10 colores borrando los colores mas viejos:
    */
   // Verificar si se alcanzó el límite de 10 colores
   const coloresGuardados = document.querySelectorAll("li");
   if (coloresGuardados.length >= 10) {
      // Eliminar el color más antiguo (primer elemento de la lista)
      listaColores.removeChild(listaColores.firstChild);
   }

   // Crear un elemento de la lista
   const listItem = document.createElement("li");
   listItem.textContent = `Color guardado: ${color}`;

   // Crear un círculo relleno
   const circle = document.createElement("div");
   circle.classList.add("circle");
   circle.style.backgroundColor = color;
   circle.setAttribute("red", controles[0].value);
   circle.setAttribute("green", controles[1].value);
   circle.setAttribute("blue", controles[2].value);

   // Agregar el círculo relleno al elemento de lista
   listItem.appendChild(circle);

   /**
    * Agregar un botón de "Borrar" a cada item de la lista para eliminar dicho item del array.
    */

   // Crear un botón de "Borrar"
   const borrarItemBtn = document.createElement("button");
   borrarItemBtn.textContent = "Borrar Item";

   // Agregar evento de clic al botón de "Borrar"
   borrarItemBtn.addEventListener("click", function () {
      // Eliminar el elemento de la lista al hacer clic en el botón
      listaColores.removeChild(listItem);
   });

   // Agregar el botón de "Borrar" al elemento de lista
   listItem.appendChild(borrarItemBtn);

   // Agregar el elemento de lista a la lista existente
   listaColores.appendChild(listItem);

   /**
    * --------------------------------------------------------------------------------------------
    */

   /**
    * Agregar un EventListener de Click a cada item de la lista para que los sliders y cuadros se carguen con el color seleccionado:
    */

   // Agregar un EventListener de Click a cada item de lista
   listItem.addEventListener("click", function (e) {
      // Obtener el código hexadecimal del color del círculo
      const colorCirculo = circle.style.backgroundColor;
      // Actualizar el color del cuadro superior
      cuadros[0].style.backgroundColor = colorCirculo;

      //DUDA: ¿Actualizar el color de los cuadros r g b y sus controles, y actualizar el código del cuadro superior?
      controles[0].value = e.target.getAttribute("red");
      controles[1].value = e.target.getAttribute("green");
      controles[2].value = e.target.getAttribute("blue");
   });
}

/**
 * --------------------------------------------------------------------------------------------
 */

/**
 * Agregar un botón general de "Borrar Lista" para quitar todos los colores guardados:
 */
const borrarListaBtn = document.createElement("button"); // Crea un botón
borrarListaBtn.textContent = "Borrar Lista"; // Establecer el texto del botón

const buttonBorrarContainer = document.createElement("div"); // Crear el contenedor del botón
buttonBorrarContainer.classList.add("button-container"); // Agregar clase al contenedor

// Agregar el contenedor al body
document.body.appendChild(buttonBorrarContainer);
// Agregar el botón al contenedor
buttonBorrarContainer.appendChild(borrarListaBtn);

borrarListaBtn.addEventListener("click", function () {
   // Obtener la referencia al elemento padre de la lista
   let listaColores = document.querySelector(".lista-colores");

   // Verificar si la lista existe
   if (listaColores) {
      // Eliminar la lista
      listaColores.remove();
   }
});
