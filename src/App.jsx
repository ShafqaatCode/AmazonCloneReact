import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import GlobalStyles from "./Styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import theme from "./Styles/theme";
import HeaderSlider from "./Components/HeaderSlider/HeaderSlider";
import ProductSlider from "./Components/ProductSlide/ProductSlide";
import ProductSliderTemplate from "./Components/ProductSliderTemplate/ProductSliderTemplate";
import ProductGrid from "./Components/ProductBoxs/ProductGrid";
import Footer from "./Components/Footer/Footer";




function App() {
  const [count, setCount] = useState(0);

  const images = [
    '/src/assets/passets/kids1.jpg',
    '/src/assets/passets/kids2.jpg',
    '/src/assets/passets/kids3.jpg',
    '/src/assets/passets/kids4.jpg',
    '/src/assets/passets/kids5.jpg',
    '/src/assets/passets/kids6.jpg',
    '/src/assets/product1-3.jpg',
    '/src/assets/product1-4.jpg',
    '/src/assets/product1-5.jpg',
    '/src/assets/product1-6.jpg',
  ];

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
        <Navbar />
        <HeaderSlider />
        <ProductGrid />
        <ProductSlider />
        <ProductSliderTemplate title="Hello world" images={images} />

        <Footer />

    
    </ThemeProvider>
  );
}

export default App;
