"use client";

const values = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
    title: "Growing Community",
    description:
      "More than 3,000 Muslims now live within the areas of Broughton, Brooklands, Glebe Farm, Eagles Farm, and Woburn Sands in one of the UK's fastest growing cities.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    title: "Local Access",
    description:
      "Existing mosques are concentrated in the city spine, often requiring 10+ minutes to drive. We support sustainable travel patterns and local community networks.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
    title: "Community Support",
    description:
      "MKEMC (Charity No. 1210287) serves the spiritual, social, and educational needs of Muslims in eastern Milton Keynes and surrounding areas.",
  },
];

export default function OurValuesSection() {
  return (
    <section className="bg-white py-16 px-4 md:px-8 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Side - Images with decorative wave */}
          <div className="relative flex-1 flex items-center justify-center">
            {/* Decorative Wave Pattern */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8 opacity-30">
              <svg
                width="60"
                height="300"
                viewBox="0 0 60 300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {[0, 40, 80, 120, 160, 200, 240].map((y, i) => (
                  <path
                    key={i}
                    d={`M5 ${y + 10} Q15 ${y} 25 ${y + 10} T45 ${y + 10} T55 ${
                      y + 10
                    }`}
                    stroke="#94a3b8"
                    strokeWidth="2"
                    fill="none"
                  />
                ))}
              </svg>
            </div>

            {/* Image Stack */}
            <div className="relative w-full max-w-md h-[400px]">
              {/* Back Image - Volunteer */}
              <div className="absolute bottom-0 left-0 w-48 md:w-56 h-64 md:h-72 rounded-lg overflow-hidden shadow-lg transform -rotate-6 z-10">
                <img
                  src="/assets/about-us-1.webp"
                  alt="Volunteer at community event"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Front Image - Smiling Person */}
              <div className="absolute top-0 right-0 w-56 md:w-64 h-72 md:h-80 rounded-lg overflow-hidden shadow-xl transform rotate-3 z-20">
                <img
                  src="/assets/about-us-2.webp"
                  alt="Community volunteer smiling"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="flex-1 max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
              Our Value
            </h2>

            <div className="space-y-8">
              {values.map((value, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <span className="text-gray-600">{value.icon}</span>
                    <h3 className="text-lg font-semibold text-amber-500">
                      {value.title}
                    </h3>
                  </div>
                  <p className="text-gray-500 leading-relaxed pl-9">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
