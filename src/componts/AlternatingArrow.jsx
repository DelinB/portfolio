// components/AlternatingArrow.jsx
import React, { useEffect, useState } from "react";
import Arrow from "../assets/icons/Arrow";

const AlternatingArrow = ({ dark }) => {
  const [isGreen, setIsGreen] = useState(false);
  const [rotate, setRotate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotate(true);

      setTimeout(() => {
        setIsGreen((prev) => !prev);
        setRotate(false);
      }, 200);
    }, 900);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`
        transition-transform duration-300
        ${rotate ? "rotate-90" : "rotate-0"}
      `}
    >
      <Arrow
        color={isGreen ? "#B9FF66" : dark ? "#191A23" : "#FFFFFF"}
      />
    </div>
  );
};

export default AlternatingArrow;
