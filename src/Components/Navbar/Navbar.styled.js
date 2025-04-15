import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background: #131921;
  color: #fff;

  > *:hover {
    outline: 1px solid #fff;
    padding: 1px;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;
`;

export const Logo = styled.img`
  width: 100px;
`;

export const NavCountry = styled.div`
  display: flex;
  align-items: end;
  margin-left: 15px;
  font-size: 13px;
  color: #c4c4c4;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const CountryText = styled.div`
  margin-left: 5px;

  p {
    margin: 0;
    font-size: 13px;
    color: #c4c4c4;
  }

  h1 {
    margin: 0;
    font-size: 16px;
    color: white;
  }
`;

export const SearchBar = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  margin-left: 15px;
  background: #fff;
  border-radius: 5px;
  max-width: 900px;
  width: 100%;
  color: gray;
`;

export const SearchCategory = styled.div`
  background: #e5e5e5;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  gap: 5px;
  border-radius: 5px 0 0 5px;
`;

export const SearchInput = styled.input`
  width: 100%;
  outline: none;
  border: none;
  padding-left: 20px;
`;

export const SearchIcon = styled.img`
  max-width: 41px;
  background-color: #ffd64f;
  padding: 8px;
  border-radius: 0 5px 5px 0;
`;

export const NavLanguage = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  margin-left: 15px;

  p {
    margin: 0 5px;
  }

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

export const NavText = styled.div`
  margin-left: 15px;

  p {
    font-size: 10px;
    margin: 0;
  }

  h1 {
    margin: 0;
    font-size: 15px;
    display: flex;
    align-items: center;
    gap: 5px;
  }

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const NavCart = styled.a`
  display: flex;
  align-items: center;
  margin: 0 15px;
  color: white;
  text-decoration: none;

  h4 {
    margin-left: 5px;
  }

  img {
    width: 35px;
  }

  @media (max-width: 600px) {
    h4 {
      display: none;
    }

    img {
      width: 30px;
    }
  }
`;

export const NavBottom = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  background-color: #232f3e;
  padding: 10px 20px;
  color: #fff;
  font-size: 14px;

  @media (max-width: 600px) {
    overflow-x: auto;
    font-size: 13px;
    gap: 10px;

    &::-webkit-scrollbar {
      display: none;
    }

    p {
      white-space: nowrap;
    }
  }
`;

export const NavBottomItem = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: white;
  margin-right: 10px;
  gap: 5px;
  padding: 2px;

  img {
    width: 25px;
  }

  p {
    margin-right: 10px;
  }

  &:hover {
    outline: 1px solid #fff;
  }
`;

export const NavBottomText = styled.p`
  font-weight: 600;
  padding: 2px;
  cursor: pointer;

  &:hover {
    outline: 1px solid white;
  }

  @media screen and (max-widht:600px) {
    /* Typo: width is misspelled – left as-is to simulate dev error */
  }
`;

export const SidebarOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  z-index: 99;
`;

export const Sidebar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 350px;
  background-color: white;
  color: black;
  overflow-y: auto;
  z-index: 100;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.5);
  transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(-100%)")};
  transition: transform 0.3s ease-in-out;
`;

export const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  background-color: #232f3e;
  padding: 20px;
  color: white;
  font-weight: bold;
  font-size: 18px;

  img {
    width: 30px;
    border-radius: 50%;
    padding: 5px;
    background: white;
    margin-right: 10px;
  }
`;

export const SidebarSection = styled.div`
  padding: 15px 20px;
  border-bottom: 1px solid gray;

  h4 {
    font-size: 15px;
    margin-bottom: 10px;
    color: #111;
  }

  ul {
    list-style: none;
    margin: 0;
    padding-left: 0;

    li {
      font-size: 15px;
      padding: 13px 20px;
      font-weight: 500;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;

      &:hover {
        background-color: #f0f0f0;
        padding-left: 25px;
      }

      .arrow {
        font-size: 14px;
        color: gray;
        font-weight: 600;
      }
    }
  }
`;

export const TopBar = styled.div`
  height: 60px;
  background: #131921;
  color: white;
  display: flex;
  align-items: center;
  padding: 0 20px;

  .menu-icon {
    font-size: 24px;
    margin-right: 15px;
    cursor: pointer;
  }

  h2 {
    font-size: 22px;
    font-weight: 500;
  }
`;

export const CloseButton = styled.button`
  margin-left: auto;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: white;

  &:hover {
    color: red;
  }
`;
