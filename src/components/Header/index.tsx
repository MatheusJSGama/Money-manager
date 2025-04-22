import logoImage from "../../assets/Logo-name.svg"
import * as Dialog from "@radix-ui/react-dialog";
import { NewTransactionModal } from "../NewtransactionModal";


export function Header() {
    return (
        <header className="bg-gray-900 flex justify-center align-center pt-10 pb-30 w-full">
            <div className="w-full max-w-[1152px] px-4 flex justify-between align-middle">
                <img src={logoImage} className="w-[117px] xxs:w-[176px]" />
                <Dialog.Root>
                    <Dialog.Trigger className="bg-green-500 text-white text-sm rounded-md py-3 px-5 hover:bg-green-300 duration-300 cursor-pointer xxs:text-base">
                        Nova transação
                    </Dialog.Trigger>
                    <NewTransactionModal />
                </Dialog.Root>
            </div>
        </header>
    )
}