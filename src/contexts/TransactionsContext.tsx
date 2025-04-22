import { ReactNode, useCallback, useEffect, useState } from "react";
import { createContext } from "use-context-selector"
import { api } from "../lib/axios";

export interface Transaction {
    id: number
    description: string
    type: "income" | "outcome"
    price: number
    category: string
    createdAt: string
}

interface TransactionProviderProps {
    transactions: Transaction[]
    fetchTransactions: (data: fetchTransactionsProps) => Promise<void>
    createTransactions: (data: CreateNewTransactionInput) => Promise<void>
    totalPages: number;
}

interface TramsactionProviderProps {
    children: ReactNode
}

interface CreateNewTransactionInput {
    category: string,
    description: string,
    price: number,
    type: "income" | "outcome"
}

interface fetchTransactionsProps {
    query?: string
    page?: number
}

export const transactionContext = createContext({} as TransactionProviderProps)

export function TransactionsProvider({ children }: TramsactionProviderProps) {

    const [transactions, setTransactions] = useState<Transaction[]>([])
    const [totalPages, setTotalPages] = useState(1);

    const fetchTransactions = useCallback(async (data: fetchTransactionsProps) => {
        const response = await api.get('transactions', {
            params: {
                _sort: 'createdAt',
                _order: 'desc',
                _page: data.page || 1,
                _limit: 6,
                q: data.query
            }
        })
        const totalItems = parseInt(response.headers["x-total-count"]);
        const pages = Math.ceil(totalItems / 6);

        setTransactions(response.data);
        setTotalPages(pages)
    }, [])

    const createTransactions = useCallback(async (data: CreateNewTransactionInput) => {
        const { category, description, price, type } = data

        const response = await api.post('transactions', {
            category,
            description,
            price,
            type,
            createdAt: new Date()
        })
        setTransactions(state => [response.data, ...state])
    }, [])

    useEffect(() => {
        fetchTransactions({ page: 1 })
    }, [fetchTransactions])

    return (
        <transactionContext.Provider
            value={{
                transactions,
                fetchTransactions,
                createTransactions,
                totalPages
            }}>
            {children}
        </transactionContext.Provider>
    )
}