export default function Investments() {
  const investmentCategories = ["Dex", "Lending", "LSD"];
  return (
    <div className="p-6 flex flex-col gap-8">
      {investmentCategories.map((category) => (
        <div
          key={category}
          className="flex flex-col gap-10 rounded-lg p-6 border max-w-[600px] border-black/30 relative"
        >
          <div className="text-2xl font-bold">{category}</div>
          <div className="flex justify-end">
            <button className="text-sm text-gray-500 bg-black/10 rounded-lg px-2 py-1">
              Coming Soon
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
