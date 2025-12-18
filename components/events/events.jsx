

"use client"
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import EventCard from './eventsCard';
import { PREVIOUS_EVENTS, UPCOMING_EVENTS } from './constants';


const Events= () => {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState('upcoming');

  // Handle tab from URL query and scroll to event
  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab === 'previous' || tab === 'upcoming') {
      setActiveTab(tab);
    }

    // Scroll to event after a short delay to ensure DOM is ready
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

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFBF7]">

      {/* Hero Section for Events */}
      <section className="relative pt-24 pb-16 px-6 md:px-12 text-center">
        <h1 className="text-4xl md:text-6xl font-serif text-[#2D2926] mb-8">Community Gatherings</h1>
        
        {/* Toggle Switch */}
        <div className="flex justify-center mt-12">
          <div className="bg-stone-200/50 p-1.5 rounded-full flex gap-1">
            <button 
              onClick={() => setActiveTab('upcoming')}
              className={`px-8 py-3 rounded-full text-xs hover:cursor-pointer font-bold uppercase tracking-widest transition-all duration-300 ${
                activeTab === 'upcoming' 
                  ? 'bg-[#C5A566] text-white shadow-lg' 
                  : 'text-stone-500 hover:text-[#2D2926]'
              }`}
            >
              Upcoming
            </button>
            <button 
              onClick={() => setActiveTab('previous')}
              className={`px-8 py-3 rounded-full text-xs hover:cursor-pointer font-bold uppercase tracking-widest transition-all duration-300 ${
                activeTab === 'previous' 
                  ? 'bg-[#C5A566] text-white shadow-lg' 
                  : 'text-stone-500 hover:text-[#2D2926]'
              }`}
            >
              Previous
            </button>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <main className="container mx-auto px-6 md:px-12 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {(activeTab === 'upcoming' ? UPCOMING_EVENTS : PREVIOUS_EVENTS).map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        {activeTab === 'upcoming' && UPCOMING_EVENTS.length === 0 && (
          <div className="text-center py-20 text-stone-400 font-serif text-2xl italic">
            No upcoming events scheduled at this moment. Check back soon!
          </div>
        )}
      </main>


    </div>
  );
};

export default Events;
