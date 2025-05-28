"use client";
import React, { useEffect } from "react";
import { SocialGrid } from "../../../components/common/SocialGrid";

export default function Contact() {



  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(
          (en) => en.isIntersecting && en.target.classList.add("visible")
        );
      },
      { threshold: 0.1 }
    );
    document
      .querySelectorAll<HTMLElement>(".fade-in")
      .forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <SocialGrid />

      <section className="hero-section min-h-[70vh] mt-12 py-20 px-4 fade-in">
        <div className="container mx-auto max-w-2xl">
          <h1 className={"text-4xl font-bold text-orange-300 mb-6"}>
            {"Contact Us"}
          </h1>
          <p className={"text-lg mb-4"}>
            {
              "For inquiries, feedback, or partnership opportunities, please email us at:"
            }
          </p>
          <p className={"text-xl font-medium"}>
            <a
              href={"mailto:fruitycan.official@gmail.com"}
              className={"underline text-blue-500"}
            >
              {"fruitycan.official@gmail.com"}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
