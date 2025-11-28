// "use client";

// export default function MorePeopleSection() {
//   return (
//     <section className="w-full py-5 px-4 md:px-8 lg:px-16 bg-white">
//       {/* Decorative lines on the left */}
//       <div className="absolute left-0 hidden lg:block">
//         <div className="space-y-1">
//           {[...Array(5)].map((_, i) => (
//             <div
//               key={i}
//               className="h-0.5 bg-gray-200"
//               style={{
//                 width: `${60 - i * 10}px`,
//                 transform: `rotate(-15deg)`,
//               }}
//             />
//           ))}
//         </div>
//       </div>
//       {/* <div>
//         <h1 className="flex justify-center text-gray-800 font-semibold text-xl md:text-2xl lg:text-4xl mb-10">Welcome to Eden Weave Foundation</h1>
//       </div> */}

//       <div className="max-w-7xl mx-auto">
//         <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
//           {/* Video Section - Autoplays in its own div */}
//           <div className="relative w-full lg:w-1/2 aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
//             <video
//               className="w-full h-full object-cover"
//               autoPlay
//               loop
//               muted
//               playsInline
//               controls
//             >
//               <source src="/about us.mp4" type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>
//           </div>

//           {/* Text Content Section */}
//           <div className="w-full lg:w-1/2 space-y-6">
//             {/* Decorative dash */}
//             <div className="w-8 h-0.5 bg-gray-800" />

//             {/* Heading */}
//             <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
//               <span className="text-gray-700  ">
//                About us
//               </span>
//               <br />
             
//             </h2>

//             {/* Description */}
//             <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-xl">
//              The Eden Weave Foundation advances Islamic faith, provides educational and recreational activities, alleviates poverty and promotes community harmony in United Kingdom.
//             </p>

//             {/* Dotted pattern decoration */}
//             <div className="pt-4 hidden lg:block">
//               <div className="grid grid-cols-12 gap-2">
//                 {[...Array(48)].map((_, i) => (
//                   <div
//                     key={i}
//                     className="w-1 h-1 rounded-full bg-gray-200"
//                   />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

export default function MorePeopleSection() {
  return (
    <section className="sticky top-[64px] w-full h-screen py-5 px-4 md:px-8 lg:px-16 bg-white flex items-center" style={{ zIndex: 1 }}>
      {/* Decorative lines on the left */}
      <div className="absolute left-0 hidden lg:block">
        <div className="space-y-1">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="h-0.5 bg-gray-200"
              style={{
                width: `${60 - i * 10}px`,
                transform: `rotate(-15deg)`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Video Section - Autoplays in its own div */}
          <div className="relative w-full lg:w-1/2 aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              controls
            >
              <source src="/about us.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Text Content Section */}
          <div className="w-full lg:w-1/2 space-y-6">
            {/* Decorative dash */}
            <div className="w-8 h-0.5 bg-gray-800" />

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              <span className="text-gray-700">About us</span>
              <br />
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-xl">
              The Eden Weave Foundation advances Islamic faith, provides
              educational and recreational activities, alleviates poverty and
              promotes community harmony in United Kingdom.
            </p>

            {/* Dotted pattern decoration */}
            <div className="pt-4 hidden lg:block">
              <div className="grid grid-cols-12 gap-2">
                {[...Array(48)].map((_, i) => (
                  <div
                    key={i}
                    className="w-1 h-1 rounded-full bg-amber-400"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}