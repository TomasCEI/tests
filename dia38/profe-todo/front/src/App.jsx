import '@/App.css'

import React from 'react';
import {Routes, Route, Outlet, Link} from "react-router-dom";

import NotFound from '@/pages/NotFound'
import Login from '@/pages/Login';
import Tasks from '@/pages/Tasks';
import Layout from '@/pages/Layout';

function App() {

    return (
      <>
      
      <Routes>
        <Route path="/" element={<Layout />}> 

          <Route index element={<Login />} /> 
          <Route path="/tasks" element={<Tasks />} />  

          <Route path="/logout" element={<Logout />} /> 
          <Route path="*" element={<NotFound />} />
        </Route>
        
      </Routes>
      </>
    );

}

const Logout = () => {
  return (
    <div>
      <h1>Logout</h1>
    </div>
  ) 
}

export default App
