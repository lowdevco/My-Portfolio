import React, { useState } from "react";

function ProfileCard() {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const card = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - card.left;
    const y = e.clientY - card.top;

    const centerX = card.width / 2;
    const centerY = card.height / 2;

  
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;

    setRotate({ x: rotateX, y: rotateY });
  };

  return (
    <div className="perspective-1000 w-full flex justify-center">
      <div
        className="profile-card bg-[#111113] border border-white/5 rounded-3xl p-6 sm:p-8 transition-all duration-300 ease-out shadow-2xl w-full max-w-[480px]"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setRotate({ x: 0, y: 0 })}
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          transformStyle: "preserve-3d",
        }}
      >
        <div
          className="profile-content font-mono leading-relaxed tracking-tight"
          style={{ transform: "translateZ(30px)" }}
        >
          <div className="flex gap-2 mb-6">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
          </div>
          <div className="text-[#f5f5f7] text-xs sm:text-sm md:text-[15px]">
            <span className="text-[#ff7ab2]">const</span>{" "}
            <span className="text-[#e5c07b]">Developer</span> = &#123;
            <br />
            <div className="pl-6 mt-2 space-y-1">
              <div><span className="text-[#61afef]">name:</span> <span className="text-[#98c379]">"Muhammad Irfan"</span>,</div>
              <div><span className="text-[#61afef]">role:</span> <span className="text-[#98c379]">"Full Stack Developer"</span>,</div>
              <div><span className="text-[#61afef]">skills:</span> [
                <span className="text-[#98c379]">"Python"</span>,{" "}
                <span className="text-[#98c379]">"React"</span>,{" "}
                <span className="text-[#98c379]">"Django"</span>
              ],</div>
              <div><span className="text-[#61afef]">passionate:</span> <span className="text-[#ff7ab2]">true</span>,</div>
              <div><span className="text-[#61afef]">motto:</span> <span className="text-[#98c379]">"Build with Purpose"</span></div>
            </div>
            &#125;;
            <br />
            <br />
            <span className="text-[#e5c07b]">Developer</span>.<span className="text-[#61afef]">showcase</span>();
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
