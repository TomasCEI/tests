import { Link } from "react-router-dom";

export const NotFound = () => {
    return (
      <div>
        <h2>404 página no encontrada!</h2>
        <p>
          <Link to="/">Volver al Home</Link>
        </p>
      </div>
    );
  }