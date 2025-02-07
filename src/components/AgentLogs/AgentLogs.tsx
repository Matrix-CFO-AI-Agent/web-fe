import { Icon } from "@iconify/react";
import { useCurrentAccount } from "@mysten/dapp-kit";
import { useInterval } from "ahooks";
import { useEffect, useState } from "react";

export default function AgentLogs() {
  const [logs, setLogs] = useState<any[]>([]);

  // 从本地存储获取日志的函数
  const getLogsFromStorage = () => {
    try {
      const storedLogs = JSON.parse(
        localStorage.getItem("agent_messages") || "[]"
      );
      setLogs(storedLogs);
    } catch (err) {
      console.error(err);
    }
  };

  // 使用 useInterval 每 3 秒轮询一次本地存储
  useInterval(() => {
    getLogsFromStorage();
  }, 3000);

  // 组件挂载时初始化日志
  useEffect(() => {
    getLogsFromStorage();
  }, []);

  const account = useCurrentAccount();
  if (!account || !logs.length) {
    return (
      <div className="flex flex-col gap-8 items-center pt-[100px]">
        <Icon icon="twemoji:empty-nest" className="size-[120px]" />
        <div className="flex flex-col items-center gap-3">
          <div>No logs found. </div>
          <div className="text-sm">
            Please connect your wallet to view your agent logs.
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-4 p-4">
      {logs.reverse().map((log: any) => (
        <div
          key={log.time}
          className="bg-white p-4 rounded-md flex flex-col gap-2 border border-black/30"
        >
          <div className="text-sm text-gray-500">{log.time}</div>

          <div className="text-sm">{log.text}</div>
        </div>
      ))}
    </div>
  );
}
