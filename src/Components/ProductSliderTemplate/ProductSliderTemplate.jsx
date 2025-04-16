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
  const openModalWithImage = async (imgSrc) => {
    try {
      const response = await fetch(
        `https://67fec93958f18d7209ef4e43.mockapi.io/db?src=${encodeURIComponent(imgSrc)}`
      );
      const data = await response.json();
  
      if (data.length > 0) {
        setModalItem(data[0]);
      } else {
        setModalItem({
          src: imgSrc,
          label: "Unknown Product",
          price: "N/A",
          category: "Unknown",
          description: "No description available.",
          stars: "-"
        });
      }
  
      setIsModalOpen(true);
    } catch (err) {
      console.error("Failed to fetch modal data by src:", err);
    }
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
