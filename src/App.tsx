import React, { useState } from 'react';
import { Routes,Route,useLocation } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import Home from './pages/home';
import Cart from './pages/cart';
import NotFound from './pages/notFound';
import CreateProduct from './pages/createProduct';

function App() {
 const {pathname} =useLocation()
 console.log(pathname);
 
  
  return (
    <div className='wrapper'>
     {pathname !== "/createProduct" ? <Header /> : ""} 
      <Routes>
        <Route path='/products' element={<Home />}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/createProduct' element={<CreateProduct/>}/>
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
export {}