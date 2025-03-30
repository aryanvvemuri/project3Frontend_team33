import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CategoryPage from './components/CategoryPage';
import MenuPage from './components/MenuPage';
import CustomizePage from './components/CustomizePage';
import CartPage from './components/CartPage';
import NavBar from './components/NavBar';
import AboutPage from './components/AboutPage';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<CategoryPage />} />
        <Route path="/menu/:categoryId" element={<MenuPage />} />
        <Route path="/customize/:id" element={<CustomizePage />} />
        
        {}
        <Route
          path="/cart"
          element={
            <>
              {console.log(' Rendering <CartPage />')}
              <CartPage />
            </>
          }
        />

        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  );
}

export default App;

