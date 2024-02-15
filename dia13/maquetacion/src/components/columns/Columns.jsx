import { pixar } from "../../db/db";
import "./Columns.css";

const { columns } = pixar;

const Columns = () => {
   return (
      <section className="Columns">
         {columns.map((column) => (
            <Column key={column.id} {...column} />
         ))}
      </section>
   );
};

const Column = (props) => {
   const { title, src, href } = props;
   return (
      <article className="Columns-article">
         <a href={href} className="Columns-a">
            <img className="Columns-img" src={src} alt={title} />
            <h3 className="Columns-title">{title}</h3>
         </a>
      </article>
   );
};
export default Columns;
