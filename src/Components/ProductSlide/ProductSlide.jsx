import React, { useRef } from 'react';
import {
  SliderContainer,
  ProductList,
  ProductImage,
  ArrowButton,
  ArrowWrapper,
} from './ProductSlide.styled';

const ProductSlider = () => {
  const sliderRef = useRef();

  const scroll = (dir) => {
    const distance = 300;
    if (sliderRef.current) {
      if (dir === 'left') {
        sliderRef.current.scrollLeft -= distance;
      } else {
        sliderRef.current.scrollLeft += distance;
      }
    }
  };

  const productImages = [
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
      <h2>Top Sellers in Toys For You</h2>
      <ArrowWrapper>
        <ArrowButton onClick={() => scroll('left')}>&#10094;</ArrowButton>
        <ProductList ref={sliderRef}>
          {productImages.map((src, i) => (
            <ProductImage key={i} src={src} alt={`product-${i}`} />
          ))}
        </ProductList>
        <ArrowButton onClick={() => scroll('right')}>&#10095;</ArrowButton>
      </ArrowWrapper>
    </SliderContainer>
  );
};

export default ProductSlider;
