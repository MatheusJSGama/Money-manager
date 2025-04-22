import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { TransactionCard } from "./components/TransactionsCard";
import { transactionContext } from "../../contexts/TransactionsContext";
import { useContextSelector } from "use-context-selector";
import { useState } from "react";
import clsx from "clsx";



export function Transactions() {
    const [currentPage, setCurrentPage] = useState(1)

    const { transactions, fetchTransactions, totalPages } = useContextSelector(transactionContext, (context) => {
        return {
            transactions: context.transactions,
            fetchTransactions: context.fetchTransactions,
            totalPages: context.totalPages,
        }
    })

    async function handlePagination(page: number) {
        await fetchTransactions({ page })
        setCurrentPage(page)
    }

    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);



    return (
        <div className="flex flex-col items-center">
            <Header />
            <Summary />

            <main className="w-full max-w-[1152px] px-4 mt-16 flex flex-col justify-between">
                <div>
                    <div className="xxs:hidden mb-4 flex justify-between">
                        <span className="text-lg text-gray-300">Transações</span>
                        <span className="text-gray-500">{transactions.length} itens</span>
                    </div>
                    <SearchForm />
                    <div className="flex flex-col gap-4 mt-6">
                        {transactions.map(transaction => {
                            return (
                                <TransactionCard key={transaction.id}
                                    name={transaction.description}
                                    price={transaction.price}
                                    date={transaction.createdAt}
                                    transactionCategory={transaction.category}
                                    type={transaction.type}
                                />
                            )
                        })}
                    </div>

                </div>
                <div className="flex justify-center gap-2 mt-2">
                    {pages.map((page) => (
                        <button
                            key={page}
                            onClick={() => handlePagination(page)}
                            className={clsx("h-10 w-10 rounded-md text-gray-300 cursor-pointer", {
                                "bg-green-700 text-gray-100": currentPage === page,
                                "bg-gray-600 text-gray-400": currentPage != page
                            })}
                        >
                            {page}
                        </button>
                    ))}
                </div>
            </main>
        </div>
    )
}