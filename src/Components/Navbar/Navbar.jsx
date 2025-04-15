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
import Menu_Bars from "../../assets/menu_icon.png";
import profileIcon from "../../assets/cart_icon.png";
import { FaBars, FaUserCircle, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const sidebarData = {
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

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <>
      
      <SidebarOverlay isOpen={sidebarOpen} onClick={toggleSidebar} />

      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen}>
        <SidebarHeader>
        <FaUserCircle size={24} />
         
         <span>Hello, Sign In</span>
          
          <CloseButton onClick={toggleSidebar}>
            <FaTimes />
          </CloseButton>
        </SidebarHeader>

        <SidebarSection>
          <h4>Digital Content & Devices</h4>
          <ul>
            <li>
              Prime Video <span className="arrow">{">"}</span>
            </li>
            <li>
              Amazon Music <span className="arrow">{">"}</span>
            </li>
            <li>
              Kindle E-readers & Books <span className="arrow">{">"}</span>
            </li>
            <li>
              Amazon Appstore <span className="arrow">{">"}</span>
            </li>
          </ul>
        </SidebarSection>

        <SidebarSection>
          <h4>Shop by Department</h4>
          <ul>
            <li>Electronics</li>
            <li>Computers</li>
            <li>Smart Home</li>
            <li>Arts & Crafts</li>
            <li>Automotive</li>
            <li>Baby</li>
            <li>Beauty and Personal Care</li>
            <li>Women's Fashion</li>
            <li>Men's Fashion</li>
            <li>Girls' Fashion</li>
            <li>Boys' Fashion</li>
            <li>Health and Household</li>
            <li>Home and Kitchen</li>
            <li>Industrial and Scientific</li>
            <li>Luggage</li>
            <li>Movies & Television</li>
            <li>Pet Supplies</li>
            <li>Software</li>
          
            <li>
              <strong>See All</strong>
            </li>
          </ul>
        </SidebarSection>

        <SidebarSection>
          <h4>Programs & Features</h4>
          <ul>
            <li>Gift Cards</li>
            <li>Shop By Interest</li>
            <li>Amazon Live</li>
            <li>International Shopping</li>
            <li>Amazon Second Chance</li>
            <li>
              <strong>See All</strong>
            </li>
          </ul>
        </SidebarSection>

        <SidebarSection>
          <h4>Help & Settings</h4>
          <ul>
            <li>Your Account</li>
            <li>English</li>
            <li>United States</li>
            <li>Customer Service</li>
            <li>Sign In</li>
          </ul>
        </SidebarSection>
      </Sidebar>

      {/* Main Nav */}
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

        <NavCart href="">
          <img src={cartIcon} width="35px" alt="Cart" />
          <h4>Cart</h4>
        </NavCart>
      </Nav>

      {/* Bottom Nav */}
      <NavBottom>
        <NavBottomItem onClick={toggleSidebar}>
          <img src={Menu_Bars} alt="menu" />
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
