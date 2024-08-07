import React, { useState, useEffect } from "react";

const Message = () => {
  const texto = [
    "15% Discount by paying in transfer",
    "Free shipping over $100.000",
    "Up to 9 interest-free installments",
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texto.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [texto.length]);

  return (
    <div className="flex bg-gradient-to-r from-pink-300 to-orange-400 text-white h-12 items-center justify-center">
      <h2 className="text-white text-center font-semibold text-xl">
        <span className="pr-4 font-bold">&lt;</span>
        {texto[currentTextIndex]}
        <span className="pl-4 font-bold">&gt;</span>
      </h2>
    </div>
  );
};

export default Message;
