
import './App.css'
import { Routes, Route, Outlet, Link } from "react-router-dom";

// páginas
import { NotFound } from './components/NotFound';
import BookAdd from './components/BookAdd';
import BookList from './components/BookList';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="agregar" element={<BookAdd />} />
          <Route path="lista" element={<BookList />} />

          {/* Ruta Catch-All*/}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}


function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav>
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

      <hr />

      {/* El <Outlet> renderiza el Child que provenga del Router, se puede considerar como un placeholder */}
      <Outlet />
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Página de Bienvenida!</h2>
    </div>
  );
}




export default App
