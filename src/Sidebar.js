import React from "react";
import styled from "styled-components";

import MdSend from "react-icons/lib/md/send";
import MdStar from "react-icons/lib/md/star";
import MdDelete from "react-icons/lib/md/delete";
import MdPeople from "react-icons/lib/md/people";

const Sidebar = styled.div`
  height: 100%;
  padding-top: 100px;
`;

const SidebarButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;

  width: 100%;
  color: rgba(255, 255, 255, 1);
  background: transparent;
  border: none;
  border-radius: 0;
  cursor: pointer;
  opacity: ${({ isActive }) => (isActive ? 1 : 0.6)};

  padding: 1rem 1.5rem;

  &:hover {
    opacity: ${({ isActive }) => (isActive ? 1 : 0.8)};
  }
  & > svg {
    width: 100%;
    height: auto;
    color: inherit;
    fill: currentColor;
  }
`;

export default () => (
  <Sidebar>
    <SidebarButton isActive>
      <MdSend />
    </SidebarButton>
    <SidebarButton>
      <MdStar />
    </SidebarButton>
    <SidebarButton>
      <MdDelete />
    </SidebarButton>
    <SidebarButton>
      <MdPeople />
    </SidebarButton>
  </Sidebar>
);
