import React from "react";
import styled from "styled-components";


const FooterWrapper = styled.footer`
  background: #131921;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TopFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  width: 100%;
  max-width: 1200px;
  flex-wrap: wrap;
`;

const Logo = styled.img`
  width: 100px;
`;

const FooterText = styled.p`
  font-size: 14px;
  margin: 10px 0;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

const FooterButton = styled.button`
  background-color: transparent;
  color: white;
  border: 1px solid rgb(138, 138, 130);
  padding: 5px;
  cursor: pointer;

  &:hover {
    border: 2px solid yellow;
  }
`;

const LinkSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: #0f1111;
  justify-content: center;
  padding: 50px;
  gap: 50px;
  width: 100%;
`;

const Column = styled.div`
  max-width: 200px;
`;

const Heading = styled.h3`
  margin: 20px 0;
  font-size: 16px;
`;

const FooterLink = styled.a`
  display: block;
  font-size: 14px;
  color: gray;
  margin: 5px 0;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
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
      "Amazon Currency Convertor",
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

// ===================== Component =====================
const Footer = () => {
  return (
    <FooterWrapper>
      

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

      <TopFooter>
        <Logo src="assets/amazon_logo.png" alt="Amazon Logo" />
        <FooterText>© 1996-2025, Amazon.com, Inc. or its affiliates</FooterText>
        <ButtonGroup>
          <FooterButton>English</FooterButton>
          <FooterButton>USD - US Dollar</FooterButton>
          <FooterButton>United States</FooterButton>
        </ButtonGroup>
      </TopFooter>
    </FooterWrapper>
  );
};

export default Footer;
