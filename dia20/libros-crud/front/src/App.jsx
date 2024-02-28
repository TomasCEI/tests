import './App.css'
import {Routes, Route, Outlet, Link} from "react-router-dom";
import NotFound from './components/NotFound'
import Navigation from './components/Navigation';
import Home from './components/Home';
import BookList from './components/BookList';
import BookAdd from './components/BookAdd';
import AuthorList from './components/AuthorList';

function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}> 

          <Route index element={<Home />} /> 
          <Route path="/lista" element={<BookList />} /> 
          <Route path="/agregar" element={<BookAdd />} /> 
          <Route path="/autores" element={<AuthorList />} /> 

          <Route path="*" element={<NotFound />} />
        </Route>
        
      </Routes>
    </>
  )
}

// plantilla de toda nuestra APP
function Layout(){
  return (
    <>
      
      <Navigation />

      {/* El <Outlet> renderiza el Child que provenga del router */}
      <div className="content">
        <Outlet />
      </div>

      <footer className="footer">soy footer</footer>
    </>
  )
}


export default App
