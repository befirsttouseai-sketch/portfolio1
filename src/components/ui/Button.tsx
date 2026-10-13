import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  href,
  isExternal = false,
  className = "",
  children,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange";

  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs font-semibold tracking-wide",
    md: "px-5 py-2.5 text-sm font-semibold tracking-wide",
    lg: "px-6 py-3.5 text-base font-semibold tracking-wide",
  };

  const variantStyles = {
    primary:
      "bg-orange text-white hover:bg-orange-hover shadow-sm hover:shadow active:scale-[0.98]",
    secondary:
      "bg-navy text-white hover:bg-navy-light shadow-sm hover:shadow active:scale-[0.98]",
    outline:
      "border border-border-subtle bg-white text-navy hover:bg-bg-light hover:border-slate-300 active:scale-[0.98]",
    ghost:
      "text-text-secondary hover:text-navy hover:bg-bg-light",
  };

  const combinedClass = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`.trim();

  if (href) {
    return (
      <a
        href={href}
        className={combinedClass}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClass} {...props}>
      {children}
    </button>
  );
};
