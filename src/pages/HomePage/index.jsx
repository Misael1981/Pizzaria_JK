import styled from "styled-components";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Estilos para o cabeçalho da página.
const PageHeader = styled.h2`
  color: var(--text-dark);
  margin-bottom: 30px;
  font-size: 2rem;
  text-align: end;

  @media screen and (width > 744px) {
    text-align: start;
  }
`;

// Contêiner para os cards de resumo, usando flexbox para organizar.
const SummaryCardsContainer = styled.div`
  display: flex;
  gap: 20px; /* Espaçamento entre os cards */
  margin-bottom: 30px;
  flex-wrap: wrap; /* Permite que os cards quebrem linha em telas menores */
`;

// Estilos para cada card de resumo.
const SummaryCard = styled.div`
  background-color: ${(props) =>
    props.$bgColor || "#fff"}; /* Fundo dinâmico para destaque */
  color: ${(props) =>
    props.$textColor || "var(--text-dark)"}; /* Cor do texto dinâmico */
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  flex: 1; /* Cada card tenta ocupar o mesmo espaço */
  min-width: 280px; /* Largura mínima para os cards em telas pequenas */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
`;

const CardIcon = styled.span`
  font-size: 2.5rem;
  margin-bottom: 10px;
`;

const CardValue = styled.p`
  font-size: 2.5rem;
  font-weight: bold;
  margin: 0;
`;

const CardLabel = styled.p`
  font-size: 1rem;
  margin-top: 5px;
`;

// Contêiner para os botões de ação rápida.
const QuickActionsContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 40px;
  flex-wrap: wrap;
`;

// Estilos para os botões de ação rápida.
const QuickActionButton = styled.button`
  background-color: ${(props) => props.$bgColor || "#fff"};
  color: ${(props) => props.$textColor || "var(--text-dark)"};
  padding: 20px 30px;
  border: none;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  flex: 1;
  min-width: 200px;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  }

  svg {
    margin-right: 10px;
  }
`;

// Estilos para a seção do gráfico.
const ChartSection = styled.div`
  background-color: #fff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
`;

const ChartTitle = styled.h3`
  color: var(--text-dark);
  margin-bottom: 20px;
  font-size: 1.5rem;
`;

// Dados de exemplo para o gráfico de vendas.
// Em um projeto real, esses dados viriam do seu backend.
const salesData = [
  { name: "Seg", vendas: 4000 },
  { name: "Ter", vendas: 3000 },
  { name: "Qua", vendas: 2000 },
  { name: "Qui", vendas: 2780 },
  { name: "Sex", vendas: 1890 },
  { name: "Sáb", vendas: 2390 },
  { name: "Dom", vendas: 3490 },
];

function HomePage() {
  return (
    <div>
      <PageHeader>Página Inicial</PageHeader>

      <SummaryCardsContainer>
        {/* Card de Alerta de Estoque Baixo */}
        <SummaryCard $bgColor="#fff3cd" $textColor="#664d03">
          <CardIcon>⚠️</CardIcon>
          <CardValue>2</CardValue>
          <CardLabel>ingredientes com baixo estoque</CardLabel>
        </SummaryCard>

        {/* Card de Pedidos de Hoje */}
        <SummaryCard $bgColor="#d1ecf1" $textColor="#0c5460">
          <CardIcon>📦</CardIcon>
          <CardValue>32</CardValue>
          <CardLabel>Pedidos de Hoje</CardLabel>
        </SummaryCard>

        {/* Card de Venda Total Hoje */}
        <SummaryCard $bgColor="#d4edda" $textColor="#155724">
          <CardIcon>💰</CardIcon>
          <CardValue>R$ 950,00</CardValue>
          <CardLabel>Venda Total Hoje</CardLabel>
        </SummaryCard>
      </SummaryCardsContainer>

      <QuickActionsContainer>
        {/* Botão Novo Pedido */}
        <QuickActionButton
          $bgColor="var(--primary-red)"
          $textColor="var(--text-light)"
        >
          ➕ Novo Pedido
        </QuickActionButton>

        {/* Botão Controle de Estoque */}
        <QuickActionButton $bgColor="#e9ecef" $textColor="var(--text-dark)">
          📝 Controle de Estoque
        </QuickActionButton>
      </QuickActionsContainer>

      <ChartSection>
        <ChartTitle>Vendas por Período</ChartTitle>
        {/* ResponsiveContainer garante que o gráfico se adapte ao tamanho do seu container */}
        <ResponsiveContainer width="100%" height={250}>
          <LineChart
            data={salesData} // Seus dados do gráfico
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            {/* Linhas de grade para o fundo do gráfico */}
            <CartesianGrid strokeDasharray="3 3" />
            {/* Eixo X com os nomes dos dias da semana */}
            <XAxis dataKey="name" />
            {/* Eixo Y para os valores das vendas */}
            <YAxis />
            {/* Tooltip aparece quando você passa o mouse sobre os pontos do gráfico */}
            <Tooltip />
            {/* Legenda do gráfico */}
            <Legend />
            {/* A linha principal do gráfico, com a cor vermelha da sua identidade */}
            <Line
              type="monotone"
              dataKey="vendas"
              stroke="var(--primary-red)"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </ChartSection>
    </div>
  );
}

export default HomePage;
