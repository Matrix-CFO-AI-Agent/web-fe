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
  } as any
  return (
    <div className="sticky top-16 h-[calc(100vh-64px)] min-h-fit w-[220px] flex-none border-r border-white/10 px-4 overflow-hidden pt-10">
      {NAV_ITEMS.map((item) => {
        const Icon = icons[item.name];
        return (
          <div
            key={item.name}
            className={cn(
              "flex items-center gap-3 my-8 cursor-pointer",
              value === item.name
                ? "text-[#40A531]"
                : "text-white/60 hover:text-white"
            )}
            onClick={() => onChange(item.name)}
          >
            <Icon className="size-6" />
            <button onClick={() => onChange(item.name)} className="cursor-pointer font-medium">{item.label}</button>
          </div>
        );
      })}
    </div>
  );
}
