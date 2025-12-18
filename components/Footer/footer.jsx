"use client";

import React from "react";
import {
  Phone,
  Mail,
  Facebook,
  Linkedin,
  Twitter,
  Instagram,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
   const quickLinks = [
    { label: 'About Our Organization', href: '/about' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Events', href: '/events' },
    { label: 'Gallery', href: '/gallery' },
  ];
  return (
    <footer className="bg-[#1a1a1a] text-gray-300 mt-10">
      {/* Main Footer */}
      <div className="md:px-8 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-8">
          {/* Column 1 - Logo & About */}
          <div>
            {/* Logo */}
            <div className="mb-6">
              <div className="flex flex-col items-start">
                {/* Logo Icon */}
                <Link href="/">
                <Image src="/assets/logo-header.png" width={200} height={200} alt="logo image" />
                </Link>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Bringing People Together through Faith, Learning, and Recreation
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <Link
                href="https://www.facebook.com/share/1CjaBrUBGV/"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </Link>
             
             
              <Link
                href="https://www.instagram.com/mkemcorg?igsh=MWFvdnR6NjFzdW11eQ=="
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Column 2 - Contact Info */}
          <div>
            <h3 className="text-white font-semibold tracking-[0.15em] uppercase text-sm mb-6">
              Contact Info
            </h3>

            {/* Address */}
            <div className="text-gray-400 text-sm leading-relaxed mb-5">
              <p>71 Cardno Avenue</p>
              <p>Glebe Farm</p>
              <p>Milton Keynes MK17 7DY</p>
            </div>

            {/* Phone Numbers */}
           
             
      
            {/* Email */}
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-emerald-400" />
              <a
                href="mailto:enquiries@edenweave.org.uk"
                className="text-gray-400 text-sm hover:text-white transition-colors duration-300"
              >
            enquiries@edenweave.org.uk
              </a>
            </div>
          </div>

          {/* Column 3 - Quick Links */}
          <div>
            <h3 className="text-white font-semibold tracking-[0.15em] uppercase text-sm mb-6">
              Quick Links
            </h3>

           <ul className="space-y-3">
      {quickLinks.map((link, index) => (
        <li key={index}>
          <Link
            href={link.href}
            className="flex items-center gap-2 text-gray-400 text-sm hover:text-white transition-colors duration-300 group"
          >
            <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-emerald-400 transition-colors duration-300" />
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Left Links */}
            <div className="flex items-center gap-2 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <span className="text-gray-600">|</span>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Terms Of Use
              </a>
            </div>

            {/* Right Copyright */}
            <p className="text-gray-500 text-sm">
              Copyright 2025 Eden Weave Foundation under MKEMC registered
              charity in England and Wales (1210287) , All Right Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
