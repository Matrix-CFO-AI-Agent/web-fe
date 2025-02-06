import { useState } from "react";
import Header from "./components/Header";
import Investments from "./components/Investments";
import Navbar from "./components/NavBar";
import Subscriptions from "./components/Subscriptions";
import { NAV_ITEMS } from "./consts";

import { ConnectButton } from "@mysten/dapp-kit";
import AgentLogs from "./components/AgentLogs";
import "./index.css";

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
          {activeNavName === "subscriptions" ? <Subscriptions /> : null}
          {activeNavName === "investments" ? <Investments /> : null}
          {activeNavName === "logs" ? <AgentLogs /> : null}
        </div>
      </div>
    </div>
  );
}

export default App;
