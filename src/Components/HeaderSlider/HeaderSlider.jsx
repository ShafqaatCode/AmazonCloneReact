import React, { useState } from "react";
import {
  HeaderSliderContainer,
  ControlPrev,
  ControlNext,
  SliderImageContainer,
  SliderImage,
} from "./HeaderSlider.styled.js";

const imageList = [
  "/images/header0.jpg",
  "/images/header4.jpg",
  "/images/header3.jpg",
  "/images/header4.jpg",
  "/images/header1.jpg",
  "/images/header2.jpg",
];


const HeaderSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPrevious = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    } else {
      setCurrentSlide(imageList.length - 1);
    }
  };

  const goToNext = () => {
    if (currentSlide < imageList.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setCurrentSlide(0);
    }
  };

  return (
    <HeaderSliderContainer>
      <ControlPrev onClick={goToPrevious}>&#129144;</ControlPrev>
      <ControlNext onClick={goToNext}>&#129146;</ControlNext>
      <SliderImageContainer>
        {imageList.map((img, idx) => {
          return (
            <SliderImage
              key={idx}
              src={img}
              alt={`slide-${idx}`}
              style={{ display: currentSlide === idx ? "block" : "none" }}
            />
          );
        })}
      </SliderImageContainer>
    </HeaderSliderContainer>
  );
};

export default HeaderSlider;
