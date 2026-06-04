import React from "react";

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-400 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-4 left-10 w-64 h-64 rounded-full bg-white blur-3xl" />
        <div className="absolute bottom-4 right-10 w-80 h-80 rounded-full bg-white blur-3xl" />
      </div>

      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
          Ready to modernize your paint factory?
        </h2>
        <p className="text-white/80 text-lg mb-8">
          Join hundreds of manufacturers already running smarter operations with Piantly.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#signup"
            className="px-10 py-4 rounded-full bg-white text-orange-500 font-bold text-base shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Start Free Trial
          </a>
          <a
            href="#demo"
            className="px-10 py-4 rounded-full border-2 border-white/60 text-white font-semibold text-base hover:bg-white/10 transition-all duration-300"
          >
            Request a Demo
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
