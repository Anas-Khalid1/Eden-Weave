import { CheckIcon } from "lucide-react";

export default function AboutContentSection() {
  return (
    <div className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-6">
              Our Mission <br />
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Milton Keynes is one of the fastest growing cities in the UK, with
              significant development across its eastern suburbs, including
              Broughton, Brooklands, Glebe Farm, Eagles Farm, and Woburn Sands.
              Over 3,000 Muslims now live in these areas, yet existing Islamic
              centres are largely located along the city spine, making regular
              access difficult due to distance and increasing traffic.{" "}
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Our charity was established to meet this growing need by creating
              a local community hub that serves the spiritual, social, and
              educational needs of residents. Through the development of a
              mosque, madrassah, and community facilities, we aim to strengthen
              local connections, support families, and nurture a thriving,
              sustainable community in East Milton Keynes.{" "}
            </p>

          </div>
          <div className="relative mt-8 lg:mt-0">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/assets/hero-section-image-6.avif"
                alt="Community planning"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-xs hidden md:block ring-1 ring-gray-100">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center text-accent-600">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Registered Charity</p>
                  <p className="text-xl font-bold text-gray-900">No. 1210287</p>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                Committed to serving the eastern suburbs of Milton Keynes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
