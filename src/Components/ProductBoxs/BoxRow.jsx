import React from "react";
import styled from "styled-components";
import ProductBox from "./ProductBox";

const BoxRowWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 20px;
  margin: 20px 30px;
  justify-content: space-between;

  margin-top: -230px;
  z-index: 100;

  @media (max-width: 992px) {
    margin-top: 0;
  }
`;

const BoxRow = ({ boxes }) => {
  return (
    <BoxRowWrapper>
      {boxes.map((box, index) => (
        <ProductBox key={index} {...box} />
      ))}
    </BoxRowWrapper>
  );
};

export default BoxRow;
