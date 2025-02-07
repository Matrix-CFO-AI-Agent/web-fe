import { useState } from "react";
import Header from "./components/Header";
import Investments from "./components/Investments";
import Navbar from "./components/NavBar";
import Subscriptions from "./components/Subscriptions";
import { NAV_ITEMS } from "./consts";

import { ConnectButton } from "@mysten/dapp-kit";
import AgentLogs from "./components/AgentLogs";
import "./index.css";
import { cn } from "./utils";

function App() {
  const [activeNavName, setActiveNavName] = useState<string>(NAV_ITEMS[0].name);
  return (
    <div className="bg-white flex text-black h-screen">
      <div className="flex-none w-[240px]">
        <Header />
        <Navbar value={activeNavName} onChange={setActiveNavName} />
      </div>
      <div className="flex-1 bg-[#f9f9f9] flex flex-col gap-4 p-4">
        <div className="flex justify-end">
          <ConnectButton id="connect-button" />
        </div>
        <div className="flex-1 relative overflow-y-auto flex flex-col gap-4">
          <div
            className={cn(
              "h-full",
              activeNavName === "subscriptions" ? "" : "hidden"
            )}
          >
            <Subscriptions />
          </div>
          <div
            className={cn(
              "h-full",
              activeNavName === "investments" ? "" : "hidden"
            )}
          >
            <Investments />
          </div>
          <div
            className={cn("h-full", activeNavName === "logs" ? "" : "hidden")}
          >
            <AgentLogs />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
