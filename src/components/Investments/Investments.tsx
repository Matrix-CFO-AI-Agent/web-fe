export default function Investments() {
  const investmentCategories = [
    {
      name: "dex",
      label: "Dex",
      src: "/images/dex-icon.png",
      description:
        "The leading DEX and liquidity protocol on #Sui. The key liquidity and swap infra of #Sui. #Cetus, where Sui trading happens. 🌊 🐳",
      url: "https://x.com/CetusProtocol",
    },
    {
      name: "lending",
      label: "Suilend",
      src: "/images/lending-icon.jpg",
      description:
        "The leading money market on @SuiNetwork.  Link🌲: http://linktr.ee/scallop_io",
      url: "https://x.com/Scallop_io",
    },
    {
      label: "LSD",
      src: "/images/lending-icon.jpg",
      description:
        "Sui's DeFi suite with lending, infinite liquid staking (@springsui_), and a superfluid AMM (@steammfi). Contact http://discord.gg/suilend for support.",
      url: "https://x.com/suilendprotocol",
    },
  ];
  return (
    <div className="p-6 grid grid-cols-2 gap-8">
      {investmentCategories.map((category) => (
        <div
          key={category.name}
          className="flex pb-16 bg-white flex-col gap-8 rounded-lg p-6 border max-w-[600px] border-black/30 relative"
        >
          <a href={category.url} target="_blank" rel="noopener noreferrer">
            <div className="flex items-center gap-2">
              <img
                src={category.src}
                alt={category.label}
                className="size-8 rounded-sm"
              />
              <div className="text-2xl font-bold">{category.label}</div>
            </div>
          </a>
          <div className="text-sm text-gray-500">{category.description}</div>
          <div className="flex justify-end absolute bottom-6 right-6">
            <button className="text-sm text-gray-500 bg-black/10 rounded-lg px-2 py-1">
              Coming Soon
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
