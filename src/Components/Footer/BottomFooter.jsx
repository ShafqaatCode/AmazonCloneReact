import React from "react";
import styled from "styled-components";



const FooterNav = styled.nav`
  background-color: #232f3e;
  padding: 40px 20px 20px;
  color: #fff;
`;

const FooterWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Column = styled.ul`
  list-style: none;
  
  padding: 0;
  margin: 10px 15px;
  flex: 1 1 200px;
  // border:2px solid red;
  min-width: 180px;
`;

const FooterItem = styled.li`
  margin-bottom: 14px;
  // border:2px solid pink;
`;

const FooterLink = styled.a`
  color: #ddd;
  text-decoration: none;
  display: inline-block;

  &:hover {
    text-decoration: underline;
  }
`;

const LinkHeading = styled.h5`
  margin: 0;
  font-size: 14px;
  font-weight: bold;
  color: #fff;
`;

const LinkText = styled.span`
  display: block;
  font-size: 12px;
  line-height: 1.5;
  color: #ddd;
`;


const FooterLegal = styled.div`
  text-align: center;
  font-size: 12px;
  color: #ccc;
  border-top: 1px solid #3a4553;
  margin-top: 40px;
  padding-top: 20px;
`;

const LegalLinks = styled.div`
  margin-bottom: 10px;
  a {
    color: #ccc;
    text-decoration: none;
    margin: 0 10px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

// ============ Text Wrapping Utility ============

// const splitTextTwoWords = (text) => {
//   const words = text.split(/\s+/);
//   const lines = [];

//   for (let i = 0; i < words.length; i += 2) {
//     lines.push(words.slice(i, i + 2).join(" "));
//   }

//   return lines;
// };

// ============ Full Footer Data ============

const amazonFooterData = [
  [
    {
      heading: "Amazon Music",
      text: "Stream millions of songs",
      href: "https://music.amazon.com?ref=dm_aff_amz_com",
    },
    {
      heading: "Amazon Ads",
      text: "Reach customers wherever they spend their time",
      href: "https://advertising.amazon.com/?ref=footer_advtsing_amzn_com",
    },
    {
      heading: "6pm",
      text: "Score deals on fashion brands",
      href: "https://www.6pm.com",
    },
    {
      heading: "AbeBooks",
      text: "Books, art & collectibles",
      href: "https://www.abebooks.com",
    },
    {
      heading: "ACX",
      text: "Audiobook Publishing Made Easy",
      href: "https://www.acx.com/",
    },
    {
      heading: "Sell on Amazon",
      text: "Start a Selling Account",
      href: "https://sell.amazon.com/?ld=AZUSSOA-footer-aff&ref_=footer_sell",
    },
    {
      heading: "Veeqo",
      text: "Shipping Software Inventory Management",
      href: "https://www.veeqo.com/?utm_source=amazon&utm_medium=website&utm_campaign=footer",
    },
  ],
  [
    {
      heading: "Amazon Business",
      text: "Everything For Your Business",
      href: "/business?ref_=footer_retail_b2b",
    },
    {
      heading: "AmazonGlobal",
      text: "Ship Orders Internationally",
      href: "/gp/browse.html?node=230659011&ref_=footer_amazonglobal",
    },
    {
      heading: "Amazon Web Services",
      text: "Scalable Cloud Computing Services",
      href: "https://aws.amazon.com/what-is-cloud-computing/?sc_channel=EL&sc_campaign=amazonfooter",
    },
    {
      heading: "Audible",
      text: "Listen to Books & Original Audio Performances",
      href: "https://www.audible.com",
    },
    {
      heading: "Box Office Mojo",
      text: "Find Movie Box Office Data",
      href: "https://www.boxofficemojo.com/?ref_=amzn_nav_ftr",
    },
    {
      heading: "Goodreads",
      text: "Book reviews & recommendations",
      href: "https://www.goodreads.com",
    },
    {
      heading: "IMDb",
      text: "Movies, TV & Celebrities",
      href: "https://www.imdb.com",
    },
  ],
  [
    {
      heading: "IMDbPro",
      text: "Get Info Entertainment Professionals Need",
      href: "https://pro.imdb.com?ref_=amzn_nav_ftr",
    },
    {
      heading: "Kindle Direct Publishing",
      text: "Indie Digital & Print Publishing Made Easy",
      href: "https://kdp.amazon.com",
    },
    {
      heading: "Prime Video Direct",
      text: "Video Distribution Made Easy",
      href: "https://videodirect.amazon.com/home/landing",
    },
    {
      heading: "Shopbop",
      text: "Designer Fashion Brands",
      href: "https://www.shopbop.com",
    },
    {
      heading: "Woot!",
      text: "Deals and Shenanigans",
      href: "https://www.woot.com/",
    },
    {
      heading: "Zappos",
      text: "Shoes & Clothing",
      href: "https://www.zappos.com",
    },
    {
      heading: "Ring",
      text: "Smart Home Security Systems",
      href: "https://ring.com",
    },
  ],
  [
    {
      heading: "eero WiFi",
      text: "Stream 4K Video in Every Room",
      href: "https://eero.com/",
    },
    {
      heading: "Blink",
      text: "Smart Security for Every Home",
      href: "https://blinkforhome.com/?ref=nav_footer",
    },
    {
      heading: "Neighbors App",
      text: "Real-Time Crime & Safety Alerts",
      href: "https://shop.ring.com/pages/neighbors-app",
    },
    {
      heading: "Amazon Subscription Boxes",
      text: "Top subscription boxes – right to your door",
      href: "/gp/browse.html?node=14498690011&ref_=amzn_nav_ftr_swa",
    },
    {
      heading: "PillPack",
      text: "Pharmacy Simplified",
      href: "https://www.pillpack.com",
    },
  ],
];



const AmazonStyledFooter = () => {
  return (
    <FooterNav role="navigation" aria-label="More on Amazon">
      <FooterWrapper>
        {amazonFooterData.map((column, colIndex) => (
          <Column key={colIndex}>
            {column.map((item, i) => (
              <FooterItem key={i}>
                <FooterLink href={item.href}>
                  <LinkHeading>{item.heading}</LinkHeading>
                  <LinkText>
                    {item.text}
                  </LinkText>
                </FooterLink>
              </FooterItem>
            ))}
          </Column>
        ))}
      </FooterWrapper>

      <FooterLegal>
        <LegalLinks>
          <a href="#">Conditions of Use</a>|<a href="#">Privacy Notice</a>|
          <a href="#">Consumer Health Data Privacy Disclosure</a>|
          <a href="#">Your Ads Privacy Choices</a>
        </LegalLinks>
        <div>© 1996–2025, Amazon.com, Inc. or its affiliates shafqaat</div>
      </FooterLegal>
    </FooterNav>
  );
};

export default AmazonStyledFooter;
