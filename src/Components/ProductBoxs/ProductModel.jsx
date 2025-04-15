import React from "react";
import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const Modal = styled.div`
  background: white;
  border-radius: 10px;
  padding: 25px;
  max-width: 500px;
  width: 90%;
  text-align: center;
  box-shadow: 0 0 10px rgba(0,0,0,0.2);
`;

const ModalImage = styled.img`
  width: 100%;
  border-radius: 8px;
  object-fit: cover;
  margin-bottom: 15px;
`;

const CloseButton = styled.button`
  margin-top: 20px;
  background: #009999;
  border: none;
  padding: 10px 20px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  border-radius: 6px;
`;

const ProductModal = ({ show, onClose, product }) => {

    <pre>{JSON.stringify(product, null, 2)}</pre>

  if (!show || !product) return null;

  return (
    <Overlay onClick={onClose}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <ModalImage src={product.src} alt={product.label || "Product"} />
        <h3>{product.label}</h3>
        {product.stars && <p><strong>Rating:</strong> {product.stars} ⭐</p>}
      <div>  {product.description && <p style={{ fontStyle: "italic", marginBottom: "10px" }}>{product.description}</p>}</div>
        {product.price && <p><strong>Price:</strong> ${product.price}</p>}
        {product.category && <p><strong>Category:</strong> {product.category}</p>}
        <CloseButton onClick={onClose}>Close</CloseButton>
      </Modal>
    </Overlay>
  );
};

export default ProductModal;
