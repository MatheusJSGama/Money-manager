import * as Dialog from "@radix-ui/react-dialog";
import * as RadioGroup from "@radix-ui/react-radio-group"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form"
import { ArrowCircleDown, ArrowCircleUp, X } from "@phosphor-icons/react"
import { TransactionTypeButton } from "./TransactionTypeButton";
import clsx from "clsx";
import { transactionContext } from "../../contexts/TransactionsContext";
import { useContextSelector } from "use-context-selector";

const newTransactionFormSchema = z.object({
    description: z.string().min(1, { message: "Escreva um descrição" }),
    price: z.number({ invalid_type_error: "Informa o valor" }).min(1, { message: "Valor inválido" }),
    category: z.string().min(1, { message: "Escreva uma categoria." }),
    type: z.enum(["income", "outcome"])
})

type NewTransactionFormInputs = Zod.infer<typeof newTransactionFormSchema>

export function NewTransactionModal() {
    const createTransactions = useContextSelector(transactionContext, (context) => {
        return context.createTransactions
    })

    const { register, handleSubmit, reset, control, formState: { errors, isSubmitting } } = useForm<NewTransactionFormInputs>({
        resolver: zodResolver(newTransactionFormSchema)
    })

    async function handleNewTransaction(data: NewTransactionFormInputs) {
        const { category, description, price, type } = data
        await createTransactions({
            category,
            description,
            price,
            type,
        })
        reset()
    }

    return (
        <Dialog.Portal>
            <Dialog.Overlay className="fixed w-full h-full inset-0 bg-[rgba(0,0,0,0.75)]" />

            <Dialog.Content className="w-full h-fit p-6 xxs:max-w-128 rounded-md xxs:p-12 bg-gray-800 fixed bottom-0 xxs:top-1/2 left-1/2 transform -translate-x-1/2 xxs:-translate-y-1/2">
                <Dialog.Title className="flex justify-between bold text-2xl text-gray-100 mb-8">
                    Nova Transição
                </Dialog.Title>
                <Dialog.Close className="absolute top-6 right-6 cursor-pointer">
                    <X size={24} />
                </Dialog.Close>
                <form onSubmit={handleSubmit(handleNewTransaction)} className="flex flex-col gap-4 mt-8">
                    <div className="flex flex-col">
                        <input
                            className={clsx("bg-gray-900 p-4 rounded-md text-gray-300 placeholder:text-gray-500 mb-1",
                                { "focus:ring-red-300": errors.description }
                            )}
                            type="text"
                            placeholder="Descrição"
                            {
                            ...register("description")
                            }
                        />
                        {errors.description && <span className="text-red-300">{errors.description.message}</span>}
                    </div>

                    <div className="flex flex-col">
                        <input
                            className={clsx("bg-gray-900 p-4 rounded-md mb-1 text-gray-300 placeholder:text-gray-500 appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
                                { "focus:ring-red-300": errors.price }
                            )}
                            type="number"
                            placeholder="Preço"
                            {
                            ...register("price", { valueAsNumber: true })
                            }
                        />
                        {errors.price && <span className="text-red-300">{errors.price.message}</span>}
                    </div>

                    <div className="flex flex-col">
                        <input
                            className={clsx("bg-gray-900 p-4 rounded-md text-gray-300 placeholder:text-gray-500 mb-1",
                                { "focus:ring-red-300": errors.category }
                            )}
                            type="text"
                            placeholder="Categoria"
                            {
                            ...register("category")
                            }
                        />
                        {errors.category && <span className="text-red-300">{errors.category.message}</span>}
                    </div>

                    <Controller
                        control={control}
                        name="type"
                        render={({ field }) => {

                            return (
                                <RadioGroup.Root
                                    className="flex gap-4 mt-2"
                                    onValueChange={field.onChange}
                                    value={field.value}>
                                    <TransactionTypeButton
                                        value="income"
                                        label="Entrada"
                                        icon={ArrowCircleUp}
                                        color="green"
                                    />

                                    <TransactionTypeButton
                                        value="outcome"
                                        label="Saída"
                                        icon={ArrowCircleDown}
                                        color="red"
                                    />
                                </RadioGroup.Root>
                            )
                        }}
                    />

                    <button
                        className="bg-green-500
                        text-white rounded-md p-4
                        hover:not-disabled:bg-green-700 duration-300 cursor-pointer disabled:opacity-10 disabled:cursor-not-allowed"
                        type="submit"
                        disabled={isSubmitting}>
                        Cadastrar
                    </button>
                </form>
            </Dialog.Content>
        </Dialog.Portal >
    )
}