# 💰 DT Money — Gerenciador de Transações

- Aplicação web para controle de entradas e saídas financeiras, construída com React, TypeScript, Zod, React Hook Form e Tailwind CSS. Permite ao usuário visualizar, filtrar e cadastrar transações de forma rápida e intuitiva.

---

# 🎞️ Vídeo da aplicação 


https://github.com/user-attachments/assets/a7ccbaa4-1912-4768-b8b7-ee80e75c757b




# 🚀 Tecnologias Utilizadas

### ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
- Biblioteca para construção de interfaces declarativas e baseadas em componentes. Utilizada para criação do SPA (Single Page Application) com renderizações eficientes.

### ![TypeScript](https://img.shields.io/badge/TypeScript-007acc?style=for-the-badge&logo=typescript&logoColor=white)
- Superset de JavaScript com tipagem estática. Traz mais segurança e escalabilidade ao código, além de melhorar a experiência de desenvolvimento.

### ![React Hook Form](https://img.shields.io/badge/React--Hook--Form-EC5990?style=for-the-badge&logo=reacthookform&logoColor=white)
- Gerencia formulários de forma performática e minimalista. Integra-se facilmente com validações externas como Zod

### ![Zod](https://img.shields.io/badge/Zod-8c52ff?style=for-the-badge)
- Biblioteca de schemas para validação de dados. Usada com React Hook Form para garantir que os dados do formulário estão corretos antes de serem processados.

### ![Axios](https://img.shields.io/badge/Axios-5A29E4.svg?style=for-the-badge&logo=Axios&logoColor=white)
- Cliente HTTP para comunicação com API. Facilita o consumo de dados externos com suporte a interceptadores e instâncias customizadas.

### ![Radix UI](https://img.shields.io/badge/RadixUI-Componentes%20Acessíveis-5E60CE?logo=radixui&logoColor=white&style=flat)
- Fornece componentes acessíveis e não estilizados, como modais. Usado para garantir usabilidade e acessibilidade no modal de nova transação.

### ![Phosphor Icons](https://img.shields.io/badge/Phosphor%20Icons-000000?style=for-the-badge)
- Ícones elegantes para botões e feedback visual.

---

# 📝 Funcionalidades

✅ Listagem de transações

✅ Filtro de transações por busca

✅ Cadastro de novas transações via modal

✅ Categorização por tipo (entrada / saída)

✅ Totalizador de valores (entradas, saídas e saldo)

✅ Context API para gerenciamento global

✅ Formulário com validação via Zod

✅ Estilização com Tailwind CSS

✅ Responsivo e acessível

---

# 📁 Estrutura de Pastas
```bash
src/
├── assets/                   
│   ├── Logo-name.svg
│   └── Logo.svg
│
├── components/              
│   ├── Header/
│   ├── NewTransactionModal/
│   ├── Summary/
│
├── contexts/                
│   └── TransactionsContext.tsx
│
├── hooks/                    
│   └── useSummary.tsx
│
├── lib/                     
│   └── axios.ts
│
├── pages/                    
│   └── Transactions/
│       ├── components/
│       │   ├── SearchForm/
│       │   └── TransactionsCard/
│       └── index.tsx
│
├── utils/                    
│   └── formatter.ts
│
├── index.css                
└── main.tsx   
```
---

# 📌 Como Rodar o Projeto

1. Clone o repositório:
```bash
git clone https://github.com/MatheusJSGama/Money-manager.git
```

2. Instale as dependências:
```bash
npm install
```
2. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

📝 Licença
[MIT](https://choosealicense.com/licenses/mit/)
