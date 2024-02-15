import "./Header.css";
import { pixar } from "../../db/db";

const { header } = pixar;
const { h1, nav } = header;

export const Header = () => {
   return (
      <header className="Header">
         {/* <h1 className="Header-h1">
            <a href="#" className="Header-logo">
               <img src="/" title="Pixar Studio" className="Header-img" />
            </a>
         </h1> */}
         <Logo />

         {/* <nav className="Header-nav">
            <ul className="Header-ul">
               <li className="Header-li">
                  <a className="Header-a" href="#">
                     item 1
                  </a>
               </li>
               <li className="Header-li">
                  <a className="Header-a" href="#">
                     item 2
                  </a>
               </li>
               <li className="Header-li">
                  <a className="Header-a" href="#">
                     item 3
                  </a>
               </li>
            </ul>
         </nav> */}
         <Nav />
      </header>
   );
};

// crear compoonentes h1 y nav

const Logo = () => {
   const { href, title, src } = h1;
   return (
      <h1 className="Header-h1">
         <a href={href} className="Header-logo">
            <img src={src} title={title} className="Header-img" />
         </a>
      </h1>
   );
};

const Nav = () => {
   //const { href, title, src } = nav;
   return (
      <nav className="Header-nav">
         <ul className="Header-ul">
            {/* <li className="Header-li">
               <a className="Header-a" href="#">
                  item 1
               </a>
            </li>
            <li className="Header-li">
               <a className="Header-a" href="#">
                  item 2
               </a>
            </li>
            <li className="Header-li">
               <a className="Header-a" href="#">
                  item 3
               </a>
            </li> */}
            {nav.map((item) => {
               //recorrer el array de objetos
               return <Li key={item.id} {...item} />;
            })}
         </ul>
      </nav>
   );
};

const Li = (props) => {
   const { href, text } = props;
   return (
      <li className="Header-li">
         <a className="Header-a" href={href}>
            {text}
         </a>
      </li>
   );
};
