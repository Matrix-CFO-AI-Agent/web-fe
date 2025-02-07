import axios from "axios";
import dayjs from "dayjs";

export const sendMessage = async (message: string) => {
  if (!message) {
    return;
  }
  try {
    const res = await axios.post(
      `http://localhost:3000/b850bc30-45f8-0041-a00a-83df46d8555d/message`,
      {
        text: message,
        userId: "user",
        userName: "User",
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer sk-fd90b655d40c4ba79e2ccf74bdece4d3`,
        },
      }
    );
    if (res.data?.[0]?.text) {
      const messages = JSON.parse(
        localStorage.getItem("agent_messages") || "[]"
      );
      if (Array.isArray(messages)) {
        messages.push({
          time: dayjs().format("YYYY-MM-DD HH:mm:ss"),
          text: res.data[0].text,
        });
      }
      localStorage.setItem("agent_messages", JSON.stringify(messages));
    }
    return res;
  } catch (error) {
    console.error("发送消息失败:", error);
  }
};
