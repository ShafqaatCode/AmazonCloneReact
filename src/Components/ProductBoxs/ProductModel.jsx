import React from "react"
import styled from "styled-components"

const FullscreenOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(30, 30, 30, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

const Box = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 36px 28px;
  width: 90%;
  max-width: 460px;
  box-shadow: 0 25px 40px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-family: "Inter", sans-serif;
  transition: transform 0.3s ease;
`

const ImagePreview = styled.img`
  width: 80%;
  max-height: 360px;
  margin: auto;
  height: auto;
  border-radius: 14px;
  object-fit: cover;
  margin-bottom: 22px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
`

const ExitButton = styled.button`
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
`

const Heading = styled.h3`
  font-size: 22px;
  font-weight: 600;
  color: #2c2c2c;
  margin-bottom: 12px;
`

const Para = styled.p`
  margin: 10px 0;
  font-size: 15px;
  color: #444;
`

const GreyText = styled(Para)`
  color: #999;
`

const ProductModal = ({ show, onClose, product }) => {
  if (!show || !product) return null

  const stopBubbling = (e) => e.stopPropagation()

  return (
    <FullscreenOverlay onClick={onClose}>
      <Box onClick={stopBubbling}>
        <ImagePreview src={product.src} alt={product.label || "Product"} />
        <Heading>{product.label || "Unnamed Product"}</Heading>

        {product.stars && (
          <Para>
            <strong>Rating:</strong> {product.stars} ⭐
          </Para>
        )}

        {product.description && (
          <Para style={{ fontStyle: "italic" }}>{product.description}</Para>
        )}

        {product.price ? (
          <Para>
            <strong>Price:</strong> ${product.price}
          </Para>
        ) : (
          <GreyText>Price not listed</GreyText>
        )}

        {product.category && (
          <Para>
            <strong>Category:</strong> {product.category}
          </Para>
        )}

        <ExitButton onClick={onClose}>Close</ExitButton>
      </Box>
    </FullscreenOverlay>
  )
}

export default ProductModal
