export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        

        {/* Heading - Updated accent color to leaf green from logo */}
        <h1 className="text-2xl md:text-4xln font-sans lg:text-6xl font-bold max-w-6xl">
          Inspiring Faith, Strengthening Community
        </h1>

        {/* Subtext */}
        {/* <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
The Eden Weave Foundation advances Islamic faith, provides educational and recreational activities, alleviates poverty and promotes community harmony in Milton Keynes        </p> */}

        {/* CTA Buttons - Updated to gold and navy blue colors */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-[#c4a35a] hover:cursor-pointer hover:bg-[#b8963f] text-white px-8 py-4 rounded font-semibold tracking-wider transition-colors">
            Donate Now 
          </button>
          <button className="border-2 border-white hover:cursor-pointer hover:bg-blue-950 hover:border-blue-950 text-white px-8 py-4 rounded font-semibold tracking-wider transition-colors">
            LEARN MORE
          </button>
        </div>
      </div>
    </section>
  )
}
