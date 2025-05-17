// src/components/MagicCursor.jsx
import React, { useEffect } from "react";
import "./MagicCursor.css";

const NUM_DOTS = 25;

const MagicCursor = () => {
  useEffect(() => {
    const dots = document.querySelectorAll(".trail-dot");

    let mouseX = 0;
    let mouseY = 0;

    const positions = new Array(NUM_DOTS).fill({ x: 0, y: 0 });

    document.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    const animate = () => {
      let x = mouseX;
      let y = mouseY;

      positions.forEach((pos, i) => {
        const next = positions[i + 1] || { x, y };
        pos.x += (x - pos.x) * 0.2;
        pos.y += (y - pos.y) * 0.2;

        const dot = dots[i];
        dot.style.left = `${pos.x}px`;
        dot.style.top = `${pos.y}px`;

        x = pos.x;
        y = pos.y;
      });

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <>
      {[...Array(NUM_DOTS)].map((_, i) => (
        <div
          key={i}
          className="trail-dot"
          style={{
            opacity: `${(NUM_DOTS - i) / NUM_DOTS * 0.4}`,
            width: `${20 - i * 0.5}px`,
            height: `${20 - i * 0.5}px`,
            filter: `blur(${8 + i}px)`,
          }}
        ></div>
      ))}
    </>
  );
};

export default MagicCursor;
