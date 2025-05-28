"use client";
import React from "react";
import Link from "next/link";
import { Card } from "../ui/card"; // adjust path as needed

const GRID_ITEMS = [
  { icon: "house-door", color: "text-orange-500", text: "Home", href: "/" },
  {
    icon: "instagram",
    color: "text-pink-500",
    text: "Instagram",
    href: "https://instagram.com/fruitycan",
    external: true,
  },
  {
    icon: "facebook",
    color: "text-blue-600",
    text: "Facebook",
    href: "https://facebook.com/fruitycan",
    external: true,
  },
  {
    icon: "youtube",
    color: "text-red-600",
    text: "YouTube",
    href: "https://youtube.com/fruitycan",
    external: true,
  },
];

export function SocialGrid() {
  return (
    <div className="flex items-center justify-center ">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full max-w-4xl">
        {GRID_ITEMS.map((item, index) => {
          const content = (
            <Card className="h-32 flex flex-col items-center justify-center p-6 text-center hover:shadow-md transition-all duration-300 rounded-xl border border-gray-100">
              <i className={`bi bi-${item.icon} text-4xl ${item.color}`}></i>
              <p className="mt-2 text-gray-800 font-medium">{item.text}</p>
            </Card>
          );

          return item.external ? (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              {content}
            </a>
          ) : (
            <Link key={index} href={item.href} className="block">
              {content}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
