import React from "react";
import HeaderSlider from "../Components/HeaderSlider/HeaderSlider";
import ProductGrid from "../Components/ProductBoxs/ProductGrid";
import ProductSliderTemplate from "../Components/ProductSliderTemplate/ProductSliderTemplate";
import { kidsimages, GeneralboxesData, TopPakistani, TopGames, BeautyBoxes} from "../Data/Data";


function Home() {
  return (
    <>
      <HeaderSlider />
      <ProductGrid boxes={GeneralboxesData} />

      <ProductSliderTemplate title="Hello world" images={kidsimages} />
      <ProductGrid boxes={BeautyBoxes} />
      <ProductSliderTemplate title = "Top picks in Pakistan" images={TopPakistani} />
      <ProductSliderTemplate title = "Top Games" images={TopGames} />
    </>
  );
}

export default Home;
