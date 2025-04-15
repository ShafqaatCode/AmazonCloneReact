import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: #fff;
  padding: 16px 20px;
  min-width: 300px;
  max-width: 24%;
  min-height: 360px;
  height: 360px;
  box-sizing: border-box;
  box-shadow: 0 2px 6px rgba(0,0,0,0.08);
  z-index: 1;

  @media (max-width: 992px) {
    max-width: 48%;
    min-height: 400px;
  }

  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  flex-grow: 1;
`;

const ThumbItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 100%;
    max-width: 180px;
    object-fit: contain;
    border-radius: 4px;
  }

  p {
    font-size: 13px;
    margin-top: 6px;
    text-align: left;
    width: 100%;
  }
`;

const LinkAnchor = styled.a`
  font-size: 14px;
  color: #009999;
  font-weight: 500;
  text-decoration: none;
  margin-top: auto;

  &:hover {
    text-decoration: underline;
  }
`;

const MainImage = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 6px;
  flex-grow: 1;
`;

const ProductBox = ({ title, images, linkText, linkUrl, onBoxClick }) => {
  const multiple = Array.isArray(images) && images.length > 1;

  return (
    <Container>
      <h3>{title}</h3>
      {multiple ? (
        <ImageGrid>
          {images.map((img, i) => (
            <ThumbItem key={i} onClick={() => onBoxClick(img)}>
              <img src={img.src} alt={img.alt || "Image"} />
              {img.label ? <p>{img.label}</p> : null}
            </ThumbItem>
          ))}
        </ImageGrid>
      ) : (
        images && images[0] && images[0].src ? (
          <MainImage
            src={images[0].src}
            alt={images[0].alt || "Image"}
            onClick={() => onBoxClick(images[0])}
          />
        ) : null
      )}
      <LinkAnchor href={linkUrl}>{linkText}</LinkAnchor>
    </Container>
  );
};

export default ProductBox;
