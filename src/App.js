import React, { useState } from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Product from './components/Product';

function App() {
  const [productsInCart, setProductsInCart] = useState(0);
  return (
    <div>
      <Navbar productsInCart={productsInCart} />
      <Product setProductsInCart={setProductsInCart} productsInCart={productsInCart} />
    </div>
  );
}

export default App;
