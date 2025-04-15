import React, { useState } from "react";
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
  Sidebar,
  SidebarOverlay,
  SidebarHeader,
  SidebarSection,
  CloseButton
} from "./Navbar.styled.js";

import amazonLogo from "../../assets/amazon_logo.png";
import locationIcon from "../../assets/location_icon.png";
import dropdownIcon from "../../assets/dropdown_icon.png";
import searchIcon from "../../assets/search_icon.png";
import usFlag from "../../assets/us_flag.png";
import cartIcon from "../../assets/cart_icon.png";
import menuIcon from "../../assets/menu_icon.png";
import profileIcon from "../../assets/cart_icon.png";
import { FaBars, FaUserCircle, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const navSections = {
    "Digital Content & Devices": [
      "Prime Video",
      "Amazon Music",
      "Kindle E-readers & Books",
      "Amazon Appstore",
    ],
    "Shop by Department": [
      "Electroniscs",
      "Computers",
      "Smart Home",
      "Arts & Crafts",
      "Automotive",
      "Baby",
      "Beauty and Personal Care",
      "Women's Fashion",
      "Men's Fashion",
      "Girls' Fashion",
      "Boys' Fashion",
      "Health ande Household",
      "Home and Kitchen",
      "Industdrial and Scientific",
      "Luggage",
      "Movies & Television",
      "Pet supplies",
      "Software",
      "Sports and Outdoors",
      "Tools & Home Improvement",
      "Tooys and Games",
      "Video Games",
      "See all",
    ],
    "Programs & Features": [
      "Gift Cards",
      "Shop By Interest",
      "Amazon Live",
      "Internatioenal Shopping",
      "Amazon Second Chance",
      "See all",
    ],
    "Help & Settings": [
      "Your Account",
      "English",
      "United States",
      "Customer Services",
      "Sign in",
    ],
  };

  const handleSidebarToggle = () => {
    setIsSidebarVisible(prev => !prev);
  };

  return (
    <>
      <SidebarOverlay isOpen={isSidebarVisible} onClick={handleSidebarToggle} />

      <Sidebar isOpen={isSidebarVisible}>
        <SidebarHeader>
          <FaUserCircle size={24} />
          <span>Hello, Sign In</span>
          <CloseButton onClick={handleSidebarToggle}>
            <FaTimes />
          </CloseButton>
        </SidebarHeader>

        {Object.entries(navSections).map(([title, links]) => (
          <SidebarSection key={title}>
            <h4>{title}</h4>
            <ul>
              {links.map((item, idx) => (
                <li key={`${item}-${idx}`}>
                  {item.includes("See all") ? <strong>{item}</strong> : item}
                  {title === "Digital Content & Devices" &&
                    idx < 4 &&
                    <span className="arrow">{">"}</span>}
                </li>
              ))}
            </ul>
          </SidebarSection>
        ))}
      </Sidebar>

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
            Account & Lists{" "}
            <img src={dropdownIcon} width="8px" alt="Dropdown" />
          </h1>
        </NavText>

        <NavText>
          <p>Return</p>
          <h1>& Orders</h1>
        </NavText>

        <NavCart href="#">
          <img src={cartIcon} width="35px" alt="Cart" />
          <h4>Cart</h4>
        </NavCart>
      </Nav>

      <NavBottom>
        <NavBottomItem onClick={handleSidebarToggle}>
          <img src={menuIcon} alt="menu" />
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
