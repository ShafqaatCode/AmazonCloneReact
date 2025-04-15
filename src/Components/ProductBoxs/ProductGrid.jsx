import React from "react";
import BoxRow from "../ProductBoxs/BoxRow";


const ProductGrid = ({boxes , isTop = false, onBoxClick}) => {
  return <BoxRow boxes={boxes}  isTop={isTop} onBoxClick={onBoxClick}/>;
};

export default ProductGrid;
