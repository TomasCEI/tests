document.addEventListener("DOMContentLoaded", () => {
   const cuadro = document.querySelector(".cuadro");
   const controles = document.querySelectorAll(".control");
   const colorCode = document.querySelector(".colorCode");
   const saveColorBtn = document.getElementById("saveColor");
   const clearListBtn = document.getElementById("clearList");
   const colorList = document.getElementById("colorList");
   let colorHistory = [];

   function updateColor() {
      const color = `rgb(${controles[0].value}, ${controles[1].value}, ${controles[2].value})`;
      cuadro.style.backgroundColor = color;
      colorCode.textContent = color;
   }

   controles.forEach((control) => {
      control.addEventListener("input", updateColor);
   });

   saveColorBtn.addEventListener("click", () => {
      if (colorHistory.length >= 10) {
         colorHistory.shift(); // Eliminar el primer elemento del array
      }
      const color = {
         r: controles[0].value,
         g: controles[1].value,
         b: controles[2].value,
      };
      colorHistory.push(color); // Agregar el color al final del array
      renderColorList();
   });

   clearListBtn.addEventListener("click", () => {
      colorHistory = [];
      renderColorList();
   });

   function renderColorList() {
      colorList.innerHTML = "";
      console.log(colorHistory);
      colorHistory.forEach((color, index) => {
         const li = document.createElement("li");
         const rgbColor = `rgb(${color.r}, ${color.g}, ${color.b})`;
         li.innerHTML = `${index + 1}. &nbsp;
                <span class="color-circle" data-index="${index}" style="background-color: ${rgbColor};"></span>
                ${rgbColor}
                <span class="delete-btn" data-index="${index}">🗑️</span>
            `;
         li.classList.add("color-item");
         colorList.appendChild(li);
      });
   }

   colorList.addEventListener("click", (e) => {
      if (e.target.classList.contains("delete-btn")) {
         const index = e.target.getAttribute("data-index");
         colorHistory.splice(index, 1);
         renderColorList();
      } else if (e.target.classList.contains("color-circle")) {
         const index = e.target.getAttribute("data-index");

         const { r, g, b } = colorHistory[index]; // {r: 255, g: 255, b: 255}
         controles[0].value = r;
         controles[1].value = g;
         controles[2].value = b;

         //const color = colorHistory[index];
         //controles[0].value = color.r;
         //controles[1].value = color.g;
         //controles[2].value = color.b;

         updateColor();
      }
   });

   updateColor(); // Inicializar con el color predeterminado
});
