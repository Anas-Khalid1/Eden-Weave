"use client";

import React from "react";
import { MapPin } from "lucide-react";
import Link from "next/link";
import { PREVIOUS_EVENTS } from "@/components/events/constants";

const UpcomingEvents = () => {
  // Show 4 most recent events (reversed to get newest first)
  const events = [...PREVIOUS_EVENTS].reverse().slice(0, 4);

  return (
    <section
      className="relative min-h-[600px] w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/assets/hero-section-image-3.avif')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 py-16 px-4 md:px-8 lg:px-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Our Events
          </h2>
        </div>

        {/* Events Grid - 2x2 */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {events.map((event, index) => (
              <Link
                href={`/events#event-${event.id}`}
                key={event.id || index}
                className="flex items-start gap-5 p-5 bg-black/30 hover:bg-black/50 transition-colors duration-300 rounded-lg cursor-pointer"
              >
                {/* Date */}
                <div className="text-center min-w-[60px]">
                  <span className="text-3xl md:text-4xl font-bold text-white leading-none">
                    {event.day}
                  </span>
                  <p className="text-[#f2ca75] font-semibold text-sm mt-1">
                    {event.month}
                  </p>
                  {/* Gold underline */}
                  <div className="w-8 h-0.5 bg-[#c4a35a] mt-2 mx-auto" />
                </div>

                {/* Event Details */}
                <div className="flex-1">
                  <h3 className="text-white font-bold text-base md:text-lg uppercase tracking-wide leading-tight">
                    {event.title}
                  </h3>
                  <div className="flex flex-col gap-2 mt-3 text-gray-300 text-sm">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-gray-300 flex-shrink-0" />
                      <span className="line-clamp-1">{event.location}</span>
                    </div>
                    <p className="line-clamp-2 text-gray-400">
                      {event.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* View All Events Button */}
          <div className="flex justify-center mt-10">
            <Link
              href="/events"
              className="border-2 border-[#fcd88a] text-[#fcd88a] hover:bg-[#fcd88a] hover:cursor-pointer hover:text-white font-semibold px-8 py-3 rounded transition-colors duration-300 uppercase tracking-wide"
            >
              View All Events
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;