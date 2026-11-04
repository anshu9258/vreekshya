"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  "/images/site/hero-dried-fruit.jpg",
  "/images/site/hero-spice-jars.jpg",
  "/images/site/hero-farm.jpg",
];

// Crossfading background. Stops if the visitor picks a slide or prefers reduced motion.
export default function HeroSlider() {
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);

  useEffect(() => {
    if (!auto || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setActive((a) => (a + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, [auto]);

  return (
    <>
      {slides.map((src, i) => (
        <Image key={src} src={src} alt="" fill priority={i === 0} sizes="100vw" className={`cover slide${i === active ? " on" : ""}`} />
      ))}
      <div className="dots">
        {slides.map((src, i) => (
          <button key={src} aria-label={`Show image ${i + 1}`} aria-current={i === active} onClick={() => { setActive(i); setAuto(false); }} />
        ))}
      </div>
    </>
  );
}
