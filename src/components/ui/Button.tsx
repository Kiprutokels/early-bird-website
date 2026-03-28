import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "gold" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-navy-500 hover:bg-navy-600 text-white shadow-lg hover:shadow-xl focus:ring-navy-400",
    secondary:
      "bg-blue-500 hover:bg-blue-600 text-white shadow-lg hover:shadow-xl focus:ring-blue-400",
    outline:
      "border-2 border-navy-500 text-navy-500 hover:bg-navy-500 hover:text-white focus:ring-navy-400",
    gold: "bg-gold-500 hover:bg-gold-600 text-navy-900 shadow-lg hover:shadow-xl focus:ring-gold-400 font-bold",
    ghost:
      "text-navy-600 hover:bg-navy-50 hover:text-navy-700 focus:ring-navy-300",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
