import React from "react";
import { pricingPlans } from "../../data/landingData";

const PricingSection = () => {
  return (
    <section className="py-24 bg-white" id="pricing">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <span className="inline-block text-orange-500 text-sm font-semibold tracking-widest uppercase mb-3">
          Simple pricing
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Plans for every factory size
        </h2>
        <p className="text-gray-500 text-base max-w-xl mx-auto mb-12">
          From small workshops to large enterprises — Piantly scales with your production capacity.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingPlans.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-2xl p-8 border-2 flex flex-col gap-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                plan.highlight
                  ? "border-orange-400 bg-gradient-to-b from-orange-500 to-amber-400 text-white shadow-2xl shadow-orange-300/40 scale-105"
                  : "border-gray-100 bg-gray-50 text-gray-700"
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs font-bold px-4 py-1.5 rounded-full">
                  Most Popular
                </span>
              )}

              <div>
                <p className={`text-sm font-semibold uppercase tracking-widest mb-2 ${plan.highlight ? "text-white/70" : "text-orange-500"}`}>
                  {plan.name}
                </p>
                <div className="flex items-end gap-1">
                  <span className={`text-4xl font-black ${plan.highlight ? "text-white" : "text-gray-900"}`}>
                    {plan.price}
                  </span>
                  <span className={`text-base mb-1 ${plan.highlight ? "text-white/70" : "text-gray-400"}`}>
                    {plan.period}
                  </span>
                </div>
                <p className={`text-sm mt-2 ${plan.highlight ? "text-white/80" : "text-gray-500"}`}>
                  {plan.desc}
                </p>
              </div>

              <ul className="flex flex-col gap-2.5">
                {plan.features.map((f) => (
                  <li key={f} className={`flex items-center gap-2 text-sm ${plan.highlight ? "text-white" : "text-gray-600"}`}>
                    <svg
                      className={`w-4 h-4 shrink-0 ${plan.highlight ? "text-white" : "text-emerald-500"}`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#signup"
                className={`mt-auto py-3 rounded-full font-bold text-center text-sm transition-all duration-300 hover:scale-105 ${
                  plan.highlight
                    ? "bg-white text-orange-500 hover:bg-white/90 shadow-lg"
                    : "bg-gradient-to-r from-orange-500 to-amber-400 text-white shadow-md shadow-orange-200"
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
