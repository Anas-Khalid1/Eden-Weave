"use client";

import { useState } from "react";
import { Header } from "@/components/header/header";
import Footer from "@/components/Footer/footer";
import { VolunteerModal } from "@/reusableComponents/volunteerForm";
import DonateHeroSection from "@/components/donationSections/DonateHeroSection";
import BankTransferSection from "@/components/donationSections/BankTransferSection";
import OnlineDonationSection from "@/components/donationSections/OnlineDonationSection";
import DonateOptionsSection from "@/components/donationSections/DonateOptionsSection";

export default function DonatePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="min-h-screen relative">
      {/* Background image that extends behind header */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat -z-10"
        style={{
          backgroundImage: "url('/assets/about-us-hero-section.avif')",
          height: "100vh",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <Header />

      {/* Hero Section */}
      <DonateHeroSection />

      {/* Main Content */}
      <section className="relative bg-white py-16" style={{ zIndex: 3 }}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="w-8 h-0.5 bg-amber-600 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Ways to Donate
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Your generous donation helps us continue our mission to serve the
              community. Choose one of the methods below to contribute.
            </p>
          </div>

          {/* Donation Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <BankTransferSection />
            <OnlineDonationSection />
          </div>

          {/* Extra Options */}
          <DonateOptionsSection onVolunteerClick={() => setIsModalOpen(true)} />
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
