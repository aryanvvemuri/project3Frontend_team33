import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { CartProvider } from './components/CartContext'; 
import { BrowserRouter } from 'react-router-dom';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <CartProvider>
      <App />
    </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);
