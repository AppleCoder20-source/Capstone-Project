import React from "react";
import Card from "./Card";

const WhyChooseUs = () => {
  const cardData = [
    {
      title: "Personalized Plans",
      description: "Custom-tailored financial strategies for your goals.",
      icon: "https://botnation.ai/site/wp-content/uploads/2024/01/chatbot-drupal.webp", 
    },
    {
      title: "Trained and Reviewed",
      description: "Trained by over 100s of finance professionals!",
      icon: "https://botnation.ai/site/wp-content/uploads/2024/01/chatbot-drupal.webp", 
    },
    {
      title: "24/7 Support",
      description: "Always here to answer your questions and guide you.",
      icon: "https://botnation.ai/site/wp-content/uploads/2024/01/chatbot-drupal.webp", 
    },
  ];

  return (
    <section className="text-center px-8 py-16 bg-indigo-500 text-gray-800">
      <h2 className="text-4xl font-bold text-black">Why Choose Us?</h2>
      <p className="mt-4 text-lg text-black">
        expert
financial insights to help you achieve your goals.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            icon={card.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
