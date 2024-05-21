import React from "react";

const Card = ({ title, icon, amount, description, bgColor }) => {
  return (
    <div
      className={`flex flex-col justify-between items-start gap-4 bg-gradient-to-r ${bgColor} rounded-md p-6 md:p-10`}
    >
      <div className="flex w-full items-center justify-between gap-2 text-lg">
        <h2>{title}</h2>
        {icon}
      </div>

      <span className="text-3xl font-semibold">{amount}</span>
      <h6 className="mt-6 font-medium">{description}</h6>
    </div>
  );
};

export default Card;
