import "./Hero.css";
import { pixar } from "../../db/db";

export const Hero = () => {
   const { hero } = pixar;

   return (
      <section className="Hero">
         <h2 className="Hero-h2">
            <Logo {...hero} />
         </h2>
      </section>
   );
};

const Logo = (props) => {
   const { href, src, title } = props;
   return (
      <a href={href} className="Hero-a">
         <img src={src} alt={title} className="Hero-img" />
      </a>
   );
};
