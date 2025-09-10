"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

// Map file in public folder
const geoUrl = "/jharkhand.json";

// All 24 Jharkhand Districts → Photos mapping
const districtImages = {
  RANCHI: [
    "/images/districts/ranchi1.jpg",
    "/images/districts/ranchi2.jpg",
    "/images/districts/ranchi3.avif",
  ],
  DHANBAD: [
    "/districts/dhanbad1.jpg",
    "/districts/dhanbad2.jpg",
  ],
  "SARAIKELA-KHARSAWAN": [
    "/districts/saraikela1.jpg",
    "/districts/saraikela2.jpg",
  ],
  SIMDEGA: [
    "/districts/simdega1.jpg",
    "/districts/simdega2.jpg",
    "/districts/simdega3.jpg",
  ],
  SAHIBGANJ: [
    "/districts/sahibganj1.jpg",
    "/districts/sahibganj2.jpg",
  ],
  BOKARO: [
    "/districts/bokaro1.jpg",
    "/districts/bokaro2.jpg",
  ],
  DEOGHAR: [
    "/districts/deoghar1.jpg",
    "/districts/deoghar2.jpg",
  ],
  DUMKA: [
    "/districts/dumka1.jpg",
    "/districts/dumka2.jpg",
  ],
  "EAST SINGHBHUM": [
    "/districts/east-singhbhum1.jpg",
    "/districts/east-singhbhum2.jpg",
  ],
  GARHWA: [
    "/districts/garhwa1.jpg",
    "/districts/garhwa2.jpg",
  ],
  GIRIDIH: [
    "/districts/giridih1.jpg",
    "/districts/giridih2.jpg",
  ],
  GODDA: [
    "/districts/godda1.jpg",
    "/districts/godda2.jpg",
  ],
  GUMLA: [
    "/districts/gumla1.jpg",
    "/districts/gumla2.jpg",
  ],
  HAZARIBAGH: [
    "/districts/hazaribagh1.jpg",
    "/districts/hazaribagh2.jpg",
  ],
  JAMTARA: [
    "/districts/jamtara1.jpg",
    "/districts/jamtara2.jpg",
  ],
  KHUNTI: [
    "/districts/khunti1.jpg",
    "/districts/khunti2.jpg",
  ],
  KODARMA: [
    "/districts/koderma1.jpg",
    "/districts/koderma2.jpg",
  ],
  LATEHAR: [
    "/districts/latehar1.jpg",
    "/districts/latehar2.jpg",
  ],
  LOHARDAGA: [
    "/districts/lohardaga1.jpg",
    "/districts/lohardaga2.jpg",
  ],
  PAKUR: [
    "/districts/pakur1.jpg",
    "/districts/pakur2.jpg",
  ],
  PALAMU: [
    "/districts/palamu1.jpg",
    "/districts/palamu2.jpg",
  ],
  RAMGARH: [
    "/districts/ramgarh1.jpg",
    "/districts/ramgarh2.jpg",
  ],
  "WEST SINGHBHUM": [
    "/districts/west-singhbhum1.jpg",
    "/districts/west-singhbhum2.jpg",
  ],
  CHATRA: [
    "/districts/chatra1.jpg",
    "/districts/chatra2.jpg",
  ],
};

const districtDescriptions = {
  RANCHI: "The capital city of Jharkhand, known for its waterfalls, hills, and rich cultural heritage.",
  DHANBAD: "The coal capital of India, famous for its mining industry and educational institutions.",
  "SARAIKELA-KHARSAWAN": "Known for its tribal culture, dance forms, and natural beauty.",
  SIMDEGA: "A picturesque district with lush green forests and tribal traditions.",
  SAHIBGANJ: "Located on the banks of river Ganga, known for its historical significance.",
  BOKARO: "Industrial hub known for steel production and modern infrastructure.",
  DEOGHAR: "Famous pilgrimage destination with ancient temples and spiritual significance.",
  DUMKA: "Tribal heartland with rich cultural heritage and natural beauty.",
  "EAST SINGHBHUM": "Industrial center with mining activities and urban development.",
  GARHWA: "Known for its forests, wildlife, and natural resources.",
  GIRIDIH: "Rich in coal deposits and known for its mining industry.",
  GODDA: "Agricultural district with scenic landscapes and rural charm.",
  GUMLA: "Tribal district with dense forests and traditional culture.",
  HAZARIBAGH: "Famous for its national park and wildlife sanctuary.",
  JAMTARA: "Known for its rural landscapes and agricultural activities.",
  KHUNTI: "Tribal district with rich cultural heritage and natural beauty.",
  KODARMA: "Known for mica mining and industrial activities.",
  LATEHAR: "Forested district with tribal communities and natural resources.",
  LOHARDAGA: "Tribal district known for its cultural traditions and forests.",
  PAKUR: "Agricultural district with scenic beauty and rural lifestyle.",
  PALAMU: "Known for its tiger reserve and wildlife conservation.",
  RAMGARH: "Industrial district with coal mining and urban development.",
  "WEST SINGHBHUM": "Tribal district with rich mineral resources and forests.",
  CHATRA: "Agricultural district with rural charm and natural beauty.",
};

