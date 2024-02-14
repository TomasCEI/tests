import "./Hero.css";
import { pixar } from "../../db/db";

export const Hero = () => {
   const { hero } = pixar;

   const inlineStyles = {
      backgroundImage: `url(${hero.background})`
   };

   return (
      <section className="Hero" style={inlineStyles}>
         <h2 className="Hero-h2">
            <CallToAction {...hero} />
         </h2>
      </section>
   );
};

const CallToAction = (props) => {
   const { href, src, title } = props;
   return (
      <a href={href} className="Hero-a">
         <img src={src} alt={title} className="Hero-img" />
      </a>
   );
};
