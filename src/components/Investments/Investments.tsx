export default function Investments() {
  const investmentCategories = [
    {
      type: "dex",
      label: "DEX",
      projects: [
        {
          name: "camelot",
          label: "Camelot",
          src: "/images/dex/camelot-icon.jpg",
          description:
            "The Orbital Liquidity Network & @Arbitrum's largest DEX",
          url: "https://x.com/CamelotDEX",
        },
        {
          name: "sailfish",
          label: "SailFish",
          src: "/images/dex/sailfish-icon.jpg",
          description:
            "Built to be Fast and Efficient, SailFish is the first  native veDEX on @opencampus_xyz distributing 100% fees to protocol users.",
          url: "https://x.com/SailFishFinance",
        },
      ],
    },
    {
      type: "lending",
      label: "Lending",
      projects: [
        {
          name: "blend",
          label: "Blend",
          src: "/images/lending/blend-icon.png",
          description:
            "Lending Protocol for Bitcoin.Backed by @MarioNawfal, @ibcgroupio and @HackQuest_ community fund.",
          url: "https://x.com/suilendprotocol",
        },
      ],
    },
    {
      type: "lsd",
      label: "LSD",
      projects: [
        {
          name: "moveFlow",
          label: "MoveFlow",
          src: "/images/lsd/move-flow-icon.png",
          description:
            "Token management infra for vesting, airdrop, payroll and subscription.",
          url: "https://x.com/moveflowlabs_",
        },
      ],
    },
  ];
  return (
    <div className="flex flex-col gap-8">
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
