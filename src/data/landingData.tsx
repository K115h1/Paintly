import React from "react";



export interface Feature {
  icon: React.ReactNode;
  title: string;
  desc: string;
  color: string;
  bg: string;
  accent: string;
}

export interface Step {
  step: string;
  title: string;
  desc: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  color: string;
  quote: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  desc: string;
  features: string[];
  highlight: boolean;
}



export const features: Feature[] = [
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z" />
        <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
      </svg>
    ),
    title: "Raw Materials Management",
    desc: "Track every purchase — supplier, quantity, unit price, and total cost — with a full procurement history and spending reports.",
    color: "from-orange-500 to-amber-400",
    bg: "bg-orange-50",
    accent: "text-orange-500",
  },
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
    title: "Production Batch Tracking",
    desc: "Issue raw materials per batch, auto-calculate batch costs, and generate detailed production reports with batch IDs and material consumption logs.",
    color: "from-blue-500 to-cyan-400",
    bg: "bg-blue-50",
    accent: "text-blue-500",
  },
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M5 8h14M5 8a2 2 0 010-4h14a2 2 0 010 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
      </svg>
    ),
    title: "Inventory Management",
    desc: "Finished goods automatically flow into inventory. Monitor stock levels, valuations, and batch history with real-time accuracy.",
    color: "from-emerald-500 to-teal-400",
    bg: "bg-emerald-50",
    accent: "text-emerald-500",
  },
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: "Sales & Revenue Tracking",
    desc: "Record sales transactions linked to live inventory. Auto-update stock, generate invoices, and get a clear picture of total revenue.",
    color: "from-violet-500 to-purple-400",
    bg: "bg-violet-50",
    accent: "text-violet-500",
  },
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <path d="M2 10h20" />
      </svg>
    ),
    title: "Payment & Cashier Module",
    desc: "Capture payment receipts per invoice, choose payment methods, track partial or pending payments, and reconcile revenue instantly.",
    color: "from-rose-500 to-pink-400",
    bg: "bg-rose-50",
    accent: "text-rose-500",
  },
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Operating Expenses",
    desc: "Categorize and record monthly expenses — rent, utilities, wages — and automatically calculate net profit in real time.",
    color: "from-yellow-500 to-orange-400",
    bg: "bg-yellow-50",
    accent: "text-yellow-600",
  },
];



export const steps: Step[] = [
  {
    step: "01",
    title: "Set Up Your Raw Materials",
    desc: "Log your supplier purchases with costs, quantities, and dates. Your procurement history is always one click away.",
  },
  {
    step: "02",
    title: "Run Production Batches",
    desc: "Select materials, specify quantities, and let Piantly auto-calculate your entire batch cost — no spreadsheets needed.",
  },
  {
    step: "03",
    title: "Manage Inventory",
    desc: "Finished batches move straight into inventory. Track stock value, reorder points, and product history effortlessly.",
  },
  {
    step: "04",
    title: "Record Sales & Collect Payments",
    desc: "Issue invoices, update inventory automatically, capture payment receipts, and reconcile revenue in real time.",
  },
];



export const stats: Stat[] = [
  { value: "500+", label: "Manufacturing Plants" },
  { value: "2M+", label: "Batches Tracked" },
  { value: "98%", label: "Accuracy Rate" },
  { value: "40%", label: "Cost Reduction" },
];



export const testimonials: Testimonial[] = [
  {
    name: "Emeka Okonkwo",
    role: "Production Manager, ChemPaint Ltd.",
    avatar: "EO",
    color: "from-orange-400 to-amber-300",
    quote:
      "Piantly transformed how we track batch costs. We used to rely on Excel sheets — now everything is automated and accurate to the last litre.",
  },
  {
    name: "Amara Nwosu",
    role: "CFO, Premier Coatings Nigeria",
    avatar: "AN",
    color: "from-blue-400 to-cyan-300",
    quote:
      "Financial reconciliation went from taking two weeks to two hours. The payment module is a game-changer for our cashier team.",
  },
  {
    name: "David Adesanya",
    role: "Inventory Manager, ColourWorld",
    avatar: "DA",
    color: "from-emerald-400 to-teal-300",
    quote:
      "Real-time inventory valuation means we never run a batch without knowing we have the stock. Losses from overstocking dropped by 35%.",
  },
];



export const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    price: "₦15,000",
    period: "/mo",
    desc: "Perfect for small paint workshops just getting started.",
    features: ["Up to 3 users", "Batch tracking", "Basic inventory", "CSV export"],
    highlight: false,
  },
  {
    name: "Professional",
    price: "₦45,000",
    period: "/mo",
    desc: "Full-featured for growing paint manufacturing businesses.",
    features: ["Up to 20 users", "All modules", "Advanced reports", "PDF & CSV export", "Role-based access"],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "Tailored for large-scale manufacturing operations.",
    features: ["Unlimited users", "Custom integrations", "Dedicated support", "SLA guarantee", "On-premise option"],
    highlight: false,
  },
];
