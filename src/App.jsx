import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CategoryPage from './components/CategoryPage';
import MenuPage from './components/MenuPage';
import CustomizePage from './components/CustomizePage';
import CartPage from './components/CartPage';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <NavBar /> {/* ✅ Show on all pages */}
      <Routes>
        <Route path="/" element={<CategoryPage />} />
        <Route path="/menu/:categoryId" element={<MenuPage />} />
        <Route path="/customize/:id" element={<CustomizePage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  );
}

export default App;
