"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Handicrafts() {
  const baseCrafts = [
    {
      state: "Jharkhand — Hazaribagh",
      title: "Sohrai–Khovar Painting",
      img: "/images/districtgems/img1.jpg",
    },
    {
      state: "Jharkhand — East Singhbhum (Amadubi)",
      title: "Paitkar Painting",
      img: "/images/districtgems/img2.jpg",
    },
    {
      state: "Jharkhand — Khunti/Seraikela",
      title: "Dokra (Dhokra) Metal Craft",
      img: "/images/districtgems/img3.jpg",
    },
    {
      state: "Jharkhand — Godda/Dumka",
      title: "Tasar (Tussar) Silk Weaving",
      img: "/images/districtgems/img4.jpg",
    },
    {
      state: "Jharkhand — Godda/Dumka",
      title: "Tasar (Tussar) Silk Weaving",
      img: "/images/districtgems/img4.jpg",
    },
  ];

  // Build a longer list so new cards can enter from the sides
  const crafts = Array.from({ length: 16 }, (_, i) => {
    const item = baseCrafts[i % baseCrafts.length];
    return { ...item, title: `${item.title} #${i + 1}` };
  });

  // Start index of the 4-card window
  const [start, setStart] = useState(0);

  const visible = [0, 1, 2, 3].map((offset) => crafts[(start + offset) % crafts.length]);

  const next = () => setStart((s) => (s + 1) % crafts.length);
  const prev = () => setStart((s) => (s - 1 + crafts.length) % crafts.length);

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
    <section className="relative mt-16">
      {/* Heading strip */}
      <div className="bg-red-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            JHARKHAND CRAFTS
          </h2>
          <p className="mt-2 text-lg opacity-90">— Heritage arts & handicrafts —</p>
        </div>
      </div>

      {/* Cards - always 4 visible */}
      <div className="max-w-7xl mx-auto px-6 -mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {visible.map((c, idx) => (
          <article
            key={`${c.title}-${idx}-${start}`}
            className="group bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 transition-shadow duration-300 hover:shadow-xl"
          >
            <div className="relative h-56 overflow-hidden">
              <Image
                src={c.img}
                alt={c.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
            </div>
            <div className="p-6 bg-gray-50">
              <div className="text-sm font-semibold text-red-600">{c.state}</div>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">{c.title}</h3>
            </div>
          </article>
        ))}
      </div>

      {/* Controls + CTA */}
      <div className="max-w-7xl mx-auto px-6 mt-8 flex flex-col items-center gap-6">
        <div className="flex items-center gap-6">
          <button
            aria-label="Previous"
            onClick={prev}
            className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-gray-100"
          >
            ←
          </button>
          <button
            aria-label="Next"
            onClick={next}
            className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-gray-100"
          >
            →
          </button>
        </div>
        <button className="px-6 py-3 rounded-full bg-red-600 text-white font-semibold hover:bg-red-700">
          Discover more
        </button>
      </div>
    </section>
  );
}


