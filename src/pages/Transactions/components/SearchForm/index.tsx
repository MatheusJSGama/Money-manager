import { MagnifyingGlass } from "@phosphor-icons/react"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import clsx from "clsx"
import { transactionContext } from "../../../../contexts/TransactionsContext"
import { useContextSelector } from "use-context-selector"

const searchTransactionSchema = z.object({
    query: z.string().min(1, { message: "Informe a transação que deseja buscar." })
})

type searchFormInputs = z.infer<typeof searchTransactionSchema>

export function SearchForm() {

    const fetchTransactions = useContextSelector(transactionContext, (context) => {
        return context.fetchTransactions
    })

    const { register, handleSubmit, formState: { isSubmitting, errors } } = useForm<searchFormInputs>({
        resolver: zodResolver(searchTransactionSchema)
    })

    async function handleSearchTransacrions(data: searchFormInputs) {
        await fetchTransactions({ query: data.query, page: 1 })
    }


    return (
        <>
            <form onSubmit={handleSubmit(handleSearchTransacrions)} id="search" className="w-full flex gap-4 justify-between mb-1">
                <input
                    className={clsx("p-4 border-0 rounded-md bg-gray-900 w-full text-gray-300 placeholder:text-gray-500",
                        { "focus:ring-red-300": errors.query }
                    )}
                    type="text"
                    placeholder="Busque por transações"
                    {
                    ...register("query")
                    }
                />
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex gap-3 items-center bg-transparent border border-green-300 rounded-md
            text-green-300 font-bold p-4 xxxs:py-[14px] xxxs:px-8 hover:not-disabled:bg-green-300 hover:not-disabled:text-white duration-300 cursor-pointer
            disabled:opacity-10 disabled:cursor-not-allowed">
                    <MagnifyingGlass size={20} weight="bold" className="text-current" />
                    <span className="hidden xxxs:inline">Buscar</span>
                </button>
            </form>
            {errors.query && <span className="text-red-300">{errors.query?.message}</span>}
        </>
    )
}