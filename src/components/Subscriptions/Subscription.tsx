import React, { useState } from "react";
import AnimateProgress from "./AnimateProgress";
import { Icon } from "@iconify/react/dist/iconify.js";
import { cn } from "../../utils";
export { Icon as AppIcon, Icon } from "@iconify/react";

export default function Subscription({
  label,
  price,
  status,
  subscribeDate,
  endDate,
  progress,
  AIAdvice,
}: {
  label: string;
  price: number;
  status: string;
  subscribeDate: string;
  endDate: string;
  progress: number;
  AIAdvice: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={cn(
        "flex flex-col rounded-sm p-6 border max-w-[800px] border-[#40A531]/20 relative",
        status === "Expired" ? "border-[#999]/20" : ""
      )}
    >
      {status === "Expired" ? (
        <div className="absolute top-0 right-0 bg-[#999] text-white px-2 h-5 flex items-center text-xs rounded-bl-sm rounded-tr-sm">
          Expired
        </div>
      ) : null}
      <div
        className={cn(
          "flex items-center justify-between gap-3",
          status === "Expired" ? "" : "cursor-pointer"
        )}
        onClick={() => {
          if (status !== "Expired") {
            setIsOpen(!isOpen);
          }
        }}
      >
        <div className="flex flex-1 items-center justify-between">
          <div className="text-lg font-medium flex-none">{label}</div>
          {!isOpen ? (
            <div className="flex items-center gap-1.5">
              <div className="text-sm text-white/60">${price}/Month</div>
              <div className="w-20">
                <AnimateProgress ratio={progress} status={status} />
              </div>
            </div>
          ) : null}
        </div>
        {/* collapse toggle use iconify */}
        <div
          className={cn(
            "flex items-center justify-center pl-6",
            status === "Expired" ? "hidden" : ""
          )}
        >
          {isOpen ? (
            <Icon className="iconify" icon="mdi:chevron-up"></Icon>
          ) : (
            <Icon className="iconify" icon="mdi:chevron-down"></Icon>
          )}
        </div>
      </div>
      {isOpen ? (
        <div className="flex flex-col gap-1 mt-2 text-sm">
          <div className="flex gap-2 items-center">
            <span className="text-white/60">Status: </span>
            <div className="flex items-center gap-2">
            <div className="text-white">{status}</div>
              <div className="w-[400px]">
                <AnimateProgress ratio={progress} status={status} />
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <span className="text-white/60">Price: </span>
            <span className="text-white">${price}/Month</span>
          </div>
          <div className="flex gap-2">
            <span className="text-white/60">Subscribe Date: </span>
            <span className="text-white">{subscribeDate}</span>
          </div>
          <div className="flex gap-2">
            <span className="text-white/60">End Date: </span>
            <span className="text-white">{endDate}</span>
          </div>
          <div className="text-sm font-medium mt-2">
            <span className="text-white/60">AI Advice: </span>
            <span className="text-white">{AIAdvice}</span>
          </div>
        </div>
      ) : null}
    </div>
  );
}
