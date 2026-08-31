// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// type TabKey = "atta" | "conveying" | "power";

// type CalculateBox = {
//   title: string;
//   text: string;
// };

// type TabData = {
//   title: string;
//   overview: string;
//   tag: string;
//   button: string;
//   href?: string;
//   calculates: CalculateBox[];
// };

// const calculatorData: Record<TabKey, TabData> = {
//   atta: {
//     title: "Know your real atta price before the wheat reaches your chakki.",
//     overview:
//       "Atta pricing isn't just wheat cost. Between power bills, labour, bran recovery, stone wear, packaging, freight, and margin a wrong calculation means you're selling at a loss without knowing it. The Atta Price Calculator puts every variable in one place, so you can price with confidence every single day.",
//     tag: "Pricing Tool",
//     button: "Launch Atta Calculator",
//     href: "/calculator",
//     calculates: [
//       { title: "Raw Material", text: "Wheat input cost." },
//       {
//         title: "By-product Credit",
//         text: "Bran recovery percentage and bran sale value.",
//       },
//       {
//         title: "Variable Cost",
//         text: "Power consumption and electricity cost per quintal.",
//       },
//       {
//         title: "Fixed Overhead",
//         text: "Labour, supervision and indirect operating costs.",
//       },
//       {
//         title: "Per-unit Costs",
//         text: "Stone wear, packaging and handling charges.",
//       },
//       {
//         title: "Distribution Cost",
//         text: "Transport and freight per delivery zone.",
//       },
//       { title: "Profit Centre", text: "Target margin / profit percentage." },
//       { title: "Output", text: "Resulting net atta price per kg / per bag." },
//       { title: "Risk View", text: "Break-even analysis." },
//     ],
//   },
//   conveying: {
//     title:
//       "Right-size your conveyors and elevators. Stop overpaying for power you don't need.",
//     overview:
//       "Undersized conveyors bottleneck your production. Oversized ones waste power and capital. The Conveying Capacity Calculator solves both enter your mill's throughput requirements and it outputs accurate motor sizing, belt/bucket specifications, and drive requirements for screw conveyors, belt conveyors, chain conveyors, and bucket elevators.",
//     tag: "Engineering Tool",
//     button: "Launch Conveying Calculator",
//     calculates: [
//       {
//         title: "Throughput",
//         text: "Required conveying capacity (tonnes per hour).",
//       },
//       {
//         title: "Motor Sizing",
//         text: "Drive motor power (kW/HP) — exact, not over-engineered.",
//       },
//       {
//         title: "Mechanical Spec",
//         text: "Belt width, chain pitch or bucket dimensions.",
//       },
//       { title: "Speed Spec", text: "Conveyor speed (RPM / m per second)." },
//       {
//         title: "Engineering Correction",
//         text: "Inclination factor and material angle of repose adjustment.",
//       },
//       {
//         title: "Drive Type",
//         text: "Recommended drive type — direct, gearbox or VFD-controlled.",
//       },
//       { title: "Economics", text: "Estimated power cost per tonne conveyed." },
//       {
//         title: "Layout Options",
//         text: "Alternative configurations for space-constrained layouts.",
//       },
//     ],
//   },
//   power: {
//     title:
//       "See exactly how much power and money ProMiller technology puts back in your pocket.",
//     overview:
//       "Power is typically 40–55% of a flour mill's variable operating cost. WonderMill and iQuadra technology, combined with VFD-controlled drives and load-optimized operation, consistently deliver 25–40% power savings over conventional chakki systems. This calculator turns that claim into a number specific to your mill.",
//     tag: "Savings Tool",
//     button: "Launch Power Calculator",
//     calculates: [
//       {
//         title: "Baseline",
//         text: "Current monthly power consumption from your existing setup.",
//       },
//       {
//         title: "Post-upgrade",
//         text: "Expected consumption after WonderMill / iQuadra installation.",
//       },
//       { title: "Energy Saving", text: "Monthly unit savings (kWh)." },
//       {
//         title: "Financial Saving",
//         text: "Monthly cost saving at your actual power tariff (₹).",
//       },
//       { title: "Annual Impact", text: "Annual saving projection (₹)." },
//       {
//         title: "Sustainability",
//         text: "Carbon footprint reduction (CO₂ kg saved per year).",
//       },
//       {
//         title: "ROI View",
//         text: "Payback scenario modelling — how long savings take to compound.",
//       },
//       {
//         title: "Config Comparison",
//         text: "Compare 10-7 / 10-8 / 10-10 / 10-12 ProMiller configurations.",
//       },
//     ],
//   },
// };

// const tabOrder: {
//   key: TabKey;
//   label: string;
//   short: string;
//   blurb: string;
//   icon: string;
// }[] = [
//   {
//     key: "atta",
//     label: "Atta Price Calculator",
//     short: "Atta Pricing Calculator",
//     blurb: "Wheat cost to floor price",
//     icon: "🌾",
//   },
//   {
//     key: "conveying",
//     label: "Conveying Capacity Calculator",
//     short: "Conveying Capacity Calculator",
//     blurb: "Motor & belt sizing",
//     icon: "⚙️",
//   },
//   {
//     key: "power",
//     label: "Power Saving Calculator",
//     short: "Power Saving Calculator",
//     blurb: "Monthly savings estimate",
//     icon: "⚡",
//   },
// ];

// // same gradient used across the ProMiller product buttons
// const gradientBg =
//   "bg-[linear-gradient(90deg,#F2843C_0%,#B56AD1_55%,#8B5FE0_100%)]";

// const howItWorksSteps = [
//   {
//     step: "01",
//     title: "Pick your calculator",
//     text: "Choose Atta Pricing, Conveying Capacity, or Power Saving, whichever number you need right now.",
//   },
//   {
//     step: "02",
//     title: "Enter your mill's numbers",
//     text: "Wheat rate, tariff, run hours, throughput whatever's relevant. No sign-up, no spreadsheet.",
//   },
//   {
//     step: "03",
//     title: "Get your answer instantly",
//     text: "Every field recalculates live. Change one input and see the impact across the board in real time.",
//   },
//   {
//     step: "04",
//     title: "Act on it with confidence",
//     text: "Print your price sheet, size your equipment, or take your savings number into a ProMiller conversation.",
//   },
// ];

// const testimonials = [
//   {
//     name: "Rakesh Agarwal",
//     mill: "Agarwal Flour Mills, Rajasthan",
//     quote:
//       "We were pricing atta on gut feel for years. The pricing calculator showed us we were leaving margin on the table every single day.",
//   },
//   {
//     name: "Suresh Patel",
//     mill: "Patel Chakki Udyog, Gujarat",
//     quote:
//       "The conveying calculator caught that our elevator was oversized by almost 30%. That's real money back every month.",
//   },
//   {
//     name: "Manoj Kumar",
//     mill: "Kumar Roller Flour Mills, UP",
//     quote:
//       "Ran the power saving calculator before we even spoke to the ProMiller team. The number it gave us was almost exactly what we ended up saving.",
//   },
// ];

// const faqs = [
//   {
//     q: "Do I need to sign up or pay to use these calculators?",
//     a: "No. All three calculators are free to use and don't require any login. Enter your numbers and get your answer in under 30 seconds.",
//   },
//   {
//     q: "How accurate are the results?",
//     a: "The Atta Pricing and Power Saving calculators use the actual cost structure of a chakki atta operation — including inputs most generic tools ignore, like bran credit. The Conveying calculator follows CEMA standard engineering formulae adapted for Indian mill conditions.",
//   },
//   {
//     q: "Can I use these if I'm not currently a ProMiller customer?",
//     a: "Yes. These tools are useful for any mill trying to price accurately, right-size equipment, or estimate power costs — regardless of what equipment you currently run.",
//   },
//   {
//     q: "Will my data be saved anywhere?",
//     a: "No data is stored on our end. Everything you enter stays in your browser session and is only used to generate your result.",
//   },
// ];

