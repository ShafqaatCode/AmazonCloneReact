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
    `margin-top: -230px;
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

  const handleBoxClick = async (clickedImage) => {
    if (!clickedImage.label) return;
  
    try {
      const response = await fetch(
        `https://67fec93958f18d7209ef4e43.mockapi.io/db?label=${encodeURIComponent(clickedImage.label)}`
      );
      const data = await response.json();
  
      // Log the response to see its structure
      console.log("API response:", data);
  
      if (Array.isArray(data) && data.length > 0) {
        // When data is an array and contains products
        const matched = data.find((item) => item.label === clickedImage.label);
  
        if (matched) {
          setSelectedProduct(matched); // Set the selected product
        } else {
          setSelectedProduct({
            ...clickedImage,
            price: "N/A",
            category: "Unknown",
          });
        }
      } else {
        // If the response is not as expected, handle it gracefully
        setSelectedProduct({
          ...clickedImage,
          price: "N/A",
          category: "Unknown",
        });
      }
  
      setShowModal(true); // Show the modal
    } catch (err) {
      console.error("API fetch error:", err);
    }
  };
  

  const handleCloseModal = () => {
    setSelectedProduct(null);
    setShowModal(false);
  };

  return (
    <>
      <BoxRowWrapper isTop={isTop}>
        {boxes.map((box, index) => (
          <ProductBox key={index} {...box} onBoxClick={handleBoxClick} />
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
