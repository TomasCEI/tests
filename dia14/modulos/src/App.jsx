import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/App.css'
import MenuResponsive from './components/menuresponsive/MenuResponsive';
import Tabs from './components/tabs/Tabs';
import Accordion from './components/accordion/Accordion';
import LightBox from './components/lightbox/LightBox';
import Slider from './components/sliders/Slider';


function App() {
  const [count, setCount] = useState(0)

  const items = [
    {id: 1, titulo: "Pregunta 1", contenido: "Contenido de Pregunta 1"},
    {id: 2, titulo: "Pregunta 2", contenido: "Contenido de Pregunta 2"},
    {id: 3, titulo: "Pregunta 3", contenido: "Contenido de Pregunta 3"},
  ]


const listaImagenes = ["imagen1.png", "imagen2.png", "imagen3.png"];


  return (
    <>
     <MenuResponsive />
      <br />
      <Tabs />
      <br />
      <Accordion items={items} />
      <br />
      <LightBox />
      <br />
      <Slider items={listaImagenes}/>
    </>
  )
}

export default App