// function FaqItem({ q, a }: { q: string; a: string }) {
//   const [open, setOpen] = useState(false);
//   return (
//     <div className="overflow-hidden rounded-2xl border border-[#EEE7DA] bg-white shadow-[0_8px_20px_rgba(31,27,23,.05)]">
//       <button
//         type="button"
//         onClick={() => setOpen((o) => !o)}
//         className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
//       >
//         <span className="font-['Lato',sans-serif] text-[14.5px] font-semibold text-[#111827] sm:text-[15.5px]">
//           {q}
//         </span>
//         <span
//           className={`flex h-7 w-7 flex-none items-center justify-center rounded-full bg-[#F6F3EC] text-[13px] font-bold text-[#5B5546] transition-transform duration-300 ${
//             open ? "rotate-45" : ""
//           }`}
//         >
//           +
//         </span>
//       </button>
//       <div
//         className="grid transition-all duration-300 ease-in-out"
//         style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
//       >
//         <div className="overflow-hidden">
//           <p className="px-5 pb-5 font-['Lato',sans-serif] text-sm leading-[1.8] text-[#5B5546] sm:px-6 sm:pb-6">
//             {a}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function Calculators() {
//   const [activeTab, setActiveTab] = useState<TabKey>("atta");
//   const data = calculatorData[activeTab];

//   const LaunchButton = () =>
//     data.href ? (
//       <Link
//         href={data.href}
//         className={`${gradientBg} group relative inline-flex w-full items-center justify-center gap-2.5 overflow-hidden whitespace-nowrap rounded-xl px-8 py-4 text-base font-semibold text-white transition-transform duration-300 hover:-translate-y-1 md:w-auto`}
//         style={{ animation: "ctaPulseGlow 2.6s ease-in-out infinite" }}
//       >
//         <span
//           className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-white/25"
//           style={{ animation: "ctaShine 2.8s ease-in-out infinite" }}
//         />
//         <span className="relative">{data.button}</span>
//         <svg
//           viewBox="0 0 24 24"
//           fill="none"
//           className="relative h-4 w-4 flex-none transition-transform duration-300 group-hover:translate-x-1"
//         >
//           <path
//             d="M5 12h13M13 6l6 6-6 6"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           />
//         </svg>
//       </Link>
//     ) : (
//       <button
//         type="button"
//         disabled
//         title="Coming soon"
//         className="inline-flex w-full cursor-not-allowed items-center justify-center gap-2 whitespace-nowrap rounded-xl border border-dashed border-[#E2D8C2] bg-[#F8F5EE] px-8 py-4 text-base font-semibold text-[#A39B8C] md:w-auto"
//       >
//         <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 flex-none">
//           <circle
//             cx="12"
//             cy="12"
//             r="8.5"
//             stroke="currentColor"
//             strokeWidth="1.6"
//           />
//           <path
//             d="M12 7.5V12l2.6 1.7"
//             stroke="currentColor"
//             strokeWidth="1.6"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           />
//         </svg>
//         {data.button}
//       </button>
//     );

//   const heroStats: { label: string; value: string }[] = [
//     { label: "Calculators", value: "3" },
//     { label: "Avg. time", value: "30 sec" },
//     { label: "Mills using it", value: "275+" },
//     { label: "Cost", value: "₹0" },
//   ];

//   return (
//     <div className="w-full bg-[#FBF9F5] font-sans text-[#1F1B17]">
//       {/* ================= HERO ================= */}
//       <section className="relative overflow-hidden bg-[#FBF9F5]">
//         <div
//           className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full opacity-[0.16] blur-[110px]"
//           style={{
//             background:
//               "linear-gradient(90deg, #F2843C 0%, #B56AD1 55%, #8B5FE0 100%)",
//           }}
//         />
//         <div className="relative mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-10 px-[18px] pt-14 pb-12 sm:px-6 sm:pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:pt-20 lg:pb-16 xl:px-0">
//           {/* Left: copy */}
//           <div>
//             <span
//               className={`${gradientBg} inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[12px] font-semibold text-white`}
//             >
//               Built specifically for flour mills
//             </span>

//             <h1 className="mt-5 max-w-[540px] font-['Lato',sans-serif] text-[28px] font-bold leading-[1.2] text-[#111827] sm:text-[36px] lg:text-[42px]">
//               Milling Calculators
//             </h1>
//             <p className="mt-4 max-w-[480px] text-sm leading-[1.8] text-[#443F38] sm:text-base lg:text-[17px]">
//               Calculate atta pricing, conveying capacity, and power savings with
//               precision engineering tools built specifically for flour mills.
//             </p>

//             {/* metrics bar */}
//             <div className="mt-8 inline-flex flex-wrap items-stretch divide-x divide-[#EEE7DA] overflow-hidden rounded-2xl border border-[#EEE7DA] bg-white shadow-[0_10px_25px_rgba(31,27,23,.05)]">
//               {heroStats.map((s) => (
//                 <div
//                   key={s.label}
//                   className="flex flex-col justify-center gap-0.5 px-5 py-3.5 sm:px-6 sm:py-4"
//                 >
//                   <p
//                     className="bg-clip-text text-[19px] font-extrabold leading-none text-transparent sm:text-[22px]"
//                     style={{
//                       backgroundImage:
//                         "linear-gradient(90deg, #F2843C 0%, #B56AD1 55%, #8B5FE0 100%)",
//                     }}
//                   >
//                     {s.value}
//                   </p>
//                   <p className="whitespace-nowrap text-[11px] font-medium text-[#847C6D] sm:text-[11.5px]">
//                     {s.label}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Right: framed image */}
//           <div className="relative">
//             <div className="relative h-[220px] w-full overflow-hidden rounded-[22px] border border-[#EEE7DA] shadow-[0_20px_45px_rgba(31,27,23,.10)] sm:h-[280px] lg:h-[340px]">
//               <Image
//                 src="/assets/jobgrinding_services.png"
//                 alt="Flour mill milling process"
//                 fill
//                 priority
//                 className="object-cover"
//               />
//             </div>

//             {/* floating badge */}
//             <div className="absolute -bottom-5 left-5 flex items-center gap-3 rounded-2xl border border-[#EEE7DA] bg-white px-5 py-3.5 shadow-[0_12px_28px_rgba(31,27,23,.12)] sm:left-8">
//               <span
//                 className={`${gradientBg} flex h-9 w-9 flex-none items-center justify-center rounded-full text-[15px] font-bold text-white`}
//               >
//                 ✓
//               </span>
//               <div>
//                 <p className="text-[13px] font-semibold leading-tight text-[#111827]">
//                   Free login, no cost
//                 </p>
//                 <p className="text-[11.5px] leading-tight text-[#847C6D]">
//                   Answers in under 30 seconds
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ================= CALCULATOR SELECTOR ================= */}
//       <section className="mx-auto max-w-[1180px] px-[18px] pt-10 sm:px-6 xl:px-0">
//         <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
//           {tabOrder.map(({ key, short, blurb, icon }) => {
//             const isActive = activeTab === key;
//             return (
//               <button
//                 key={key}
//                 type="button"
//                 onClick={() => setActiveTab(key)}
//                 className={`group relative flex items-center gap-4 rounded-2xl border p-5 text-left transition-all duration-300 ${
//                   isActive
//                     ? "border-transparent bg-white shadow-[0_14px_32px_rgba(139,95,224,.16)]"
//                     : "border-[#EEE7DA] bg-white/60 hover:border-[#E2D8C2] hover:bg-white"
//                 }`}
//                 style={
//                   isActive
//                     ? {
//                         boxShadow:
//                           "0 0 0 1.5px transparent, 0 14px 32px rgba(139,95,224,.16)",
//                         backgroundImage:
//                           "linear-gradient(white, white), linear-gradient(90deg, #F2843C 0%, #B56AD1 55%, #8B5FE0 100%)",
//                         backgroundOrigin: "border-box",
//                         backgroundClip: "padding-box, border-box",
//                         border: "1.5px solid transparent",
//                       }
//                     : undefined
//                 }
//               >
//                 <span
//                   className={`flex h-11 w-11 flex-none items-center justify-center rounded-xl text-[19px] transition-transform duration-300 ${
//                     isActive
//                       ? `${gradientBg} text-white`
//                       : "bg-[#F3EFE6] group-hover:scale-105"
//                   }`}
//                 >
//                   {icon}
//                 </span>
//                 <div className="min-w-0">
//                   <p
//                     className={`text-[14.5px] font-bold leading-tight ${
//                       isActive ? "text-[#111827]" : "text-[#3A3650]"
//                     }`}
//                   >
//                     {short}
//                   </p>
//                   <p className="mt-0.5 truncate text-[12.5px] text-[#847C6D]">
//                     {blurb}
//                   </p>
//                 </div>
//                 {isActive && (
//                   <span
//                     className={`${gradientBg} absolute right-4 top-4 h-2 w-2 rounded-full`}
//                   />
//                 )}
//               </button>
//             );
//           })}
//         </div>
//       </section>

