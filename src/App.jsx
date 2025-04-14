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
import Home from "./Pages/Home";
import BotFooter from "./Components/Footer/BottomFooter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar />
      <Home />

      <Footer />
      <BotFooter />
    </ThemeProvider>
  );
}

export default App;
