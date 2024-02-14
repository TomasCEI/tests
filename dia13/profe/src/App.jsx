// NO USAREMOS ESTE ARCHIVO, LO DEJAMOS COMO REFERENCIA
// import { Acordeon } from "./components/Acordeon/Acordeon";
// import { Kata } from "./components/Kata/Kata";
// import { Lightbox } from "./components/Lightbox/Lightbox";
// import { Slider } from "./components/Slider/Slider";
// import { Tabs } from "./components/Tabs/Tabs";
// import { Teoria } from "./components/Teoria";
// NO USAREMOS ESTE ARCHIVO, LO DEJAMOS COMO REFERENCIA

import { Menu } from "./components/Menu/Menu";

import { useState } from "react";

function App() {
   const items = [
      { id: 1, titulo: "Título 1", parrafo: "Contenido 1" },
      { id: 2, titulo: "Título 2", parrafo: "Contenido 2" },
      { id: 3, titulo: "Título 3", parrafo: "Contenido 3" },
   ];

   return (
      <>
         {/* NO USAREMOS ESTE ARCHIVO, LO DEJAMOS COMO REFERENCIA */}
         {/* <h2>Módulos con useState</h2> */}
         {/* <Teoria /> */}
         {/* <Kata /> */}
         {/* <Lightbox /> */}
         {/* <Acordeon /> */}
         {/* <Tabs /> */}
         {/* <Slider /> */}
         {/* NO USAREMOS ESTE ARCHIVO, LO DEJAMOS COMO REFERENCIA */}

         <h2>Componentes con useState</h2>
         <Menu />
         {/* <Tabs />*/}
         {/* <Accordion items={items} /> */}
         {/* <Lightbox /> */}
         {/* <Slider /> */}
      </>
   );
}

const Tabs = () => {
   const [activeTab, setActiveTab] = useState(0);

   const handleTabClick = (index) => {
      setActiveTab(index);
   };

   return (
      <section>
         <div>
            <button onClick={() => handleTabClick(0)}>Tab 1</button>
            <button onClick={() => handleTabClick(1)}>Tab 2</button>
            <button onClick={() => handleTabClick(2)}>Tab 3</button>
         </div>
         <div>
            {activeTab === 0 && <div>Contenido de la pestaña 1</div>}
            {activeTab === 1 && <div>Contenido de la pestaña 2</div>}
            {activeTab === 2 && <div>Contenido de la pestaña 3</div>}
         </div>
      </section>
   );
};

const Accordion = ({ items }) => {
   const [openItemId, setOpenItemId] = useState(null);

   const toggleAccordion = (itemId) => {
      setOpenItemId((prevId) => (prevId === itemId ? null : itemId));
   };

   return (
      <div>
         {items.map((item) => (
            <div key={item.id}>
               <button onClick={() => toggleAccordion(item.id)}>
                  {item.titulo} {openItemId === item.id ? "-" : "+"}
               </button>
               {openItemId === item.id && <div>{item.parrafo}</div>}
            </div>
         ))}
      </div>
   );
};

const Lightbox = () => {
   const [isOpen, setIsOpen] = useState(false);

   const toggleLightbox = () => {
      setIsOpen(!isOpen);
   };

   return (
      <div>
         <button onClick={toggleLightbox}>Abrir Lightbox/Modal</button>
         {isOpen && (
            <div>
               <div>Contenido del lightbox</div>
               <button onClick={toggleLightbox}>Cerrar</button>
            </div>
         )}
      </div>
   );
};

const Slider = () => {
   const [currentSlide, setCurrentSlide] = useState(0);
   const slides = ["imagen1.jpg", "imagen2.jpg", "imagen3.jpg"];

   const handleNextSlide = () => {
      // if (slides.length > currentSlide + 1) {
      //    setCurrentSlide(currentSlide + 1);
      // } else {
      //    setCurrentSlide(0);
      // }
      const nextSlide = slides.length > currentSlide + 1 ? currentSlide + 1 : 0;
      setCurrentSlide(nextSlide);
   };

   const handlePrevSlide = () => {
      // if (currentSlide === 0) {
      //    setCurrentSlide(slides.length - 1);
      // } else {
      //    setCurrentSlide(currentSlide - 1);
      // }
      const nextSlide = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
   };

   return (
      <div>
         <button onClick={handlePrevSlide}>Prev</button>

         <img src={slides[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
         {slides[currentSlide]}

         <button onClick={handleNextSlide}>Next</button>
      </div>
   );
};
export default App;

// actividad
// https://excalidraw.com/#json=2sczpkw01MXya74ASy16U,1mLi7U3cQqBVx6A_wuyEjw
