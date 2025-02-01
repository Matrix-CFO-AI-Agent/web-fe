import { ConnectButton } from "@mysten/dapp-kit";

export default function Header() {
  return (
    <div className="sticky top-0 z-0 h-[64px] backdrop-blur-sm bg-black flex justify-between items-center px-4">
      <div className="flex items-center gap-4">
        <img src="/images/matrix-ai-icon.webp" alt="Matrix AI" className="h-10 w-auto rounded-md" />
        <div className="font-zen-dots text-2xl" style={{ fontFamily: "ZenDots" }}>
          Matrix AI
        </div>
        <div className="text-white/60 text-sm pt-1">
          Your Trusted AI Companion for Every Step
        </div>
      </div>

      <div className="flex justify-end">
        <ConnectButton style={{ padding: 8 }} id="connect-button" />
      </div>
    </div>
  );
}
