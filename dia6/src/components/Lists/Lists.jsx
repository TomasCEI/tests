function Lists({ items }) {
   return (
      <>
         <h1>Lista de Compras</h1>
         <ul>
            {items.map((item) => {
               return <li>{item}</li>;
            })}
         </ul>

         {/* <h1>Lista de Objetos</h1>
         <ul>
            {items.map((item) => {
               return <li key={item.id}>{item.nombre}</li>;
            })}
         </ul> */}
      </>
   );
}

export default Lists;
