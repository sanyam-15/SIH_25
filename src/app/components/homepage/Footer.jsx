"use client";
import Link from "next/link";
import { Mail, MapPin, Phone, Facebook, Instagram, Twitter } from "lucide-react";
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

      {/* Top row matching visual layout: Brand, Quick Links, Get in touch, Instagram */}
      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 z-10">
        {/* Brand + short blurb + socials */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
          <div className="text-3xl font-semibold">Jharkhand</div>
            <div className="text-3xl font-semibold">Tourism</div>
          </div>
          <p className="text-sm leading-relaxed text-gray-300">
            Indignation and dislike men who to are so beguiled and demor indignation
            and dislike men who to are so.
          </p>
          <div className="flex items-center gap-3 pt-2">
            <Link href="#" aria-label="Facebook" className="p-2 rounded-full bg-white/10 hover:bg-white/20">
              <Facebook className="w-4 h-4" />
            </Link>
            <Link href="#" aria-label="Twitter" className="p-2 rounded-full bg-white/10 hover:bg-white/20">
              <Twitter className="w-4 h-4" />
            </Link>
            <Link href="#" aria-label="Instagram" className="p-2 rounded-full bg-white/10 hover:bg-white/20">
              <Instagram className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Quick Links (reuse existing quick links to keep info intact) */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-yellow-400">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="#">Press & Media</Link></li>
            <li><Link href="#">Weather</Link></li>
            <li><Link href="#">E-Brochure</Link></li>
            <li><Link href="#">FAQs</Link></li>
          </ul>
        </div>

        {/* Get in touch (reuse contact info) */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-yellow-400">Get in touch</h3>
          <div className="space-y-3 text-sm">
            <p className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-yellow-400 mt-0.5" />
              <span>
                Directorate of Tourism, Jharkhand,<br />
                5th Floor, FFP Building,<br />
                Dhurwa, Ranchi – 834004
              </span>
            </p>
            <p className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-yellow-400" />
              (+91) 123 456 7890
            </p>
            <p className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-yellow-400" />
              tourism@jharkhand.gov.in
            </p>
          </div>
        </div>

        {/* Instagram Post grid */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-yellow-400">Instagram Post</h3>
          <div className="grid grid-cols-3 gap-3">
            {[1,2,3,4,5,6].map((n) => (
              <div key={n} className="relative w-20 h-16 overflow-hidden rounded">
                <Image
                  src={`/images/districtgems/img${n}.jpg`}
                  alt={`instagram ${n}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Keep old info intact: render legacy link sections below */}
      <div className="relative max-w-7xl mx-auto px-6 mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 z-10">
        {/* About */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-yellow-400">About Jharkhand</h3>
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
          <h3 className="text-lg font-semibold mb-4 text-yellow-400">Policies</h3>
          <ul className="space-y-2">
            <li><Link href="#">Terms & Conditions</Link></li>
            <li><Link href="#">Privacy Policy</Link></li>
            <li><Link href="#">Disclaimer</Link></li>
            <li><Link href="#">Hyperlinking Policy</Link></li>
          </ul>
        </div>

        {/* (Removed duplicate Contact Info column) */}
      </div>

      {/* Bottom Bar */}
      <div className="relative mt-10 border-t border-gray-700 pt-4 text-sm text-gray-300 z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p>
            © {new Date().getFullYear()} Department of Tourism, Jharkhand, India. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-yellow-400">Privacy Policy</Link>
            <Link href="#" className="hover:text-yellow-400">Terms & Conditions</Link>
          </div>
        </div>
        <p className="text-center mt-2">
          Last Updated On: 04 September 2025 | Visitor No:{" "}
          <span className="bg-black px-2 py-1 rounded">000000123456</span>
        </p>
      </div>
    </footer>
  );
}
