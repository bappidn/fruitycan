"use client";

import Image from "next/image";

const teamMembers = [
  {
    name: "Sarah Chen",
    role: "Founder & CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&h=200&fit=crop",
    instagramUrl: "https://www.instagram.com/sarahchen",
  },
  {
    name: "Michael Reed",
    role: "Head of Product",
    imageUrl:
      "https://images.unsplash.com/photo-1537511446984-935f663eb1f4?q=80&w=200&h=200&fit=crop",
    instagramUrl: "https://www.instagram.com/michaelreed",
  },
  {
    name: "Lisa Thompson",
    role: "Tea Master",
    imageUrl:
      "https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=200&h=200&fit=crop",
    instagramUrl: "https://www.instagram.com/lisathompson",
  },
];

export default function TeamSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          The Faces Behind FruityCan
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Meet our passionate team of innovators who are dedicated to bringing
          you the freshest, most delicious beverages.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <a
              key={member.name}
              href={member.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="team-member text-center hover:shadow-lg transition-shadow duration-300"
            >
              <Image
                src={member.imageUrl}
                alt={member.name}
                width={128}
                height={128}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
