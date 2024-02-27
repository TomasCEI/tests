
import './App.css'
import { Routes, Route, Outlet } from "react-router-dom";

// páginas
import { NotFound } from './components/NotFound';
import BookAdd from './components/BookAdd';
import BookList from './components/BookList';
import Home from './components/Home';
import {Navigation} from './components/Navigation';

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
    <>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <Navigation />

      {/* El <Outlet> renderiza el Child que provenga del Router, se puede considerar como un placeholder */}
      <div className="content">
        <Outlet />
      </div>

      <footer className="footer"> soy footer </footer>
    </>
  );
}

export default App
