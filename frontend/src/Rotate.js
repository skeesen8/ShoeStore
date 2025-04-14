import React, { useState, useEffect } from "react";
import "./ShoeCard.css";
import ShoeCard from "./ShoeCard";

const Rotate = ({ shoes }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % shoes.length);
      }, 3000); 
      return () => clearInterval(interval);
    }
  }, [isPaused, shoes.length]);

  return (
    <div
      className="carousel"
      onMouseEnter={() => setIsPaused(true)} 
      onMouseLeave={() => setIsPaused(false)} 
    >
      <div
        className="carousel-container"
        style={{
          transform: `translateX(${-currentIndex * 100}%)`, 
          display: "flex",
          transition: "transform 0.5s ease-in-out",
        }}
      >
        {shoes.map((shoe) => (
          <ShoeCard key={shoe.id} {...shoe} />
        ))}
      </div>
    </div>
  );
};

export default Rotate;
