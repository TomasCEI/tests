import {Link} from 'react-router-dom';

export const Navigation = () => {
    return (
        <nav className="nav">
        <ul>
          <li>
            <Link to="/">Bienvenida</Link>
          </li>
          <li>
            <Link to="/agregar">Agregar</Link>
          </li>
          <li>
            <Link to="/lista">Listar</Link>
          </li>
          <li>
            <Link to="/otra-pagina">Página inexistente</Link>
          </li>
        </ul>
      </nav>
    )
}