"use client"; // enable useEffect in App Router :contentReference[oaicite:11]{index=11}

import { useEffect } from "react";
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
  }, []); // fade-in on scroll :contentReference[oaicite:12]{index=12}

  return (
    <>
      <SocialGrid />
      <section className="hero-section min-h-[70vh] mt-12 py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-orange-500 mb-4">
            Welcome to FruityCan
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-600 mb-6">
            Your ultimate refreshing beverage experience
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            FruityCan is a line of all-natural, fruit-infused drinks made for
            every season—bursting with flavor and packed with real fruit
            extracts. Follow us for new flavors, specials, and more!
          </p>
          <Button
            variant="default"
            className="px-8 py-3 rounded-full shadow-lg"
          >
            Explore Flavors
          </Button>
        </div>
      </section>
    </>
  );
}
