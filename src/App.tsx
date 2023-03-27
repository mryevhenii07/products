import React from 'react';
import { Routes,Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import Home from './pages/home';
import Cart from './pages/cart';
import NotFound from './pages/notFound';

function App() {
  return (
    <div className='wrapper'>
      <Header/>
      <Routes>
        <Route path='/products' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
export {}