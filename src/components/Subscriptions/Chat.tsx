import { UserOutlined } from "@ant-design/icons";
import { Bubble } from "@ant-design/x";

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
  return (
    <div className="p-4 flex flex-col gap-3 border border-black rounded-lg h-full">
      <Bubble
        placement="start"
        content="Hi,According to your record on Youtube for the last 30 days, you have watched 10 hours of videos. We recommend you to subscribe to our premium plan to get more benefits."
        avatar={{ icon: <UserOutlined />, style: fooAvatar }}
      />
      <Bubble
        placement="start"
        content="Netflix is a good choice for you. You can watch 4K videos and enjoy the best quality."
        styles={{ avatar: hideAvatar }}
        avatar={{}}
      />
      <Bubble
        placement="start"
        content="Hi, do you have any other questions?"
        avatar={{}}
        styles={{ avatar: hideAvatar }}
      />
      <Bubble
        placement="end"
        content="Thank you!"
        avatar={{ icon: <UserOutlined />, style: barAvatar }}
      />
    </div>
  );
}
