

const DashboardPreviewSection = () => {
  const highlights = [
    "Real-time inventory valuation",
    "Batch cost vs revenue margin",
    "Operating expense trends",
    "Payment reconciliation status",
    "Exportable CSV & PDF reports",
  ];

  const kpiCards = [
    { label: "Revenue MTD", val: "₦4.2M", up: true },
    { label: "Batches Active", val: "12", up: true },
    { label: "Stock Value", val: "₦9.1M", up: false },
    { label: "Pending Invoices", val: "8", up: false },
  ];

  const barHeights = [40, 65, 55, 80, 70, 90];
  const barMonths = ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar"];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-orange-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <span className="inline-block text-orange-400 text-sm font-semibold tracking-widest uppercase">
              Intelligent Dashboard
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              Your entire operation,{" "}
              <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
                at a glance
              </span>
            </h2>
            <p className="text-white/60 text-base leading-relaxed">
              The Piantly dashboard surfaces the metrics that matter most — stock levels,
              batch costs, sales revenue, and net profit — in real time, with no manual input required.
            </p>
            <ul className="flex flex-col gap-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3 text-white/80 text-sm">
                  <span className="w-5 h-5 rounded-full bg-gradient-to-br from-orange-500 to-amber-400 flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="#signup"
              className="self-start mt-2 px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-amber-400 text-white font-bold shadow-xl shadow-orange-500/30 hover:scale-105 hover:shadow-orange-500/50 transition-all duration-300"
            >
              See Live Demo
            </a>
          </div>

          <div className="relative">
            <div className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm p-6 shadow-2xl">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span className="ml-3 text-white/40 text-xs font-mono">Piantly — dashboard</span>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-4">
                {kpiCards.map((card) => (
                  <div key={card.label} className="bg-white/10 rounded-xl p-4 border border-white/5">
                    <p className="text-white/50 text-xs mb-1">{card.label}</p>
                    <p className="text-white font-bold text-xl">{card.val}</p>
                    <span className={`text-xs font-medium ${card.up ? "text-emerald-400" : "text-rose-400"}`}>
                      {card.up ? "▲ +12.4%" : "▼ -3.1%"}
                    </span>
                  </div>
                ))}
              </div>

              <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                <p className="text-white/40 text-xs mb-3">Batch Cost vs Revenue (Last 6 months)</p>
                <div className="flex items-end gap-2 h-20">
                  {barHeights.map((h, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1">
                      <div
                        className="w-full rounded-t-md bg-gradient-to-t from-orange-500 to-amber-300 opacity-80"
                        style={{ height: `${h}%` }}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex justify-between text-white/30 text-xs mt-2">
                  {barMonths.map((m) => (
                    <span key={m}>{m}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-orange-500/20 to-amber-400/20 blur-xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreviewSection;
