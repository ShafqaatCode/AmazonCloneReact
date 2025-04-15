import React from "react";
import styled from "styled-components";

const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: ${({ open }) => (open ? "0" : "-250px")};
  width: 250px;
  height: 100%;
  background-color: #232f3e;
  color: white;
  padding: 20px;
  transition: left 0.3s ease;
  z-index: 999;
`;

const SidebarOverlay = styled.div`
  display: ${({ open }) => (open ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 998;
`;

const SidebarItem = styled.div`
  padding: 10px 0;
  border-bottom: 1px solid gray;
  cursor: pointer;

  &:hover {
    color: #ffd64f;
  }
`;

const Sidebar = ({ open, onClose }) => {
  return (
    <>
      <SidebarOverlay open={open} onClick={onClose} />
      <SidebarContainer open={open}>
        <h2>Menu</h2>
        <SidebarItem>Today's Deals</SidebarItem>
        <SidebarItem>Prime Video</SidebarItem>
        <SidebarItem>Customer Service</SidebarItem>
        <SidebarItem>Registry</SidebarItem>
        <SidebarItem>Gift Cards</SidebarItem>
        <SidebarItem>Sell</SidebarItem>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
