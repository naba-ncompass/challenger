import React, { useState } from 'react';
import './Navbar.css';
import avatar from '../images/image-avatar.png';
import shoe1 from '../images/shoes/image-product-1-thumbnail.jpg';
import deleteIcon from '../images/svgs/icon-delete.svg';
import menuIcon from '../images/svgs/icon-menu.svg';
import logo from '../images/svgs/logo.svg';
import cart from '../images/svgs/icon-cart.svg';
import close from '../images/svgs/icon-close.svg';

const Navbar = ({ productsInCart }) => {
  const [showCart, setShowCart] = useState(false);
  const [showHamburger, setShowHamburger] = useState(false);

  return (
    <div className="main-navbar">
      <img src={menuIcon} alt="menu" className="hamburger" onClick={() => setShowHamburger(true)} />
      <img src={logo} alt="logo" className="logo" />
      {showHamburger && (
        <div className="hamburger-menu">
          <ul className="hamburger-items">
            <li className="hamburger-close" onClick={() => setShowHamburger(false)}>
              <img src={close} alt="close" />
            </li>
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      )}

      <ul className="primary-navbar-items">
        <li>
          Collections <hr />
        </li>
        <li>
          Men <hr />
        </li>
        <li>
          Women <hr />
        </li>
        <li>
          About <hr />
        </li>
        <li>
          Contact <hr />
        </li>
      </ul>
      <ul className="secondary-navbar-items">
        <li onClick={() => setShowCart((prevState) => !prevState)}>
          <span className="products-in-cart">{productsInCart}</span>
          <img src={cart} alt="cart" className="cart" />
        </li>
        <li>
          <img src={avatar} alt="avatar" className="avatar" />
        </li>
      </ul>
      {showCart && (
        <div className="cart-container">
          <h3>Cart</h3>
          {productsInCart > 0 && (
            <>
              <div className="cart-item">
                <img src={shoe1} alt="shoe" className="cart-thumbnail" />
                <div className="cart-details">
                  <p>Fall Limited Edition Sneakers</p>
                  <p>
                    $125 x {productsInCart} <strong>${productsInCart * 125}</strong>
                  </p>
                </div>
                <img src={deleteIcon} alt="delte" className="delete-button" />
              </div>
              <button className="cart-checkout">Checkout</button>
            </>
          )}

          {productsInCart === 0 && (
            <div className="cart-item-empty">
              <h4>Your Cart Is Empty</h4>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