//       <div className="mb-9 sm:mb-[50px]" />

//       {/* ================= MAIN LAYOUT ================= */}
//       <section className="mx-auto max-w-[1280px] px-[18px] pb-[50px] sm:px-6 lg:px-6 xl:px-0 xl:pb-[60px]">
//         {/* animation keyframes, shared by the intro card, CTA and calculates grid.
//             Plain style tag (not styled-jsx) on purpose: styled-jsx injects a
//             scoped hash className onto every element in this component, which
//             caused an SSR/CSR hydration mismatch. */}
//         <style>{`
//           @keyframes calcFadeUp {
//             from {
//               opacity: 0;
//               transform: translateY(16px);
//             }
//             to {
//               opacity: 1;
//               transform: translateY(0);
//             }
//           }
//           @keyframes ctaPulseGlow {
//             0%,
//             100% {
//               box-shadow: 0 10px 25px rgba(139, 95, 224, 0.25);
//             }
//             50% {
//               box-shadow: 0 14px 36px rgba(139, 95, 224, 0.45);
//             }
//           }
//           @keyframes ctaShine {
//             0% {
//               transform: translateX(-140%) skewX(-15deg);
//             }
//             100% {
//               transform: translateX(260%) skewX(-15deg);
//             }
//           }
//           @keyframes statusPulse {
//             0%,
//             100% {
//               box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.45);
//             }
//             70% {
//               box-shadow: 0 0 0 6px rgba(34, 197, 94, 0);
//             }
//           }
//         `}</style>

//         {/* Intro card */}
//         <div
//           key={`intro-${activeTab}`}
//           className="relative mb-10 overflow-hidden rounded-[20px] border border-[#EEE7DA] bg-white p-[22px] shadow-[0_10px_35px_rgba(31,27,23,.06)] sm:p-[30px] lg:p-10"
//           style={{ animation: "calcFadeUp .5s ease both" }}
//         >
//           <div
//             className="pointer-events-none absolute -right-24 -top-24 h-[220px] w-[220px] rounded-full opacity-[0.10] blur-[70px]"
//             style={{ background: "linear-gradient(135deg,#F2843C,#8B5FE0)" }}
//           />

//           <div className="relative flex flex-col items-start gap-[25px] lg:flex-row lg:items-center lg:justify-between lg:gap-10">
//             <div className="max-w-[640px]">
//               <div className="mb-4 flex flex-wrap items-center gap-3">
//                 <span className="inline-flex items-center rounded-full bg-[#F6F3EC] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.06em] text-[#5B5546]">
//                   {data.tag}
//                 </span>
//                 <span className="inline-flex items-center gap-1.5 text-[12px] font-medium text-[#847C6D]">
//                   <span
//                     className={`h-1.5 w-1.5 rounded-full ${
//                       data.href ? "bg-[#22C55E]" : "bg-[#D8A93E]"
//                     }`}
//                     style={
//                       data.href
//                         ? { animation: "statusPulse 2s infinite" }
//                         : undefined
//                     }
//                   />
//                   {data.href ? "Live calculator -> ready now" : "Coming soon"}
//                 </span>
//               </div>

//               <h2 className="mb-4 font-['Lato',sans-serif] text-[22px] font-semibold leading-[1.3] text-[#111827] lg:text-[26px]">
//                 {data.title}
//               </h2>
//               <p className="font-['Lato',sans-serif] text-sm leading-[1.9] text-[#443F38] lg:text-[15px]">
//                 {data.overview}
//               </p>
//             </div>

//             <div className="w-full flex-none lg:w-auto">
//               <LaunchButton />
//             </div>
//           </div>
//         </div>

//         {/* What it calculates */}
//         <section className="mb-[60px]">
//           <div className="mb-[30px] flex items-center gap-[10px] sm:gap-[15px]">
//             <span
//               className={`${gradientBg} h-7 w-1.5 rounded-[20px] sm:h-[34px]`}
//             />
//             <div>
//               <h3 className="font-['Lato',sans-serif] text-[22px] font-bold text-[#111827] sm:text-xl">
//                 What It Calculates
//               </h3>
//               <p className="mt-0.5 font-['Lato',sans-serif] text-[12.5px] text-[#847C6D]">
//                 {data.calculates.length} variables feeding into one result.
//               </p>
//             </div>
//           </div>

//           <div
//             key={`calc-${activeTab}`}
//             className="flex gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:grid sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:pb-0 lg:grid-cols-4"
//           >
//             {data.calculates.map((box, i) => (
//               <div
//                 key={box.title}
//                 className="group relative flex-none overflow-hidden rounded-xl border border-[#EEE7DA] bg-white p-[18px] shadow-[0_8px_20px_rgba(31,27,23,.05)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#E2D8C2] hover:shadow-[0_16px_30px_rgba(31,27,23,.10)] sm:flex-auto sm:p-[22px]"
//                 style={{
//                   minWidth: "85%",
//                   animation: "calcFadeUp .5s ease both",
//                   animationDelay: `${i * 70}ms`,
//                 }}
//               >
//                 <span
//                   className={`${gradientBg} absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100`}
//                 />
//                 <span className="mb-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#F6F3EC] font-['Lato',sans-serif] text-[11px] font-bold text-[#8A8171] transition-colors duration-300 group-hover:bg-[#1F1B17] group-hover:text-white">
//                   {String(i + 1).padStart(2, "0")}
//                 </span>
//                 <h4 className="mb-2 font-['Lato',sans-serif] text-base font-semibold text-[#111827]">
//                   {box.title}
//                 </h4>
//                 <p className="font-['Lato',sans-serif] text-sm leading-[1.6] text-[#5B5546]">
//                   {box.text}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Conveying-only section */}
//         {activeTab === "conveying" && (
//           <section className="mb-[60px]">
//             <div className="mb-[30px] flex items-center gap-[10px] sm:gap-[15px]">
//               <span
//                 className={`${gradientBg} h-7 w-1.5 rounded-[20px] sm:h-[34px]`}
//               />
//               <h3 className="font-['Lato',sans-serif] text-[22px] font-bold text-[#111827] sm:text-xl">
//                 Conveyor And Elevator Types Covered
//               </h3>
//             </div>

//             <ul className="mt-3 list-none p-0">
//               {[
//                 [
//                   "Screw conveyors",
//                   "Horizontal and inclined wheat/flour transfer.",
//                 ],
//                 ["Belt conveyors", "Bulk grain and bag handling."],
//                 ["Chain conveyors", "Heavy-duty grain movement."],
//                 ["Bucket elevators", "Vertical grain and flour lifting."],
//                 ["Pneumatic conveying", "Dustless flour transfer."],
//               ].map(([label, text]) => (
//                 <li
//                   key={label}
//                   className="relative mb-3.5 pl-7 font-['Lato',sans-serif] text-sm leading-[1.7] text-[#443F38] before:absolute before:left-0 before:top-0.5 before:font-bold before:text-[#F2843C] before:content-['❯']"
//                 >
//                   <strong>{label}</strong> — {text}
//                 </li>
//               ))}
//             </ul>

//             <div
//               className={`${gradientBg} mt-[30px] rounded-xl px-[18px] py-[18px] text-center font-['Lato',sans-serif] text-sm leading-[1.7] text-white sm:px-[25px] sm:py-5 sm:text-base lg:text-[17px] [&_strong]:text-white [&_strong]:underline`}
//             >
//               Most mills oversize conveyors by <strong>20–35%</strong>, paying
//               for unused capacity in every electricity bill. This calculator
//               fixes that.
//             </div>

