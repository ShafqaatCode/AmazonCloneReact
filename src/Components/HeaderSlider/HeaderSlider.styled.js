import styled from 'styled-components';

export const HeaderSliderContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

export const SliderControls = styled.a`
  position: absolute;
  top: 30%;
  z-index: 1;
  background-color: #ffffff4f;
  color: #0000004f;
  text-decoration: none;
  padding: 5vh 1vw;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
`;

export const ControlPrev = styled(SliderControls)`
  left: 0;
`;

export const ControlNext = styled(SliderControls)`
  right: 0;
`;

export const SliderImageContainer = styled.ul`
  display: flex;
  overflow-y: hidden;
  overflow: hidden;
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const SliderImage = styled.img`
  max-width: 100%;
  mask-image: linear-gradient(to bottom, #000000 50%, transparent 100%);
  display: none;
`;
