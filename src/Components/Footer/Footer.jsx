import React from "react";
import styled from "styled-components";
import { TbWorld } from "react-icons/tb";

// Footer container setup
const FooterWrapper = styled.footer`
  background-color: #131921;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
`;

// This section holds all the columns of links
const LinkSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 40px 50px;
  width: 85%;
  // background-color: #232f3e; // might revisit this later

  @media (max-width: 700px) {
    padding: 30px 20px;
    border: 2px solid red; // debug - can remove
    flex-direction: column;
    width: 100%;
  }
`;

// each column of links
const Column = styled.div`
  max-width: 200px;
  margin: 0;
  // border: 1px dashed yellow; // used for layout debugging
`;

const Heading = styled.h3`
  margin: 10px 0;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;

const FooterLink = styled.a`
  display: block;
  font-size: 14px;
  color: #ddd;
  margin: 10px 0;
  text-decoration: none;
  font-weight: 600;

  &:hover {
    text-decoration: underline;
  }
`;

// Bottom strip (logo + language/currency/location)
const BottomFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px 50px;
  background-color: #232f3e;
  color: white;
  width: 100%;
  flex-wrap: wrap;
  gap: 40px;
`;

const FooterImg = styled.img`
  width: 80px;
  height: auto;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;
  // Might later wrap on smaller screens
`;

const FooterButton = styled.button`
  background-color: transparent;
  color: #fff;
  border: 1px solid #d1d1d1;
  padding: 5px 10px;
  font-size: 12px;
  cursor: pointer;

  &:hover {
    border-color: #fff;
  }
`;

// Footer content structured into columns
const footerSections = [
  {
    title: "Get to Know Us",
    links: [
      "Careers",
      "Blog",
      "About Amazon",
      "Amazon Devices",
      "Amazon Science",
    ],
  },
  {
    title: "Make Money With Us",
    links: [
      "Sell Product on Amazon",
      "Sell on Amazon Business",
      "Sell Apps",
      "Amazon Devices",
      "Self Publish With Us",
    ],
  },
  {
    title: "Amazon Payment Products",
    links: [
      "Amazon Business Card",
      "Shop with Points",
      "About Amazon", // this is repeated — maybe an oversight?
      "Reload Your Balance",
      "Amazon Currency Converter",
    ],
  },
  {
    title: "Let Us Help You",
    links: [
      "Amazon and Covid 19",
      "Your Account",
      "Your Orders",
      "Shipping Rates and Policies",
      "Manage your Content",
    ],
  },
];

// ===================== Footer Component =====================
const Footer = () => {
  return (
    <FooterWrapper>
      {/* Top Links Section */}
      <LinkSection>
        {footerSections.map((item, i) => (
          <Column key={i}>
            <Heading>{item.title}</Heading>
            {item.links.map((text, j) => (
              <FooterLink key={j} href="#">
                {text}
              </FooterLink>
            ))}
          </Column>
        ))}
      </LinkSection>

      {/* Bottom Bar */}
      <BottomFooter>
        {/* NOTE: might want to switch to dynamic src later */}
        <FooterImg src="/src/assets/amazon_logo.png" alt="Amazon Logo" />
        
        <ButtonGroup>
          {/* This button uses a globe icon from react-icons */}
          <FooterButton>
            <TbWorld /> English
          </FooterButton>
          <FooterButton>$ USD - US Dollar</FooterButton>
          <FooterButton>United States</FooterButton>
        </ButtonGroup>
      </BottomFooter>
    </FooterWrapper>
  );
};

export default Footer;
