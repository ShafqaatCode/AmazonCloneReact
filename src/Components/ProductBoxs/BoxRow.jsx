import React, { useState } from "react";
import styled from "styled-components";
import ProductBox from "./ProductBox";
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

  const handleBoxClick = async (clicked) => {
    if (!clicked.label) return;

    try {
      const res = await fetch(
        `https://67fec93958f18d7209ef4e43.mockapi.io/db?label=${encodeURIComponent(clicked.label)}`
      );
      const responseData = await res.json();

      console.log("API response:", responseData);

      if (Array.isArray(responseData) && responseData.length) {
        const match = responseData.find((itm) => itm.label === clicked.label);
        if (match) {
          setSelectedProduct(match);
        } else {
          setSelectedProduct({
            ...clicked,
            price: "N/A",
            category: "Unknown",
          });
        }
      } else {
        setSelectedProduct({
          ...clicked,
          price: "N/A",
          category: "Unknown",
        });
      }

      setShowModal(true);
    } catch (error) {
      console.log("API fetch error:", error);
    }
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    setShowModal(false);
  };

  return (
    <>
      <BoxRowWrapper isTop={isTop}>
        {boxes.map((boxData, i) => (
          <ProductBox key={i} {...boxData} onBoxClick={handleBoxClick} />
        ))}
      </BoxRowWrapper>

      {selectedProduct && (
        <ProductModal
          show={showModal}
          onClose={handleCloseModal}
          product={{
            src: selectedProduct.src,
            label: selectedProduct.label,
            price: selectedProduct.price,
            category: selectedProduct.category,
            description: selectedProduct.description,
            stars: selectedProduct.stars,
          }}
        />
      )}
    </>
  );
};

export default BoxRow;