//             <div className="mt-[30px] rounded-2xl border border-[#EEE7DA] bg-white p-[18px] shadow-[0_8px_20px_rgba(31,27,23,.05)] sm:p-6">
//               <h4 className="mb-3 font-['Lato',sans-serif] text-xl text-[#111827] sm:text-[22px]">
//                 Technical Basis
//               </h4>
//               <p className="font-['Lato',sans-serif] text-sm leading-[1.8] text-[#443F38]">
//                 Calculations follow{" "}
//                 <strong>
//                   CEMA (Conveyor Equipment Manufacturers Association)
//                 </strong>{" "}
//                 standard engineering formulae, adapted for Indian mill operating
//                 conditions — specifically the material bulk densities, moisture
//                 ranges, and ambient temperatures relevant to wheat, atta, maida,
//                 and bran.
//               </p>
//             </div>
//           </section>
//         )}

//         {/* Power-only section */}
//         {activeTab === "power" && (
//           <section className="mb-[60px]">
//             <div className="mb-[30px] flex items-center gap-[10px] sm:gap-[15px]">
//               <span
//                 className={`${gradientBg} h-7 w-1.5 rounded-[20px] sm:h-[34px]`}
//               />
//               <h3 className="font-['Lato',sans-serif] text-[22px] font-bold text-[#111827] sm:text-xl">
//                 Input Variables
//               </h3>
//             </div>

//             <ul className="mt-3 list-none p-0">
//               {[
//                 "Number of chakkis currently running.",
//                 "Average daily run hours.",
//                 "Motor HP per chakki (25 HP / 18.5 kW).",
//                 "Your electricity tariff (₹ / kWh).",
//                 "Target ProMiller configuration (10-7, 10-8, 10-10 or 10-12).",
//               ].map((text) => (
//                 <li
//                   key={text}
//                   className="relative mb-3.5 pl-7 font-['Lato',sans-serif] text-sm leading-[1.7] text-[#443F38] before:absolute before:left-0 before:top-0.5 before:font-bold before:text-[#F2843C] before:content-['❯']"
//                 >
//                   {text}
//                 </li>
//               ))}
//             </ul>

//             <div
//               className={`${gradientBg} mt-[30px] rounded-xl px-[18px] py-[18px] text-center font-['Lato',sans-serif] text-sm leading-[1.7] text-white sm:px-[25px] sm:py-5 sm:text-base lg:text-[17px] [&_strong]:text-white [&_strong]:underline`}
//             >
//               A <strong>10-chakki</strong> mill running{" "}
//               <strong>18 hours/day</strong> at <strong>₹8/kWh</strong> typically
//               saves <strong>₹45,000–₹75,000 per month.</strong> Enter your
//               numbers and see yours.
//             </div>

//             <div className="mt-[30px] rounded-2xl border border-[#EEE7DA] bg-white p-[18px] shadow-[0_8px_20px_rgba(31,27,23,.05)] sm:p-6">
//               <h4 className="mb-3 font-['Lato',sans-serif] text-xl text-[#111827] sm:text-[22px]">
//                 Why This Matters
//               </h4>
//               <p className="font-['Lato',sans-serif] text-sm leading-[1.8] text-[#443F38]">
//                 The Power Saving Calculator is not a marketing estimate — it is
//                 a decision tool. When a mill owner runs this before an
//                 eligibility check, the monthly saving figure often becomes the
//                 single most compelling number in the entire ProMiller
//                 conversation. It makes the zero-investment model
//                 self-explanatory.
//               </p>
//             </div>
//           </section>
//         )}

//         {/* Atta-only sections */}
//         {activeTab === "atta" && (
//           <>
//             <section className="mb-[60px]">
//               <div className="mb-[30px] flex items-center gap-[10px] sm:gap-[15px]">
//                 <span
//                   className={`${gradientBg} h-7 w-1.5 rounded-[20px] sm:h-[34px]`}
//                 />
//                 <h3 className="font-['Lato',sans-serif] text-[22px] font-bold text-[#111827] sm:text-xl">
//                   Who It Is For
//                 </h3>
//               </div>

//               <p className="mt-2.5 font-['Lato',sans-serif] text-sm leading-[1.9] text-[#443F38]">
//                 Chakki atta mill owners, branded flour producers, bulk flour
//                 suppliers, and any mill running an atta profit centre —
//                 including mills selling to retailers, wholesalers, or direct
//                 consumers.
//               </p>

//               <div
//                 className={`${gradientBg} mt-[30px] rounded-xl px-[18px] py-[18px] text-center font-['Lato',sans-serif] text-sm leading-[1.7] text-white sm:px-[25px] sm:py-5 sm:text-base lg:text-[17px] [&_strong]:text-white [&_strong]:underline`}
//               >
//                 Enter today&apos;s wheat rate, your power tariff, and your bran
//                 price — the calculator gives you your atta floor price in under{" "}
//                 <strong>30 seconds.</strong>
//               </div>
//             </section>

//             <section className="mb-[60px]">
//               <div className="mb-[30px] flex items-center gap-[10px] sm:gap-[15px]">
//                 <span
//                   className={`${gradientBg} h-7 w-1.5 rounded-[20px] sm:h-[34px]`}
//                 />
//                 <h3 className="font-['Lato',sans-serif] text-[22px] font-bold text-[#111827] sm:text-xl">
//                   Why It Is Different
//                 </h3>
//               </div>

//               <ul className="mt-3 list-none p-0">
//                 {[
//                   "Designed around chakki-atta economics not generic food manufacturing models.",
//                   "Separates fixed and variable costs the way a mill actually tracks them.",
//                   "Accounts for bran credit, which most calculators ignore.",
//                   "Updates dynamically change wheat price, everything recalculates instantly.",
//                   "Printable daily price sheet output for dealer and wholesale communication.",
//                 ].map((text) => (
//                   <li
//                     key={text}
//                     className="relative mb-3.5 pl-7 font-['Lato',sans-serif] text-sm leading-[1.7] text-[#443F38] before:absolute before:left-0 before:top-0.5 before:font-bold before:text-[#F2843C] before:content-['❯']"
//                   >
//                     {text}
//                   </li>
//                 ))}
//               </ul>
//             </section>
//           </>
//         )}

//         {/* ================= HOW IT WORKS ================= */}
//         <section className="mb-[60px]">
//           <div className="mb-[30px] flex items-center gap-[10px] sm:gap-[15px]">
//             <span
//               className={`${gradientBg} h-7 w-1.5 rounded-[20px] sm:h-[34px]`}
//             />
//             <div>
//               <h3 className="font-['Lato',sans-serif] text-[22px] font-bold text-[#111827] sm:text-xl">
//                 How It Works
//               </h3>
//               <p className="mt-0.5 font-['Lato',sans-serif] text-[12.5px] text-[#847C6D]">
//                 From blank fields to a decision-ready number in four steps.
//               </p>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
//             {howItWorksSteps.map((s, i) => (
//               <div
//                 key={s.step}
//                 className="relative overflow-hidden rounded-2xl border border-[#EEE7DA] bg-white p-6 shadow-[0_8px_20px_rgba(31,27,23,.05)]"
//                 style={{
//                   animation: "calcFadeUp .5s ease both",
//                   animationDelay: `${i * 90}ms`,
//                 }}
//               >
//                 <p
//                   className="bg-clip-text text-[32px] font-extrabold leading-none text-transparent"
//                   style={{
//                     backgroundImage:
//                       "linear-gradient(90deg, #F2843C 0%, #B56AD1 55%, #8B5FE0 100%)",
//                   }}
//                 >
//                   {s.step}
//                 </p>
//                 <h4 className="mt-3 mb-2 font-['Lato',sans-serif] text-base font-semibold text-[#111827]">
//                   {s.title}
//                 </h4>
//                 <p className="font-['Lato',sans-serif] text-sm leading-[1.7] text-[#5B5546]">
//                   {s.text}
//                 </p>
//                 {i < howItWorksSteps.length - 1 && (
//                   <span className="absolute right-4 top-6 hidden text-[#D8CFBC] lg:block">
//                     →
//                   </span>
//                 )}
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* ================= FAQ ================= */}
//         <section className="mb-[60px]">
//           <div className="mb-[30px] flex items-center gap-[10px] sm:gap-[15px]">
//             <span
//               className={`${gradientBg} h-7 w-1.5 rounded-[20px] sm:h-[34px]`}
//             />
//             <div>
//               <h3 className="font-['Lato',sans-serif] text-[22px] font-bold text-[#111827] sm:text-xl">
//                 Frequently Asked Questions
//               </h3>
//               <p className="mt-0.5 font-['Lato',sans-serif] text-[12.5px] text-[#847C6D]">
//                 Everything mill owners usually ask before their first run.
//               </p>
//             </div>
//           </div>

