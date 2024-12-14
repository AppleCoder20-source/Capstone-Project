import React from "react";
import Card from "../components/Card"; // Reusable Card component

const KeyFeatures = () => {
  const keyFeatures = [
    {
      title: "Budget Tracking",
      description: "Track your income and expenses with ease.",
      icon: "https://botnation.ai/site/wp-content/uploads/2024/01/chatbot-drupal.webp", // Replace with actual image/icon
    },
    {
      title: "Investment Tips",
      description: "AI-powered investment advice for better returns.",
      icon: "https://botnation.ai/site/wp-content/uploads/2024/01/chatbot-drupal.webp", // Replace with actual image/icon
    },
    {
      title: "Goal Setting",
      description: "Set and achieve your short and long-term goals.",
      icon: "https://botnation.ai/site/wp-content/uploads/2024/01/chatbot-drupal.webp", // Replace with actual image/icon
    },
  ];

  return (
    <section className="bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 text-center py-20">
      <h2 className="text-4xl font-bold text-center text-black">Key Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {keyFeatures.map((feature, index) => (
          <Card
            key={index}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default KeyFeatures;
