import { useState } from "react";
//import "./css/App.css";
import "./css/tailwind.css";

import { Header } from "./components/header/Header";
import { Hero } from "./components/hero/Hero";
import Columns from "./components/columns/Columns";
import Footer from "./components/footer/Footer";
// import Tailwind from "./components/tailwind/Tailwind";

function App() {
   return (
      <>
         <Header />
         <Hero />
         <Columns />
         <Footer />

         {/* <Tailwind /> */}
      </>
   );
}

export default App;
