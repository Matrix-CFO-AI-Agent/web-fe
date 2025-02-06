import { Icon } from "@iconify/react/dist/iconify.js";
import { useCurrentAccount, useSuiClient } from "@mysten/dapp-kit";
import { useState } from "react";
import { cn, stopSpeakText } from "../../utils";
import AnimateProgress from "./AnimateProgress";
export { Icon as AppIcon, Icon } from "@iconify/react";

const contractAddress =
  "0x8adcbe225d672f56ee96abc51481887e106661ef899ccc5a7dec7161b790be69";
const moduleName = "stream";
const functionName = "get_stream_payment_info";

export default function Subscription({
  label,
  price,
  status,
  subscribeDate,
  endDate,
  progress,
  AIAdvice,
  icon,
}: {
  label: string;
  price: number;
  status: string;
  subscribeDate: string;
  endDate: string;
  progress: number;
  AIAdvice: string;
  icon: string;
}) {
  const account = useCurrentAccount();
  const client = useSuiClient();

  const [isOpen, setIsOpen] = useState(status === "Not Recommended");

  // const queryStreamPaymentStatus = async () => {
  //   const result = await client.(
  //     contractAddress,
  //     moduleName,
  //     functionName,
  //     [account?.address]
  //   );
  //   console.log(result);
  // };

  return (
    <div
      className={cn(
        "flex flex-col rounded-lg p-6 border border-black/60 bg-white relative",
        status === "Expired" ? "border-[#999]/60" : ""
      )}
    >
      {status === "Expired" ? (
        <div className="absolute top-0 right-0 bg-[#ccc]/60 text-black px-2.5 h-5 flex items-center text-xs rounded-bl-sm rounded-tr-sm">
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
            if (!isOpen) {
              stopSpeakText();
            } else {
              stopSpeakText();
            }
          }
        }}
      >
        <div className="flex flex-1 items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={icon} alt={label} className="h-5 w-auto rounded-sm" />
            <div className="text-lg font-medium flex-none">{label}</div>
          </div>
          {!isOpen ? (
            <div className="flex items-center gap-1.5">
              <div className="text-sm text-black/60">${price}/Month</div>
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
            <span className="text-black/60">Status: </span>
            <div className="flex items-center gap-2">
              <div className="text-black">{status}</div>
              <div className="w-[300px]">
                <AnimateProgress ratio={progress} status={status} />
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <span className="text-black/60">Price: </span>
            <span className="text-black">${price}/Month</span>
          </div>
          <div className="flex gap-2">
            <span className="text-black/60">Subscribe Date: </span>
            <span className="text-black">{subscribeDate}</span>
          </div>
          <div className="flex gap-2">
            <span className="text-black/60">End Date: </span>
            <span className="text-black">{endDate}</span>
          </div>
          <div className="text-sm font-medium mt-2">
            <span className="text-black/60">AI Advice: </span>
            <span className="text-black">{AIAdvice}</span>
          </div>
        </div>
      ) : null}
    </div>
  );
}
