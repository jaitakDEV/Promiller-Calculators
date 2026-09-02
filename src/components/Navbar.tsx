// "use client";

// import Link from "next/link";
// import { useState } from "react";

// export default function Navbar() {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [learningOpen, setLearningOpen] = useState(false);
//   const [calculatorOpen, setCalculatorOpen] = useState(false);

//   return (
//     <header className="w-full bg-white">
//       <div className="mx-auto flex min-h-[100px] w-full max-w-[1400px] items-center px-6 lg:px-8">
//         <Link href="https://charge.org.in/" className="shrink-0">
//           <img
//             src="https://charge.org.in/wp-content/uploads/2026/02/cropped-CHARGE-LOGO-1024x310.png"
//             alt="CHARGE"
//             className="h-auto w-[280px] object-contain"
//           />
//         </Link>

//         {/* Desktop Navigation */}
//         <nav className="ml-auto hidden items-center lg:flex">
//           <Link
//             href="https://charge.org.in/"
//             className="px-[13px] py-[15px] text-[18px] text-[#171717] transition hover:text-[#00643f]"
//           >
//             Home
//           </Link>

//           <Link
//             href="https://charge.org.in/about-us/"
//             className="px-[13px] py-[15px] text-[18px] text-[#171717] transition hover:text-[#00643f]"
//           >
//             About Us
//           </Link>

//           <Link
//             href="https://charge.org.in/how-it-works/"
//             className="px-[13px] py-[15px] text-[18px] text-[#171717] transition hover:text-[#00643f]"
//           >
//             How it works
//           </Link>

//           <Link
//             href="https://charge.org.in/community/"
//             className="px-[13px] py-[15px] text-[18px] text-[#171717] transition hover:text-[#00643f]"
//           >
//             Community
//           </Link>

//           {/* Learning */}
//           <div
//             className="group relative"
//             onMouseEnter={() => setLearningOpen(true)}
//             onMouseLeave={() => setLearningOpen(false)}
//           >
//             <button
//               type="button"
//               onClick={() => setLearningOpen(!learningOpen)}
//               className="flex items-center gap-2 px-[13px] py-[15px] text-[18px] text-[#171717] transition hover:text-[#00643f]"
//             >
//               Learning
//               <span className="text-[18px]">⌄</span>
//             </button>

//             {learningOpen && (
//               <div className="absolute left-0 top-full z-50 w-[220px] bg-white py-2 shadow-lg">
//                 <Link
//                   href="https://charge.org.in/courses/"
//                   className="block px-5 py-3 text-[16px] text-[#171717] hover:bg-gray-50 hover:text-[#00643f]"
//                 >
//                   Courses
//                 </Link>

//                 <Link
//                   href="https://charge.org.in/gatherings/"
//                   className="block px-5 py-3 text-[16px] text-[#171717] hover:bg-gray-50 hover:text-[#00643f]"
//                 >
//                   Gatherings
//                 </Link>

//                 <Link
//                   href="https://charge.org.in/resources/"
//                   className="block px-5 py-3 text-[16px] text-[#171717] hover:bg-gray-50 hover:text-[#00643f]"
//                 >
//                   Resources
//                 </Link>
//               </div>
//             )}
//           </div>

//           <Link
//             href="https://charge.org.in/insights/"
//             className="px-[13px] py-[15px] text-[18px] text-[#171717] transition hover:text-[#00643f]"
//           >
//             Insights
//           </Link>

//           <Link
//             href="https://charge.org.in/partner/"
//             className="px-[13px] py-[15px] text-[18px] text-[#171717] transition hover:text-[#00643f]"
//           >
//             Partner
//           </Link>

//           {/* Calculators */}
//           <div
//             className="group relative"
//             onMouseEnter={() => setCalculatorOpen(true)}
//             onMouseLeave={() => setCalculatorOpen(false)}
//           >
//             <button
//               type="button"
//               onClick={() => setCalculatorOpen(!calculatorOpen)}
//               className="flex items-center gap-2 px-[13px] py-[15px] text-[18px] text-[#171717] transition hover:text-[#00643f]"
//             >
//               Calculators
//               <span className="text-[18px]">⌄</span>
//             </button>

//             {calculatorOpen && (
//               <div className="absolute right-0 top-full z-50 w-[220px] bg-white py-2 shadow-lg">
//                 <Link
//                   href="/"
//                   className="block px-5 py-3 text-[16px] text-[#171717] hover:bg-gray-50 hover:text-[#00643f]"
//                 >
//                   Milling Calculators
//                 </Link>
//               </div>
//             )}
//           </div>

