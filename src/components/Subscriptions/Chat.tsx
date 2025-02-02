import { UserOutlined } from "@ant-design/icons";
import { Bubble } from "@ant-design/x";
import { Button, Input } from "antd";
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

  const handleSend = () => {
    setMessages([...messages, input]);
    setInput("");
  };

  return (
    <div className="relative p-4 flex flex-col gap-3 border overflow-hidden overflow-y-auto border-black rounded-lg h-full">
      <Bubble
        placement="start"
        content="Consider canceling Coursera subscription. Low engagement detected - only 2 courses completed in 6 months."
        avatar={{ icon: <UserOutlined />, style: fooAvatar }}
      />
      <Bubble
        placement="start"
        content="Great value on Deeplearning.ai! High completion rate and consistent learning progress. Keep this subscription."
        avatar={{ icon: <UserOutlined />, style: fooAvatar }}
      />
      <Bubble
        placement="start"
        content="Not worth renewing Udacity. Limited usage in the past 3 months. Try free alternatives first."
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
      <div className="h-16 mt-4"></div>
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
