import { useState } from "react";
import "./App.css";
import { Header } from "./components/header/Header";
import { Hero } from "./components/hero/Hero";
// import { Columns } from "./components/columns/Columns";
import { Footer } from "./components/footer/Footer";
import Button from "./components/tailwind/Button";
import { ScreenFitText } from "./components/tailwind/ScreenFitText";

function App() {
   return (
      <>
         <Header />
         <Hero />
         {/* <Columns /> */}
         <Footer />
         <Tailwind />
      </>
   );
}

export default App;

const Tailwind = () => {
   /**
    * intersante uso de componentes y animaciones:
    *
    * https://www.hover.dev/components/buttons
    * https://www.framer.com/motion/introduction/
    * https://www.youtube.com/watch?v=O5lZqqy7VQE
    */
   return (
      <>
         <h1 className="text-3xl font-bold underline">Hello from Tailwind!</h1>
         <Button />
         <ScreenFitText texto="Hola Tomi" />
      </>
   );
};
