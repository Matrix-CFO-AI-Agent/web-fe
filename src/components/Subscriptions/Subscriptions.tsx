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
      name: "coursera",
      label: "Coursera",
      price: 10,
      status: "Not Recommended",
      AIAdvice:
        "Consider canceling this subscription. Low engagement detected - only 2 courses completed in 6 months.",
      subscribeDate: "2024-01-01",
      endDate: "2025-01-01",
      progress: 0.2,
      icon: "/images/subscriptions/coursera-icon.png",
    },
    {
      name: "deeplearningAi",
      label: "Deeplearning.ai",
      price: 15,
      status: "Recommended",
      subscribeDate: "2024-02-01",
      endDate: "2025-08-01",
      progress: 0.8,
      AIAdvice:
        "Great value! High completion rate and consistent learning progress. Keep this subscription.",
      icon: "/images/subscriptions/deep-learning-ai-icon.png",
    },
    {
      name: "udacity",
      label: "Udacity",
      price: 5,
      status: "Expired",
      subscribeDate: "2023-03-01",
      endDate: "2024-02-01",
      progress: 0,
      AIAdvice:
        "Not worth renewing. Limited usage in the past 3 months. Try free alternatives first.",
      icon: "/images/subscriptions/udacity-icon.png",
    },
  ];
};

export default function Subscriptions() {
  return (
    <div className="flex flex-1 gap-8 p-2 items-stretch">
      <div className="flex flex-col gap-10 flex-1">
        {generateRandomSubscriptionData().map((subscription) => (
          <Subscription key={subscription.name} {...subscription} />
        ))}
      </div>
      <div className="w-[400px]">
        <Chat />
      </div>
    </div>
  );
}
