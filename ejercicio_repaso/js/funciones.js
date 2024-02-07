const cuadros = document.querySelectorAll(".cuadro");
const controles = document.querySelectorAll("input");
const codigoColor = document.querySelector("p");

function hexadecimal(r, g, b) {
   let codigo = [];
   for (let i = 0; i < arguments.length; i++) {
      codigo.push(
         (Number(arguments[i]) < 16 ? "0" : "") +
            Number(arguments[i]).toString(16)
      );
   }
   return `#${codigo.join("")}`;
}

controles.forEach(function (control, indice) {
   control.addEventListener("input", function () {
      cuadros[0].style.backgroundColor = hexadecimal(
         controles[0].value,
         controles[1].value,
         controles[2].value
      );

      codigoColor.innerHTML = hexadecimal(
         controles[0].value,
         controles[1].value,
         controles[2].value
      );

      cuadros[indice + 1].style.backgroundColor = hexadecimal(
         indice == 0 ? control.value : 0,
         indice == 1 ? control.value : 0,
         indice == 2 ? control.value : 0
      );
   });
});
