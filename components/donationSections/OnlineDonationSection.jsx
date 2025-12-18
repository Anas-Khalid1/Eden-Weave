"use client";

import { QrCode, ArrowRight } from "lucide-react";

const DONATION_LINK = "https://donate.mydona.com/milton-keynes-east-muslim-comm";
import Image from "next/image";
export default function OnlineDonationSection() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 flex flex-col items-center justify-center gap-6">
      <div className="w-32 h-32 bg-gray-100 rounded-xl flex items-center justify-center">
       <Image src="/assets/qr.png" alt="QR Code" width={170} height={170} />
      </div>
      <div className="text-center">
        <h3 className="text-xl font-bold text-gray-800 mb-2">Online Donation</h3>
        <p className="text-gray-600">
          Scan the QR code or click below to donate online securely.
        </p>
      </div>
      <a
        href={DONATION_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-amber-600 text-white px-8 py-4 rounded-lg flex items-center gap-2 hover:bg-amber-700 transition-colors font-semibold"
      >
        Proceed to Donate <ArrowRight className="w-5 h-5" />
      </a>
    </div>
  );
}
