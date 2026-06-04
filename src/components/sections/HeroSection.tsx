import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import heroBg from "../../assets/hero.jpg";

const HeroSection = () => {
  const heroTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroTextRef.current) {
      gsap.fromTo(
        heroTextRef.current.children,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          delay: 0.3,
        }
      );
    }
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      id="hero"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950/85 via-gray-900/70 to-orange-950/60" />

      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <div
        ref={heroTextRef}
        className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center gap-6"
      >
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium px-4 py-2 rounded-full">
          <span className="w-2 h-2 bg-orange-400 rounded-full animate-ping inline-block" />
          Enterprise Paint Manufacturing Platform
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight tracking-tight">
          Manufacture Smarter,{" "}
          <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
            Profit More
          </span>
        </h1>

        <p className="text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed font-light">
          Piantly is the all-in-one platform that digitizes your entire paint manufacturing
          workflow — from raw material procurement to sales reconciliation — with zero manual errors.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-2">
          <a
            href="#signup"
            className="group px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-amber-400 text-white font-bold text-base shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105 transition-all duration-300 flex items-center gap-2"
          >
            Start Free Trial
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="#features"
            className="px-8 py-4 rounded-full border border-white/30 text-white font-semibold text-base backdrop-blur-sm hover:bg-white/10 hover:border-white/50 transition-all duration-300"
          >
            Explore Features
          </a>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-6 mt-4 text-white/50 text-sm">
          {[
            "No credit card required",
            "14-day free trial",
            "Cancel anytime",
          ].map((badge) => (
            <span key={badge} className="flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              {badge}
            </span>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 text-xs">
        <span>Scroll to explore</span>
        <div className="w-0.5 h-8 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
      </div>
    </section>
  );
};

export default HeroSection;
