"use client";
import React, { ButtonHTMLAttributes, ReactNode } from "react";
import classNames from "classnames"; // utility for conditional classes :contentReference[oaicite:14]{index=14}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  variant?: "default" | "outline";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  variant = "default",
  ...props
}) => {
  const base = "text-lg font-semibold transition duration-200 ease-in-out";
  const variants = {
    default: "bg-orange-500 text-white hover:bg-orange-600",
    outline: "border border-orange-500 text-orange-500 hover:bg-orange-50",
  };
  return (
    <button
      className={classNames(base, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};