//           {/* Contact Us */}
//           <Link
//             href="https://charge.org.in/contact-us/"
//             className="ml-3 whitespace-nowrap rounded-[4px] bg-[#00643f] px-6 py-[15px] text-[18px] text-white transition hover:bg-[#005536]"
//           >
//             Contact Us
//           </Link>
//         </nav>

//         {/* Mobile Menu Button */}
//         <button
//           type="button"
//           aria-label="Toggle menu"
//           onClick={() => setMobileOpen(!mobileOpen)}
//           className="ml-auto flex h-11 w-11 items-center justify-center rounded-md text-2xl text-[#00643f] lg:hidden"
//         >
//           {mobileOpen ? "✕" : "☰"}
//         </button>
//       </div>

//       {/* Mobile Navigation */}
//       {mobileOpen && (
//         <div className="border-t border-gray-100 bg-white px-6 pb-6 lg:hidden">
//           <div className="flex flex-col">
//             <Link
//               href="https://charge.org.in/"
//               onClick={() => setMobileOpen(false)}
//               className="border-b border-gray-100 py-4 text-[17px]"
//             >
//               Home
//             </Link>

//             <Link
//               href="https://charge.org.in/about-us/"
//               onClick={() => setMobileOpen(false)}
//               className="border-b border-gray-100 py-4 text-[17px]"
//             >
//               About Us
//             </Link>

//             <Link
//               href="https://charge.org.in/how-it-works/"
//               onClick={() => setMobileOpen(false)}
//               className="border-b border-gray-100 py-4 text-[17px]"
//             >
//               How it works
//             </Link>

//             <Link
//               href="https://charge.org.in/community/"
//               onClick={() => setMobileOpen(false)}
//               className="border-b border-gray-100 py-4 text-[17px]"
//             >
//               Community
//             </Link>

//             {/* Mobile Learning */}
//             <button
//               type="button"
//               onClick={() => setLearningOpen(!learningOpen)}
//               className="flex items-center justify-between border-b border-gray-100 py-4 text-left text-[17px]"
//             >
//               Learning
//               <span>{learningOpen ? "⌃" : "⌄"}</span>
//             </button>

//             {learningOpen && (
//               <div className="bg-gray-50">
//                 <Link
//                   href="https://charge.org.in/courses/"
//                   onClick={() => setMobileOpen(false)}
//                   className="block px-5 py-3 text-[16px]"
//                 >
//                   Courses
//                 </Link>

//                 <Link
//                   href="https://charge.org.in/gatherings/"
//                   onClick={() => setMobileOpen(false)}
//                   className="block px-5 py-3 text-[16px]"
//                 >
//                   Gatherings
//                 </Link>

//                 <Link
//                   href="https://charge.org.in/resources/"
//                   onClick={() => setMobileOpen(false)}
//                   className="block px-5 py-3 text-[16px]"
//                 >
//                   Resources
//                 </Link>
//               </div>
//             )}

//             <Link
//               href="https://charge.org.in/insights/"
//               onClick={() => setMobileOpen(false)}
//               className="border-b border-gray-100 py-4 text-[17px]"
//             >
//               Insights
//             </Link>

//             <Link
//               href="https://charge.org.in/partner/"
//               onClick={() => setMobileOpen(false)}
//               className="border-b border-gray-100 py-4 text-[17px]"
//             >
//               Partner
//             </Link>

//             {/* Mobile Calculators */}
//             <button
//               type="button"
//               onClick={() => setCalculatorOpen(!calculatorOpen)}
//               className="flex items-center justify-between border-b border-gray-100 py-4 text-left text-[17px]"
//             >
//               Calculators
//               <span>{calculatorOpen ? "⌃" : "⌄"}</span>
//             </button>

//             {calculatorOpen && (
//               <div className="bg-gray-50">
//                 <Link
//                   href="/"
//                   onClick={() => setMobileOpen(false)}
//                   className="block px-5 py-3 text-[16px]"
//                 >
//                   Milling Calculators
//                 </Link>
//               </div>
//             )}

//             <Link
//               href="https://charge.org.in/contact-us/"
//               onClick={() => setMobileOpen(false)}
//               className="mt-5 rounded-[4px] bg-[#00643f] px-6 py-4 text-center text-[17px] text-white"
//             >
//               Contact Us
//             </Link>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }

