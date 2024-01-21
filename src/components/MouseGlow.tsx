"use client";
import { useEffect, useRef } from "react";

const MouseGlow = () => {
  const blob = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    window.addEventListener("mousemove", (event) => {
      const clientX = event.pageX;
      const clientY = event.pageY;
      // Do something with these coordinates
      blob?.current?.animate(
        {
          left: `${clientX}px`,
          top: `${clientY}px`,
        },
        { duration: 3000, fill: "forwards" }
      );
    });
  }, []);

  return (
    <div className="absolute left-0 top-0 h-full w-full -z-50 overflow-hidden">
      <div id="blob" ref={blob}></div>
      <div id="blur"></div>
    </div>
  );
};

export default MouseGlow;
