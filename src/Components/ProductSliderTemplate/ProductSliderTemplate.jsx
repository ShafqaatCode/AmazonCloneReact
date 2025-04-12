import React from 'react';
import {
  SliderContainer,
  ProductList,
  ProductImage,
  ArrowWrapper,
  ArrowButton,
} from '../ProductSlide/ProductSlide.styled.js';

const ProductSliderTemplate = ({ title, images }) => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === 'left') current.scrollLeft -= 300;
    else current.scrollLeft += 300;
  };

  return (
    <SliderContainer>
      <h2>{title}</h2>
      <ArrowWrapper>
        <ArrowButton onClick={() => scroll('left')}>&#9664;</ArrowButton>
        <ProductList ref={scrollRef}>
          {images.map((imgSrc, idx) => (
            <ProductImage key={idx} src={imgSrc} alt={`product-${idx}`} />
          ))}
        </ProductList>
        <ArrowButton onClick={() => scroll('right')}>&#9654;</ArrowButton>
      </ArrowWrapper>
    </SliderContainer>
  );
};

export default ProductSliderTemplate;
