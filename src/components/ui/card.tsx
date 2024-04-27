import React from "react";

interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="bg-neutral-200 dark:bg-neutral-900 rounded-lg shadow-xl p-6 border-cyan-950 mb-10 ">
      {children}
    </div>
  );
};

export default Card;
