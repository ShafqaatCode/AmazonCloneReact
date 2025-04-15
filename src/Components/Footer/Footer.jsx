import React from "react";
import styled from "styled-components";
import { TbWorld } from "react-icons/tb";

// Footer wrapper section (main container)
const FooterWrapper = styled.footer`
  background-color: #131921;
  color: white;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Link groupings section (top half)
const LinkSection = styled.div`
  width: 85%;
  padding: 40px 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  // background-color: #232f3e; // might come back to this later

  @media (max-width: 700px) {
    flex-direction: column;
    padding: 30px 20px;
    width: 100%;
  }
`;

const Column = styled.div`
  max-width: 200px;
  margin: 0;
  // border: 1px dashed yellow;
`;

const Heading = styled.h3`
  margin: 10px 0;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;

const FooterLink = styled.a`
  font-size: 14px;
  font-weight: 600;
  color: #ddd;
  margin: 10px 0;
  display: block;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

// Lower section of footer
const BottomFooter = styled.div`
  background-color: #232f3e;
  width: 100%;
  padding: 25px 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 40px;
  color: white;
`;

const FooterImg = styled.img`
  width: 80px;
  height: auto;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;
`;

const FooterButton = styled.button`
  font-size: 12px;
  background: transparent;
  color: #fff;
  border: 1px solid #d1d1d1;
  padding: 5px 10px;
  cursor: pointer;

  &:hover {
    border-color: #fff;
  }
`;

// Link data (split into four sections)
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
      "About Amazon", // duplicate left as-is; maybe someone missed this
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

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkSection>
        {footerSections.map((section, i) => (
          <Column key={i}>
            <Heading>{section.title}</Heading>
            {section.links.map((linkText, j) => (
              <FooterLink href="#" key={j}>
                {linkText}
              </FooterLink>
            ))}
          </Column>
        ))}
      </LinkSection>

      <BottomFooter>
        <FooterImg src="/images/amazon_logo.png" alt="Amazon Logo" />
        <ButtonGroup>
          <FooterButton>
            <TbWorld style={{ marginRight: "5px" }} />
            English
          </FooterButton>
          <FooterButton>$ USD - US Dollar</FooterButton>
          <FooterButton>United States</FooterButton>
        </ButtonGroup>
      </BottomFooter>
    </FooterWrapper>
  );
};

export default Footer;
