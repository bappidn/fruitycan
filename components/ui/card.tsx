"use client";
import React, { ReactNode } from "react";
import classNames from "classnames";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = "" }) => {
  return (
    <div className={classNames("bg-white rounded-lg shadow p-4", className)}>
      {children}
    </div>
  );
};
