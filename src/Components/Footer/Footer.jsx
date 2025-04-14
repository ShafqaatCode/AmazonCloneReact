import React from "react";
import styled from "styled-components";
import { TbWorld } from "react-icons/tb";

const FooterWrapper = styled.footer`
  background-color: #131921;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
`;

const LinkSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  // border:2px solid red;
  justify-content: space-between;
  padding: 40px 50px;
  // background-color: #232f3e;
  width: 85%;

  @media (max-width: 700px)
  {
    padding: 30px 20px ;
    border:2px solid red;
    // flex-wrap: nowrap;
    flex-direction: column;
    margin: 0;
    width:100%;
  }
`;

const Column = styled.div`
  max-width: 200px;
  // border:2px solid red;
  margin: 0 0;
`;

const Heading = styled.h3`
  margin: 10px 0;
  font-size: 18px;
  color: #fff;
  font-weight: bold;
`;

const FooterLink = styled.a`
  display: block;
  font-size: 14px;
  color: #ddd;
  margin: 10px 0px;
  // border:2px solid red;
  text-decoration: none;
  font-weight:600;

  &:hover {
    text-decoration: underline;
  }
`;

const BottomFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px 50px;
  background-color: #232f3e;
  color: #fff;
  width: 100%;
  flex-wrap: wrap;
  gap:40px;
  // border:2px solid red;

`;

const FooterImg = styled.img`
  width:80px;
  height:auto;

`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;
`;

const FooterButton = styled.button`
  background-color: transparent;
  color: #fff;
  border: 1px solid #d1d1d1;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 12px;

  &:hover {
    border: 1px solid #fff;
  }
`;

const footerColumns = [
  {
    title: "Get to Know Us",
    links: ["Careers", "Blog", "About Amazon", "Amazon Devices", "Amazon Science"],
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
      "About Amazon",
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

// ===================== Component 
const Footer = () => {
  return (
    <FooterWrapper>
      {/* Footer Links */}
      <LinkSection>
        {footerColumns.map((section, idx) => (
          <Column key={idx}>
            <Heading>{section.title}</Heading>
            {section.links.map((link, index) => (
              <FooterLink key={index} href="#">
                {link}
              </FooterLink>
            ))}
          </Column>
        ))}
      </LinkSection>

      {/* Bottom Footer */}
      <BottomFooter>
        <FooterImg src="/src/assets/amazon_logo.png" />
        <ButtonGroup>
          <FooterButton><TbWorld/> English</FooterButton>
          <FooterButton>$ USD - US Dollar</FooterButton>
          <FooterButton>
            United States</FooterButton>
        </ButtonGroup>
      </BottomFooter>
    </FooterWrapper>
  );
};

export default Footer;
