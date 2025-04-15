import React from "react";
import styled from "styled-components";

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
//   border:2px solid green;
`;

const Box = styled.div`
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  width: 90%;
  max-width: 500px;
  text-align: center;
  border:2px solid red;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 8px;
  object-fit: cover;
`;

const Button = styled.button`
  margin-top: 16px;
  background-color: #009999;
  color: #fff;
  border: none;
  padding: 10px 22px;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
`;

const ProductModal = ({ show, onClose, product }) => {
  if (!show || !product) {
    return null;
  }

  const title = product.label ? product.label : `Title : ${product.src}`;
  const imgSrc = product.src;
  const imgAlt = product.alt || "Product";

  return (
    <Backdrop onClick={onClose}>
      <Box onClick={(e) => e.stopPropagation()}>
        <Image src={imgSrc} alt={imgAlt} />
        <h3>{title}</h3>
        <p>This is a demo description for the selected products. .</p>
        <p>Price: 100$</p>
        <Button onClick={onClose}>Close</Button>
      </Box>
    </Backdrop>
  );
};

export default ProductModal;
