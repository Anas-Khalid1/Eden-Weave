import { Header } from "@/components/header/header";
import { HeroSection } from "@/components/homeSections/hero-section";
import ContactFormSection from "@/components/contactSection/contact-form-section";
import Footer from "@/components/Footer/footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen relative">
      {/* Background image that extends behind header */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat -z-10"
        style={{
          backgroundImage: "url('/assets/hero-section-image-3.avif')",
          height: '100vh'
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <Header />

      {/* Hero Section with Contact specific content */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-4 pt-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            We'd love to hear from you. Get in touch with our team.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative bg-white" style={{ zIndex: 3 }}>
        <ContactFormSection />
      </section>

      {/* Footer */}
      <section className="relative bg-white pt-5" style={{ zIndex: 3 }}>
        <Footer />
      </section>
    </main>
  );
}
