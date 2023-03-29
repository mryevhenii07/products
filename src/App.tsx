import { FC } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './pages/home';
import Cart from './pages/cart';
import NotFound from './pages/notFound';
import CreateProduct from './pages/createProduct';
import './App.css';

const App: FC = () => {
  const { pathname } = useLocation();

  return (
    <div className="wrapper">
      <div className="container">
        {pathname !== '/createProduct' ? <Header /> : ''}
        <Routes>
          <Route path="/products" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/createProduct" element={<CreateProduct />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