// "use client";

// import Link from "next/link";
// import { useState } from "react";

// function DropdownArrow({ open }: { open: boolean }) {
//   return (
//     <span
//       className={`ml-1 inline-block h-[7px] w-[7px] rotate-45 border-b-[1.5px] border-r-[1.5px] border-[#171717] transition-transform duration-200 ${
//         open ? "-translate-y-[1px] rotate-[225deg]" : "-translate-y-[2px]"
//       }`}
//     />
//   );
// }

// export default function Navbar() {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [learningOpen, setLearningOpen] = useState(false);
//   const [calculatorOpen, setCalculatorOpen] = useState(false);

//   return (
//     <header className="w-full bg-white">
//       <div className="mx-auto flex min-h-[90px] w-full max-w-[1400px] items-center px-5 lg:px-6">
//         {/* Logo */}
//         <Link href="https://charge.org.in/" className="shrink-0">
//           <img
//             src="https://charge.org.in/wp-content/uploads/2026/02/cropped-CHARGE-LOGO-1024x310.png"
//             alt="CHARGE"
//             className="h-auto w-[170px] object-contain lg:w-[190px]"
//           />
//         </Link>

//         {/* Desktop Navigation */}
//         <nav className="ml-auto hidden items-center lg:flex">
//           <Link
//             href="https://charge.org.in/"
//             className="whitespace-nowrap px-[1px] py-[15px] text-[17px] text-[#171717] transition hover:text-[#00643f]"
//           >
//             Home
//           </Link>

//           <Link
//             href="https://charge.org.in/about-us/"
//             className="whitespace-nowrap px-[10px] py-[15px] text-[17px] text-[#171717] transition hover:text-[#00643f]"
//           >
//             About Us
//           </Link>

//           <Link
//             href="https://charge.org.in/how-it-works/"
//             className="whitespace-nowrap px-[10px] py-[15px] text-[17px] text-[#171717] transition hover:text-[#00643f]"
//           >
//             How it works
//           </Link>

//           <Link
//             href="https://charge.org.in/community/"
//             className="whitespace-nowrap px-[10px] py-[15px] text-[17px] text-[#171717] transition hover:text-[#00643f]"
//           >
//             Community
//           </Link>

//           {/* Learning */}
//           <div
//             className="relative"
//             onMouseEnter={() => setLearningOpen(true)}
//             onMouseLeave={() => setLearningOpen(false)}
//           >
//             <button
//               type="button"
//               onClick={() => setLearningOpen(!learningOpen)}
//               className="flex h-full items-center whitespace-nowrap px-[10px] py-[15px] text-[17px] text-[#171717] transition hover:text-[#00643f]"
//             >
//               Learning
//               <DropdownArrow open={learningOpen} />
//             </button>

//             {learningOpen && (
//               <div className="absolute left-0 top-full z-50 w-[220px] bg-white py-2 shadow-lg">
//                 <Link
//                   href="https://charge.org.in/courses/"
//                   className="block px-5 py-3 text-[15px] text-[#171717] transition hover:bg-gray-50 hover:text-[#00643f]"
//                 >
//                   Courses
//                 </Link>

//                 <Link
//                   href="https://charge.org.in/gatherings/"
//                   className="block px-5 py-3 text-[15px] text-[#171717] transition hover:bg-gray-50 hover:text-[#00643f]"
//                 >
//                   Gatherings
//                 </Link>

//                 <Link
//                   href="https://charge.org.in/resources/"
//                   className="block px-5 py-3 text-[15px] text-[#171717] transition hover:bg-gray-50 hover:text-[#00643f]"
//                 >
//                   Resources
//                 </Link>
//               </div>
//             )}
//           </div>

//           <Link
//             href="https://charge.org.in/insights/"
//             className="whitespace-nowrap px-[10px] py-[15px] text-[17px] text-[#171717] transition hover:text-[#00643f]"
//           >
//             Insights
//           </Link>

//           <Link
//             href="https://charge.org.in/partner/"
//             className="whitespace-nowrap px-[10px] py-[15px] text-[17px] text-[#171717] transition hover:text-[#00643f]"
//           >
//             Partner
//           </Link>

//           {/* Calculators */}
//           <div
//             className="relative"
//             onMouseEnter={() => setCalculatorOpen(true)}
//             onMouseLeave={() => setCalculatorOpen(false)}
//           >
//             <button
//               type="button"
//               onClick={() => setCalculatorOpen(!calculatorOpen)}
//               className="flex h-full items-center whitespace-nowrap px-[10px] py-[15px] text-[17px] text-[#171717] transition hover:text-[#00643f]"
//             >
//               Calculators
//               <DropdownArrow open={calculatorOpen} />
//             </button>

