const mockLogs = [
  {
    id: 1,
    timestamp: "2024-01-01 10:00:00",
    type: "info",
    message: "This is a test message",
  },
  {
    id: 2,
    timestamp: "2024-01-01 10:00:00",
    type: "error",
    message: "This is a test error message",
  },
  {
    id: 3,
    timestamp: "2024-01-01 10:00:00",
    type: "warning",
    message: "This is a test warning message",
  },
  {
    id: 4,
    timestamp: "2024-01-01 10:00:00",
    type: "success",
    message: "This is a test success message",
  },
];

export default function AgentLogs() {
  // const agentLogs = JSON.parse(localStorage.getItem("agentLogs") || "[]");
  const agentLogs = mockLogs;
  return (
    <div className="flex flex-col gap-4 p-4">
      {agentLogs.map((log: any) => (
        <div
          key={log.id}
          className="bg-white p-4 rounded-md flex flex-col gap-2"
        >
          <div className="flex justify-between">
            <div className="text-sm">{log.message}</div>
            <div className="text-sm text-gray-500">{log.timestamp}</div>
          </div>
          <div className="text-sm text-gray-500">{log.type}</div>
        </div>
      ))}
    </div>
  );
}
