export default function Investments() {
  const investmentCategories = [
    {
      type: "dex",
      label: "DEX",
      projects: [
        {
          name: "cetus",
          label: "Cetus",
          src: "/images/dex/cetus-icon.png",
          description: `The leading DEX and liquidity protocol on #Sui. The key liquidity and swap infra of #Sui #Cetus, where Sui trading happens. 🌊 🐳`,
          url: "https://x.com/CetusProtocol",
        },
        {
          name: "kriya",
          label: "Kriya",
          src: "/images/dex/kriya-icon.jpg",
          description:
            "building in peace 🧘‍♂️ building on sui💧swap | limit orders | 1-click yield strategies | 20x perps |  everything for everyone @ http://app.kriya.finance",
          url: "https://x.com/KriyaDEX",
        },
      ],
    },
    {
      type: "lending",
      label: "Lending",
      projects: [
        {
          name: "scallop",
          label: "Scallop",
          src: "/images/lending/scallop-icon.jpg",
          description:
            "The leading money market on @SuiNetwork. Link🌲: http://linktr.ee/scallop_io",
          url: "https://x.com/Scallop_io",
        },
        {
          name: "navi",
          label: "Navi",
          src: "/images/lending/navi-icon.jpg",
          description:
            "Ultimate Defi infra #Sui (Lending + LSTDefi). $NAVX. Backed by @okx_ventures @hashed_official & @daofive",
          url: "https://x.com/navi_protocol",
        },
        {
          name: "suilend",
          label: "Suilend",
          src: "/images/lending/suilend-icon.png",
          description:
            "Sui's DeFi suite with lending, infinite liquid staking (@springsui_), and a superfluid AMM (@steammfi). Contact http://discord.gg/suilend for support.",
          url: "https://x.com/suilendprotocol",
        },
      ],
    },
    {
      type: "lsd",
      label: "LSD",
      projects: [
        {
          name: "aftermathFi",
          label: "AftermathFi",
          src: "/images/lsd/aftermathFi-icon.jpg",
          description:
            "Building the next-gen on-chain trading platform. Swap, Trade, Stake, & MEV Infra. ",
          url: "https://x.com/AftermathFi",
        },
      ],
    },
  ];
  return (
    <div className="flex flex-col gap-8 px-4">
      {investmentCategories.map((category) => (
        <div key={category.type} className="flex flex-col gap-4">
          <div className="text-2xl font-bold">{category.label}</div>
          <div className="grid grid-cols-3 gap-6">
            {category.projects.map((project) => (
              <div
                key={project.name}
                className="flex bg-white flex-col gap-4 justify-between rounded-lg p-5 border border-black/30 relative"
              >
                <div className="flex flex-col gap-4">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={project.src}
                        alt={project.label}
                        className="size-8 rounded-sm"
                      />
                      <div className="text-lg font-bold">{project.label}</div>
                    </div>
                  </a>
                  <div className="text-sm text-gray-500">
                    {project.description}
                  </div>
                </div>
                <div className="flex justify-end">
                  <button className="text-sm text-gray-500 bg-black/10 rounded-sm px-3 py-2">
                    Coming Soon
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
