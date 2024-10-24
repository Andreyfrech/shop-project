import React, { useState, useEffect } from "react";

const Price = ({ price }) => {
  const [randomPrice, setRandomPrice] = useState(null);

  useEffect(() => {
    if (randomPrice === null) {
      const initialPrice = price + Math.floor(Math.random() * 1000);
      setRandomPrice(initialPrice);
    }
  }, [price, randomPrice]);

  return (
    <span className="right" style={{ fontSize: "1.8rem" }}>
      {randomPrice} руб.
    </span>
  );
};

export default Price;
