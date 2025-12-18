"use client";

import { Header } from "@/components/header/header";
import Footer from "@/components/Footer/footer";
import EventsHeroSection from "@/components/events/EventsHeroSection";
import Events from "@/components/events/events";

export default function EventsPage() {
  return (
    <main className="min-h-screen relative">
      {/* Background image that extends behind header */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat -z-10"
        style={{
          backgroundImage: "url('/assets/hero-section-events.avif')",
          height: "100vh",
        }}
      >
        <div className="absolute inset-0 " />
      </div>

      <Header />

      {/* Hero Section */}
      <EventsHeroSection />

      {/* Main Content */}
      <section className="relative bg-white" style={{ zIndex: 3 }}>
        <Events />
      </section>

      {/* Footer */}
      <section className="relative bg-white pt-5" style={{ zIndex: 3 }}>
        <Footer />
      </section>
    </main>
  );
}
