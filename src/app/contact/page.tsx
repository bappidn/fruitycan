"use client";
import React, { useState, useEffect } from "react";
import { SocialGrid } from "../../../components/common/SocialGrid";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thanks for contacting us, ${form.name}!`);
  };

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
          <h1 className="text-4xl font-bold text-orange-500 mb-6 text-center">
            Contact Us
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1">Name</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white w-full py-3 rounded-full text-lg font-semibold shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
