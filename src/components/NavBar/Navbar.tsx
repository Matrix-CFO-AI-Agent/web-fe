import { NAV_ITEMS } from "../../consts";
import { cn } from "../../utils";
// @ts-ignore
import SubscriptionIcon from "./images/subscription-icon.svg?react";
// @ts-ignore
import InvestmentIcon from "./images/investment-icon.svg?react";
// @ts-ignore
import IncomeIcon from "./images/income-icon.svg?react";

export default function Navbar({
  value,
  onChange,
}: {
  value: string;
  onChange: Function;
}) {
  const icons = {
    subscriptions: SubscriptionIcon,
    investments: InvestmentIcon,
    incomes: IncomeIcon,
  } as any;
  return (
    <div className="sticky top-16 min-h-fit flex-none border-r border-white/10 px-4 overflow-hidden pt-8">
      {NAV_ITEMS.map((item) => {
        const Icon = icons[item.name];
        return (
          <div
            key={item.name}
            className={cn(
              "flex items-center gap-3 my-4 px-3 py-2 rounded-sm cursor-pointer text-black",
              value === item.name ? "bg-[#f9f9f9]" : "hover:bg-[#f9f9f9]"
            )}
            onClick={() => onChange(item.name)}
          >
            <Icon className="size-4 flex-none" />
            <button
              onClick={() => onChange(item.name)}
              className="cursor-pointer"
            >
              {item.label}
            </button>
          </div>
        );
      })}
    </div>
  );
}
