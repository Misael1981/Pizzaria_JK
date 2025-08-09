```
src/
├── pages/
│   ├── HomePage.jsx                // Tela inicial (resumo rápido, atalhos)
│   ├── LoginPage.jsx               // Login de admin/funcionário
│   ├── RegisterPage.jsx            // Cadastro de novos usuários (admin)
│   ├── DashboardPage.jsx           // Visão geral de estoque, vendas e alertas
│   └── NotFoundPage.jsx            // Página 404
│
├── features/                       // Módulos principais do sistema
│   ├── inventory/                  // Controle de estoque
│   │   ├── components/
│   │   │   ├── InventoryTable.jsx  // Tabela com ingredientes/quantidades
│   │   │   ├── InventoryForm.jsx   // Formulário de entrada/saída de estoque
│   │   │   └── LowStockAlert.jsx   // Alerta de ingredientes acabando
│   │   ├── pages/
│   │   │   ├── InventoryListPage.jsx
│   │   │   └── InventoryEditPage.jsx
│   │   └── index.js
│   │
│   ├── products/                   // Pizzas e outros itens do cardápio
│   │   ├── components/
│   │   │   ├── ProductTable.jsx
│   │   │   ├── ProductForm.jsx
│   │   │   └── PriceCalculator.jsx // Calcula custo + margem de lucro
│   │   ├── pages/
│   │   │   ├── ProductListPage.jsx
│   │   │   └── ProductEditPage.jsx
│   │   └── index.js
│   │
│   ├── orders/                     // Registro de pedidos
│   │   ├── components/
│   │   │   ├── OrderTable.jsx
│   │   │   ├── OrderForm.jsx
│   │   │   └── OrderDetails.jsx
│   │   ├── pages/
│   │   │   ├── OrdersListPage.jsx
│   │   │   └── OrderEditPage.jsx
│   │   └── index.js
│   │
│   └── users/                      // Usuários do sistema
│       ├── components/
│       │   ├── UsersTable.jsx
│       │   └── UserForm.jsx
│       ├── pages/
│       │   ├── UsersListPage.jsx
│       │   └── UserEditPage.jsx
│       └── index.js
│
├── layouts/                        // Layouts da aplicação
│   ├── MainLayout.jsx               // Layout geral (nav, header, footer)
│   └── AdminLayout.jsx              // Layout do dashboard (sidebar, header)
│
├── components/                      // Componentes genéricos/reutilizáveis
│   ├── Button.jsx
│   ├── Input.jsx
│   ├── Select.jsx
│   ├── Modal.jsx
│   ├── Table.jsx
│   └── Loader.jsx
│
├── services/                        // Comunicação com API/back-end
│   ├── api.js                        // Configuração base do Axios/Fetch
│   ├── inventoryService.js
│   ├── productsService.js
│   ├── ordersService.js
│   └── usersService.js
│
├── hooks/                           // Hooks personalizados
│   ├── useAuth.js
│   ├── useInventory.js
│   ├── useProducts.js
│   └── useOrders.js
│
├── utils/                           // Funções utilitárias
│   ├── formatCurrency.js
│   ├── calculatePrice.js
│   ├── dateUtils.js
│   └── validations.js
│
├── styles/                          // Estilos globais e temas
│   ├── global.css
│   └── theme.js
│
└── App.jsx
```
