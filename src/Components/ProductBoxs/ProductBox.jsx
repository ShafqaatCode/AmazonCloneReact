import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: white;
  padding: 15px 20px;
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

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  flex-grow: 1;
`;

const Thumbs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 100%;
    max-width: 180px;
    height: auto;
    object-fit: contain;
    border-radius: 4px;
  }

  p {
    font-size: 13px;
    margin-top: 6px;
    text-align: left;
  }
`;

const StyledLink = styled.a`
  font-size: 14px;
  color: #009999;
  font-weight: 500;
  text-decoration: none;
  margin-top: auto;

  &:hover {
    text-decoration: underline;
  }
`;

const MainImg = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 6px;
  flex-grow: 1;
`;

const ProductBox = ({ title, images, linkText, linkUrl, onBoxClick }) => {
  const hasMultiple = images && images.length > 1;

  return (
    <Wrapper>
      <h3>{title}</h3>
      {hasMultiple ? (
        <GridLayout>
          {images.map((item, idx) => (
            <Thumbs key={idx} onClick={() => onBoxClick(item)}>
              <img src={item.src} alt={item.alt || "Image"} />
              {item.label && <p>{item.label}</p>}
            </Thumbs>
          ))}
        </GridLayout>
      ) : (
        images?.[0]?.src && (
          <MainImg
            src={images[0].src}
            alt={images[0].alt || "Image"}
            onClick={() => onBoxClick(images[0])}
          />
        )
      )}
      <StyledLink href={linkUrl}>{linkText}</StyledLink>
    </Wrapper>
  );
};

export default ProductBox;
