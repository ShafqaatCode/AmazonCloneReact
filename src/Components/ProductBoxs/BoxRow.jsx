import React from "react";
import styled from "styled-components";
import ProductBox from "./ProductBox";
import { useState } from "react";
import ProductModal from "./ProductModel";
const BoxRowWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 20px;
  margin: 20px 30px;

  ${({ isTop }) =>
    isTop &&
    `
    margin-top: -230px;
    z-index: 100;
  `}

  @media (max-width: 992px) {
    margin-top: ${({ isTop }) => (isTop ? "0" : "20px")};
    justify-content: center;
  }
`;

const BoxRow = ({ boxes, isTop }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleBoxClick = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    setShowModal(false);
  };
  return (
    <>
      <BoxRowWrapper isTop={isTop}>
        {boxes.map((box, index) => (
          <ProductBox key={index} {...box} onBoxClick={handleBoxClick}/>
        ))}
      </BoxRowWrapper>

      <ProductModal
        show={showModal}
        onClose={handleCloseModal}
        product={selectedProduct}
      />
    </>
  );
};

export default BoxRow;
