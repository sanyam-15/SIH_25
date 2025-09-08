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
    <div className="my-20">
      {/* Form Section */}
      <div className="footer-font text-white p-8 w-[980px] max-w-full mx-auto mb-12 rounded-3xl shadow-2xl border" style={{background:'linear-gradient(180deg, rgba(46,125,50,0.95), rgba(27,94,32,0.95))', borderColor:'rgba(255,255,255,0.08)'}}>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Craft your Jharkhand itinerary</h2>
        <p className="text-sm md:text-base mt-2 mb-8 opacity-90">
          Tell us how you like to travel and we’ll generate a smart, multilingual plan with sights, food and travel tips.
        </p>

        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            <label className="block mb-2 text-sm uppercase tracking-wide opacity-90">Trip length (days): <span className="font-semibold">{days}</span></label>
            <input
            type="range"
            min="1"
            max="30"
            value={days}
            onChange={(e) => setDays(e.target.value)}
            className="w-full accent-[var(--color-accent)]"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm uppercase tracking-wide opacity-90">Starting city</label>
            <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full p-3 rounded-lg text-black"
          >
            <option value="Ranchi">Ranchi</option>
            <option value="Delhi">Delhi</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Bangalore">Bangalore</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 text-sm uppercase tracking-wide opacity-90">Interests</label>
            <input
            type="text"
            value={interests}
            onChange={(e) => setInterests(e.target.value)}
            placeholder="e.g. waterfalls, wildlife, heritage, food"
            className="w-full p-3 rounded-lg text-black"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm uppercase tracking-wide opacity-90">Budget</label>
            <select
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="w-full p-3 rounded-lg text-black"
          >
            <option value="Low">Low</option>
            <option value="Mid">Mid</option>
            <option value="High">High</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl font-semibold disabled:opacity-50 shadow-md transition-colors"
            style={{backgroundColor:'var(--color-secondary)', color:'var(--color-white)'}}
          >
            {loading ? "Planning..." : "Start Planning"}
            </button>
          </div>
        </form>

        <div className="mt-6 text-xs opacity-80 flex items-start gap-2">
          <span>💡</span>
          <p>Tip: Switch language from the navbar; responses adapt automatically to your choice.</p>
        </div>

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
