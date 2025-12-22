"use client";

const prayerServices = [
  {
    id: "juma",
    title: "Jumu'ah Prayer",
    day: "Every Friday",
    location:
      "Wavendon Community Hub, Dankworth Way, Glebe Farm, Wavendon, Milton Keynes MK17 8ZN",
    description:
      "Join us every Friday for Jumu'ah prayer, the most important weekly gathering in Islam. The service includes a sermon (Khutbah) followed by the congregational prayer, fostering spiritual growth and community unity.",
    imageUrl: "/gallery/gallery-img-1.webp",
  },
  {
    id: "isha",
    title: "Isha Prayer",
    day: "Every Day",
    location:
      "Glebe Farm Community Hub, Glebe Farm School, MK17 8XY Milton Keynes",
    description:
      "Join us daily for Isha prayer, the night prayer that marks the end of the day's obligatory prayers. This is a wonderful opportunity to connect with the community and strengthen your faith through daily worship.",
    imageUrl: "/gallery/gallery-img-9.webp",
  },
];

const ServiceCard = ({ service }) => {
  return (
    <div
      id={`service-${service.id}`}
      className="group relative flex flex-col lg:flex-row bg-white overflow-hidden border border-stone-200 transition-all duration-500 hover:-translate-y-1"
    >
      {/* Image Section */}
      <div className="relative w-full lg:w-1/2 min-h-[300px] overflow-hidden">
        <div className="absolute inset-0 bg-stone-900 overflow-hidden">
          <img
            src={service.imageUrl}
            alt={service.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90"
          />
        </div>
        {/* Day Badge */}
        <div className="absolute top-4 left-4 z-10">
          <div className="bg-[#C5A566] text-white px-4 py-1 text-xs font-bold tracking-widest uppercase shadow-lg">
            {service.day}
          </div>
        </div>
        {/* Decorative Overlay */}
        <div className="absolute inset-0 pointer-events-none border-[12px] border-white/10 m-4 transition-all duration-500 group-hover:border-[#C5A566]/30"></div>
      </div>

      {/* Content Section */}
      <div className="flex-1 p-8 flex flex-col justify-center relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#C5A566]/5 rounded-bl-full pointer-events-none"></div>

        <div className="relative z-10">
          <h3 className="text-2xl md:text-3xl font-serif text-[#2D2926] mb-3 leading-tight group-hover:text-[#C5A566] transition-colors duration-300">
            {service.title}
          </h3>

          <div className="flex items-start gap-2 mb-4 text-[#C5A566]">
            <svg
              className="w-5 h-5 mt-1 shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span className="text-sm font-medium text-stone-600 leading-relaxed">
              {service.location}
            </span>
          </div>

          <p className="text-stone-500 text-sm leading-relaxed">
            {service.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default function PrayerServicesSection() {
  return (
    <section className="py-16">
      {/* Services - One per row */}
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col gap-10">
          {prayerServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