export default function JharkhandMap() {
  const [selected, setSelected] = useState("RANCHI");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const router = useRouter();

  // Get all available districts
  const availableDistricts = Object.keys(districtImages);
  const currentDistrictIndex = availableDistricts.indexOf(selected);

  const handleDistrictClick = (district) => {
    setSelected(district);
    setCurrentImageIndex(0);
  };

  const nextDistrict = () => {
    const nextIndex = (currentDistrictIndex + 1) % availableDistricts.length;
    setSelected(availableDistricts[nextIndex]);
    setCurrentImageIndex(0);
  };

  const prevDistrict = () => {
    const prevIndex = currentDistrictIndex === 0 ? availableDistricts.length - 1 : currentDistrictIndex - 1;
    setSelected(availableDistricts[prevIndex]);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selected && districtImages[selected]) {
      setCurrentImageIndex((prev) => 
        (prev + 1) % districtImages[selected].length
      );
    }
  };

  const prevImage = () => {
    if (selected && districtImages[selected]) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? districtImages[selected].length - 1 : prev - 1
      );
    }
  };

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-gray-500 text-sm uppercase tracking-wider mb-2">JHARKHAND</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Discover Jharkhand</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* MAP SECTION */}
          <div className="flex-1 relative">
            <ComposableMap
              projection="geoMercator"
              projectionConfig={{
                scale: 6000,
                center: [85.2799, 23.6102],
              }}
              width={550}
              height={450}
              className="w-full h-auto"
            >
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map((geo) => {
                    const district =
                      geo.properties?.District ||
                      geo.properties?.DISTRICT ||
                      geo.properties?.name;

                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        onClick={() => handleDistrictClick(district)}
                        style={{
                          default: {
                            fill: selected === district ? "#3b82f6" : "#e5e7eb",
                            stroke: "#ffffff",
                            strokeWidth: 1,
                            outline: "none",
                          },
                          hover: { 
                            fill: selected === district ? "#2563eb" : "#d1d5db", 
                            outline: "none",
                            cursor: "pointer"
                          },
                          pressed: { fill: "#1d4ed8", outline: "none" },
                        }}
                      />
                    );
                  })
                }
              </Geographies>
            </ComposableMap>

            {/* SVG for connecting lines and dots */}
            {/* <svg className="absolute top-0 left-0 w-full h-full pointer-events-none" viewBox="0 0 550 450"> */}
              {/* District center dots */}
              {/* <circle cx="484" cy="54" r="3" fill="#3b82f6" />
              <circle cx="467" cy="90" r="3" fill="#3b82f6" />
              <circle cx="412" cy="76" r="3" fill="#3b82f6" />
              <circle cx="440" cy="112" r="3" fill="#3b82f6" />
              <circle cx="357" cy="121" r="3" fill="#3b82f6" />
              <circle cx="385" cy="171" r="3" fill="#3b82f6" />
              <circle cx="429" cy="157" r="3" fill="#3b82f6" />
              <circle cx="302" cy="135" r="3" fill="#3b82f6" />
              <circle cx="330" cy="180" r="3" fill="#3b82f6" />
              <circle cx="264" cy="112" r="3" fill="#3b82f6" />
              <circle cx="247" cy="148" r="3" fill="#3b82f6" />
              <circle cx="264" cy="225" r="3" fill="#3b82f6" />
              <circle cx="275" cy="193" r="3" fill="#3b82f6" />
              <circle cx="165" cy="135" r="3" fill="#3b82f6" />
              <circle cx="429" cy="306" r="3" fill="#3b82f6" />
              <circle cx="357" cy="270" r="3" fill="#3b82f6" />
              <circle cx="220" cy="261" r="3" fill="#3b82f6" />
              <circle cx="264" cy="315" r="3" fill="#3b82f6" />
              <circle cx="137" cy="306" r="3" fill="#3b82f6" />
              <circle cx="137" cy="247" r="3" fill="#3b82f6" />
              <circle cx="165" cy="216" r="3" fill="#3b82f6" />
              <circle cx="99" cy="180" r="3" fill="#3b82f6" />
              <circle cx="110" cy="148" r="3" fill="#3b82f6" />
              <circle cx="66" cy="126" r="3" fill="#3b82f6" /> */}
              
              {/* Connecting lines */}
              {/* <line x1="484" y1="54" x2="520" y2="40" stroke="#6b7280" strokeWidth="1" />
              <line x1="467" y1="90" x2="510" y2="85" stroke="#6b7280" strokeWidth="1" />
              <line x1="412" y1="76" x2="450" y2="65" stroke="#6b7280" strokeWidth="1" />
              <line x1="440" y1="112" x2="480" y2="105" stroke="#6b7280" strokeWidth="1" />
              <line x1="357" y1="121" x2="400" y2="115" stroke="#6b7280" strokeWidth="1" />
              <line x1="385" y1="171" x2="430" y2="165" stroke="#6b7280" strokeWidth="1" />
              <line x1="429" y1="157" x2="470" y2="150" stroke="#6b7280" strokeWidth="1" />
              <line x1="302" y1="135" x2="340" y2="125" stroke="#6b7280" strokeWidth="1" />
              <line x1="330" y1="180" x2="370" y2="170" stroke="#6b7280" strokeWidth="1" />
              <line x1="264" y1="112" x2="300" y2="100" stroke="#6b7280" strokeWidth="1" />
              <line x1="247" y1="148" x2="280" y2="135" stroke="#6b7280" strokeWidth="1" />
              <line x1="264" y1="225" x2="300" y2="215" stroke="#6b7280" strokeWidth="1" />
              <line x1="275" y1="193" x2="315" y2="185" stroke="#6b7280" strokeWidth="1" />
              <line x1="165" y1="135" x2="120" y2="125" stroke="#6b7280" strokeWidth="1" />
              <line x1="429" y1="306" x2="470" y2="315" stroke="#6b7280" strokeWidth="1" />
              <line x1="357" y1="270" x2="400" y2="280" stroke="#6b7280" strokeWidth="1" />
              <line x1="220" y1="261" x2="180" y2="270" stroke="#6b7280" strokeWidth="1" />
              <line x1="264" y1="315" x2="300" y2="325" stroke="#6b7280" strokeWidth="1" />
              <line x1="137" y1="306" x2="90" y2="315" stroke="#6b7280" strokeWidth="1" />
              <line x1="137" y1="247" x2="90" y2="255" stroke="#6b7280" strokeWidth="1" />
              <line x1="165" y1="216" x2="120" y2="225" stroke="#6b7280" strokeWidth="1" />
              <line x1="99" y1="180" x2="50" y2="190" stroke="#6b7280" strokeWidth="1" />
              <line x1="110" y1="148" x2="60" y2="155" stroke="#6b7280" strokeWidth="1" />
              <line x1="66" y1="126" x2="20" y2="135" stroke="#6b7280" strokeWidth="1" /> */}
            {/* </svg> */}

            {/* District Names positioned outside the map */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
              {/* Right side labels */}
              <button onClick={() => handleDistrictClick("SAHIBGANJ")} className={`absolute top-[6%] left-[95%] text-xs font-semibold px-3 py-2 border rounded-md cursor-pointer transition-all pointer-events-auto ${
                selected === "SAHIBGANJ" ? "text-white bg-blue-600 border-blue-600 shadow-lg" : "text-blue-600 bg-white border-gray-300 hover:bg-blue-50"
              }`}>SAHIBGANJ</button>
              <button onClick={() => handleDistrictClick("PAKUR")} className={`absolute top-[17%] left-[93%] text-xs font-semibold px-3 py-2 border rounded-md cursor-pointer transition-all pointer-events-auto ${
                selected === "PAKUR" ? "text-white bg-blue-600 border-blue-600 shadow-lg" : "text-blue-600 bg-white border-gray-300 hover:bg-blue-50"
              }`}>PAKUR</button>
              <button onClick={() => handleDistrictClick("GODDA")} className={`absolute top-[12%] left-[82%] text-xs font-semibold px-3 py-2 border rounded-md cursor-pointer transition-all pointer-events-auto ${
                selected === "GODDA" ? "text-white bg-blue-600 border-blue-600 shadow-lg" : "text-blue-600 bg-white border-gray-300 hover:bg-blue-50"
              }`}>GODDA</button>
              <button onClick={() => handleDistrictClick("DUMKA")} className={`absolute top-[21%] left-[87%] text-xs font-semibold px-3 py-2 border rounded-md cursor-pointer transition-all pointer-events-auto ${
                selected === "DUMKA" ? "text-white bg-blue-600 border-blue-600 shadow-lg" : "text-blue-600 bg-white border-gray-300 hover:bg-blue-50"
              }`}>DUMKA</button>
              <button onClick={() => handleDistrictClick("DEOGHAR")} className={`absolute top-[23%] left-[73%] text-xs font-semibold px-3 py-2 border rounded-md cursor-pointer transition-all pointer-events-auto ${
                selected === "DEOGHAR" ? "text-white bg-blue-600 border-blue-600 shadow-lg" : "text-blue-600 bg-white border-gray-300 hover:bg-blue-50"
              }`}>DEOGHAR</button>
              <button onClick={() => handleDistrictClick("DHANBAD")} className={`absolute top-[33%] left-[78%] text-xs font-semibold px-3 py-2 border rounded-md cursor-pointer transition-all pointer-events-auto ${
                selected === "DHANBAD" ? "text-white bg-blue-600 border-blue-600 shadow-lg" : "text-blue-600 bg-white border-gray-300 hover:bg-blue-50"
              }`}>DHANBAD</button>
              <button onClick={() => handleDistrictClick("JAMTARA")} className={`absolute top-[30%] left-[85%] text-xs font-semibold px-3 py-2 border rounded-md cursor-pointer transition-all pointer-events-auto ${
                selected === "JAMTARA" ? "text-white bg-blue-600 border-blue-600 shadow-lg" : "text-blue-600 bg-white border-gray-300 hover:bg-blue-50"
              }`}>JAMTARA</button>
              
              {/* Central and top labels */}
              <button onClick={() => handleDistrictClick("GIRIDIH")} className={`absolute top-[25%] left-[62%] text-xs font-semibold px-3 py-2 border rounded-md cursor-pointer transition-all pointer-events-auto ${
                selected === "GIRIDIH" ? "text-white bg-blue-600 border-blue-600 shadow-lg" : "text-blue-600 bg-white border-gray-300 hover:bg-blue-50"
              }`}>GIRIDIH</button>
              <button onClick={() => handleDistrictClick("BOKARO")} className={`absolute top-[34%] left-[67%] text-xs font-semibold px-3 py-2 border rounded-md cursor-pointer transition-all pointer-events-auto ${
                selected === "BOKARO" ? "text-white bg-blue-600 border-blue-600 shadow-lg" : "text-blue-600 bg-white border-gray-300 hover:bg-blue-50"
              }`}>BOKARO</button>
              <button onClick={() => handleDistrictClick("KODARMA")} className={`absolute top-[18%] left-[55%] text-xs font-semibold px-3 py-2 border rounded-md cursor-pointer transition-all pointer-events-auto ${
                selected === "KODARMA" ? "text-white bg-blue-600 border-blue-600 shadow-lg" : "text-blue-600 bg-white border-gray-300 hover:bg-blue-50"
              }`}>KODARMA</button>
              <button onClick={() => handleDistrictClick("HAZARIBAGH")} className={`absolute top-[26%] left-[51%] text-xs font-semibold px-3 py-2 border rounded-md cursor-pointer transition-all pointer-events-auto ${
                selected === "HAZARIBAGH" ? "text-white bg-blue-600 border-blue-600 shadow-lg" : "text-blue-600 bg-white border-gray-300 hover:bg-blue-50"
              }`}>HAZARIBAGH</button>
              <button onClick={() => handleDistrictClick("RANCHI")} className={`absolute top-[43%] left-[55%] text-xs font-semibold px-3 py-2 border rounded-md cursor-pointer transition-all pointer-events-auto ${
                selected === "RANCHI" ? "text-white bg-blue-600 border-blue-600 shadow-lg" : "text-blue-600 bg-white border-gray-300 hover:bg-blue-50"
              }`}>RANCHI</button>
              <button onClick={() => handleDistrictClick("RAMGARH")} className={`absolute top-[37%] left-[57%] text-xs font-semibold px-3 py-2 border rounded-md cursor-pointer transition-all pointer-events-auto ${
                selected === "RAMGARH" ? "text-white bg-blue-600 border-blue-600 shadow-lg" : "text-blue-600 bg-white border-gray-300 hover:bg-blue-50"
              }`}>RAMGARH</button>
              
              {/* Left side labels */}
              <button onClick={() => handleDistrictClick("CHATRA")} className={`absolute top-[25%] left-[22%] text-xs font-semibold px-3 py-2 border rounded-md cursor-pointer transition-all pointer-events-auto ${
                selected === "CHATRA" ? "text-white bg-blue-600 border-blue-600 shadow-lg" : "text-blue-600 bg-white border-gray-300 hover:bg-blue-50"
              }`}>CHATRA</button>
              <button onClick={() => handleDistrictClick("LOHARDAGA")} className={`absolute top-[43%] left-[22%] text-xs font-semibold px-3 py-2 border rounded-md cursor-pointer transition-all pointer-events-auto ${
                selected === "LOHARDAGA" ? "text-white bg-blue-600 border-blue-600 shadow-lg" : "text-blue-600 bg-white border-gray-300 hover:bg-blue-50"
              }`}>LOHARDAGA</button>
              <button onClick={() => handleDistrictClick("GUMLA")} className={`absolute top-[51%] left-[16%] text-xs font-semibold px-3 py-2 border rounded-md cursor-pointer transition-all pointer-events-auto ${
                selected === "GUMLA" ? "text-white bg-blue-600 border-blue-600 shadow-lg" : "text-blue-600 bg-white border-gray-300 hover:bg-blue-50"
              }`}>GUMLA</button>
              <button onClick={() => handleDistrictClick("LATEHAR")} className={`absolute top-[38%] left-[9%] text-xs font-semibold px-3 py-2 border rounded-md cursor-pointer transition-all pointer-events-auto ${
                selected === "LATEHAR" ? "text-white bg-blue-600 border-blue-600 shadow-lg" : "text-blue-600 bg-white border-gray-300 hover:bg-blue-50"
              }`}>LATEHAR</button>
              <button onClick={() => handleDistrictClick("PALAMU")} className={`absolute top-[31%] left-[11%] text-xs font-semibold px-3 py-2 border rounded-md cursor-pointer transition-all pointer-events-auto ${
                selected === "PALAMU" ? "text-white bg-blue-600 border-blue-600 shadow-lg" : "text-blue-600 bg-white border-gray-300 hover:bg-blue-50"
              }`}>PALAMU</button>
              <button onClick={() => handleDistrictClick("GARHWA")} className={`absolute top-[27%] left-[4%] text-xs font-semibold px-3 py-2 border rounded-md cursor-pointer transition-all pointer-events-auto ${
                selected === "GARHWA" ? "text-white bg-blue-600 border-blue-600 shadow-lg" : "text-blue-600 bg-white border-gray-300 hover:bg-blue-50"
              }`}>GARHWA</button>
              
              {/* Bottom labels */}
              <button onClick={() => handleDistrictClick("EAST SINGHBHUM")} className={`absolute top-[63%] left-[85%] text-xs font-semibold px-3 py-2 border rounded-md cursor-pointer transition-all pointer-events-auto ${
                selected === "EAST SINGHBHUM" ? "text-white bg-blue-600 border-blue-600 shadow-lg" : "text-blue-600 bg-white border-gray-300 hover:bg-blue-50"
              }`}>EAST SINGHBHUM</button>
              <button onClick={() => handleDistrictClick("SARAIKELA-KHARSAWAN")} className={`absolute top-[56%] left-[73%] text-xs font-semibold px-3 py-2 border rounded-md cursor-pointer transition-all pointer-events-auto ${
                selected === "SARAIKELA-KHARSAWAN" ? "text-white bg-blue-600 border-blue-600 shadow-lg" : "text-blue-600 bg-white border-gray-300 hover:bg-blue-50"
              }`}>SARAIKELA-KHARSAWAN</button>
              <button onClick={() => handleDistrictClick("KHUNTI")} className={`absolute top-[54%] left-[33%] text-xs font-semibold px-3 py-2 border rounded-md cursor-pointer transition-all pointer-events-auto ${
                selected === "KHUNTI" ? "text-white bg-blue-600 border-blue-600 shadow-lg" : "text-blue-600 bg-white border-gray-300 hover:bg-blue-50"
              }`}>KHUNTI</button>
              <button onClick={() => handleDistrictClick("WEST SINGHBHUM")} className={`absolute top-[65%] left-[55%] text-xs font-semibold px-3 py-2 border rounded-md cursor-pointer transition-all pointer-events-auto ${
                selected === "WEST SINGHBHUM" ? "text-white bg-blue-600 border-blue-600 shadow-lg" : "text-blue-600 bg-white border-gray-300 hover:bg-blue-50"
              }`}>WEST SINGHBHUM</button>
              <button onClick={() => handleDistrictClick("SIMDEGA")} className={`absolute top-[63%] left-[16%] text-xs font-semibold px-3 py-2 border rounded-md cursor-pointer transition-all pointer-events-auto ${
                selected === "SIMDEGA" ? "text-white bg-blue-600 border-blue-600 shadow-lg" : "text-blue-600 bg-white border-gray-300 hover:bg-blue-50"
              }`}>SIMDEGA</button>
            </div>
          </div>

          {/* INFO PANEL */}
          <div className="w-full lg:w-96 flex flex-col items-center">
            {/* District Navigation Arrows */}
            <div className="flex items-center gap-4 mb-6">
              <button
                onClick={prevDistrict}
                className="w-12 h-12 bg-white shadow-lg hover:shadow-xl rounded-full flex items-center justify-center text-gray-600 hover:text-blue-600 transition-all"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <span className="text-sm text-gray-500 font-medium">
                {currentDistrictIndex + 1} of {availableDistricts.length}
              </span>
              <button
                onClick={nextDistrict}
                className="w-12 h-12 bg-white shadow-lg hover:shadow-xl rounded-full flex items-center justify-center text-gray-600 hover:text-blue-600 transition-all"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {selected ? (
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-full">
                {/* Image Display */}
                <div className="relative h-64 bg-gray-200">
                  {districtImages[selected] && districtImages[selected].length > 0 ? (
                    <>
                      <Image
                        src={districtImages[selected][currentImageIndex]}
                        alt={`${selected} ${currentImageIndex + 1}`}
                        fill
                        className="object-cover"
                      />
                      
                      {/* Navigation Arrows for Images */}
                      {districtImages[selected].length > 1 && (
                        <>
                          <button
                            onClick={prevImage}
                            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-md transition-all"
                          >
                            <ChevronLeft className="w-5 h-5 text-gray-700" />
                          </button>
                          <button
                            onClick={nextImage}
                            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-md transition-all"
                          >
                            <ChevronRight className="w-5 h-5 text-gray-700" />
                          </button>
                        </>
                      )}

                      {/* Image Indicators */}
                      {districtImages[selected].length > 1 && (
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                          {districtImages[selected].map((_, idx) => (
                            <button
                              key={idx}
                              onClick={() => setCurrentImageIndex(idx)}
                              className={`w-2 h-2 rounded-full transition-all ${
                                idx === currentImageIndex ? "bg-white" : "bg-white/50"
                              }`}
                            />
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <p className="text-gray-500">No images available</p>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">{selected}</h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {districtDescriptions[selected] || "Discover the beauty and culture of this amazing district."}
                  </p>

                  {/* Explore Button */}
                  <button
                    onClick={() => router.push(`/district/${selected.toLowerCase()}`)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-colors"
                  >
                    Explore {selected} →
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl shadow-lg p-8 text-center w-full">
                <p className="text-gray-500">Select a district on the map to view details</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}