//           <div className="mx-auto flex max-w-[820px] flex-col gap-3.5">
//             {faqs.map((f) => (
//               <FaqItem key={f.q} q={f.q} a={f.a} />
//             ))}
//           </div>
//         </section>

//         {/* ================= CLOSING CTA ================= */}
//         <section
//           className={`${gradientBg} relative overflow-hidden rounded-[24px] px-6 py-12 text-center sm:px-10 sm:py-14`}
//         >
//           <div className="pointer-events-none absolute -left-16 -top-16 h-[240px] w-[240px] rounded-full bg-white/10 blur-[60px]" />
//           <div className="pointer-events-none absolute -bottom-20 -right-10 h-[260px] w-[260px] rounded-full bg-white/10 blur-[70px]" />
//           <h3 className="relative font-['Lato',sans-serif] text-[22px] font-bold leading-tight text-white sm:text-[28px] lg:text-[32px]">
//             Stop guessing your numbers. Start knowing them.
//           </h3>
//           <p className="relative mx-auto mt-3 max-w-[560px] font-['Lato',sans-serif] text-sm leading-[1.8] text-white/90 sm:text-base">
//             275+ mills already price, size, and plan with these calculators.
//             Pick yours above and get your answer in under 30 seconds, free of
//             cost and login.
//           </p>
//           <div className="relative mt-7 flex flex-wrap items-center justify-center gap-3">
//             <Link
//               href="/calculator"
//               className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-[#1F1B17] shadow-[0_10px_25px_rgba(0,0,0,.15)] transition-transform duration-300 hover:-translate-y-1"
//             >
//               Try Atta Price Calculator
//               <svg
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 className="h-4 w-4 flex-none"
//               >
//                 <path
//                   d="M5 12h13M13 6l6 6-6 6"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//             </Link>
//           </div>
//         </section>
//       </section>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
type TabKey = "atta" | "conveying" | "power";

type CalculateBox = {
  title: string;
  text: string;
};

type TabData = {
  title: string;
  overview: string;
  tag: string;
  button: string;
  href?: string;
  calculates: CalculateBox[];
};

const calculatorData: Record<TabKey, TabData> = {
  atta: {
    title: "Know your real atta price before the wheat reaches your chakki.",
    overview:
      "Atta pricing isn't just wheat cost. Between power bills, labour, bran recovery, stone wear, packaging, freight, and margin a wrong calculation means you're selling at a loss without knowing it. The Atta Price Calculator puts every variable in one place, so you can price with confidence every single day.",
    tag: "Pricing Tool",
    button: "Launch Atta Calculator",
    href: "/calculator",
    calculates: [
      { title: "Raw Material", text: "Wheat input cost." },
      {
        title: "By-product Credit",
        text: "Bran recovery percentage and bran sale value.",
      },
      {
        title: "Variable Cost",
        text: "Power consumption and electricity cost per quintal.",
      },
      {
        title: "Fixed Overhead",
        text: "Labour, supervision and indirect operating costs.",
      },
      {
        title: "Per-unit Costs",
        text: "Stone wear, packaging and handling charges.",
      },
      {
        title: "Distribution Cost",
        text: "Transport and freight per delivery zone.",
      },
      { title: "Profit Centre", text: "Target margin / profit percentage." },
      { title: "Output", text: "Resulting net atta price per kg / per bag." },
      { title: "Risk View", text: "Break-even analysis." },
    ],
  },
  conveying: {
    title:
      "Right-size your conveyors and elevators. Stop overpaying for power you don't need.",
    overview:
      "Undersized conveyors bottleneck your production. Oversized ones waste power and capital. The Conveying Capacity Calculator solves both enter your mill's throughput requirements and it outputs accurate motor sizing, belt/bucket specifications, and drive requirements for screw conveyors, belt conveyors, chain conveyors, and bucket elevators.",
    tag: "Engineering Tool",
    button: "Launch Conveying Calculator",
    calculates: [
      {
        title: "Throughput",
        text: "Required conveying capacity (tonnes per hour).",
      },
      {
        title: "Motor Sizing",
        text: "Drive motor power (kW/HP) — exact, not over-engineered.",
      },
      {
        title: "Mechanical Spec",
        text: "Belt width, chain pitch or bucket dimensions.",
      },
      { title: "Speed Spec", text: "Conveyor speed (RPM / m per second)." },
      {
        title: "Engineering Correction",
        text: "Inclination factor and material angle of repose adjustment.",
      },
      {
        title: "Drive Type",
        text: "Recommended drive type — direct, gearbox or VFD-controlled.",
      },
      { title: "Economics", text: "Estimated power cost per tonne conveyed." },
      {
        title: "Layout Options",
        text: "Alternative configurations for space-constrained layouts.",
      },
    ],
  },
  power: {
    title:
      "See exactly how much power and money ProMiller technology puts back in your pocket.",
    overview:
      "Power is typically 40–55% of a flour mill's variable operating cost. WonderMill and iQuadra technology, combined with VFD-controlled drives and load-optimized operation, consistently deliver 25–40% power savings over conventional chakki systems. This calculator turns that claim into a number specific to your mill.",
    tag: "Savings Tool",
    button: "Launch Power Calculator",
    calculates: [
      {
        title: "Baseline",
        text: "Current monthly power consumption from your existing setup.",
      },
      {
        title: "Post-upgrade",
        text: "Expected consumption after WonderMill / iQuadra installation.",
      },
      { title: "Energy Saving", text: "Monthly unit savings (kWh)." },
      {
        title: "Financial Saving",
        text: "Monthly cost saving at your actual power tariff (₹).",
      },
      { title: "Annual Impact", text: "Annual saving projection (₹)." },
      {
        title: "Sustainability",
        text: "Carbon footprint reduction (CO₂ kg saved per year).",
      },
      {
        title: "ROI View",
        text: "Payback scenario modelling — how long savings take to compound.",
      },
      {
        title: "Config Comparison",
        text: "Compare 10-7 / 10-8 / 10-10 / 10-12 ProMiller configurations.",
      },
    ],
  },
};

const tabOrder: {
  key: TabKey;
  label: string;
  short: string;
  blurb: string;
  icon: string;
}[] = [
  {
    key: "atta",
    label: "Atta Price Calculator",
    short: "Atta Pricing Calculator",
    blurb: "Wheat cost to floor price",
    icon: "🌾",
  },
  {
    key: "conveying",
    label: "Conveying Capacity Calculator",
    short: "Conveying Capacity Calculator",
    blurb: "Motor & belt sizing",
    icon: "⚙️",
  },
  {
    key: "power",
    label: "Power Saving Calculator",
    short: "Power Saving Calculator",
    blurb: "Monthly savings estimate",
    icon: "⚡",
  },
];

// same gradient used across the ProMiller product buttons
const gradientBg =
  "bg-[linear-gradient(90deg,#F2843C_0%,#B56AD1_55%,#8B5FE0_100%)]";

const howItWorksSteps = [
  {
    step: "01",
    title: "Pick your calculator",
    text: "Choose Atta Pricing, Conveying Capacity, or Power Saving, whichever number you need right now.",
  },
  {
    step: "02",
    title: "Enter your mill's numbers",
    text: "Wheat rate, tariff, run hours, throughput whatever's relevant. No sign-up, no spreadsheet.",
  },
  {
    step: "03",
    title: "Get your answer instantly",
    text: "Every field recalculates live. Change one input and see the impact across the board in real time.",
  },
  {
    step: "04",
    title: "Act on it with confidence",
    text: "Print your price sheet, size your equipment, or take your savings number into a ProMiller conversation.",
  },
];

