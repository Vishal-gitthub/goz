import React from 'react';
import Navbar from './Navbar';
import Home from './Component/Home';
import Footer from './Footer';
import { Routes, Route } from 'react-router-dom';
import All_Products from './Component/All_Products';
import About from './Component/About';
import Contact from './Component/Contact';
import LoginPage from './Component/Login';
import Cart from './Component/Cart';
import ProductPage from './Component/ChildComponent/ProductPage';
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<All_Products />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/account' element={<LoginPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
