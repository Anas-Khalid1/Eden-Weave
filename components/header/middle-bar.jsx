export function MiddleBar() {
  return (
    <div className="bg-transparent py-4 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src="/logo.png" alt="Eden Weave Foundation" className="h-20 " />
         
         
        </div>

        {/* Stats and Donate button */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-8 text-white">
            <div className="text-center">
              <div className="text-2xl font-bold">15+</div>
              <div className="text-sm text-gray-300">Community</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">10+</div>
              <div className="text-sm text-gray-300">Volunteers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">5+</div>
              <div className="text-sm text-gray-300">Events</div>
            </div>
          </div>
          <button className="bg-[#c4a35a] hover:bg-[#b8963f] text-white px-8 py-3 rounded font-semibold tracking-wider transition-colors">
            DONATE
          </button>
        </div>
      </div>
    </div>
  )
}
