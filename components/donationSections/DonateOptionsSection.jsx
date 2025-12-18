"use client";

import { useState } from "react";
import { Users, Share2, Copy, Check } from "lucide-react";

export default function DonateOptionsSection({ onVolunteerClick }) {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12">
      {/* <button
        onClick={onVolunteerClick}
        className="bg-white p-6 rounded-xl hover:cursor-pointer  text-center shadow-sm hover:shadow-lg transition-shadow border border-gray-100 group"
      >
        <Users className="mx-auto mb-3 text-amber-600 group-hover:scale-110 transition-transform" size={32} />
        <p className="font-bold text-gray-800">Become a Volunteer</p>
        <p className="text-sm text-gray-500 mt-1">Join our community efforts</p>
      </button> */}
{/* 
      <button
        onClick={handleShare}
        className="bg-white p-6 rounded-xl text-center shadow-md hover:shadow-lg transition-shadow border border-gray-100 group"
      >
        {copied ? (
          <Check className="mx-auto mb-3 text-green-500" size={32} />
        ) : (
          <Share2 className="mx-auto mb-3 text-amber-600 group-hover:scale-110 transition-transform" size={32} />
        )}
        <p className="font-bold text-gray-800">
          {copied ? "Link Copied!" : "Share This Page"}
        </p>
        <p className="text-sm text-gray-500 mt-1">Spread the word</p>
      </button> */}
    </div>
  );
}
