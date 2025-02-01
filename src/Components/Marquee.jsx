import React from "react";
import "./Marquee.css";

const icons = [
  { src: "https://ezitech.org/wp-content/uploads/2024/11/adobe-xd-1024x256.png", alt: "React" },
  { src: "https://ezitech.org/wp-content/uploads/2024/11/adobe-animate-1024x263.png", alt: "Node.js" },
  { src: "https://ezitech.org/wp-content/uploads/2024/11/blender-1024x253.png", alt: "Express.js" },
  { src: "https://ezitech.org/wp-content/uploads/2024/11/capcut-1024x264.png", alt: "GameMaker" },
  { src: "https://ezitech.org/wp-content/uploads/2024/11/cinema-4d-1024x283.png", alt: "WordPress" },
  { src: "https://ezitech.org/wp-content/uploads/2024/11/express-js-1024x301.png", alt: "Adobe XD" },
  { src: "https://ezitech.org/wp-content/uploads/2024/11/figma-2-1024x297.png", alt: "Blender" },
  { src: "https://ezitech.org/wp-content/uploads/2024/11/flutter-1-1024x292.png", alt: "Adobe Animate" },
  { src: "https://ezitech.org/wp-content/uploads/2024/11/game-maker-2.png", alt: "Flutter" },
  { src: "https://ezitech.org/wp-content/uploads/2024/11/laravel.png", alt: "Unreal Engine" },
];

export default function Marquee() {
  return (
    <div className="marquee-container">
      <div className="marquee">
        {/* Render icons twice for a seamless loop */}
        {[...icons, ...icons].map((icon, index) => (
          <img key={index} src={icon.src} alt={icon.alt} />
        ))}
      </div>
    </div>
  );
}
