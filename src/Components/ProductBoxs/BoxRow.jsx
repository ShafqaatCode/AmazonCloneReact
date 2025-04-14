import React from "react";
import styled from "styled-components";
import ProductBox from "./ProductBox";
const BoxRowWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 20px;
  margin: 20px 30px;

  ${({ isTop }) => isTop && `
    margin-top: -230px;
    z-index: 100;
  `}

  @media (max-width: 992px) {
    margin-top: ${({ isTop }) => (isTop ? '0' : '20px')};
  }
`;

const BoxRow = ({ boxes , isTop }) => {
  return (
    <BoxRowWrapper isTop>
      {boxes.map((box, index) => (
        <ProductBox key={index} {...box} />
      ))}
    </BoxRowWrapper>
  );
};

export default BoxRow;
