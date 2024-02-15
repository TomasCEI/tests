import { useState } from "react";
import "./Tabs.css";

export const Tabs = () => {
   const informacion = [
      { id: 0, btn: "Matrix", p: "Soy matrix" },
      { id: 1, btn: "Pepa Pig", p: "Pepa Pig es la mejor!!!" },
      { id: 2, btn: "Cansado", p: "Quiero mimir ya!!" },
   ];

   const [tabs, setTabs] = useState(0);
   const tabsHandler = (valor) => setTabs(valor);

   return (
      <div className="Tabs">
         <ul className="Tabs-ul">
            {informacion.map((eachInfo) => (
               <Li key={eachInfo.id} {...eachInfo} tabs={tabs} tabsHandler={tabsHandler} />
            ))}
         </ul>

         <div className="Tabs-container">
            {informacion.map((eachInfo) => (
               <Parrafo key={eachInfo.id} {...eachInfo} tabs={tabs} />
            ))}
         </div>
      </div>
   );
};

const Li = (props) => {
   const { id, btn, tabs, tabsHandler } = props;
   return (
      <li className="Tabs-li">
         <button onClick={() => tabsHandler(id)} className={`Tabs-btn ${tabs === id ? "isActive" : ""}`}>
            {btn}
         </button>
      </li>
   );
};
const Parrafo = (props) => {
   const { id, p, tabs } = props;
   return <p className={`Tabs-p ${tabs === id ? "isActive" : ""}`}>{p}</p>;
};
