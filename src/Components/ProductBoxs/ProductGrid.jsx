import React from "react";
import BoxRow from "../ProductBoxs/BoxRow";


const ProductGrid = ({boxes , isTop = false}) => {
  return <BoxRow boxes={boxes}  isTop={isTop}/>;
};

export default ProductGrid;
