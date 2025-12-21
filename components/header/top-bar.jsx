import { Facebook, Linkedin, Phone, Instagram, Lock, User } from "lucide-react";
import Link from "next/link";

export function TopBar() {
  return (
    <div className="bg-[#1a1a1a] text-white py-3 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left side - Social icons and phone */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <Link href="https://www.facebook.com/share/1CjaBrUBGV/" className="hover:text-[#2ec4a5] transition-colors">
              <Facebook className="w-4 h-4" />
            </Link>



            <Link href="https://www.instagram.com/mkemcorg?igsh=MWFvdnR6NjFzdW11eQ==" className="hover:text-[#2ec4a5] transition-colors">
              <Instagram className="w-4 h-4" />
            </Link>
          </div>
          {/* <div className="hidden sm:flex items-center gap-2 ml-4 text-sm">
            <Phone className="w-4 h-4" />
            <span>+1-2353-4352-555</span>
          </div> */}
        </div>

        {/* Right side - Links and auth */}
        <div className="flex items-center gap-4 text-sm">
          <div className="hidden lg:flex items-center gap-4">


            <Link href="/about" className="hover:text-[#2ec4a5] transition-colors">
              What We Do
            </Link>
            <span className="text-gray-500">|</span>
            <Link
              href="/#volunteer-section"
              className="hover:text-[#2ec4a5] transition-colors"
            >
              Become A Volunteer
            </Link>
            <span className="text-gray-500">|</span>
            <Link href="contact" className="hover:text-[#2ec4a5] transition-colors">
              Contact Us
            </Link>
          </div>
          {/* <div className="flex items-center gap-4">
            <a href="#" className="flex items-center gap-1 hover:text-[#2ec4a5] transition-colors">
              <Lock className="w-4 h-4" />
              <span>Login</span>
            </a>
            <a href="#" className="flex items-center gap-1 hover:text-[#2ec4a5] transition-colors">
              <User className="w-4 h-4" />
              <span>Sign Up</span>
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
}
