import React, { useState } from 'react';

//importing all the shoe images and thumbnails
import shoe1 from '../images/shoes/image-product-1.jpg';
import shoe2 from '../images/shoes/image-product-2.jpg';
import shoe3 from '../images/shoes/image-product-3.jpg';
import shoe4 from '../images/shoes/image-product-4.jpg';

import next from '../images/svgs/icon-next.svg';
import previous from '../images/svgs/icon-previous.svg';

import plus from '../images/svgs/icon-plus.svg';
import minus from '../images/svgs/icon-minus.svg';

import './MobileProduct.css';
const MobileProduct = ({ productsInCart, setProductsInCart }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  const shoeImages = [shoe1, shoe2, shoe3, shoe4];

  return (
    <div className="mobile-products">
      <div className="product-image-carosel">
        <button
          className="mobile-previous"
          onClick={() => setSelectedImage((prevState) => (prevState !== 0 ? prevState - 1 : 3))}
        >
          <img src={previous} alt="previous" />
        </button>
        <button
          className="mobile-next"
          onClick={() => setSelectedImage((prevState) => (prevState !== 3 ? prevState + 1 : 0))}
        >
          <img src={next} alt="next" />
        </button>
        <img src={shoeImages[selectedImage]} alt="product" className="mobile-image" />
      </div>
      <div className="mobile-product-detail">
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

export default MobileProduct;
