"use client";

const impactData = [
  {
    title: "Advancing Islamic Faith",
    description:
      "Strengthens the spiritual well-being of the community, encourages moral development, and fosters a sense of unity through shared religious practices.",
    backgroundImage: "/assets/hero-section-image-3.avif",
  },
  {
    title: "Providing Recreation",
    description:
      "Improves mental and physical health, reduces social isolation, and creates safe spaces where families and individuals can positively engage.",
    backgroundImage: "/assets/hero-section-image-6.avif",
  },
  {
    title: "Enhancing General Education",
    description:
      "Expands learning opportunities, supports personal and professional growth, and contributes to a more informed and empowered society.",
    backgroundImage: "/assets/hero-section-image-7.avif",
  },
  {
    title: "Providing Relief and Aid",
    description:
      "Reduces hardship for vulnerable individuals, improves overall community welfare, and ensures dignity and support for people facing difficult circumstances.",
    backgroundImage: "/assets/hero-section-image-8.avif",
  },
];

export default function ImpactSection() {
  return (
    <section className="relative bg-[#f5f5f5] min-h-screen py-16 px-4 md:px-8 lg:px-16 shadow-[0_-20px_60px_rgba(0,0,0,0.15)] -mt-screen" style={{ zIndex: 2 }}>
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-semibold mb-12 md:mb-16">
          <span className="text-gray-700">Our </span>
          <span className="text-blue-950 ">Impact</span>
          <span className="text-gray-700"> to Build a</span>
          <br />
          <span className="text-gray-700">Better Tomorrow</span>  
        </h2>

        {/* Impact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {impactData.map((item, index) => (
            <div
              key={index}
              className="relative rounded-lg p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
              style={{
                backgroundImage: `url('${item.backgroundImage}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Overlay for better text readability */}
              <div className="absolute inset-0 bg-black/50" />

              {/* Content */}
              <div className="relative z-10">
                {/* Title Badge */}
                <div className="inline-block mb-4">
                  <span className="bg-[#c4a35a] text-white font-semibold px-6 py-3 rounded-md text-base md:text-lg inline-block">
                    {item.title}
                  </span>
                </div>

                {/* Description */}
                <p className="text-white text-base md:text-lg leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}