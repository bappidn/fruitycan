/* eslint-disable @next/next/no-img-element */
"use client";

import React, { JSX, useEffect } from "react";
import { SocialGrid } from "../../../components/common/SocialGrid";

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

      <section className={"hero-section min-h-[70vh] mt-12 py-20 px-4"}>
        <div className={"gradient-bg py-20 fade-in"}>
          <div className={"max-w-4xl mx-auto text-center px-4"}>
            <h1 className={"text-4xl md:text-5xl font-bold text-gray-800 mb-6"}>
              {"What Makes FruityCan Different"}
            </h1>
            <p className={"text-xl md:text-2xl text-gray-700"}>
              {"Real fruit. Sealed freshness. Tea-infused magic."}
            </p>
          </div>
        </div>

        <div className={"py-16 fade-in"}>
          <div className={"max-w-4xl mx-auto px-4"}>
            <h2 className={"text-3xl font-bold text-center text-gray-800 mb-8"}>
              {"Born from a Love of Fresh Flavors"}
            </h2>
            <p className={"text-lg text-gray-600 leading-relaxed"}>
              {
                "In 2024, FruityCan set out to reinvent canned drinks. We start with whole, sliced fruits—no powders, no concentrates—and seal them in our custom, air-tight cans. Then we infuse each can with a delicate tea blend, creating a perfect harmony of crisp fruit and smooth tea notes."
              }
            </p>
          </div>
        </div>

        <div className={"py-16 bg-gray-50 fade-in"}>
          <div className={"max-w-6xl mx-auto px-4"}>
            <div className={"grid grid-cols-1 md:grid-cols-3 gap-8"}>
              <div className={"rounded-lg shadow-md p-8 text-center"}>
                <div className={"text-4xl mb-4"}>🍊</div>
                <h3 className={"text-xl font-semibold mb-4"}>
                  {"100% Real Fruit"}
                </h3>
                <p className={"text-gray-600"}>
                  {
                    "Every can is packed with fresh-cut fruit slices—nature's original flavor booster."
                  }
                </p>
              </div>
              <div className={"rounded-lg shadow-md p-8 text-center"}>
                <div className={"text-4xl mb-4"}>🍵</div>
                <h3 className={"text-xl font-semibold mb-4"}>
                  {"Tea-Infusion Blend"}
                </h3>
                <p className={"text-gray-600"}>
                  {
                    "We craft our own green, black, and herbal tea blends for a subtle, uplifting finish."
                  }
                </p>
              </div>
              <div className={"rounded-lg shadow-md p-8 text-center"}>
                <div className={"text-4xl mb-4"}>🔒</div>
                <h3 className={"text-xl font-semibold mb-4"}>
                  {"Sealed for Freshness"}
                </h3>
                <p className={"text-gray-600"}>
                  {
                    "Our proprietary can-sealing process locks in peak flavor for weeks—no preservatives needed."
                  }
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={"py-16 fade-in"}>
          <div className={"max-w-4xl mx-auto px-4"}>
            <h2 className={"text-3xl font-bold text-center text-gray-800 mb-8"}>
              {"Our Offerings"}
            </h2>
            <div className={"space-y-6 text-lg text-gray-600 leading-relaxed"}>
              <p>
                {
                  "Blended Juices: A vibrant fusion of fresh fruits, superfoods, and natural herbs. Our blended juices boost your energy, support your immune system, and aid digestion—every sip is crafted without artificial additives."
                }
              </p>
              <p>
                {
                  "Fruity Cans: On-the-go drinks filled with real fruit pieces suspended in refreshing bases like herbal tea, coconut water, or lightly sparkling botanical spritzers. Perfect for a quick, healthy pick-me-up anytime."
                }
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
