import React, { useState } from "react";
import PFP from "../assets/image/Photo.png";

function PhotoCard() {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const card = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - card.left;
    const y = e.clientY - card.top;

    const centerX = card.width / 2;
    const centerY = card.height / 2;

   
    const rotateX = (y - centerY) / 25;
    const rotateY = (centerX - x) / 25;

    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div className="photo-card-container flex items-center justify-center h-full perspective-2000">
      <div
        className="photo-card-content overflow-hidden bg-[#111113] rounded-3xl w-full max-w-[300px] aspect-[3/4] sm:max-w-[380px] md:max-w-[450px] transition-all duration-300 ease-out shadow-2xl border border-white/5 hover:border-[#A57AFF]/30"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          transformStyle: "preserve-3d",
        }}
      >
        <img
          src={PFP}
          alt="Portrait of Muhammad Irfan"
          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out cursor-pointer scale-105 hover:scale-100"
          style={{ transform: "translateZ(10px)" }}
        />
      </div>
    </div>
  );
}

export default PhotoCard;
