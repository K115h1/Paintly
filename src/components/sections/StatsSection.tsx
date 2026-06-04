import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { stats } from "../../data/landingData";

gsap.registerPlugin(ScrollTrigger);

const StatsSection = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (ref.current) {
      gsap.fromTo(
        ref.current.querySelectorAll(".stat-card"),
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 80%",
          },
        }
      );
    }
  }, []);

  return (
    <section ref={ref} className="bg-gradient-to-r from-gray-900 to-gray-800 py-14" id="stats">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((s) => (
          <div key={s.label} className="stat-card flex flex-col items-center gap-1">
            <span className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
              {s.value}
            </span>
            <span className="text-white/60 text-sm font-medium">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
