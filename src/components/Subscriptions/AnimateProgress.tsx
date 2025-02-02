import { cn } from "../../utils";

export default function AnimateProgress({
  ratio,
  status,
}: {
  ratio: number;
  status: string;
}) {
  return (
    <div className="relative flex h-[5px] w-full rounded-full bg-[#999] ">
      <div
        className={cn(
          "animate-progress-line relative h-[5px]",
          status === "Recommended"
            ? "before:bg-gradient-to-r   before:from-[#40A531] before:to-[#40A531] before:via-[rgb(86,103,93)] after:bg-gradient-to-r after:from-[#40A531] after:to-[#40A531] after:via-[rgb(86,103,93)]"
            : "before:bg-gradient-to-r before:from-[#ff441a] before:to-[#ff441a] before:via-[#ffe500] after:bg-gradient-to-r after:from-[#ff441a] after:to-[#ff441a] after:via-[#ffe500]"
        )}
        style={{ width: `${ratio * 100}%` }}
      >
        <style>{`
          @keyframes animate {
            0% {
              background-position: 200% 0;
            }

            100% {
              background-position: 0 0;
            }
          }

          .animate-progress-line:before {
            content: '';
            position: absolute;
            inset: 0px;
            // change to green gradient
            background-size: 200%;
            animation: animate 3s linear infinite;
            border-radius: 5px;
          }

          .animate-progress-line:after {
            content: '';
            position: absolute;
            inset: 0px;
            background-size: 500%;
            animation: animate 3s linear infinite;
            // filter: blur(2px);
            background-size: 200%;
            border-radius: 5px;
          }
        `}</style>
      </div>
    </div>
  );
}
