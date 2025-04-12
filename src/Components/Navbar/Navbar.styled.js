import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background: #131921;
  color: #fff;

  > *:hover {
  outline:1px solid white;
  padding:1px;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;
  flex-wrap: wrap;
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

  @media only screen and (max-width: 600px) {
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
    font-size: 16px;
    margin: 0;
    color: #fff;
  }
`;

export const SearchBar = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  border-radius: 5px;
  background-color: #fff;
  color: gray;
  margin-left: 15px;
  max-width: 900px;
  width: 100%;
`;

export const SearchCategory = styled.div`
  background-color: #e5e5e5;
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
  padding: 8px;
  background-color: #ffd64f;
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
    font-size: 15px;
    margin: 0;
    display: flex;
    align-items: center;
    gap: 5px;
  }

  @media only screen and (max-width: 600px) {
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

  @media only screen and (max-width: 600px) {
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
  padding: 10px 20px;
  background-color: #232f3e;
  color: #fff;
  font-size: 14px;
  //   cursor: pointer;

  @media only screen and (max-width: 600px) {
    gap: 10px;
    font-size: 13px;
    overflow-x: scroll;

    &::-webkit-scrollbar {
      display: none;
    }

    p {
      text-wrap: nowrap;
    }
  }
`;

export const NavBottomItem = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  padding: 2px 2px;
  color: #fff;
//   border:2px solid red;
  margin-right: 10px;

  img {
    width: 25px;
  }

  p {
    margin-right:10px;
  }

  &:hover {
    outline: 1px solid white;
    
  }
`;

export const NavBottomText = styled.p`
//   margin: 0 4px;
  cursor: pointer;
  font-weight: 600;
  padding:2px 2px;
//   border:1px solid green;

  @media screen (max-widht:600px)
  {

  
  }

  &:hover {
    outline: 1px solid white;
    // padding: 4px 4px;



  }
`;
