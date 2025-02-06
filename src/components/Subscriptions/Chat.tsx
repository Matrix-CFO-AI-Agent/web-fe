import { UserOutlined } from "@ant-design/icons";
import { Bubble } from "@ant-design/x";
import { useCurrentAccount } from "@mysten/dapp-kit";
import { Button, Input, message } from "antd";
import { useState } from "react";

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
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");
  const account = useCurrentAccount();

  const handleSend = async () => {
    if (!input) {
      return;
    }
    if (!account) {
      message.warning("Please connect your wallet first");
      return;
    }
    setMessages([...messages, input]);
    fetch(
      `http://localhost:3000/b850bc30-45f8-0041-a00a-83df46d8555d/message`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer sk-fd90b655d40c4ba79e2ccf74bdece4d3`,
        },
        body: JSON.stringify({
          text: input,
          userId: "user",
          userName: "User",
        }),
      }
    );
    setInput("");
  };

  return (
    <div className="relative py-4 bg-white border flex flex-col overflow-hidden border-black rounded-lg h-full">
      <div className="flex-1 overflow-y-auto">
        <div className="flex flex-col gap-3 px-4">
          <Bubble
            placement="start"
            content="Hi,According to your record on Youtube for the last 30 days, you have watched 10 hours of videos. We recommend you to subscribe to our premium plan to get more benefits."
            avatar={{ icon: <UserOutlined />, style: fooAvatar }}
          />
          <Bubble
            placement="start"
            content="Netflix is a good choice for you. You can watch 4K videos and enjoy the best quality."
            avatar={{ icon: <UserOutlined />, style: fooAvatar }}
          />
          <Bubble
            placement="start"
            content="Hi, do you have any other questions?"
            avatar={{ icon: <UserOutlined />, style: fooAvatar }}
          />
          {messages.map((message, index) => (
            <Bubble
              key={index}
              placement="end"
              content={message}
              avatar={{ icon: <UserOutlined />, style: barAvatar }}
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
          <Button onClick={handleSend}>Send</Button>
        </div>
      </div>
    </div>
  );
}
