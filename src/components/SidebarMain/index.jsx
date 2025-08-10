import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/logo-fundoMadeira.svg";
import { IoMdClose } from "react-icons/io";
import {
  RiHome2Line,
  RiShoppingCartLine,
  RiFileList3Line,
  RiBarChartBoxLine,
} from "react-icons/ri"; // Ícones para o menu

// Estilos para o menu lateral (sidebar).
const Sidebar = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100%;
  background-color: #fff9eb;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  color: var(--text-light);
  transform: ${({ $isOpen }) =>
    $isOpen ? "translateX(0)" : "translateX(-100%)"};
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  pointer-events: ${({ $isOpen }) => ($isOpen ? "auto" : "none")};
  transition: transform 0.4s ease, opacity 0.4s ease;
  will-change: transform;

  @media screen and (width > 744px) {
    position: static; // Remove o posicionamento fixo
    transform: none; // Remove a transição de slide
    opacity: 1; // Torna o menu visível
    pointer-events: auto; // Permite a interação
    height: 100%; // Ocupa a altura total do main
  }

  button {
    color: var(--text-dark);
    border: none;
    font-size: 2rem;
    cursor: pointer;
    align-self: flex-end;

    @media screen and (min-width: 745px) {
      display: none; // Esconde o botão de fechar em telas maiores
    }
  }
`;

// Estilos para o cabeçalho/logo no sidebar.
const SidebarHeader = styled.div`
  text-align: center;
  margin-bottom: 40px;

  img {
    width: 10rem;
    border-radius: 1rem;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  }
`;

// Estilos para a lista de navegação.
const NavList = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 10px;
  }
`;

// Estilos para os links de navegação.
const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 12px 15px;
  border-radius: 8px;
  color: var(--text-dark);
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    color: var(--primary-red);
  }

  &.active {
    background-color: var(--primary-red); /* Cor vermelha quando ativo */
    color: var(--text-light);
    font-weight: bold;
  }

  svg {
    margin-right: 10px;
    font-size: 1.2rem;
  }
`;

const SidebarMain = ({ isOpen, onClose }) => {
  return (
    <Sidebar $isOpen={isOpen}>
      <button onClick={onClose}>
        <IoMdClose />
      </button>
      <SidebarHeader>
        <img src={logo} alt="" />
      </SidebarHeader>
      <NavList>
        <ul>
          <li>
            <NavItem to="/" end>
              {" "}
              {/* 'end' para que seja ativo apenas na rota exata */}
              <RiHome2Line />
              Página Inicial
            </NavItem>
          </li>
          <li>
            <NavItem to="/new-order">
              <RiShoppingCartLine />
              Novo Pedido
            </NavItem>
          </li>
          <li>
            <NavItem to="/inventory">
              <RiFileList3Line />
              Controle de Estoque
            </NavItem>
          </li>
          <li>
            <NavItem to="/reports">
              <RiBarChartBoxLine />
              Relatórios
            </NavItem>
          </li>
        </ul>
      </NavList>
    </Sidebar>
  );
};

export default SidebarMain;
