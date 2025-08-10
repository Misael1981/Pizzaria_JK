import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import SidebarMain from "../SidebarMain";
import styled from "styled-components";

const ButtonSidebarConainerStyled = styled.div`
  position: fixed;
  top: 1.5rem;
  left: 2rem;
  z-index: 1000;

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;

    svg {
      font-size: 2.5rem;
      color: var(--text-dark);
    }
  }

  @media screen and (width > 744px) {
    display: none;
  }
`;

const ButtonSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ButtonSidebarConainerStyled>
      <button onClick={() => setIsOpen(true)}>
        <IoIosMenu />
      </button>
      <SidebarMain isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </ButtonSidebarConainerStyled>
  );
};

export default ButtonSidebar;
