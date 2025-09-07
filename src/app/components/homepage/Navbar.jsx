"use client";
import { useState, useEffect } from "react";
import { Menu, Search, User, Heart } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 shadow-md backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Left Nav Links */}
        <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
          <a href="#" className="hover:text-yellow-500">Destinations</a>
          <a href="#" className="hover:text-yellow-500">Experiences</a>
          <a href="#" className="hover:text-yellow-500">Plan your trip</a>
        </nav>

        {/* Center Logo */}
        <div className="flex-shrink-0">
                   <Image
                           src="/images/newlogo.png" 
                           alt="Joyful Jharkhand"
                           width={240}
                           height={60}
                           className="object-contain"
                         />
        </div>

        {/* Right Icons */}
        <div className="flex gap-4 items-center text-gray-700">
          <span className="text-sm font-semibold">EN</span>
          <Search size={18} className="hover:text-yellow-500 cursor-pointer" />
          <User size={18} className="hover:text-yellow-500 cursor-pointer" />
          <Heart size={18} className="hover:text-yellow-500 cursor-pointer" />
          <Menu size={22} className="md:hidden hover:text-yellow-500 cursor-pointer" />
        </div>
      </div>
    </header>
  );
}
