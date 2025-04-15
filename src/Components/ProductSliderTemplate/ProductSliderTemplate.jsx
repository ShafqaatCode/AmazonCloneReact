import React, { useState, useRef } from 'react';
import {
  SliderContainer,
  ProductList,
  ProductImage,
  ArrowWrapper,
  ArrowButton,
} from '../ProductSlide/ProductSlide.styled.js';
import ProductModal from '../ProductBoxs/ProductModel';

const ProductSliderTemplate = ({ title, images }) => {
  const scrollRef = useRef(null);
  const [modalItem, setModalItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scroll = (dir) => {
    if (!scrollRef.current) return;

    if (dir === 'left') {
      scrollRef.current.scrollLeft -= 300;
    } else {
      scrollRef.current.scrollLeft += 300;
    }
  };

  const openModalWithImage = (imgSrc) => {
    setModalItem({
      src: imgSrc,
      label: 'Slider Image',
      alt: 'Image from slider',
    });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalItem(null);
  };

  return (
    <SliderContainer>
      <h2>{title}</h2>
      <ArrowWrapper>
        <ArrowButton onClick={() => scroll('left')}>&#9664;</ArrowButton>
        <ProductList ref={scrollRef}>
          {images?.map((img, i) => (
            <ProductImage
              key={i}
              src={img}
              alt={`product-${i}`}
              onClick={() => openModalWithImage(img)}
              style={{ cursor: 'pointer' }}
            />
          ))}
        </ProductList>
        <ArrowButton onClick={() => scroll('right')}>&#9654;</ArrowButton>
      </ArrowWrapper>

      {isModalOpen && modalItem && (
        <ProductModal
          show={isModalOpen}
          onClose={closeModal}
          product={modalItem}
        />
      )}
    </SliderContainer>
  );
};

export default ProductSliderTemplate;