//             {calculatorOpen && (
//               <div className="absolute right-0 top-full z-50 w-[220px] bg-white py-2 shadow-lg">
//                 <Link
//                   href="/"
//                   className="block px-5 py-3 text-[15px] text-[#171717] transition hover:bg-gray-50 hover:text-[#00643f]"
//                 >
//                   Milling Calculators
//                 </Link>
//               </div>
//             )}
//           </div>

//           {/* Contact Us */}
//           <Link
//             href="https://charge.org.in/contact-us/"
//             className="ml-2 whitespace-nowrap rounded-[4px] bg-[#00643f] px-5 py-[12px] text-[17px] text-white transition hover:bg-[#005536]"
//           >
//             Contact Us
//           </Link>
//         </nav>

//         {/* Mobile Menu Button */}
//         <button
//           type="button"
//           aria-label="Toggle menu"
//           aria-expanded={mobileOpen}
//           onClick={() => setMobileOpen(!mobileOpen)}
//           className="ml-auto flex h-11 w-11 items-center justify-center rounded-md text-2xl text-[#00643f] lg:hidden"
//         >
//           {mobileOpen ? "✕" : "☰"}
//         </button>
//       </div>

//       {/* Mobile Navigation */}
//       {mobileOpen && (
//         <div className="border-t border-gray-100 bg-white px-6 pb-6 lg:hidden">
//           <div className="flex flex-col">
//             <Link
//               href="https://charge.org.in/"
//               onClick={() => setMobileOpen(false)}
//               className="border-b border-gray-100 py-4 text-[17px]"
//             >
//               Home
//             </Link>

//             <Link
//               href="https://charge.org.in/about-us/"
//               onClick={() => setMobileOpen(false)}
//               className="border-b border-gray-100 py-4 text-[17px]"
//             >
//               About Us
//             </Link>

//             <Link
//               href="https://charge.org.in/how-it-works/"
//               onClick={() => setMobileOpen(false)}
//               className="border-b border-gray-100 py-4 text-[17px]"
//             >
//               How it works
//             </Link>

//             <Link
//               href="https://charge.org.in/community/"
//               onClick={() => setMobileOpen(false)}
//               className="border-b border-gray-100 py-4 text-[17px]"
//             >
//               Community
//             </Link>

//             {/* Mobile Learning */}
//             <button
//               type="button"
//               onClick={() => setLearningOpen(!learningOpen)}
//               className="flex items-center justify-between border-b border-gray-100 py-4 text-left text-[17px]"
//             >
//               <span>Learning</span>
//               <DropdownArrow open={learningOpen} />
//             </button>

//             {learningOpen && (
//               <div className="bg-gray-50">
//                 <Link
//                   href="https://charge.org.in/courses/"
//                   onClick={() => setMobileOpen(false)}
//                   className="block px-5 py-3 text-[15px]"
//                 >
//                   Courses
//                 </Link>

//                 <Link
//                   href="https://charge.org.in/gatherings/"
//                   onClick={() => setMobileOpen(false)}
//                   className="block px-5 py-3 text-[15px]"
//                 >
//                   Gatherings
//                 </Link>

//                 <Link
//                   href="https://charge.org.in/resources/"
//                   onClick={() => setMobileOpen(false)}
//                   className="block px-5 py-3 text-[15px]"
//                 >
//                   Resources
//                 </Link>
//               </div>
//             )}

//             <Link
//               href="https://charge.org.in/insights/"
//               onClick={() => setMobileOpen(false)}
//               className="border-b border-gray-100 py-4 text-[17px]"
//             >
//               Insights
//             </Link>

//             <Link
//               href="https://charge.org.in/partner/"
//               onClick={() => setMobileOpen(false)}
//               className="border-b border-gray-100 py-4 text-[17px]"
//             >
//               Partner
//             </Link>

//             {/* Mobile Calculators */}
//             <button
//               type="button"
//               onClick={() => setCalculatorOpen(!calculatorOpen)}
//               className="flex items-center justify-between border-b border-gray-100 py-4 text-left text-[17px]"
//             >
//               <span>Calculators</span>
//               <DropdownArrow open={calculatorOpen} />
//             </button>

