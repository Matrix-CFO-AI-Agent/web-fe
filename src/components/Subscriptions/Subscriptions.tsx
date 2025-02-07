import { useCurrentAccount } from "@mysten/dapp-kit";
import Chat from "./Chat";
import Subscription from "./Subscription";

/**
 * generate random subscription Data
 * {name: string, label: string, price: number, status: string,AIAdvice:string,subscribeDate: string, endDate:string,
 * currentStatus: number // danger <0.3, warning 0.3-0.7, success >0.7
 * }
 *
 *
 */

const generateRandomSubscriptionData = () => {
  return [
    {
      name: "youtube",
      label: "Youtube Premium",
      price: 10,
      status: "Not Recommended",
      // description
      description: "Youtube is a video streaming platform.",
      AIAdvice:
        "You should cancel this subscription. Last year you spent 1000$ on this subscription, but you only watched 100 hours of videos. You should cancel this subscription and use the money to buy a new laptop.",
      subscribeDate: "2024-01-01",
      endDate: "2025-01-01",
      progress: 0.5,
      icon: "/images/subscriptions/youtube-icon.png",
    },
    {
      name: "netflix",
      label: "Netflix",
      price: 15,
      status: "Recommended",
      subscribeDate: "2024-02-01",
      endDate: "2025-08-01",
      progress: 0.8,
      description:
        "Netflix is a global streaming service that offers a wide range of TV shows, movies and etc.",
      AIAdvice:
        "You should renew this subscription. You have been watching a lot of movies and TV shows on Netflix, and you should continue to watch them.",
      icon: "/images/subscriptions/netflix-icon.png",
    },
    {
      name: "spotify",
      label: "Spotify",
      price: 5,
      status: "Expired",
      subscribeDate: "2023-03-01",
      endDate: "2024-02-01",
      progress: 0,
      // a brief description of Spotify
      description: "Spotify is a popular music streaming service.",
      AIAdvice:
        "You should cancel this subscription. You have not been using Spotify for a long time, and you should cancel this subscription.",
      icon: "/images/subscriptions/spotify-icon.png",
    },
  ];
};

export default function Subscriptions() {
  const account = useCurrentAccount();

  return (
    <div className="flex flex-1 gap-8 p-2 items-stretch max-h-[100%]">
      <div className="flex flex-col gap-10 flex-1">
        {generateRandomSubscriptionData().map((subscription) => (
          <Subscription
            key={subscription.name}
            {...subscription}
            hasAccount={!!account}
          />
        ))}
      </div>
      {account ? (
        <div className="w-[400px]">
          <Chat />
        </div>
      ) : null}
    </div>
  );
}
