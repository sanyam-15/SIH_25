"use client";
import { useState } from "react";
import ItineraryCard from "@/app/components/core/ItineraryCard";

export default function PlanTripForm() {
  const [days, setDays] = useState(4);
  const [city, setCity] = useState("Ranchi");
  const [interests, setInterests] = useState("waterfalls, nature, culture");
  const [budget, setBudget] = useState("Mid");
  const [itinerary, setItinerary] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setItinerary(null);

    const request = {
      tripLength: days,
      startingCity: city,
      interests: interests.split(",").map((i) => i.trim()),
      budget,
    };

    try {
      // 👇 Replace with your AI API call
      // const res = await fetch("/api/itinerary", { method: "POST", body: JSON.stringify(request) });
      // const data = await res.json();

      // Sample mocked response
      const data = {
        itinerary: [
          {
            day: 1,
            title: "Sailani Island & Backwaters",
            description:
              "Arrive in Indore, transfer to Sailani Island. Enjoy boating, scenic views, and water sports.",
            image: "/images/districts/ranchi1.jpg",
            travelInfo: [
              { type: "flight", detail: "Indore Airport (78 km)" },
              { type: "train", detail: "Omkareshwar Station (70 km)" },
              { type: "car", detail: "Taxis from Indore available" },
            ],
            activities: ["Boat ride", "Sunset point", "Photography"],
            food: ["Try local poha & jalebi breakfast", "Fish curry at lakeside dhaba"],
            accommodation: ["Lakeview Resort", "Budget guesthouse near backwaters"],
            bestTime: "Morning till evening",
            tips: ["Carry swimwear", "Book resort in advance"],
          },
          {
            day: 2,
            title: "Cultural Day in Maheshwar",
            description:
              "Explore Maheshwar’s temples, ghats, and local handloom sarees. Attend evening aarti at the river.",
            image: "/images/districts/ranchi1.jpg",
            travelInfo: [
              { type: "flight", detail: "Indore Airport (91 km)" },
              { type: "train", detail: "Khandwa Station (110 km)" },
            ],
            activities: ["Temple visit", "Shopping for Maheshwari sarees", "Attend evening aarti"],
            food: ["Local thali at Mandu Bhojanalaya", "Street snacks near ghats"],
            accommodation: ["Ahilya Fort Heritage Hotel", "Mid-range homestay"],
            bestTime: "Full day",
            tips: ["Wear modest clothing for temples", "Keep cash for local shops"],
          },
        ],
      };

      setItinerary(data.itinerary);
    } catch (err) {
      setError("Failed to fetch itinerary. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Form Section */}
      <div className="bg-gradient-to-b from-[#322d2f] to-[#3f3639] text-white p-6 w-[920px] mx-auto mb-10 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold mb-2">Plan Your Trip</h2>
        <p className="text-sm mb-6">
          Fill a few details and the assistant will generate a multilingual, customizable itinerary.
        </p>

        <form onSubmit={handleSubmit}>
          <label className="block mb-2">Trip length (days): {days}</label>
          <input
            type="range"
            min="1"
            max="30"
            value={days}
            onChange={(e) => setDays(e.target.value)}
            className="w-full mb-4"
          />

          <label className="block mb-2">Starting city</label>
          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full p-2 rounded text-black mb-4"
          >
            <option value="Ranchi">Ranchi</option>
            <option value="Delhi">Delhi</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Bangalore">Bangalore</option>
          </select>

          <label className="block mb-2">Interests</label>
          <input
            type="text"
            value={interests}
            onChange={(e) => setInterests(e.target.value)}
            className="w-full p-2 rounded text-black mb-4"
          />

          <label className="block mb-2">Budget</label>
          <select
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="w-full p-2 rounded text-black mb-4"
          >
            <option value="Low">Low</option>
            <option value="Mid">Mid</option>
            <option value="High">High</option>
          </select>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-red-500 hover:bg-red-600 py-2 rounded-lg font-semibold disabled:opacity-50"
          >
            {loading ? "Planning..." : "Start Planning"}
          </button>
        </form>

        <p className="text-xs mt-4 opacity-80">
          💡 Tip: You can change language from the top navbar. The assistant replies in your selected language.
        </p>

        {error && <p className="text-red-400 mt-4">{error}</p>}
      </div>

      {/* Itinerary Section */}
      {itinerary && (
        <div className="max-w-5xl mx-auto space-y-10">
          {itinerary.map((item) => (
            <ItineraryCard key={item.day} {...item} />
          ))}
        </div>
      )}
    </div>
  );
}
