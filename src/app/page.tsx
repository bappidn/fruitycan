"use client";

import React, { useEffect } from "react";
import { Button } from "../../components/ui/button";
import { SocialGrid } from "../../components/common/SocialGrid";

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <SocialGrid />

      <section
        className={
          "hero-section min-h-[70vh] mt-12 py-20 px-4 bg-gradient-to-r from-green-200 to-blue-200 fade-in"
        }
      >
        <div className={"container mx-auto max-w-4xl text-center"}>
          <h1 className={"text-5xl md:text-6xl font-bold text-orange-500 mb-4"}>
            {"Welcome to FruityCan"}
          </h1>
          <h2 className={"text-2xl md:text-3xl text-gray-600 mb-6"}>
            {"A Refreshing Fusion of Nature"}
          </h2>
          <p className={"text-gray-600 text-lg mb-8 max-w-2xl mx-auto"}>
            {
              "We combine real fruit with super foods and natural herbs to craft blended juices that boost energy and Fruity Cans filled with fresh fruit in herbal tea, coconut water, or lightly sparkling botanical spritzers—no artificial additives, just pure refreshment."
            }
          </p>
          <div className={"flex justify-center gap-4"}>
            <Button variant="outline" className={"px-8 py-3 rounded-full"}>
              <a href={"/about"} className={"block"}>
                {"About Us"}
              </a>
            </Button>
            <Button variant="outline" className={"px-8 py-3 rounded-full"}>
              <a href={"/contact"} className={"block"}>
                {"Contact Us"}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
