"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ClientFeatures() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
  const [dark, setDark] = useState(false);
  const [hover, setHover] = useState(false);
  const [cursor, setCursor] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const saved = localStorage.getItem("tis-theme");
    if (saved === "dark") setDark(true);
    const move = (e: MouseEvent) => setCursor({ x: e.clientX, y: e.clientY });
    const over = (e: MouseEvent) => setHover(Boolean((e.target as HTMLElement).closest("a,button")));
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    localStorage.setItem("tis-theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <>
      <motion.div className="scroll-progress" style={{ scaleX }} />
      <div
        className={`custom-cursor ${hover ? "cursor-hover" : ""}`}
        style={{ transform: `translate3d(${cursor.x}px, ${cursor.y}px, 0)` }}
      />
      <button className="theme-toggle" onClick={() => setDark((v) => !v)} aria-label="Toggle theme">
        {dark ? "☀" : "☾"}
      </button>
    </>
  );
}
