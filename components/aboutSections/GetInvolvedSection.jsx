"use client";

import Link from "next/link";

export default function GetInvolvedSection({ onVolunteerClick }) {
  return (
    <div className="mt-20 text-center p-3 md:p-10 lg:p-28 bg-gray-200">
      <div className="w-8 h-0.5 bg-amber-600 mx-auto mb-4" />
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
        Get Involved
      </h2>
      <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
        Join us in making a difference in our community. Whether through
        volunteering, donations, or participation in our programs, every
        contribution matters.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link
          href="/contact"
          className="bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-700 transition-colors"
        >
          Contact Us
        </Link>
        <button
          onClick={onVolunteerClick}
          className="border-2 border-blue-950 hover:cursor-pointer hover:bg-blue-950 hover:border-blue-950 text-blue-950 hover:text-white px-8 py-4 font-semibold tracking-wider transition-colors"
        >
          Become a Volunteer
        </button>
      </div>
    </div>
  );
}
