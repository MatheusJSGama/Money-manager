import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Transactions } from './pages/Transactions/index.tsx'
import { TransactionsProvider } from './contexts/TransactionsContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TransactionsProvider>
      <Transactions />
    </TransactionsProvider>
  </StrictMode>,
)
