import React, { useState } from "react";
import {
  HeaderSliderContainer,
  ControlPrev,
  ControlNext,
  SliderImageContainer,
  SliderImage,
} from "./HeaderSlider.styled.js";

const images = [
  "/src/assets/header2.jpg",
  "/src/assets/header3.jpg",
  "/src/assets/header4.jpg",
  "/src/assets/header5.jpg",
  "/src/assets/header1.jpg",
];

const HeaderSlider = () => {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex(index > 0 ? index - 1 : images.length - 1);
  };

  const handleNext = () => {
    setIndex(index < images.length - 1 ? index + 1 : 0);
  };

  return (
    <HeaderSliderContainer>
      <ControlPrev onClick={handlePrev}>&#129144;</ControlPrev>
      <ControlNext onClick={handleNext}>&#129146;</ControlNext>
      <SliderImageContainer>
        {images.map((src, i) => (
          <SliderImage
            key={i}
            src={src}
            alt={`slide-${i}`}
            style={{ display: i === index ? "block" : "none" }}
          />
        ))}
      </SliderImageContainer>
    </HeaderSliderContainer>
  );
};

export default HeaderSlider;
