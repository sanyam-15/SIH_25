"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Handicrafts() {
  const baseCrafts = [
    {
      state: "Hazaribagh",
      title: "Sohrai Khovar Painting",
      img: "/images/districtgems/img1.jpg",
    },
    {
      state: "East Singhbhum",
      title: "Paitkar Scroll Painting",
      img: "/images/districtgems/img2.jpg",
    },
    {
      state: "Khunti",
      title: "Dokra Metal Craft",
      img: "/images/districtgems/img3.jpg",
    },
    {
      state: "Dumka",
      title: "Tasar Silk Weaving",
      img: "/images/districtgems/img4.jpg",
    },
  ];

  const [start, setStart] = useState(0);
  const visible = [0, 1, 2, 3].map((offset) => baseCrafts[(start + offset) % baseCrafts.length]);

  const next = () => setStart((s) => (s + 1) % baseCrafts.length);
  const prev = () => setStart((s) => (s - 1 + baseCrafts.length) % baseCrafts.length);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        next();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prev();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section className="relative bg-white">
      {/* Red Header Section */}
      <div className="bg-red-500 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-black tracking-wider mb-4">
            EXQUISITE CRAFTS
          </h2>
          <p className="text-xl md:text-2xl font-light opacity-90">
            — of timeless tradition —
          </p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {visible.map((craft, idx) => (
              <div
                key={`${craft.title}-${idx}-${start}`}
                className="group cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative h-72 mb-6 overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src={craft.img}
                    alt={craft.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                </div>

                {/* Text Content */}
                <div className="bg-gray-200 p-6 rounded-lg">
                  <div className="text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wide">
                    {craft.state}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 leading-tight">
                    {craft.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center mt-12 gap-4">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-gray-600 hover:text-red-500 hover:shadow-lg transition-all duration-300"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-gray-600 hover:text-red-500 hover:shadow-lg transition-all duration-300"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Discover More Button */}
          <div className="text-center mt-8">
            <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full font-semibold text-lg transition-colors duration-300 shadow-lg hover:shadow-xl">
              Discover more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}


