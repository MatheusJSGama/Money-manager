import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from "@phosphor-icons/react"
import { SummaryCard } from "./summaryCard"
import { useSummary } from "../../hooks/useSummary"

export function Summary() {
    const summary = useSummary()

    return (
        <section className="w-full max-w-[1152px] px-4 my-0 flex gap-8 -mt-20 touch-pan-x overflow-auto">
            <SummaryCard
                text="Entrada"
                icon={ArrowCircleUp}
                value={summary.income}
                color="green"
            />

            <SummaryCard
                text="Saídas"
                icon={ArrowCircleDown}
                value={summary.outcome}
                color="red"
            />

            <SummaryCard
                text="Total"
                icon={CurrencyDollar}
                value={summary.total}
                variant="green"
                color="white"
            />
        </section>
    )
}