// "use client";

// import { useLang } from "./LanguageProvider";
// import type { DictKey } from "@/lib/i18n";

// const STEP_KEYS: DictKey[] = ["step1", "step2", "step3", "step4", "step5"];

// export default function Stepper({
//   current,
//   onChange,
// }: {
//   current: number;
//   onChange: (n: number) => void;
// }) {
//   const { t } = useLang();

//   return (
//     <nav aria-label="Calculator steps" className="relative mb-7 mt-2">
//       <div className="absolute left-[6%] right-[6%] top-[15px] h-[2px] bg-stone-200" />
//       <div className="relative flex items-start justify-between gap-1">
//         {STEP_KEYS.map((key, i) => {
//           const n = i + 1;
//           const active = n === current;
//           const done = n < current;
//           return (
//             <button
//               key={key}
//               type="button"
//               onClick={() => onChange(n)}
//               aria-current={active ? "step" : undefined}
//               className="flex flex-1 flex-col items-center gap-1.5 bg-transparent px-0.5 py-1"
//             >
//               <span
//                 className={`flex h-[30px] w-[30px] items-center justify-center rounded-full border-2 font-mono text-[13px] font-bold transition-all ${
//                   active
//                     ? "border-transparent bg-gradient-to-r from-amber-700 to-indigo-700 text-white ring-4 ring-indigo-700/15"
//                     : done
//                       ? "border-amber-700 bg-amber-700 text-white"
//                       : "border-stone-200 bg-white text-stone-500"
//                 }`}
//               >
//                 {n}
//               </span>
//               <span
//                 className={`hidden max-w-[90px] text-center text-[10.5px] font-bold leading-tight sm:block ${
//                   active ? "text-stone-900" : "text-stone-500"
//                 }`}
//               >
//                 {t(key)}
//               </span>
//             </button>
//           );
//         })}
//       </div>
//     </nav>
//   );
// }

"use client";

import { useLang } from "./LanguageProvider";
import type { DictKey } from "@/lib/i18n";

const STEP_KEYS: DictKey[] = ["step1", "step2", "step3", "step4", "step5"];

export default function Stepper({
  current,
  onChange,
}: {
  current: number;
  onChange: (n: number) => void;
}) {
  const { t } = useLang();

  const progress = ((current - 1) / (STEP_KEYS.length - 1)) * 100;

  return (
    <nav aria-label="Calculator steps" className="relative mb-8 mt-3 px-1">
      {/* Progress Track */}
      <div className="absolute left-[10%] right-[10%] top-[18px] h-[3px] rounded-full bg-stone-200">
        <div
          className="h-full rounded-full bg-[#e17f27] transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="relative flex items-start justify-between">
        {STEP_KEYS.map((key, i) => {
          const n = i + 1;
          const active = n === current;
          const done = n < current;

          return (
            <button
              key={key}
              type="button"
              onClick={() => onChange(n)}
              aria-current={active ? "step" : undefined}
              className="group flex flex-1 flex-col items-center gap-2 bg-transparent px-1 py-1 outline-none"
            >
              {/* Step Circle */}
              <span
                className={`relative z-10 flex h-9 w-9 items-center justify-center rounded-full border-2 text-[13px] font-semibold transition-all duration-300 ${
                  active
                    ? "border-[#e17f27] bg-[#e17f27] text-white shadow-lg shadow-orange-500/20 ring-4 ring-orange-100 scale-110"
                    : done
                      ? "border-[#e17f27] bg-[#e17f27] text-white shadow-md shadow-orange-500/20"
                      : "border-stone-200 bg-white text-stone-400 group-hover:border-[#e17f27] group-hover:text-[#e17f27]"
                }`}
              >
                {done ? (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    className="h-4 w-4"
                  >
                    <path
                      d="M5 12l4 4L19 6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  n
                )}
              </span>

              {/* Step Label */}
              <span
                className={`hidden max-w-[100px] text-center text-[11px] font-semibold leading-tight transition-colors sm:block ${
                  active
                    ? "text-[#e17f27]"
                    : done
                      ? "text-[#c96b1d]"
                      : "text-stone-400 group-hover:text-[#e17f27]"
                }`}
              >
                {t(key)}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
