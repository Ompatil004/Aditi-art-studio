import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import CategoryPage from '../pages/CategoryPage';
import SubCategoryPage from '../pages/SubCategoryPage';
import About from '../pages/About';
import CartPage from '../pages/CartPage';
import Shop from '../pages/Shop';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/category/:id" element={<CategoryPage />} />
      <Route path="/subcategory/:id" element={<SubCategoryPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
};

export default AppRoutes;