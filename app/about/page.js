"use client";

import { Header } from "@/components/header/header";
import Footer from "@/components/Footer/footer";
import { useState } from "react";
import { VolunteerModal } from "@/reusableComponents/volunteerForm";
import AboutHeroSection from "@/components/aboutSections/AboutHeroSection";
import AboutContentSection from "@/components/aboutSections/AboutContentSection";
import OurValuesSection from "@/components/aboutSections/OurValuesSection";
import GetInvolvedSection from "@/components/aboutSections/GetInvolvedSection";
import TrusteesSection from "@/components/aboutSections/TrusteesSection";

export default function AboutPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="min-h-screen relative">
      {/* Background image that extends behind header */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat -z-10"
        style={{
          backgroundImage: "url('/assets/hero-section-image-7.avif')",
          height: "100vh",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <Header />

      {/* Hero Section */}
      <AboutHeroSection />

      {/* Main Content */}
      <section className="relative bg-white py-16" style={{ zIndex: 3 }}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          {/* About Content Section */}
          <AboutContentSection />

          {/* Our Values Section */}
          <OurValuesSection />

          {/* Trustees Section */}
          <TrusteesSection />

          {/* Get Involved Section */}
          <GetInvolvedSection onVolunteerClick={() => setIsModalOpen(true)} />
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
