import React from "react";

interface MonogramProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  showText?: boolean;
}

export const Monogram: React.FC<MonogramProps> = ({
  size = "md",
  className = "",
  showText = false,
}) => {
  const sizeMap = {
    sm: "w-8 h-8 text-xs",
    md: "w-10 h-10 text-sm",
    lg: "w-12 h-12 text-base",
  };

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <div
        className={`${sizeMap[size]} rounded-xl bg-navy text-white font-bold flex items-center justify-center tracking-tighter shadow-sm border border-navy-light/40 relative group-hover:scale-105 transition-transform duration-200 select-none overflow-hidden`}
        aria-hidden="true"
      >
        <span className="text-white">P</span>
        <span className="text-orange -ml-0.5">S</span>
        <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-orange rounded-full opacity-80" />
      </div>
      {showText && (
        <div className="flex flex-col text-left">
          <span className="font-extrabold tracking-tight text-navy text-base leading-tight">
            Pemba Sherpa
          </span>
          <span className="text-[11px] font-medium tracking-wide uppercase text-text-secondary">
            Frontend Developer
          </span>
        </div>
      )}
    </div>
  );
};

