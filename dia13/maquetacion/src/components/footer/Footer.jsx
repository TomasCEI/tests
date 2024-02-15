import "./Footer.css";
import { pixar } from "../../db/db";

const { footer } = pixar;
const { socials, terms, copyright, button } = footer;

const Footer = () => {
   return (
      <footer className="Footer">
         <div className="Footer-socials">
            {socials.map((item, index) => (
               <Social key={index} {...item} />
            ))}
         </div>
         <div className="Footer-terms">
            {terms.map((item, index) => (
               <Term key={index} {...item} />
            ))}
         </div>
         <div>
            <p>{copyright}</p>
         </div>
         <div>
            <button className="Footer-button">{button.text}</button>
         </div>
      </footer>
   );
};

const Social = (props) => {
   const { icon, href } = props;
   return (
      <a href={href} className="Footer-social-icon">
         <i className={icon}></i>
      </a>
   );
};

const Term = (props) => {
   const { href, text } = props;
   //console.log(props);
   return (
      <a href={href} className="Footer-term">
         {text}
      </a>
   );
};

export default Footer;
