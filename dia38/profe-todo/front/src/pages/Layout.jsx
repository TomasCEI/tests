
// import useContext and contextProvider from react 
import { useState, createContext } from "react";


import {Routes, Route, Outlet, Link} from "react-router-dom";
import Navigation from '@/components/Navigation';

export const AuthContext = createContext();

// plantilla de toda nuestra APP
function Layout(){

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    console.log("isLoggedIn", isLoggedIn);
    // use useContext to set if its logged in or not
    //const {isLoggedIn} = useContext(AuthContext);  

    return (
      <>
        <AuthContext.Provider value={[isLoggedIn, setIsLoggedIn]}>
          <Navigation />
          <div className="content">
              {/* El <Outlet> renderiza el Child que provenga del router */}
              <Outlet />
          </div>
          <footer className="footer">soy footer</footer>
        </AuthContext.Provider>    
      </>
    )
  }

  export default Layout;