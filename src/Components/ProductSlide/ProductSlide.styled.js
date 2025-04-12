import styled from 'styled-components';

export const SliderContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  margin: 0 30px 15px;
`;

export const ArrowWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const ProductList = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 20px;
  scroll-behavior: smooth;
  padding: 10px 0;

  /* 🔽 Custom thin scrollbar */
  &::-webkit-scrollbar {
    height: 3px; /* very thin */
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }
`;

export const ProductImage = styled.img`
  width: 180px;
  height: auto;              
  object-fit: contain;      
  flex-shrink: 0;
  border-radius: 5px;
`;

export const ArrowButton = styled.button`
  background-color: #ffffffcc;
  border: none;
  font-size: 22px;
  padding: 10px 15px;
  cursor: pointer;
  z-index: 2;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: #333;
  border-radius: 5px;

  &:first-of-type {
    left: -20px;
  }

  &:last-of-type {
    right: -20px;
  }

  &:hover {
    background-color: #eeeeee;
  }
`;
