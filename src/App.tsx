import Header from "./components/Header";
import Navbar from "./components/NavBar/Navbar";
import { useState } from "react";
import { NAV_ITEMS } from "./consts";
import Subscriptions from "./components/Subscriptions";
import Incomes from "./components/Incomes";
import Investments from "./components/Investments";

import "./index.css";

function App() {
  const [activeNavName, setActiveNavName] = useState<string>(NAV_ITEMS[0].name);
  return (
    <div
      className="bg-black bg-[url(/images/header-new-bg.png)] bg-[length:1440px_auto] bg-fixed bg-left-top bg-no-repeat"
      style={{ fontFamily: "Montserrat" }}
    >
      <Header />
      <div className="flex">
        <div className="flex-none sticky top-16">
          <Navbar value={activeNavName} onChange={setActiveNavName} />
        </div>
        <div className="flex-1">
          {activeNavName === "subscriptions" ? <Subscriptions /> : null}
          {activeNavName === "investments" ? <Investments /> : null}
          {activeNavName === "incomes" ? <Incomes /> : null}
        </div>
      </div>
    </div>
  );
}

export default App;
