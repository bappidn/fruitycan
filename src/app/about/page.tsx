/* eslint-disable @next/next/no-img-element */
"use client";

import React, { JSX, useEffect } from "react";
import { SocialGrid } from "../../../components/common/SocialGrid";

interface TeamMember {
  name: string;
  role: string;
  img: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Sarah Chen",
    role: "Founder & CEO",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&h=200&fit=crop",
  },
  {
    name: "Michael Reed",
    role: "Head of Product",
    img: "https://images.unsplash.com/photo-1537511446984-935f663eb1f4?q=80&w=200&h=200&fit=crop",
  },
  {
    name: "Lisa Thompson",
    role: "Tea Master",
    img: "https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=200&h=200&fit=crop",
  },
];

export default function About(): JSX.Element {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document
      .querySelectorAll<HTMLElement>(".fade-in")
      .forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <SocialGrid />

      {/* Hero Section stays a section */}
      <section className="hero-section min-h-[70vh] mt-12 py-20 px-4">
        {/* Gradient Hero */}
        <div className="gradient-bg py-20 fade-in">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              What Makes FruityCan Different
            </h1>
            <p className="text-xl md:text-2xl text-gray-700">
              Real fruit. Sealed freshness. Tea-infused magic.
            </p>
          </div>
        </div>

        {/* Our Story */}
        <div className="py-16   fade-in">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
              Born from a Love of Fresh Flavors
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              In 2024, FruityCan set out to reinvent canned drinks. We start
              with whole, sliced fruits—no powders, no concentrates—and seal
              them in our custom, air-tight cans. Then we infuse each can with a
              delicate tea blend, creating a perfect harmony of crisp fruit and
              smooth tea notes.
            </p>
          </div>
        </div>

        {/* What’s Inside */}
        <div className="py-16 bg-gray-50 fade-in">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="  rounded-lg shadow-md p-8 text-center">
                <div className="text-4xl mb-4">🍊</div>
                <h3 className="text-xl font-semibold mb-4">100% Real Fruit</h3>
                <p className="text-gray-600">
                  {
                    "Every can is packed with fresh-cut fruit slices—nature's original flavor booster."
                  }
                </p>
              </div>
              <div className="  rounded-lg shadow-md p-8 text-center">
                <div className="text-4xl mb-4">🍵</div>
                <h3 className="text-xl font-semibold mb-4">
                  Tea-Infusion Blend
                </h3>
                <p className="text-gray-600">
                  We craft our own green, black, and herbal tea blends for a
                  subtle, uplifting finish.
                </p>
              </div>
              <div className="  rounded-lg shadow-md p-8 text-center">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-xl font-semibold mb-4">
                  Sealed for Freshness
                </h3>
                <p className="text-gray-600">
                  Our proprietary can-sealing process locks in peak flavor for
                  weeks—no preservatives needed.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="py-16   fade-in">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
              The Faces Behind FruityCan
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Meet our passionate team of innovators who are dedicated to
              bringing you the freshest, most delicious beverages.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {TEAM_MEMBERS.map((member) => (
                <div
                  key={member.name}
                  className="team-member text-center hover:scale-105 transition-transform"
                >
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
