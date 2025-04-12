import React from "react";
import styled from "styled-components";

const BoxCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: #fff;
  padding: 15px 20px;
  min-width: 300px;
  max-width: 24%;
  min-height: 380px;
  height: 380px;
  box-sizing: border-box;
  z-index: 1;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);

  @media (max-width: 992px) {
    max-width: 48%;
  }

  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

const ImgSet = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  flex-grow: 1;
`;

const ImgBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 100%;
    max-width: 180px;
    height: auto;
    border-radius: 4px;
    object-fit: contain;
  }

  p {
    font-size: 13px;
    margin-top: 5px;
    text-align: left;
  }
`;

const Link = styled.a`
  font-size: 14px;
  color: #009999;
  font-weight: 500;
  text-decoration: none;
  margin-top: auto;

  &:hover {
    text-decoration: underline;
  }
`;

const StyledImg = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 6px;
  flex-grow: 1;
`;

const ProductBox = ({ title, images, linkText, linkUrl }) => {
  const isMultiple = images && images.length > 1;

  return (
    <BoxCol>
      <h3>{title}</h3>
      {isMultiple ? (
        <ImgSet>
          {images.map((img, index) => (
            <ImgBox key={index}>
              <img src={img.src} alt={img.alt || "Image"} />
              {img.label && <p>{img.label}</p>}
            </ImgBox>
          ))}
        </ImgSet>
      ) : (
        images?.[0]?.src && (
          <StyledImg src={images[0].src} alt={images[0].alt || "Image"} />
        )
      )}
      <Link href={linkUrl}>{linkText}</Link>
    </BoxCol>
  );
};

export default ProductBox;
