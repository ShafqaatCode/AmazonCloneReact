import React from "react";
import {
  Nav,
  Logo,
  NavCountry,
  CountryText,
  SearchBar,
  SearchCategory,
  SearchInput,
  SearchIcon,
  NavLanguage,
  NavText,
  NavCart,
  NavBottom,
  NavBottomItem,
  NavBottomText,
} from "./Navbar.styled.js";

import amazonLogo from "../../assets/amazon_logo.png";
import locationIcon from "../../assets/location_icon.png";
import dropdownIcon from "../../assets/dropdown_icon.png";
import searchIcon from "../../assets/search_icon.png";
import usFlag from "../../assets/us_flag.png";
import cartIcon from "../../assets/cart_icon.png";
import Menu_Bars from "../../assets/menu_icon.png";

const Navbar = () => {
  return (
    <>
      <Nav>
        <a href="/">
          <Logo src={amazonLogo} alt="Amazon Logo" />
        </a>

        <NavCountry>
          <img src={locationIcon} height="20" alt="Location" />
          <CountryText>
            <p>Deliver to</p>
            <h1>Pakistan</h1>
          </CountryText>
        </NavCountry>

        <SearchBar>
          <SearchCategory>
            <p>ALL</p>
            <img src={dropdownIcon} height="12" alt="Dropdown" />
          </SearchCategory>
          <SearchInput type="text" placeholder="Search Amazon" />
          <SearchIcon src={searchIcon} alt="Search" />
        </SearchBar>

        <NavLanguage>
          <img src={usFlag} width="25px" alt="US Flag" />
          <p>EN</p>
          <img src={dropdownIcon} width="8px" alt="Dropdown" />
        </NavLanguage>

        <NavText>
          <p>Hello, Sign In</p>
          <h1>
            Account & Lists <img src={dropdownIcon} width="8px" alt="Dropdown" />
          </h1>
        </NavText>

        <NavText>
          <p>Return</p>
          <h1>& Orders</h1>
        </NavText>

        <NavCart href="">
          <img src={cartIcon} width="35px" alt="Cart" />
          <h4>Cart</h4>
        </NavCart>
      </Nav>

      <NavBottom>
        <NavBottomItem>
          <img src={Menu_Bars} alt="hello" />
          <NavBottomText>All</NavBottomText>
        </NavBottomItem>
        <NavBottomText>Today's Deals</NavBottomText>
        <NavBottomText>Prime Video</NavBottomText>
        <NavBottomText>Customer Service</NavBottomText>
        <NavBottomText>Registry</NavBottomText>
        <NavBottomText>Gift Cards</NavBottomText>
        <NavBottomText>Sell</NavBottomText>
      </NavBottom>
    </>
  );
};

export default Navbar;
