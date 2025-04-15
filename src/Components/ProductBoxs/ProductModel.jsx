import React from "react";
import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.65);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalBox = styled.div`
  background-color: #fff;
  border-radius: 12px;
  padding: 30px;
  width: 90%;
  max-width: 480px;
  box-shadow: 0px 4px 20px rgba(0,0,0,0.15);
  text-align: center;
`;

const ProductPic = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  object-fit: cover;
  margin-bottom: 18px;
`;

const CloseBtn = styled.button`
  background-color: #007b7b;
  color: #fff;
  border: none;
  padding: 10px 22px;
  font-size: 14px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 25px;

  &:hover {
    background-color: #005f5f;
  }
`;

const ProductModal = ({ show, onClose, product }) => {
  if (!show || !product) return null;

  return (
    <Overlay onClick={onClose}>
      <ModalBox onClick={(e) => e.stopPropagation()}>
        <ProductPic src={product.src} alt={product.label || "Product"} />
        <h3>{product.label || "Unnamed Product"}</h3>
        {product.stars && (
          <p style={{ marginTop: '8px' }}>
            <strong>Rating:</strong> {product.stars} ⭐
          </p>
        )}
        {product.description && (
          <p style={{ fontStyle: "italic", marginTop: '12px' }}>
            {product.description}
          </p>
        )}
        {product.price ? (
          <p style={{ marginTop: '10px' }}>
            <strong>Price:</strong> ${product.price}
          </p>
        ) : (
          <p style={{ color: "#999" }}>Price not listed</p>
        )}
        {product.category && (
          <p style={{ marginTop: '6px' }}>
            <strong>Category:</strong> {product.category}
          </p>
        )}
        <CloseBtn onClick={onClose}>Close</CloseBtn>
      </ModalBox>
    </Overlay>
  );
};

export default ProductModal;
