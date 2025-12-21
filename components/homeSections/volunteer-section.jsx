"use client";

import React from "react";
import { useState } from "react";
import Image from "next/image";
import { VolunteerModal } from "@/reusableComponents/volunteerForm";
const VolunteerSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section id="volunteer-section" className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="flex-1 space-y-6">
            {/* Subtitle */}
            <p className="text-gray-700 font-semibold tracking-widest uppercase text-sm">
              Help Us to solve the problem
            </p>

            {/* Title */}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-700">
              We Need Your Help
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-lg leading-relaxed text-justify max-w-lg">
              Volunteers are the heart of our Islamic charity, helping us turn
              compassion into action. By giving your time and skills, you enable
              us to reach more people, organize impactful programs, and deliver
              essential services. Your support ensures that our mission of
              serving humanity and fulfilling the values of generosity and care
              in Islam continues to grow. Together, we can make a lasting
              difference.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              {/* <button className="bg-[#c4a35a] hover:bg-[#90753a] hover:cursor-pointer text-white font-semibold px-8 py-3 rounded transition-colors duration-300 uppercase tracking-wide">
                Donate Now
              </button> */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="border-2 border-blue-950 text-blue-950 hover:bg-blue-950 hover:cursor-pointer hover:text-white font-semibold px-8 py-3 rounded transition-colors duration-300 uppercase tracking-wide"
              >
                Volunteer
              </button>
            </div>
          </div>

          {/* Right Video/Image Section */}
          <div className="flex-1 w-full">
            <div className="relative rounded-lg overflow-hidden">
              {/* Video Embed - Replace the src with your actual video URL */}
              <Image
                src="/assets/volunteer.webp"
                width={600}
                height={600}
                alt="Volunteer"
              />
            </div>
          </div>
        </div>
      </div>
      <VolunteerModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default VolunteerSection;
