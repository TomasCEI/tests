import { useEffect, useState } from 'react'

function App() {
  //const [count, setCount] = useState(0)

  useEffect( () => {

    console.clear();

     // Uso de spread (...)
    const user= {
      nombre: "Laura",
      hobbies: ["Futbol", "Programar"],
      domicilio: {
        ciudad: "Valencia",
        cp: 14026
      },
      edad: 25
    }

    // version simple de hacer una copia multinivel, PEROOOO
    // no funciona si mi objeto tiene funciones, undefined, NaN
    const userCopy2= JSON.parse(JSON.stringify(user));


    // me crea una shallow copy de mi objeto User
    const userCopy = { ...user}; 
    userCopy.edad=33;
    userCopy.hobbies=["futbol", "Programar"];

    userCopy.domicilio.ciudad = "Madrid";

    //console.log("user es:", user);
    //console.log("userCopy es:", userCopy);






    const semana= ["lunes", "martes", "miércoles"];

    // nomenclatura de manipulación de arrays en React
    let semanaCopy = [ ...semana, "jueves", "viernes"];

    semanaCopy = ["Sabado", "Domingo", ...semanaCopy];

    //semanaCopy.push("Jueves");

    //console.log("semana es:", semana);
    //console.log("semanaCopy es:", semanaCopy);

    // De Referencia: funciones, objetos, arrays

    function mostrarVerduras (verdura1, verdura2){
      //  console.log([verdura1, verdura2]); // "lechuga" "Zanahoria"
    }
    mostrarVerduras("Lechuga", "Zanahoria");

    function mostrarVerdurasSpread (...datos){
     // console.log(datos); // "lechuga" "Zanahoria"
  }

  mostrarVerdurasSpread("Lechuga", "Zanahoria", "Zapallo");
  mostrarVerdurasSpread("tomate", "naranja");





  }, [])

  // mis components
  const Componente = ({prop1, prop2, prop3}) => {
    return (
      <>
      <h1>soy un componente</h1>
      <ul>
        <li>{prop1}</li>
        <li>{prop2}</li>
        <li>{prop3}</li>
      </ul>
      </>
    )
  }

  // mis datos
  const props={
    prop1: "valor1",
    prop2: "valor2",
    prop3: "valor3",
    prop4: "valor4",
  }

  return (
    <>
    <h1>SPREADs</h1>
      <Componente 
        prop1={props.prop1}  
        prop2={props.prop2} 
        prop3={props.prop3}
        />

      <Componente {...props} />
    </>
  )

}

export default App
