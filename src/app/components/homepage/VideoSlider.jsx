"use client";
import { useRef, useState, useMemo } from "react";
import { Menu, Search, User, Heart } from "lucide-react";

export default function VideoSlider() {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const categories = useMemo(
    () => [
      "Jharkhand 360",
      "Adventure",
      "Nature",
      "Wildlife",
      "Heritage",
      "Spiritual",
    ],
    []
  );
  const [activeIndex, setActiveIndex] = useState(0);

  const categoryToVideo = useMemo(
    () => ({
      "Jharkhand 360": "/videos/drone-360.mp4",
      Adventure: "/videos/Festival.mp4",
      Nature: "/videos/Nature.mp4",
      Wildlife: "/videos/Nature.mp4",
      Heritage: "/videos/Festival.mp4",
      Spiritual: "/videos/Festival.mp4",
    }),
    []
  );

  const currentVideoSrc = categoryToVideo[categories[activeIndex]];

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="relative h-screen w-full font-sans overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        key={currentVideoSrc}
        src={currentVideoSrc}
        autoPlay
        loop
        muted={isMuted}
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Navbar */}
      <header className="absolute top-0 left-0 w-full z-20 flex justify-between items-center px-6 py-4 text-white">
        <div className="text-2xl font-bold">Joyful Jharkhand</div>
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <a href="#" className="hover:text-yellow-400">Destinations</a>
          <a href="#" className="hover:text-yellow-400">Experiences</a>
          <a href="#" className="hover:text-yellow-400">Plan your trip</a>
        </nav>
        <div className="flex gap-4 items-center">
          <span className="text-sm">EN</span>
          <Search size={18} />
          <User size={18} />
          <Heart size={18} />
          <Menu size={22} className="md:hidden" />
        </div>
      </header>

      {/* Hero Text */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white z-20 px-4">
        <p className="uppercase tracking-wider text-yellow-400 font-medium mb-2">
          Step into the allure of Jharkhand
        </p>
        <h1 className="text-5xl md:text-6xl font-extrabold italic drop-shadow-lg">
          Incredible Wonders
        </h1>
      </div>

      {/* Categories */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-6 text-sm text-white font-medium">
        {categories.map((item, i) => (
          <button
            key={item}
            onClick={() => setActiveIndex(i)}
            className={`relative transition-colors ${
              i === activeIndex ? "text-yellow-400" : "hover:text-yellow-400"
            }`}
          >
            {item}
            {i < categories.length - 1 && (
              <span className="absolute -right-3 top-1/2 -translate-y-1/2 w-px h-4 bg-white/50" />
            )}
          </button>
        ))}
      </div>

      {/* Controls */}
      <div className="absolute bottom-6 left-6 z-20 flex gap-4 text-white">
        <button
          onClick={toggleMute}
          className="p-2 bg-black/40 rounded-full hover:bg-black/60"
        >
          {isMuted ? "🔇" : "🔊"}
        </button>
        <button
          onClick={() =>
            setActiveIndex((prev) => (prev - 1 + categories.length) % categories.length)
          }
          className="p-2 bg-black/40 rounded-full"
        >
          ←
        </button>
        <button
          onClick={() => setActiveIndex((prev) => (prev + 1) % categories.length)}
          className="p-2 bg-black/40 rounded-full"
        >
          →
        </button>
      </div>
    </div>
  );
}
