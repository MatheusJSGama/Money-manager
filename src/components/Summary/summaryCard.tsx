import { ElementType } from "react"
import clsx from "clsx"
import { formatedValue } from "../../utils/formater"

interface SummaryProps {
    text: string
    icon: ElementType
    value: number
    color: "green" | "red" | "white"
    variant?: "green"
}

export function SummaryCard({ text, icon: Icon, value, variant, color }: SummaryProps) {

    const formattedPrice = formatedValue.format(value)

    return (
        <div className={clsx("min-w-[260px] flex-1 p-6 rounded-md bg-gray-600",
            {
                "bg-green-500": variant === "green" && value > 0,
                "bg-red-500": value < 0,
            }
        )} >
            <header className="flex justify-between">
                <span>{text}</span>
                <Icon
                    size={32}
                    className={clsx(
                        {
                            "text-green-700": color === "green",
                            "text-red-300": color === "red",
                            "text-white": color === "white",
                        }
                    )}
                />
            </header>
            <strong className="text-2xl xxs:text-[2rem]">{formattedPrice}</strong>
        </div>
    )
}