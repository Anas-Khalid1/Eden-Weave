
import React from 'react';
const EventCard= ({ event }) => {
  return (
    <div
      id={`event-${event.id}`}
      className="group relative flex flex-col md:flex-row bg-white overflow-hidden border border-stone-200 transition-all duration-500 hover:-translate-y-1"
    >
      {/* Unique Image Section with Arched Frame */}
      <div className="relative w-full md:w-2/5 min-h-[280px] overflow-hidden">
        <div className="absolute inset-0 bg-stone-900 overflow-hidden">
          <img 
            src={event.imageUrl} 
            alt={event.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90"
          />
        </div>
        {/* Floating Date Badge */}
        <div className="absolute top-4 left-4 z-10">
          <div className="bg-[#C5A566] text-white px-4 py-1 text-xs font-bold tracking-widest uppercase shadow-lg">
            {event.date}
          </div>
        </div>
        {/* Decorative Arch Overlay (CSS-based) */}
        <div className="absolute inset-0 pointer-events-none border-[12px] border-white/10 m-4 transition-all duration-500 group-hover:border-[#C5A566]/30"></div>
      </div>

      {/* Content Section */}
      <div className="flex-1 p-8 flex flex-col justify-center relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#C5A566]/5 rounded-bl-full pointer-events-none"></div>
        
        <div className="relative z-10">
          <h3 className="text-2xl md:text-3xl font-serif text-[#2D2926] mb-3 leading-tight group-hover:text-[#C5A566] transition-colors duration-300">
            {event.title}
          </h3>
          
          <div className="flex items-start gap-2 mb-4 text-[#C5A566]">
            <svg className="w-5 h-5 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-sm font-medium text-stone-600 leading-relaxed">
              {event.location}
            </span>
          </div>

          <p className="text-stone-500 text-sm leading-relaxed">
            {event.description}
          </p>

          {/* <div className="mt-6 flex items-center gap-2 group/btn cursor-pointer">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2D2926] group-hover/btn:text-[#C5A566] transition-colors">View Details</span>
            <div className="h-[1px] w-8 bg-[#C5A566] transition-all duration-300 group-hover/btn:w-16"></div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default EventCard;
