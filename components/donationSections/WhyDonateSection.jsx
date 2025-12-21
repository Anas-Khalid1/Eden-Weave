"use client";

import { MapPin, Users, Calendar, BookOpen } from "lucide-react";

const donationReasons = [
  {
    icon: MapPin,
    title: "Find a permanent premises / location",
    description: "Help us establish a dedicated space for our community to gather, pray, and grow together.",
  },
  {
    icon: Users,
    title: "Help support on-going programmes like community prayers",
    description: "Your contribution keeps our regular prayer services and community programmes running smoothly.",
  },
  {
    icon: Calendar,
    title: "To provide support in community events",
    description: "Enable us to organize meaningful events that bring families together and strengthen our bonds.",
  },
  {
    icon: BookOpen,
    title: "Support our educational initiatives",
    description: "Fund Islamic education programmes for children and adults in our community.",
  },
];

export default function WhyDonateSection() {
  return (
    <section className="py-6 bg-gradient-to-b from-[#FDFBF7] to-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#C5A566] font-semibold uppercase tracking-widest text-sm mb-3">
            Make a Difference
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-6">
            Why Donate to Us?
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            We are dedicated to empowering our community through social programs,
            education, and charitable initiatives.
          </p>
        </div>

        {/* Donation Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {donationReasons.map((reason, index) => (
            <div
              key={index}
              className="group relative bg-white p-6 rounded-xl border border-stone-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 bg-[#C5A566]/10 rounded-full flex items-center justify-center group-hover:bg-[#C5A566] transition-colors duration-300">
                  <reason.icon className="w-6 h-6 text-[#C5A566] group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-[#1e3a5f] mb-2 group-hover:text-[#C5A566] transition-colors duration-300">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-[#C5A566]/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-[#1e3a5f]/5 px-6 py-3 rounded-full">
            <span className="text-[#1e3a5f] font-medium">
              Every contribution, big or small, makes a difference
            </span>
            <span className="text-[#C5A566] text-xl">&#9829;</span>
          </div>
        </div>
      </div>
    </section>
  );
}
