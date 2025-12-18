"use client";

import React from "react";
import { Clock, MapPin } from "lucide-react";
import Link from "next/link";
import { UPCOMING_EVENTS, PREVIOUS_EVENTS } from "@/components/events/constants";

const UpcomingEvents = () => {
  // Get the first upcoming event as featured
  const featuredEvent = UPCOMING_EVENTS[0] || {
    day: "01",
    month: "JAN",
    title: "No Upcoming Events",
    startTime: "TBD",
    endTime: "TBD",
    location: "TBD",
  };

  // Show previous events on the right side (up to 3, most recent first)
  const sideEvents = [...PREVIOUS_EVENTS].reverse().slice(0, 3);

  return (
    <section
      className="relative min-h-[700px] w-full bg-cover bg-center bg-no-repeat"
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

        {/* Events Container */}
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left - Featured Event with Image */}
            <div className="lg:w-[55%]">
              <Link href={`/events?tab=upcoming#event-${featuredEvent.id}`} className="block relative h-[400px] lg:h-[420px] rounded-sm overflow-hidden group">
                {/* Event Image - Using original static image */}
                <img
                  src="/assets/hero-section-image-6.avif"
                  alt="Upcoming Event"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Upcoming Event Label */}
                <div className="absolute top-4 left-4">
                  <span className="bg-[#c4a35a] text-white px-4 py-2 text-sm font-semibold uppercase tracking-wider rounded">
                    Upcoming Event
                  </span>
                </div>

                {/* Bottom Overlay with Event Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent pt-20 pb-6 px-6">
                  <div className="flex items-start gap-4">
                    {/* Date */}
                    <div className="text-center">
                      <span className="text-4xl md:text-5xl font-bold text-white leading-none">
                        {featuredEvent.day}
                      </span>
                      <p className="text-[#f2ca75] font-semibold text-sm mt-1">
                        {featuredEvent.month}
                      </p>
                    </div>

                    {/* Event Details */}
                    <div className="flex-1">
                      <h3 className="text-white font-bold text-lg md:text-xl uppercase tracking-wide">
                        {featuredEvent.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 mt-3 text-white text-sm">
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-4 h-4 text-gray-300" />
                          <span>
                            {featuredEvent.startTime} - {featuredEvent.endTime}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-4 h-4 text-gray-300" />
                          <span>{featuredEvent.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Right - Event List */}
            <div className="lg:w-[45%] flex flex-col justify-between gap-4">
              {sideEvents.map((event, index) => (
                <Link
                  href={`/events?tab=previous#event-${event.id}`}
                  key={event.id || index}
                  className="flex items-start gap-5 p-4 hover:bg-white/5 transition-colors duration-300 rounded cursor-pointer"
                >
                  {/* Date */}
                  <div className="text-center min-w-[50px]">
                    <span className="text-3xl md:text-4xl font-bold text-white leading-none">
                      {event.day}
                    </span>
                    <p className="text-[#f2ca75] font-semibold text-sm mt-1">
                      {event.month}
                    </p>
                    {/* Green underline */}
                    <div className="w-8 h-0.5 bg-[#c4a35a] mt-2 mx-auto" />
                  </div>

                  {/* Event Details */}
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-base md:text-lg uppercase tracking-wide leading-tight">
                      {event.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 mt-3 text-gray-300 text-sm">
                      
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-gray-300" />
                        <span>{event.location}</span>
                      </div>
                        <div className="flex items-center gap-1.5">
                        
                        <span className="line-clamp-1">{event.description}</span>
                      </div>

                    </div>
                  </div>
                </Link>
              ))}
            </div>
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