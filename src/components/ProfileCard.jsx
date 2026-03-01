import React, { useState } from "react";

function ProfileCard() {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const card = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - card.left;
    const y = e.clientY - card.top;

    const centerX = card.width / 2;
    const centerY = card.height / 2;

    // Same broad tilt logic as your project cards
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;

    setRotate({ x: rotateX, y: rotateY });
  };

  return (
    <div className="perspective-1000">
      <div
        className="profile-card bg-gray-900/80 border border-white/10 rounded-3xl p-10 transition-all duration-200 ease-out shadow-2xl backdrop-blur-sm"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setRotate({ x: 0, y: 0 })}
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          transformStyle: "preserve-3d",
        }}
      >
        <div
          className="profile-content font-mono leading-relaxed"
          style={{ transform: "translateZ(40px)" }}
        >
          <h4 className="text-white text-lg">
            <span className="text-purple-400">const</span>{" "}
            <span className="text-yellow-200">Developer</span> = &#123;
            <br />
            <div className="pl-6 mt-2">
              <span className="text-blue-300">name:</span>{" "}
              <span className="text-orange-300">"Muhammad Irfan"</span>, <br />
              <span className="text-blue-300">role:</span>{" "}
              <span className="text-orange-300">"Full Stack Developer"</span>,{" "}
              <br />
              <span className="text-blue-300">skills:</span> [
              <span className="text-orange-300">"Python"</span>,
              <span className="text-orange-300">"React"</span>,
              <span className="text-orange-300">"JS"</span>
              ], <br />
              <span className="text-blue-300">passionate:</span>{" "}
              <span className="text-purple-400">true</span>, <br />
              <span className="text-blue-300">motto:</span>{" "}
              <span className="text-orange-300">"Build with Purpose"</span>
            </div>
            &#125;;
            <br />
            <br />
            <span className="text-yellow-200">Developer</span>.
            <span className="text-green-300">showcase</span>();
          </h4>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
