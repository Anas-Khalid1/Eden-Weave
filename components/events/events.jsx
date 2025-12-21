

"use client"
import React, { useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import EventCard from './eventsCard';
import { PREVIOUS_EVENTS } from './constants';

// Inner component that uses useSearchParams
const EventsContent = () => {
  const searchParams = useSearchParams();

  // Handle scroll to event from URL hash
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 300);
    }
  }, [searchParams]);

  // Reverse to show newest events first
  const events = [...PREVIOUS_EVENTS].reverse();

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFBF7]">

      {/* Hero Section for Events */}
      <section className="relative pt-24 pb-16 px-6 md:px-12 text-center">
        <h1 className="text-4xl md:text-6xl font-serif text-[#2D2926] mb-8">Community Gatherings</h1>
      </section>

      {/* Events Grid */}
      <main className="container mx-auto px-6 md:px-12 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </main>


    </div>
  );
};

// Main component wrapped with Suspense
const Events = () => {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex flex-col bg-[#FDFBF7]">
        <section className="relative pt-24 pb-16 px-6 md:px-12 text-center">
          <h1 className="text-4xl md:text-6xl font-serif text-[#2D2926] mb-8">Community Gatherings</h1>
        </section>
        <main className="container mx-auto px-6 md:px-12 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="animate-pulse bg-stone-200 h-64 rounded-lg"></div>
            ))}
          </div>
        </main>
      </div>
    }>
      <EventsContent />
    </Suspense>
  );
};

export default Events;
