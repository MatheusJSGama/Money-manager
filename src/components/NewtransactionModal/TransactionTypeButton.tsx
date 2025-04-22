import { ElementType } from "react";
import * as RadioGroup from "@radix-ui/react-radio-group";
import clsx from "clsx";

interface TransactionTypeButtonProps {
  value: string;
  label: string;
  icon: ElementType;
  color: "green" | "red";
}

export function TransactionTypeButton({ value, label, icon: Icon, color, }: TransactionTypeButtonProps) {
  return (
    <RadioGroup.Item
      value={value}
      className={clsx(
        "group bg-gray-700 p-4 flex justify-center items-center flex-1 gap-2 rounded-md cursor-pointer hover:bg-gray-600 duration-300 text-gray-300",
        {
          "data-[state=checked]:bg-green-700 data-[state=checked]:text-white focus:ring-green-700":
            color === "green",
          "data-[state=checked]:bg-red-700 data-[state=checked]:text-white focus:ring-red-700":
            color === "red",
        }
      )}
    >
      <Icon
        size={24}
        className={clsx("group-data-[state=checked]:text-white", {
          "text-green-500": color === "green",
          "text-red-500": color === "red",
        })}
      />
      {label}
    </RadioGroup.Item>
  );
}