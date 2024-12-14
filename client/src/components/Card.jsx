import React from "react";

const Card = ({ title, description, icon }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md text-center">
      {icon && <img src={icon} alt={title} className="mx-auto w-20 h-20" />}
      <h3 className="mt-4 text-xl font-bold text-indigo-600">{title}</h3>
      <p className="mt-2 text-black">{description}</p>
    </div>
  );
};

export default Card;
