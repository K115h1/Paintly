import React from "react";

const Footer = () => {
  const productLinks = ["Features", "Pricing", "Security", "Changelog"];
  const companyLinks = ["About", "Blog", "Careers", "Contact"];

  return (
    <footer className="bg-gray-950 text-white/60 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-amber-400 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M7 3C7 3 4 6 4 10C4 13.31 6.69 16 10 16C11.32 16 12.55 15.56 13.54 14.83L19.41 20.7L20.83 19.29L14.96 13.42C15.61 12.48 16 11.29 16 10C16 6 13 3 13 3H7Z"
                    fill="white"
                  />
                </svg>
              </div>
              <span className="text-white font-bold text-xl">
                Paint<span className="text-orange-400">ly</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              The intelligent platform for paint manufacturers — streamlining production from raw material to revenue.
            </p>
          </div>

          {/* Product links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Product</h4>
            <ul className="flex flex-col gap-2 text-sm">
              {productLinks.map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-orange-400 transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Company</h4>
            <ul className="flex flex-col gap-2 text-sm">
              {companyLinks.map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-orange-400 transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} Piantly. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-orange-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-orange-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
