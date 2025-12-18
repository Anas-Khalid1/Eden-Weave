"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
const DonationSection = () => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}

          {/* Right Video/Image Section */}
          <div className="flex-1 w-full">
            <div className="relative rounded-lg overflow-hidden">
              {/* Video Embed - Replace the src with your actual video URL */}
              <Image
                src="/assets/donation-img.webp"
                width={600}
                height={600}
                alt="donation"
              />
            </div>
          </div>
          <div className="flex-1 space-y-6">
            {/* Subtitle */}
            <p className="text-gray-700 font-semibold tracking-widest uppercase text-sm">
              Giving is the greatest act of grace
            </p>

            {/* Title */}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-700">
              Donate us to help the community
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-lg leading-relaxed text-justify max-w-lg">
              Donating to an Islamic charity is a powerful way to fulfill your
              religious and moral duty while making a real difference in the
              lives of those in need. Your contribution helps provide essential
              support such as formulating a place of prayer and bringing the
              community together in accordance with the principles of compassion
              and generosity taught in Islam. Every donation, big or small, is
              an opportunity to earn ongoing rewards (Sadaqah Jariyah) and bring
              hope to those who need it most.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/donate">
              <button className="bg-[#c4a35a] hover:bg-[#90753a] hover:cursor-pointer text-white font-semibold px-8 py-3 rounded transition-colors duration-300 uppercase tracking-wide">
                Donate Now
              </button>
              </Link>
              {/* <button className="border-2 border-blue-950 text-blue-950 hover:bg-blue-950 hover:cursor-pointer hover:text-white font-semibold px-8 py-3 rounded transition-colors duration-300 uppercase tracking-wide">
                Volunteer
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;
