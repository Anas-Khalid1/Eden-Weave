"use client";

import { Header } from "@/components/header/header";
import Footer from "@/components/Footer/footer";
import ServicesHeroSection from "@/components/servicesSections/ServicesHeroSection";
import PrayerServicesSection from "@/components/servicesSections/PrayerServicesSection";

export default function ServicesPage() {
  return (
    <main className="min-h-screen relative">
      {/* Background image that extends behind header */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat -z-10"
        style={{
          backgroundImage: "url('/assets/hero-section-img-9.avif')",
          height: "100vh",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <Header />

      {/* Hero Section */}
      <ServicesHeroSection />

      {/* Main Content */}
      <section className="relative bg-[#FDFBF7]" style={{ zIndex: 3 }}>
        <PrayerServicesSection />
      </section>

      {/* Footer */}
      <section className="relative bg-white pt-5" style={{ zIndex: 3 }}>
        <Footer />
      </section>
    </main>
  );
}
