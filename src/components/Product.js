import React, { useState } from 'react';

import plus from '../images/svgs/icon-plus.svg';
import minus from '../images/svgs/icon-minus.svg';

import ProductCarosel from './ProductCarosel';
import './Product.css';
import MobileProduct from './MobileProduct';

const Product = ({ productsInCart, setProductsInCart }) => {
  return (
    <div className="main">
      <ProductCarosel />
      <MobileProduct productsInCart={productsInCart} setProductsInCart={setProductsInCart} />
      <div className="product-detail">
        <h4>SNEAKER COMPANY</h4>
        <h1>Fall Limited Sneakers</h1>
        <p>
          These low-profile sneakers are your perfect casual wear companion. Featuring a durable
          rubber outter sole , they'll withstand everything the weather can offer
        </p>
        <div className="product-detail-prices">
          <h3>$125.00</h3>
          <span className="discount-tag">50%</span>
        </div>
        <span className="previous-price">$250.00</span>
        <div className="product-detail-cart">
          <div className="cart-items-controls">
            <button
              onClick={() =>
                setProductsInCart((prevState) => (prevState === 0 ? 0 : prevState - 1))
              }
            >
              <img src={minus} alt="minus" />
            </button>
            <span>{productsInCart}</span>
            <button onClick={() => setProductsInCart((prevState) => prevState + 1)}>
              <img src={plus} alt="plus" />
            </button>
          </div>
          <button className="add-to-cart">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
