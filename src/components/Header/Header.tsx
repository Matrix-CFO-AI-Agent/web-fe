export default function Header() {
  return (
    <div className="sticky top-0 z-0 pt-8 backdrop-blur-sm bg-white flex justify-between items-center px-6">
      <div className="flex-1 flex-col flex gap-3">
        <div className="flex items-center ">
          <img
            src="/images/matrix-ai-logo.png"
            alt="Matrix AI"
            className="h-7 w-auto flex-none"
          />
        </div>
        <div className="text-black/60 text-xs flex-1">
          CFO AI Agent for Crypto
        </div>
      </div>
    </div>
  );
}
