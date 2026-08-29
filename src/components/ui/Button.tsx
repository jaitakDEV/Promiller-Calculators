import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost";
}

export default function Button({
  variant = "ghost",
  className = "",
  children,
  ...rest
}: ButtonProps) {
  const base =
    "rounded-xl px-5 py-2.5 text-[13px] font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-40";
  const styles =
    variant === "primary"
      ? "bg-gradient-to-r from-amber-700 to-indigo-700 text-white shadow-sm hover:from-amber-800 hover:to-indigo-800"
      : "border border-stone-200 bg-white text-stone-700 hover:border-amber-700 hover:text-amber-800";

  return (
    <button className={`${base} ${styles} ${className}`} {...rest}>
      {children}
    </button>
  );
}