//             {calculatorOpen && (
//               <div className="bg-gray-50">
//                 <Link
//                   href="/"
//                   onClick={() => setMobileOpen(false)}
//                   className="block px-5 py-3 text-[15px]"
//                 >
//                   Milling Calculators
//                 </Link>
//               </div>
//             )}

//             {/* Contact Us */}
//             <Link
//               href="https://charge.org.in/contact-us/"
//               onClick={() => setMobileOpen(false)}
//               className="mt-5 rounded-[4px] bg-[#00643f] px-6 py-3 text-center text-[17px] text-white"
//             >
//               Contact Us
//             </Link>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }

"use client";

import Link from "next/link";
import { useState } from "react";

function DropdownArrow({ open }: { open: boolean }) {
  return (
    <span
      className={`ml-1 inline-block h-[7px] w-[7px] rotate-45 border-b-[1.5px] border-r-[1.5px] border-[#171717] transition-transform duration-200 ${
        open ? "-translate-y-[1px] rotate-[225deg]" : "-translate-y-[2px]"
      }`}
    />
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [learningOpen, setLearningOpen] = useState(false);
  const [calculatorOpen, setCalculatorOpen] = useState(false);

  return (
    <header className="w-full bg-white">
      <div className="mx-auto flex min-h-[96px] w-full max-w-[1400px] items-center px-5 lg:px-6">
        {/* Logo */}
        <Link href="https://charge.org.in/" className="shrink-0">
          <img
            src="https://charge.org.in/wp-content/uploads/2026/02/cropped-CHARGE-LOGO-1024x310.png"
            alt="CHARGE"
            className="h-auto w-[170px] object-contain lg:w-[180px] ml-[30px]"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-[4px] lg:ml-auto lg:flex">
          <Link
            href="https://charge.org.in/"
            className="whitespace-nowrap px-[11px] py-[15px] text-[17px] text-[#171717] transition hover:text-[#00643f]"
          >
            Home
          </Link>

          <Link
            href="https://charge.org.in/about-us/"
            className="whitespace-nowrap px-[11px] py-[15px] text-[17px] text-[#171717] transition hover:text-[#00643f]"
          >
            About Us
          </Link>

          <Link
            href="https://charge.org.in/how-it-works/"
            className="whitespace-nowrap px-[11px] py-[15px] text-[17px] text-[#171717] transition hover:text-[#00643f]"
          >
            How it works
          </Link>

          <Link
            href="https://charge.org.in/community/"
            className="whitespace-nowrap px-[11px] py-[15px] text-[17px] text-[#171717] transition hover:text-[#00643f]"
          >
            Community
          </Link>

          {/* Learning */}
          <div
            className="relative"
            onMouseEnter={() => setLearningOpen(true)}
            onMouseLeave={() => setLearningOpen(false)}
          >
            <button
              type="button"
              onClick={() => setLearningOpen(!learningOpen)}
              className="flex h-full items-center whitespace-nowrap px-[11px] py-[15px] text-[17px] text-[#171717] transition hover:text-[#00643f]"
            >
              Learning
              <DropdownArrow open={learningOpen} />
            </button>

            {learningOpen && (
              <div className="absolute left-0 top-full z-50 w-[220px] bg-white py-2 shadow-lg">
                <Link
                  href="https://charge.org.in/courses/"
                  className="block px-5 py-3 text-[15px] text-[#171717] transition hover:bg-gray-50 hover:text-[#00643f]"
                >
                  Courses
                </Link>

                <Link
                  href="https://charge.org.in/gatherings/"
                  className="block px-5 py-3 text-[15px] text-[#171717] transition hover:bg-gray-50 hover:text-[#00643f]"
                >
                  Gatherings
                </Link>

                <Link
                  href="https://charge.org.in/resources/"
                  className="block px-5 py-3 text-[15px] text-[#171717] transition hover:bg-gray-50 hover:text-[#00643f]"
                >
                  Resources
                </Link>
              </div>
            )}
          </div>

          <Link
            href="https://charge.org.in/insights/"
            className="whitespace-nowrap px-[11px] py-[15px] text-[17px] text-[#171717] transition hover:text-[#00643f]"
          >
            Insights
          </Link>

          <Link
            href="https://charge.org.in/partner/"
            className="whitespace-nowrap px-[11px] py-[15px] text-[17px] text-[#171717] transition hover:text-[#00643f]"
          >
            Partner
          </Link>

          {/* Calculators */}
          <div
            className="relative"
            onMouseEnter={() => setCalculatorOpen(true)}
            onMouseLeave={() => setCalculatorOpen(false)}
          >
            <button
              type="button"
              onClick={() => setCalculatorOpen(!calculatorOpen)}
              className="flex h-full items-center whitespace-nowrap px-[11px] py-[15px] text-[17px] text-[#171717] transition hover:text-[#00643f]"
            >
              Calculators
              <DropdownArrow open={calculatorOpen} />
            </button>

            {calculatorOpen && (
              <div className="absolute right-0 top-full z-50 w-[220px] bg-white py-2 shadow-lg">
                <Link
                  href="/"
                  className="block px-5 py-3 text-[15px] text-[#171717] transition hover:bg-gray-50 hover:text-[#00643f]"
                >
                  Milling Calculators
                </Link>
              </div>
            )}
          </div>

          {/* Contact Us */}
          <Link
            href="https://charge.org.in/contact-us/"
            className="ml-2 whitespace-nowrap rounded-[4px] bg-[#00643f] px-5 py-[12px] text-[17px] text-white transition hover:bg-[#005536]"
          >
            Contact Us
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
          className="ml-auto flex h-11 w-11 items-center justify-center rounded-md text-2xl text-[#00643f] lg:hidden"
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="border-t border-gray-100 bg-white px-6 pb-6 lg:hidden">
          <div className="flex flex-col">
            <Link
              href="https://charge.org.in/"
              onClick={() => setMobileOpen(false)}
              className="border-b border-gray-100 py-4 text-[17px]"
            >
              Home
            </Link>

            <Link
              href="https://charge.org.in/about-us/"
              onClick={() => setMobileOpen(false)}
              className="border-b border-gray-100 py-4 text-[17px]"
            >
              About Us
            </Link>

            <Link
              href="https://charge.org.in/how-it-works/"
              onClick={() => setMobileOpen(false)}
              className="border-b border-gray-100 py-4 text-[17px]"
            >
              How it works
            </Link>

            <Link
              href="https://charge.org.in/community/"
              onClick={() => setMobileOpen(false)}
              className="border-b border-gray-100 py-4 text-[17px]"
            >
              Community
            </Link>

            {/* Mobile Learning */}
            <button
              type="button"
              onClick={() => setLearningOpen(!learningOpen)}
              className="flex items-center justify-between border-b border-gray-100 py-4 text-left text-[17px]"
            >
              <span>Learning</span>
              <DropdownArrow open={learningOpen} />
            </button>

            {learningOpen && (
              <div className="bg-gray-50">
                <Link
                  href="https://charge.org.in/courses/"
                  onClick={() => setMobileOpen(false)}
                  className="block px-5 py-3 text-[15px]"
                >
                  Courses
                </Link>

                <Link
                  href="https://charge.org.in/gatherings/"
                  onClick={() => setMobileOpen(false)}
                  className="block px-5 py-3 text-[15px]"
                >
                  Gatherings
                </Link>

                <Link
                  href="https://charge.org.in/resources/"
                  onClick={() => setMobileOpen(false)}
                  className="block px-5 py-3 text-[15px]"
                >
                  Resources
                </Link>
              </div>
            )}

            <Link
              href="https://charge.org.in/insights/"
              onClick={() => setMobileOpen(false)}
              className="border-b border-gray-100 py-4 text-[17px]"
            >
              Insights
            </Link>

            <Link
              href="https://charge.org.in/partner/"
              onClick={() => setMobileOpen(false)}
              className="border-b border-gray-100 py-4 text-[17px]"
            >
              Partner
            </Link>

            {/* Mobile Calculators */}
            <button
              type="button"
              onClick={() => setCalculatorOpen(!calculatorOpen)}
              className="flex items-center justify-between border-b border-gray-100 py-4 text-left text-[17px]"
            >
              <span>Calculators</span>
              <DropdownArrow open={calculatorOpen} />
            </button>

            {calculatorOpen && (
              <div className="bg-gray-50">
                <Link
                  href="/"
                  onClick={() => setMobileOpen(false)}
                  className="block px-5 py-3 text-[15px]"
                >
                  Milling Calculators
                </Link>
              </div>
            )}

            {/* Contact Us */}
            <Link
              href="https://charge.org.in/contact-us/"
              onClick={() => setMobileOpen(false)}
              className="mt-5 rounded-[4px] bg-[#00643f] px-6 py-3 text-center text-[17px] text-white"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
