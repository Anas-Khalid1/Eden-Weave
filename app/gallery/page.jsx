"use client";

import { useState, useEffect } from "react";
import { Heart, Download, Bookmark } from "lucide-react";
import { Header } from "@/components/header/header";
import Footer from "@/components/Footer/footer";
import { ChevronLeft, ChevronRight } from "lucide-react";
const galleryImages = [
  {
    id: 1,
    src: "/gallery/gallery-img-1.webp",
    title: "Beautiful Mosque Interior",
    author: "Jumma Prayer",
    isPremium: false,
    likes: 234,
  },
  {
    id: 2,
    src: "/gallery/gallery-img-2.webp",
    title: "Community Prayer Gathering",
    author: "Jumma Prayer",
    isPremium: true,
    likes: 567,
  },
  {
    id: 3,
    src: "/gallery/gallery-img-3.webp",
    title: "Islamic Geometric Pattern",
    author: "Jumma Prayer",
    isPremium: false,
    likes: 189,
  },
  {
    id: 4,
    src: "/gallery/gallery-img-4.webp",
    title: "Ramadan Lanterns",
    author: "Sports day",
    isPremium: false,
    likes: 892,
  },
  {
    id: 5,
    src: "/gallery/gallery-img-5.webp",
    title: "Eid Celebration",
    author: "Sports day",
    isPremium: true,
    likes: 1203,
  },
  {
    id: 6,
    src: "/gallery/gallery-img-6.webp",
    title: "Quran and Prayer Beads",
    author: "Sports day",
    isPremium: false,
    likes: 456,
  },
  {
    id: 7,
    src: "/gallery/gallery-img-7.webp",
    title: "Mosque at Sunset",
    author: "Sports day",
    isPremium: false,
    likes: 678,
  },
  {
    id: 8,
    src: "/gallery/gallery-img-8.webp",
    title: "Islamic Calligraphy",
    author: "Sports day",
    isPremium: true,
    likes: 345,
  },
  {
    id: 9,
    src: "/gallery/gallery-img-9.webp",
    title: "Islamic Education",
    author: "Ifftar and Taraweeh",
    isPremium: false,
    likes: 521,
  },
  {
    id: 10,
    src: "/gallery/gallery-img-10.webp",
    title: "Mosque Under Stars",
    author: "ifftar and Taraweeh",
    isPremium: false,
    likes: 789,
  },
  {
    id: 11,
    src: "/gallery/gallery-img-11.webp",
    title: "Iftar Spread",
    author: "Sports day",
    isPremium: true,
    likes: 934,
  },
  {
    id: 12,
    src: "/gallery/gallery-img-12.webp",
    title: "Community Family",
    author: "Sports day",
    isPremium: false,
    likes: 267,
  },
];

export default function GalleryPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [likedImages, setLikedImages] = useState([]);
  const [savedImages, setSavedImages] = useState([]);

  const toggleLike = (id) => {
    setLikedImages((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const toggleSave = (id) => {
    setSavedImages((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Auto-scroll effect
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      goToNext();
    }, 2000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [currentIndex, isPaused]);

  return (
    <>
      <main className="min-h-screen relative">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat -z-10"
          style={{
            backgroundImage: "url('/assets/gallery-section.webp')",
            height: "100vh",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <Header />

        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center px-4 pt-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Gallery
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Capturing moments from our community
            </p>
          </div>
        </section>

        {/* Gallery Section - Freepik Style */}
        <section className="relative bg-gray-50 py-16" style={{ zIndex: 3 }}>
          <div className="max-w-7xl mx-auto px-4 py-8">
            {/* Masonry Grid Layout like Freepik - Staggered Heights */}
            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
              {galleryImages.map((image, index) => {
                // Create varying heights for masonry effect (like Freepik)
                const heights = ['h-48', 'h-64', 'h-72', 'h-56', 'h-80', 'h-60'];
                const randomHeight = heights[index % heights.length];

                return (
                  <div
                    key={image.id}
                    className="break-inside-avoid group relative cursor-pointer"
                  >
                    {/* Image Container */}
                    <div className={`relative overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-xl transition-all duration-300 ${randomHeight}`}>
                      <img
                        src={image.src || "/placeholder.svg"}
                        alt={image.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />

                      {/* Hover Overlay - Shows Author */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {/* Author Info - Bottom */}
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white text-sm font-bold shadow-lg">
                              {image.author.charAt(0)}
                            </div>
                            <div className="flex-1">
                              <p className="text-white font-semibold text-sm">
                                {image.author}
                              </p>
                              {/* <p className="text-white/80 text-xs">
                                {image.title}
                              </p> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section>
          <div className="max-h-1/2  flex items-center justify-center p-4">
           
            <div className="relative w-full max-h-[70vh] max-w-4xl aspect-video">
              {/* Main Image */}
              <div
                className="relative w-full h-full overflow-hidden"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <img
                  src={galleryImages[currentIndex].src}
                  alt={galleryImages[currentIndex].title}
                  className="w-full h-full object-cover"
                />

                {/* Overlay gradient for better button visibility */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
              </div>

              {/* Previous Button */}
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-800/80 hover:bg-gray-700/90 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Next Button */}
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-800/80 hover:bg-gray-700/90 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-white w-8"
                        : "bg-white/50 hover:bg-white/75"
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* Footer */}
        <section className="relative bg-white pt-5" style={{ zIndex: 3 }}>
          <Footer />
        </section>
      </main>
    </>
  );
}
