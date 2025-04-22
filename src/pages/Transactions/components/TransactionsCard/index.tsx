import clsx from "clsx"
import { formatedDate, formatedValue } from "../../../../utils/formater"
import { TagSimple, CalendarBlank } from "@phosphor-icons/react"

interface PriceHighLightProps {
    name: string
    price: number
    transactionCategory: string
    date: string
    type: "income" | "outcome"
}

export function TransactionCard({ name, price, transactionCategory, date, type }: PriceHighLightProps) {

    const dateFormated = formatedDate.format(new Date(date))
    const formattedPrice = formatedValue.format(price)


    return (
        <div className="bg-gray-700 rounded-md p-5 grid grid-cols-2 gap-2 xxs:flex justify-between items-center xxs:py-5 xxs:px-8">
            <p className="xxs:w-1/2 col-span-2">{name}</p>
            <p className={clsx("min-w-[100px] col-span-2 font-bold text-xl xxs:text-center xxs:font-normal xxs:text-base", { "text-green-300": type === "income", "text-red-300": type === "outcome" })}>
                {type === "outcome" && "- "}{formattedPrice}
            </p>
            <p className="min-w-[100px] h-full text-gray-500 flex items-center gap-0.5 xxs:text-gray-100 ">
                <TagSimple size={16} className="xxs:hidden" />
                {transactionCategory}
            </p>
            <p className="min-w-[100px] h-full text-end place-self-end text-gray-500 flex items-center gap-0.5 xxs:place-self-center xxs:text-gray-100 ">
                <CalendarBlank size={16} className="xxs:hidden" />
                {dateFormated}
            </p>
        </div>
    )
}