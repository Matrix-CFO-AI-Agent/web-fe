import { UserOutlined } from "@ant-design/icons";
import { Bubble } from "@ant-design/x";
import { useCurrentAccount } from "@mysten/dapp-kit";
import { Button, Input, message } from "antd";
import { useEffect, useState } from "react";
import { sendMessage } from "../../utils/chat";

const fooAvatar: React.CSSProperties = {
  color: "#f56a00",
  backgroundColor: "#fde3cf",
};

const barAvatar: React.CSSProperties = {
  color: "#fff",
  backgroundColor: "#87d068",
};

const hideAvatar: React.CSSProperties = {
  visibility: "hidden",
};

export default function Chat() {
  const [messages, setMessages] = useState<{ text: string; user: string }[]>(
    []
  );
  const [input, setInput] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const account = useCurrentAccount();

  const handleSend = async (text?: string) => {
    const inputMessage = text || input;
    if (!inputMessage) {
      return;
    }
    if (!account) {
      message.warning("Please connect your wallet first");
      return;
    }
    const currentMessages = [...messages];
    const newMessages = [
      ...currentMessages,
      { text: inputMessage, user: "user" },
    ];
    setMessages(newMessages);
    setInput("");
    setLoading(true);
    const res = await sendMessage(inputMessage);
    setLoading(false);
    if (res) {
      setMessages([...newMessages, { text: res.data[0].text, user: "agent" }]);
    } else {
      message.warning(
        "Sorry, server error: we're on it! stay tuned for updates."
      );
      setMessages(currentMessages);
    }
  };

  useEffect(() => {
    handleSend("Tell me about my subscriptions.");
  }, []);

  return (
    <div className="relative py-4 bg-white border flex flex-col overflow-hidden border-black rounded-lg h-full">
      <div className="flex-1 overflow-y-auto">
        <div className="flex flex-col gap-3 px-4">
          {messages.map((message, index) => (
            <Bubble
              key={index}
              placement={message.user !== "user" ? "start" : "end"}
              content={message.text}
              avatar={{
                icon: <UserOutlined />,
                style: message.user !== "user" ? fooAvatar : barAvatar,
              }}
            />
          ))}
        </div>
      </div>
      <div className="h-16 mt-4 flex-none"></div>
      <div className="flex items-center border-t h-16 border-black/30 absolute bottom-0 rounded-b-lg left-0 w-[398px] px-4 bg-white">
        <div className="flex gap-2 w-full">
          <Input
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            onPressEnter={(e) => {
              handleSend();
            }}
          />
          <Button
            onClick={() => handleSend()}
            loading={loading}
            disabled={loading}
          >
            Send
          </Button>
        </div>
      </div>
    </div>
  );
}
