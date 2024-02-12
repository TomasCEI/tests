import { useState } from "react";
import "./App.css";
import { Header } from "./components/header/Header";
import { Hero } from "./components/hero/Hero";
// import { Columns } from "./components/columns/Columns";
// import { Footer } from "./components/footer/Footer";

function App() {
   return (
      <>
         <Header />
         <Hero />
         {/* <Columns />
         <Footer /> */}
      </>
   );
}

export default App;
