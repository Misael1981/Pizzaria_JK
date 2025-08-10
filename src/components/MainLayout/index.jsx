import { Outlet } from "react-router-dom";
import styled from "styled-components";
import ButtonSidebar from "../ButtonSidebar";
import useWindowSize from "@/hooks/useWindowSize";
import SidebarMain from "../SidebarMain";

// Contêiner principal que usa display flex para organizar o sidebar e o conteúdo.
const LayoutContainer = styled.div`
  display: flex;
  height: 100vh; /* Ocupa 100% da altura da viewport */
  background-color: #f8f9fa; /* Fundo geral da aplicação */
`;

// Estilos para a área de conteúdo principal.
const MainContent = styled.main`
  flex-grow: 1; /* Ocupa o restante do espaço disponível */
  padding: 30px;
  overflow-y: auto; /* Permite scroll se o conteúdo for maior que a tela */
`;

const MainLayout = () => {
  const { width } = useWindowSize();
  const shouldRenderAside = width > 744;

  return (
    <LayoutContainer>
      <ButtonSidebar />
      {shouldRenderAside && <SidebarMain />}
      <MainContent>
        <Outlet />
      </MainContent>
    </LayoutContainer>
  );
};

export default MainLayout;
