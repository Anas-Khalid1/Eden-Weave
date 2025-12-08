
"use client"
import { Header } from "@/components/header/header";
import Footer from "@/components/Footer/footer";
import Link from "next/link";
import { useState } from "react";
import { VolunteerModal } from "@/reusableComponents/volunteerForm";
export default function AboutPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
  return (
    <main className="min-h-screen relative">
      {/* Background image that extends behind header */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat -z-10"
        style={{
          backgroundImage: "url('/assets/hero-section-image-4.avif')",
          height: "100vh",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-4 pt-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About Us
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Inspiring Faith, Strengthening Community
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative bg-white py-16" style={{ zIndex: 3 }}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          {/* Mission Section with Video */}
          <div className="items-center gap-8 lg:gap-16 mb-20">
            {/* Text Content */}
            <div className="w-full space-y-6">
              <div className="w-8 h-0.5 bg-amber-600" />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
                About us
              </h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                Milton Keynes is one of the fastest growing cities in the UK.
                Much of this growth has been accommodated on the peripheries of
                the city, with a particular focus on strategic land allocations
                and expansions located within the east and north of the city.{" "}
              </p>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                More than 3,000 Muslims now live within the areas of Broughton,
                Brooklands, Glebe Farm, Eagles Farm, and Woburn Sands. Although
                Milton Keynes is not short of mosques and Islamic centres, these
                facilities are concentrated within the spine of the city and are
                therefore distant from the new housing developments on the edge
                of the city. Increasing traffic and congestion means that it
                often takes more than 10 minutes to drive to the nearest mosque.
                While travel times and distances are not necessarily an obstacle
                for many, this does not support sustainable patterns of travel
                or the promotion of local community networks.{" "}
              </p>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                Responding to this context, Eden Weave Foundation registered
                under Milton Keynes East Muslim Community (MKEMC) has been
                established. MKEMC is a registered charity (no. 1210287) and
                seeks to primarily serve the spiritual, social, and education
                needs of the Muslims located with the eastern suburbs of Milton
                Keynes and surrounding areas.
              </p>
            </div>
          </div>

          {/* Our Values Section */}
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
                          d={`M5 ${y + 10} Q15 ${y} 25 ${y + 10} T45 ${
                            y + 10
                          } T55 ${y + 10}`}
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

          {/* What We Do Section */}
          {/* <div className="mb-20">
            <div className="text-center mb-12">
              <div className="w-8 h-0.5 bg-amber-600 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                What We Do
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Educational Programs",
                  description: "We offer Quran classes, Islamic studies, and various educational workshops to enrich knowledge and understanding.",
                  features: ["Quran Classes", "Islamic Studies", "Youth Programs", "Adult Education"]
                },
                {
                  title: "Community Services",
                  description: "Supporting community members through various services including prayer facilities and social activities.",
                  features: ["Friday Prayers", "Community Events", "Social Gatherings", "Counseling Services"]
                },
                {
                  title: "Charitable Activities",
                  description: "Alleviating poverty and supporting those in need through various charitable initiatives and programs.",
                  features: ["Food Distribution", "Financial Aid", "Emergency Support", "Zakat Distribution"]
                },
                {
                  title: "Recreational Activities",
                  description: "Organizing events and activities that bring the community together in a positive environment.",
                  features: ["Sports Events", "Family Days", "Cultural Programs", "Youth Activities"]
                }
              ].map((program, index) => (
                <div key={index} className="bg-white border border-gray-200 p-8 rounded-lg hover:border-amber-600 transition-colors">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{program.title}</h3>
                  <p className="text-gray-600 mb-6">{program.description}</p>
                  <ul className="space-y-2">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <span className="text-amber-600 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div> */}

          {/* Our Impact Section */}
          {/* <div className="bg-amber-500 -mx-4 md:-mx-8 lg:-mx-16 px-4  md:px-8 lg:px-16 py-16">
            <div className="text-center mb-12">
              <div className="w-8 h-0.5 bg-amber-600 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                Our Impact
              </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { number: "500+", label: "Community Members" },
                { number: "50+", label: "Programs Annually" },
                { number: "100+", label: "Families Supported" },
                { number: "10+", label: "Years of Service" }
              ].map((stat, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-4xl font-bold text-amber-600 mb-2">{stat.number}</div>
                  <div className="text-gray-700 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div> */}

          {/* Get Involved Section */}
          <div className="mt-20 text-center p-3 md:p-10 lg:p-28 bg-gray-200">
            <div className="w-8 h-0.5 bg-amber-600 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Get Involved
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Join us in making a difference in our community. Whether through
              volunteering, donations, or participation in our programs, every
              contribution matters.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-700 transition-colors"
              >
                Contact Us
              </Link>
              <button
                onClick={() => setIsModalOpen(true)}
                className="border-2 border-blue-950 hover:cursor-pointer hover:bg-blue-950 hover:border-blue-950 text-blue-950 hover:text-white px-8 py-4  font-semibold tracking-wider transition-colors"
              >
                Become a Volunteer
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="relative bg-white pt-5" style={{ zIndex: 3 }}>
        <Footer />
      </section>
      <VolunteerModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </main>
  );
}
