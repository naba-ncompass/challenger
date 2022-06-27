import React, { useState } from 'react';

//importing all the shoe images and thumbnails
import shoe1 from '../images/shoes/image-product-1.jpg';
import thumbnail1 from '../images/shoes/image-product-1-thumbnail.jpg';
import shoe2 from '../images/shoes/image-product-2.jpg';
import thumbnail2 from '../images/shoes/image-product-2-thumbnail.jpg';
import shoe3 from '../images/shoes/image-product-3.jpg';
import thumbnail3 from '../images/shoes/image-product-3-thumbnail.jpg';
import shoe4 from '../images/shoes/image-product-4.jpg';
import thumbnail4 from '../images/shoes/image-product-4-thumbnail.jpg';

import next from '../images/svgs/icon-next.svg';
import previous from '../images/svgs/icon-previous.svg';
import close from '../images/svgs/icon-close.svg';

import './Product.css';

const ProductCarosel = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [modalSelectedImage, setModalSelectedImage] = useState(0);
  const shoeImages = [shoe1, shoe2, shoe3, shoe4];

  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="product-image-grid">
        <img
          src={shoeImages[selectedImage]}
          className={'main-image'}
          alt="shoe1"
          onClick={() => setShowModal(true)}
        />
        <img
          src={thumbnail1}
          className={`thumbnail ${selectedImage === 0 ? 'selected-thumbnail' : ''}`}
          onClick={() => setSelectedImage(0)}
          alt="thumbnail1"
        />
        <img
          src={thumbnail2}
          className={`thumbnail ${selectedImage === 1 ? 'selected-thumbnail' : ''}`}
          onClick={() => setSelectedImage(1)}
          alt="thumbnail2"
        />
        <img
          src={thumbnail3}
          className={`thumbnail ${selectedImage === 2 ? 'selected-thumbail' : ''}`}
          onClick={() => setSelectedImage(2)}
          alt="thumbnail3"
        />
        <img
          src={thumbnail4}
          className={`thumbnail ${selectedImage === 3 ? 'selected-thumbnail' : ''}`}
          onClick={() => setSelectedImage(3)}
          alt="thumbnail4"
        />
      </div>
      {showModal && (
        <div className="modal-container">
          <div className="product-modal">
            <button className="modal-close" onClick={() => setShowModal(false)}>
              <img src={close} alt="close" />
            </button>
            <button
              className="modal-previous"
              onClick={() =>
                setModalSelectedImage((prevState) => (prevState !== 0 ? prevState - 1 : 3))
              }
            >
              <img src={previous} alt="previous" />
            </button>
            <button
              className="modal-next"
              onClick={() =>
                setModalSelectedImage((prevState) => (prevState !== 3 ? prevState + 1 : 0))
              }
            >
              <img src={next} alt="next" />
            </button>
            <div className="product-image-grid-modal">
              <img src={shoeImages[modalSelectedImage]} className={'main-image'} alt="shoe1" />
              <img
                src={thumbnail1}
                className={`thumbnail ${modalSelectedImage === 0 ? 'selected-thumbnail' : ''}`}
                alt="thumbnail1"
              />
              <img
                src={thumbnail2}
                className={`thumbnail ${modalSelectedImage === 1 ? 'selected-thumbnail' : ''}`}
                alt="thumbnail2"
              />
              <img
                src={thumbnail3}
                className={`thumbnail ${modalSelectedImage === 2 ? 'selected-thumbnail' : ''}`}
                alt="thumbnail3"
              />
              <img
                src={thumbnail4}
                className={`thumbnail ${modalSelectedImage === 3 ? 'selected-thumbnail' : ''}`}
                alt="thumbnail4"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCarosel;
