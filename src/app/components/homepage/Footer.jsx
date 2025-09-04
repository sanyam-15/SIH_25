"use client";
import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
   <footer className="relative text-gray-200 pt-12 pb-6 mt-10 overflow-hidden">
  {/* 🔹 Background Image */}
  <Image
    src="/images/bg-nature.jpg"
    alt="Background"
    fill
    className="absolute inset-0 object-cover -z-20 filter grayscale saturate-50"
    priority
  />

  {/* 🔹 Overlay */}
  <div className="absolute inset-0 bg-black/70 -z-10" />

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 z-10">
        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-yellow-400">
            Contact Info
          </h3>
          <p className="flex items-start gap-2 mb-3">
            <MapPin className="w-5 h-5 text-yellow-400 mt-1" />
            Directorate of Tourism, Jharkhand,<br />
            5th Floor, FFP Building,<br />
            Dhurwa, Ranchi – 834004
          </p>
          <p className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-yellow-400" />
            tourism@jharkhand.gov.in
          </p>
        </div>

        {/* About */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-yellow-400">
            About Jharkhand
          </h3>
          <ul className="space-y-2">
            <li><Link href="#">History</Link></li>
            <li><Link href="#">Geography</Link></li>
            <li><Link href="#">Culture & People</Link></li>
            <li><Link href="#">Festivals</Link></li>
          </ul>
        </div>

        {/* Share */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-yellow-400">Share</h3>
          <ul className="space-y-2">
            <li><Link href="#">Photo Gallery</Link></li>
            <li><Link href="#">Video Gallery</Link></li>
            <li><Link href="#">360° Virtual Tour</Link></li>
            <li><Link href="#">Posters</Link></li>
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-yellow-400">
            Policies
          </h3>
          <ul className="space-y-2">
            <li><Link href="#">Terms & Conditions</Link></li>
            <li><Link href="#">Privacy Policy</Link></li>
            <li><Link href="#">Disclaimer</Link></li>
            <li><Link href="#">Hyperlinking Policy</Link></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-yellow-400">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li><Link href="#">Press & Media</Link></li>
            <li><Link href="#">Weather</Link></li>
            <li><Link href="#">E-Brochure</Link></li>
            <li><Link href="#">FAQs</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-300 z-10">
        <p>
          © {new Date().getFullYear()} Department of Tourism, Jharkhand, India.
          All Rights Reserved.
        </p>
        <p className="mt-2">
          Last Updated On: 04 September 2025 | Visitor No:{" "}
          <span className="bg-black px-2 py-1 rounded">
            000000123456
          </span>
        </p>
      </div>
    </footer>
  );
}
