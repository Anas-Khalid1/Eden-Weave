import { Header } from "@/components/header/header"
import DonationSection from "@/components/homeSections/donation-section"
import { HeroSection } from "@/components/homeSections/hero-section"
import ImpactSection from "@/components/homeSections/impact-section"
import MorePeopleSection from "@/components/homeSections/more-people-section"
import VolunteerSection from "@/components/homeSections/volunteer-section"
import UpcomingEvents from "@/components/homeSections/upCommingEevents"
import Footer from "@/components/Footer/footer"
export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* Background image that extends behind header */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat -z-10"
        style={{
          backgroundImage: "url('https://pub-77b5aa2e6e3a4e55afb2a4bc4e81a672.r2.dev/hero-section-image-4.avif')",
          height: '100vh'

        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <Header />
      <HeroSection />

      {/* About Us Section */}
      <MorePeopleSection />
      <ImpactSection/>
     

      {/* Demo content to show scroll behavior */}

      <section className="relative bg-white py-5 " style={{ zIndex: 3 }}>
         <DonationSection/>
         <VolunteerSection/>
       <UpcomingEvents/>
     
      </section>
         <section className="relative bg-white pt-5 " style={{ zIndex: 3 }}>
    
       <Footer/>
      </section>
{/* 
      <section className="relative bg-gray-50 py-20 px-4" style={{ zIndex: 3 }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">What We Do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Plant Protection", desc: "Safeguarding endangered plant species and their habitats." },
              { title: "Water Conservation", desc: "Implementing sustainable water management practices." },
              { title: "Ocean Preservation", desc: "Protecting marine ecosystems and reducing pollution." },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-bold mb-4 text-[#2ec4a5]">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-white py-20 px-4" style={{ zIndex: 3 }}>
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Scroll up to see the header animation!</h2>
          <p className="text-gray-600 text-lg">
            The top two rows will smoothly hide when you scroll down, and the navigation bar will stick to the top of
            the page.
          </p>
        </div>
      </section> */}
    </main>
  )
}
