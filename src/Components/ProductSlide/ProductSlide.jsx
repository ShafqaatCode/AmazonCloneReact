import React, { useRef } from 'react';
import {
  SliderContainer,
  ProductList,
  ProductImage,
  ArrowButton,
  ArrowWrapper,
} from './ProductSlide.styled';

const ProductSlider = () => {
  const scrollRef = useRef();

  const scroll = (direction) => {
    const scrollAmount = 300;
    if (direction === 'left') {
      scrollRef.current.scrollLeft -= scrollAmount;
    } else {
      scrollRef.current.scrollLeft += scrollAmount;
    }
  };

  const images = [
    '/src/assets/passets/kids1.jpg',
    '/src/assets/passets/kids2.jpg',
    '/src/assets/passets/kids3.jpg',
    '/src/assets/passets/kids4.jpg',
    '/src/assets/passets/kids5.jpg',
    '/src/assets/passets/kids6.jpg',
    '/src/assets/product1-3.jpg',
    '/src/assets/product1-4.jpg',
    '/src/assets/product1-5.jpg',
    '/src/assets/product1-6.jpg',
  ];

  return (
    <SliderContainer>
      <h2>Top Sellers in Toys For you</h2>
      <ArrowWrapper>
        <ArrowButton onClick={() => scroll('left')}>&#10094;</ArrowButton>
        <ProductList ref={scrollRef}>
          {images.map((img, index) => (
            <ProductImage key={index} src={img} alt={`product-${index}`} />
          ))}
        </ProductList>
        <ArrowButton onClick={() => scroll('right')}>&#10095;</ArrowButton>
      </ArrowWrapper>
    </SliderContainer>
  );
};

export default ProductSlider;
