import React from 'react';
import { Routes,Route } from 'react-router-dom';

import './App.css';
// import FullProduct from './components/FullProduct/FullProduct';
// import ItemProduct from './components/ItemProduct/ItemProduct';
// import ListProduct from './components/ListProduct/ListProduct';
import Header from './components/Header/Header';
import Home from './pages/home';

function App() {
  return (
    <div className='wrapper'>
      <Header/>
      
      <Routes>
        <Route path='/products' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
export {}