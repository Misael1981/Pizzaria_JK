import { Outlet, NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/logo-fundoMadeira.svg";

import {
  RiHome2Line,
  RiShoppingCartLine,
  RiFileList3Line,
  RiBarChartBoxLine,
} from "react-icons/ri"; // Ícones para o menu

// Contêiner principal que usa display flex para organizar o sidebar e o conteúdo.
const LayoutContainer = styled.div`
  display: flex;
  height: 100vh; /* Ocupa 100% da altura da viewport */
  background-color: #f8f9fa; /* Fundo geral da aplicação */
`;

// Estilos para o menu lateral (sidebar).
const Sidebar = styled.aside`
  width: 250px; /* Largura fixa do sidebar */
  background-color: #fff9eb; /* Cor de fundo escura da sua logo */
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1); /* Sombra para destacar o sidebar */
  color: var(--text-light); /* Cor do texto claro */
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

// Estilos para a área de conteúdo principal.
const MainContent = styled.main`
  flex-grow: 1; /* Ocupa o restante do espaço disponível */
  padding: 30px;
  overflow-y: auto; /* Permite scroll se o conteúdo for maior que a tela */
`;

const MainLayout = () => {
  return (
    <LayoutContainer>
      <Sidebar>
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
            {/* Adicione outros itens de menu aqui */}
          </ul>
        </NavList>
      </Sidebar>
      <MainContent>
        <Outlet />
      </MainContent>
    </LayoutContainer>
  );
};

export default MainLayout;