const faqs = [
  {
    q: "Do I need to sign up or pay to use these calculators?",
    a: "No. All three calculators are free to use and don't require any login. Enter your numbers and get your answer in under 30 seconds.",
  },
  {
    q: "How accurate are the results?",
    a: "The Atta Pricing and Power Saving calculators use the actual cost structure of a chakki atta operation — including inputs most generic tools ignore, like bran credit. The Conveying calculator follows CEMA standard engineering formulae adapted for Indian mill conditions.",
  },
  {
    q: "Can I use these if I'm not currently a ProMiller customer?",
    a: "Yes. These tools are useful for any mill trying to price accurately, right-size equipment, or estimate power costs — regardless of what equipment you currently run.",
  },
  {
    q: "Will my data be saved anywhere?",
    a: "No data is stored on our end. Everything you enter stays in your browser session and is only used to generate your result.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="overflow-hidden rounded-2xl border border-[#EEE7DA] bg-white shadow-[0_8px_20px_rgba(31,27,23,.05)]">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
      >
        <span className="font-['Lato',sans-serif] text-[14.5px] font-semibold text-[#111827] sm:text-[15.5px]">
          {q}
        </span>
        <span
          className={`flex h-7 w-7 flex-none items-center justify-center rounded-full bg-[#F6F3EC] text-[13px] font-bold text-[#5B5546] transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      <div
        className="grid transition-all duration-300 ease-in-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-5 font-['Lato',sans-serif] text-sm leading-[1.8] text-[#5B5546] sm:px-6 sm:pb-6">
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Calculators() {
  const [activeTab, setActiveTab] = useState<TabKey>("atta");
  const data = calculatorData[activeTab];

  const LaunchButton = () =>
    data.href ? (
      <Link
        href={data.href}
        className={`${gradientBg} group relative inline-flex w-full items-center justify-center gap-2.5 overflow-hidden whitespace-nowrap rounded-xl px-8 py-4 text-base font-semibold text-white transition-transform duration-300 hover:-translate-y-1 md:w-auto`}
        style={{ animation: "ctaPulseGlow 2.6s ease-in-out infinite" }}
      >
        <span
          className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-white/25"
          style={{ animation: "ctaShine 2.8s ease-in-out infinite" }}
        />
        <span className="relative">{data.button}</span>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="relative h-4 w-4 flex-none transition-transform duration-300 group-hover:translate-x-1"
        >
          <path
            d="M5 12h13M13 6l6 6-6 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
    ) : (
      <button
        type="button"
        disabled
        title="Coming soon"
        className="inline-flex w-full cursor-not-allowed items-center justify-center gap-2 whitespace-nowrap rounded-xl border border-dashed border-[#E2D8C2] bg-[#F8F5EE] px-8 py-4 text-base font-semibold text-[#A39B8C] md:w-auto"
      >
        <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 flex-none">
          <circle
            cx="12"
            cy="12"
            r="8.5"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="M12 7.5V12l2.6 1.7"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {data.button}
      </button>
    );

  const heroStats: { label: string; value: string }[] = [
    { label: "Calculators", value: "3" },
    { label: "Avg. time", value: "30 sec" },
    { label: "Mills using it", value: "275+" },
    { label: "Cost", value: "₹0" },
  ];

  return (
    <div className="w-full bg-[#FBF9F5] font-sans text-[#1F1B17]">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-[#FBF9F5]">
        <div
          className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full opacity-[0.16] blur-[110px]"
          style={{
            background:
              "linear-gradient(90deg, #F2843C 0%, #B56AD1 55%, #8B5FE0 100%)",
          }}
        />
        <div className="relative mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-10 px-[18px] pt-14 pb-12 sm:px-6 sm:pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:pt-20 lg:pb-16 xl:px-0">
          {/* Left: copy */}
          <div>
            <span
              className={`${gradientBg} inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[12px] font-semibold text-white`}
            >
              Built specifically for flour mills
            </span>

            <h1 className="mt-5 max-w-[540px] font-['Lato',sans-serif] text-[28px] font-bold leading-[1.2] text-[#111827] sm:text-[36px] lg:text-[42px]">
              Milling Calculators
            </h1>
            <p className="mt-4 max-w-[480px] text-sm leading-[1.8] text-[#443F38] sm:text-base lg:text-[17px]">
              Calculate atta pricing, conveying capacity, and power savings with
              precision engineering tools built specifically for flour mills.
            </p>

            {/* metrics bar */}
            <div className="mt-8 grid grid-cols-2 gap-2.5 sm:inline-flex sm:flex-wrap sm:items-stretch sm:gap-0 sm:divide-x sm:divide-[#EEE7DA] sm:overflow-hidden sm:rounded-2xl sm:border sm:border-[#EEE7DA] sm:bg-white sm:shadow-[0_10px_25px_rgba(31,27,23,.05)]">
              {heroStats.map((s) => (
                <div
                  key={s.label}
                  className="flex flex-col justify-center gap-0.5 rounded-xl border border-[#EEE7DA] bg-white px-4 py-3 shadow-[0_6px_16px_rgba(31,27,23,.04)] sm:rounded-none sm:border-0 sm:bg-transparent sm:px-6 sm:py-4 sm:shadow-none"
                >
                  <p
                    className="bg-clip-text text-[19px] font-extrabold leading-none text-transparent sm:text-[22px]"
                    style={{
                      backgroundImage:
                        "linear-gradient(90deg, #F2843C 0%, #B56AD1 55%, #8B5FE0 100%)",
                    }}
                  >
                    {s.value}
                  </p>
                  <p className="whitespace-nowrap text-[11px] font-medium text-[#847C6D] sm:text-[11.5px]">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: framed image */}
          <div className="relative">
            <div className="relative h-[220px] w-full overflow-hidden rounded-[22px] border border-[#EEE7DA] shadow-[0_20px_45px_rgba(31,27,23,.10)] sm:h-[280px] lg:h-[340px]">
              <Image
                src="/assets/jobgrinding_services.png"
                alt="Flour mill milling process"
                fill
                priority
                className="object-cover"
              />
            </div>

            {/* floating badge */}
            <div className="absolute -bottom-5 left-5 flex items-center gap-3 rounded-2xl border border-[#EEE7DA] bg-white px-5 py-3.5 shadow-[0_12px_28px_rgba(31,27,23,.12)] sm:left-8">
              <span
                className={`${gradientBg} flex h-9 w-9 flex-none items-center justify-center rounded-full text-[15px] font-bold text-white`}
              >
                ✓
              </span>
              <div>
                <p className="text-[13px] font-semibold leading-tight text-[#111827]">
                  Free login, no cost
                </p>
                <p className="text-[11.5px] leading-tight text-[#847C6D]">
                  Answers in under 30 seconds
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CALCULATOR SELECTOR ================= */}
      <section className="mx-auto max-w-[1180px] px-[18px] pt-10 sm:px-6 xl:px-0">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {tabOrder.map(({ key, short, blurb, icon }) => {
            const isActive = activeTab === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => setActiveTab(key)}
                className={`group relative flex items-center gap-4 rounded-2xl border p-5 text-left transition-all duration-300 ${
                  isActive
                    ? "border-transparent bg-white shadow-[0_14px_32px_rgba(139,95,224,.16)]"
                    : "border-[#EEE7DA] bg-white/60 hover:border-[#E2D8C2] hover:bg-white"
                }`}
                style={
                  isActive
                    ? {
                        boxShadow:
                          "0 0 0 1.5px transparent, 0 14px 32px rgba(139,95,224,.16)",
                        backgroundImage:
                          "linear-gradient(white, white), linear-gradient(90deg, #F2843C 0%, #B56AD1 55%, #8B5FE0 100%)",
                        backgroundOrigin: "border-box",
                        backgroundClip: "padding-box, border-box",
                        border: "1.5px solid transparent",
                      }
                    : undefined
                }
              >
                <span
                  className={`flex h-11 w-11 flex-none items-center justify-center rounded-xl text-[19px] transition-transform duration-300 ${
                    isActive
                      ? `${gradientBg} text-white`
                      : "bg-[#F3EFE6] group-hover:scale-105"
                  }`}
                >
                  {icon}
                </span>
                <div className="min-w-0">
                  <p
                    className={`text-[14.5px] font-bold leading-tight ${
                      isActive ? "text-[#111827]" : "text-[#3A3650]"
                    }`}
                  >
                    {short}
                  </p>
                  <p className="mt-0.5 truncate text-[12.5px] text-[#847C6D]">
                    {blurb}
                  </p>
                </div>
                {isActive && (
                  <span
                    className={`${gradientBg} absolute right-4 top-4 h-2 w-2 rounded-full`}
                  />
                )}
              </button>
            );
          })}
        </div>
      </section>

      <div className="mb-9 sm:mb-[50px]" />

      {/* ================= MAIN LAYOUT ================= */}
      <section className="mx-auto max-w-[1280px] px-[18px] pb-[50px] sm:px-6 lg:px-6 xl:px-0 xl:pb-[60px]">
        {/* animation keyframes, shared by the intro card, CTA and calculates grid.
            Plain style tag (not styled-jsx) on purpose: styled-jsx injects a
            scoped hash className onto every element in this component, which
            caused an SSR/CSR hydration mismatch. */}
        <style>{`
          @keyframes calcFadeUp {
            from {
              opacity: 0;
              transform: translateY(16px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes ctaPulseGlow {
            0%,
            100% {
              box-shadow: 0 10px 25px rgba(139, 95, 224, 0.25);
            }
            50% {
              box-shadow: 0 14px 36px rgba(139, 95, 224, 0.45);
            }
          }
          @keyframes ctaShine {
            0% {
              transform: translateX(-140%) skewX(-15deg);
            }
            100% {
              transform: translateX(260%) skewX(-15deg);
            }
          }
          @keyframes statusPulse {
            0%,
            100% {
              box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.45);
            }
            70% {
              box-shadow: 0 0 0 6px rgba(34, 197, 94, 0);
            }
          }
        `}</style>

        {/* Intro card */}
        <div
          key={`intro-${activeTab}`}
          className="relative mb-10 overflow-hidden rounded-[20px] border border-[#EEE7DA] bg-white p-[22px] shadow-[0_10px_35px_rgba(31,27,23,.06)] sm:p-[30px] lg:p-10"
          style={{ animation: "calcFadeUp .5s ease both" }}
        >
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-[220px] w-[220px] rounded-full opacity-[0.10] blur-[70px]"
            style={{ background: "linear-gradient(135deg,#F2843C,#8B5FE0)" }}
          />

          <div className="relative flex flex-col items-start gap-[25px] lg:flex-row lg:items-center lg:justify-between lg:gap-10">
            <div className="max-w-[640px]">
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center rounded-full bg-[#F6F3EC] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.06em] text-[#5B5546]">
                  {data.tag}
                </span>
                <span className="inline-flex items-center gap-1.5 text-[12px] font-medium text-[#847C6D]">
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      data.href ? "bg-[#22C55E]" : "bg-[#D8A93E]"
                    }`}
                    style={
                      data.href
                        ? { animation: "statusPulse 2s infinite" }
                        : undefined
                    }
                  />
                  {data.href ? "Live calculator —> ready now" : "Coming soon"}
                </span>
              </div>

              <h2 className="mb-4 font-['Lato',sans-serif] text-[22px] font-semibold leading-[1.3] text-[#111827] lg:text-[26px]">
                {data.title}
              </h2>
              <p className="font-['Lato',sans-serif] text-sm leading-[1.9] text-[#443F38] lg:text-[15px]">
                {data.overview}
              </p>
            </div>

            <div className="w-full flex-none lg:w-auto">
              <LaunchButton />
            </div>
          </div>
        </div>

        {/* What it calculates */}
        <section className="mb-[60px]">
          <div className="mb-[30px] flex items-center gap-[10px] sm:gap-[15px]">
            <span
              className={`${gradientBg} h-7 w-1.5 rounded-[20px] sm:h-[34px]`}
            />
            <div>
              <h3 className="font-['Lato',sans-serif] text-[22px] font-bold text-[#111827] sm:text-xl">
                What It Calculates
              </h3>
              <p className="mt-0.5 font-['Lato',sans-serif] text-[12.5px] text-[#847C6D]">
                {data.calculates.length} variables feeding into one result.
              </p>
            </div>
          </div>

          <div
            key={`calc-${activeTab}`}
            className="flex gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:grid sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:pb-0 lg:grid-cols-4"
          >
            {data.calculates.map((box, i) => (
              <div
                key={box.title}
                className="group relative flex-none overflow-hidden rounded-xl border border-[#EEE7DA] bg-white p-[18px] shadow-[0_8px_20px_rgba(31,27,23,.05)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#E2D8C2] hover:shadow-[0_16px_30px_rgba(31,27,23,.10)] sm:flex-auto sm:p-[22px]"
                style={{
                  minWidth: "85%",
                  animation: "calcFadeUp .5s ease both",
                  animationDelay: `${i * 70}ms`,
                }}
              >
                <span
                  className={`${gradientBg} absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100`}
                />
                <span className="mb-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#F6F3EC] font-['Lato',sans-serif] text-[11px] font-bold text-[#8A8171] transition-colors duration-300 group-hover:bg-[#1F1B17] group-hover:text-white">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h4 className="mb-2 font-['Lato',sans-serif] text-base font-semibold text-[#111827]">
                  {box.title}
                </h4>
                <p className="font-['Lato',sans-serif] text-sm leading-[1.6] text-[#5B5546]">
                  {box.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Conveying-only section */}
        {activeTab === "conveying" && (
          <section className="mb-[60px]">
            <div className="mb-[30px] flex items-center gap-[10px] sm:gap-[15px]">
              <span
                className={`${gradientBg} h-7 w-1.5 rounded-[20px] sm:h-[34px]`}
              />
              <h3 className="font-['Lato',sans-serif] text-[22px] font-bold text-[#111827] sm:text-xl">
                Conveyor And Elevator Types Covered
              </h3>
            </div>

            <ul className="mt-3 list-none p-0">
              {[
                [
                  "Screw conveyors",
                  "Horizontal and inclined wheat/flour transfer.",
                ],
                ["Belt conveyors", "Bulk grain and bag handling."],
                ["Chain conveyors", "Heavy-duty grain movement."],
                ["Bucket elevators", "Vertical grain and flour lifting."],
                ["Pneumatic conveying", "Dustless flour transfer."],
              ].map(([label, text]) => (
                <li
                  key={label}
                  className="relative mb-3.5 pl-7 font-['Lato',sans-serif] text-sm leading-[1.7] text-[#443F38] before:absolute before:left-0 before:top-0.5 before:font-bold before:text-[#F2843C] before:content-['❯']"
                >
                  <strong>{label}</strong> — {text}
                </li>
              ))}
            </ul>

            <div
              className={`${gradientBg} mt-[30px] rounded-xl px-[18px] py-[18px] text-center font-['Lato',sans-serif] text-sm leading-[1.7] text-white sm:px-[25px] sm:py-5 sm:text-base lg:text-[17px] [&_strong]:text-white [&_strong]:underline`}
            >
              Most mills oversize conveyors by <strong>20–35%</strong>, paying
              for unused capacity in every electricity bill. This calculator
              fixes that.
            </div>

            <div className="mt-[30px] rounded-2xl border border-[#EEE7DA] bg-white p-[18px] shadow-[0_8px_20px_rgba(31,27,23,.05)] sm:p-6">
              <h4 className="mb-3 font-['Lato',sans-serif] text-xl text-[#111827] sm:text-[22px]">
                Technical Basis
              </h4>
              <p className="font-['Lato',sans-serif] text-sm leading-[1.8] text-[#443F38]">
                Calculations follow{" "}
                <strong>
                  CEMA (Conveyor Equipment Manufacturers Association)
                </strong>{" "}
                standard engineering formulae, adapted for Indian mill operating
                conditions — specifically the material bulk densities, moisture
                ranges, and ambient temperatures relevant to wheat, atta, maida,
                and bran.
              </p>
            </div>
          </section>
        )}

        {/* Power-only section */}
        {activeTab === "power" && (
          <section className="mb-[60px]">
            <div className="mb-[30px] flex items-center gap-[10px] sm:gap-[15px]">
              <span
                className={`${gradientBg} h-7 w-1.5 rounded-[20px] sm:h-[34px]`}
              />
              <h3 className="font-['Lato',sans-serif] text-[22px] font-bold text-[#111827] sm:text-xl">
                Input Variables
              </h3>
            </div>

            <ul className="mt-3 list-none p-0">
              {[
                "Number of chakkis currently running.",
                "Average daily run hours.",
                "Motor HP per chakki (25 HP / 18.5 kW).",
                "Your electricity tariff (₹ / kWh).",
                "Target ProMiller configuration (10-7, 10-8, 10-10 or 10-12).",
              ].map((text) => (
                <li
                  key={text}
                  className="relative mb-3.5 pl-7 font-['Lato',sans-serif] text-sm leading-[1.7] text-[#443F38] before:absolute before:left-0 before:top-0.5 before:font-bold before:text-[#F2843C] before:content-['❯']"
                >
                  {text}
                </li>
              ))}
            </ul>

            <div
              className={`${gradientBg} mt-[30px] rounded-xl px-[18px] py-[18px] text-center font-['Lato',sans-serif] text-sm leading-[1.7] text-white sm:px-[25px] sm:py-5 sm:text-base lg:text-[17px] [&_strong]:text-white [&_strong]:underline`}
            >
              A <strong>10-chakki</strong> mill running{" "}
              <strong>18 hours/day</strong> at <strong>₹8/kWh</strong> typically
              saves <strong>₹45,000–₹75,000 per month.</strong> Enter your
              numbers and see yours.
            </div>

            <div className="mt-[30px] rounded-2xl border border-[#EEE7DA] bg-white p-[18px] shadow-[0_8px_20px_rgba(31,27,23,.05)] sm:p-6">
              <h4 className="mb-3 font-['Lato',sans-serif] text-xl text-[#111827] sm:text-[22px]">
                Why This Matters
              </h4>
              <p className="font-['Lato',sans-serif] text-sm leading-[1.8] text-[#443F38]">
                The Power Saving Calculator is not a marketing estimate — it is
                a decision tool. When a mill owner runs this before an
                eligibility check, the monthly saving figure often becomes the
                single most compelling number in the entire ProMiller
                conversation. It makes the zero-investment model
                self-explanatory.
              </p>
            </div>
          </section>
        )}

        {/* Atta-only sections */}
        {activeTab === "atta" && (
          <>
            <section className="mb-[60px]">
              <div className="mb-[30px] flex items-center gap-[10px] sm:gap-[15px]">
                <span
                  className={`${gradientBg} h-7 w-1.5 rounded-[20px] sm:h-[34px]`}
                />
                <h3 className="font-['Lato',sans-serif] text-[22px] font-bold text-[#111827] sm:text-xl">
                  Who It Is For
                </h3>
              </div>

              <p className="mt-2.5 font-['Lato',sans-serif] text-sm leading-[1.9] text-[#443F38]">
                Chakki atta mill owners, branded flour producers, bulk flour
                suppliers, and any mill running an atta profit centre including
                mills selling to retailers, wholesalers, or direct consumers.
              </p>

              <div
                className={`${gradientBg} mt-[30px] rounded-xl px-[18px] py-[18px] text-center font-['Lato',sans-serif] text-sm leading-[1.7] text-white sm:px-[25px] sm:py-5 sm:text-base lg:text-[17px] [&_strong]:text-white [&_strong]:underline`}
              >
                Enter today&apos;s wheat rate, your power tariff, and your bran
                price the calculator gives you your atta floor price in under{" "}
                <strong>30 seconds.</strong>
              </div>
            </section>

            <section className="mb-[60px]">
              <div className="mb-[30px] flex items-center gap-[10px] sm:gap-[15px]">
                <span
                  className={`${gradientBg} h-7 w-1.5 rounded-[20px] sm:h-[34px]`}
                />
                <h3 className="font-['Lato',sans-serif] text-[22px] font-bold text-[#111827] sm:text-xl">
                  Why It Is Different
                </h3>
              </div>

              <ul className="mt-3 list-none p-0">
                {[
                  "Designed around chakki-atta economics not generic food manufacturing models.",
                  "Separates fixed and variable costs the way a mill actually tracks them.",
                  "Accounts for bran credit, which most calculators ignore.",
                  "Updates dynamically change wheat price, everything recalculates instantly.",
                  "Printable daily price sheet output for dealer and wholesale communication.",
                ].map((text) => (
                  <li
                    key={text}
                    className="relative mb-3.5 pl-7 font-['Lato',sans-serif] text-sm leading-[1.7] text-[#443F38] before:absolute before:left-0 before:top-0.5 before:font-bold before:text-[#F2843C] before:content-['❯']"
                  >
                    {text}
                  </li>
                ))}
              </ul>
            </section>
          </>
        )}

        {/* ================= HOW IT WORKS ================= */}
        <section className="mb-[60px]">
          <div className="mb-[30px] flex items-center gap-[10px] sm:gap-[15px]">
            <span
              className={`${gradientBg} h-7 w-1.5 rounded-[20px] sm:h-[34px]`}
            />
            <div>
              <h3 className="font-['Lato',sans-serif] text-[22px] font-bold text-[#111827] sm:text-xl">
                How It Works
              </h3>
              <p className="mt-0.5 font-['Lato',sans-serif] text-[12.5px] text-[#847C6D]">
                From blank fields to a decision-ready number in four steps.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {howItWorksSteps.map((s, i) => (
              <div
                key={s.step}
                className="relative overflow-hidden rounded-2xl border border-[#EEE7DA] bg-white p-6 shadow-[0_8px_20px_rgba(31,27,23,.05)]"
                style={{
                  animation: "calcFadeUp .5s ease both",
                  animationDelay: `${i * 90}ms`,
                }}
              >
                <p
                  className="bg-clip-text text-[32px] font-extrabold leading-none text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, #F2843C 0%, #B56AD1 55%, #8B5FE0 100%)",
                  }}
                >
                  {s.step}
                </p>
                <h4 className="mt-3 mb-2 font-['Lato',sans-serif] text-base font-semibold text-[#111827]">
                  {s.title}
                </h4>
                <p className="font-['Lato',sans-serif] text-sm leading-[1.7] text-[#5B5546]">
                  {s.text}
                </p>
                {i < howItWorksSteps.length - 1 && (
                  <span className="absolute right-4 top-6 hidden text-[#D8CFBC] lg:block">
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ================= FAQ ================= */}
        <section className="mb-[60px]">
          <div className="mb-[30px] flex items-center gap-[10px] sm:gap-[15px]">
            <span
              className={`${gradientBg} h-7 w-1.5 rounded-[20px] sm:h-[34px]`}
            />
            <div>
              <h3 className="font-['Lato',sans-serif] text-[22px] font-bold text-[#111827] sm:text-xl">
                Frequently Asked Questions
              </h3>
              <p className="mt-0.5 font-['Lato',sans-serif] text-[12.5px] text-[#847C6D]">
                Everything mill owners usually ask before their first run.
              </p>
            </div>
          </div>

          <div className="mx-auto flex max-w-[820px] flex-col gap-3.5">
            {faqs.map((f) => (
              <FaqItem key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
        </section>

        {/* ================= CLOSING CTA ================= */}
        <section
          className={`${gradientBg} relative overflow-hidden rounded-[24px] px-6 py-12 text-center sm:px-10 sm:py-14`}
        >
          <div className="pointer-events-none absolute -left-16 -top-16 h-[240px] w-[240px] rounded-full bg-white/10 blur-[60px]" />
          <div className="pointer-events-none absolute -bottom-20 -right-10 h-[260px] w-[260px] rounded-full bg-white/10 blur-[70px]" />
          <h3 className="relative font-['Lato',sans-serif] text-[22px] font-bold leading-tight text-white sm:text-[28px] lg:text-[32px]">
            Stop guessing your numbers. Start knowing them.
          </h3>
          <p className="relative mx-auto mt-3 max-w-[560px] font-['Lato',sans-serif] text-sm leading-[1.8] text-white/90 sm:text-base">
            275+ mills already price, size, and plan with these calculators.
            Pick yours above and get your answer in under 30 seconds, free of
            cost and login.
          </p>
          <div className="relative mt-7 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/calculator"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-[#1F1B17] shadow-[0_10px_25px_rgba(0,0,0,.15)] transition-transform duration-300 hover:-translate-y-1"
            >
              Try Atta Price Calculator
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-4 w-4 flex-none"
              >
                <path
                  d="M5 12h13M13 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </section>
      </section>
    </div>
  );
}
