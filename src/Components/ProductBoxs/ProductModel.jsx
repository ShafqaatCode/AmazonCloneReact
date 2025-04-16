import React from "react";
import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(30, 30, 30, 0.6);
  backdrop-filter: blur(4px);
//   border:2px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalBox = styled.div`
  background: #ffffff;
  border-radius: 16px;
  padding: 36px 28px;
  width: 90%;
  max-width: 460px;
  box-shadow: 0 25px 40px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-family: "Inter", sans-serif;
  transition: transform 0.3s ease;
`;

const ProductPic = styled.img`
  width:80%;
  max-height:360px;

  margin:auto;
  height: auto;
  border-radius: 14px;
  object-fit: cover;
  margin-bottom: 22px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
`;

const CloseBtn = styled.button`
  background: #333;
  color: #fff;
  border: none;
  padding: 12px 26px;
  font-size: 14px;
  font-weight: 500;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 28px;
  transition: all 0.3s ease;

  &:hover {
    background: #222;
  }
`;

const Title = styled.h3`
  font-size: 22px;
  font-weight: 600;
  color: #2c2c2c;
  margin-bottom: 12px;
`;

const Text = styled.p`
  margin: 10px 0;
  font-size: 15px;
  color: #444;
`;

const Muted = styled(Text)`
  color: #999;
`;

const ProductModal = ({ show, onClose, product }) => {
  if (!show || !product) return null;

  return (
    <Overlay onClick={onClose}>
      <ModalBox onClick={(e) => e.stopPropagation()}>
        <ProductPic  src={product.src} alt={product.label || "Product"} />
        <Title>{product.label || "Unnamed Product"}</Title>

        {product.stars && (
          <Text>
            <strong>Rating:</strong> {product.stars} ⭐
          </Text>
        )}

        {product.description && (
          <Text style={{ fontStyle: "italic" }}>{product.description}</Text>
        )}

        {product.price ? (
          <Text>
            <strong>Price:</strong> ${product.price}
          </Text>
        ) : (
          <Muted>Price not listed</Muted>
        )}

        {product.category && (
          <Text>
            <strong>Category:</strong> {product.category}
          </Text>
        )}

        <CloseBtn onClick={onClose}>Close</CloseBtn>
      </ModalBox>
    </Overlay>
  );
};

export default ProductModal;
