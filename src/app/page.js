import Image from "next/image";
import Chatbot from "./components/Chatbot";

export default function Home() {
  return (
    <div className="min-h-screen font-sans flex flex-col">
      {/* Hero Section */}
      <header className="relative h-[70vh] w-full bg-[url('https://www.jharkhand.gov.in/images/banner.jpg')] bg-cover bg-center flex items-center justify-center text-white">
        <div className="bg-black/50 p-6 rounded-xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold">Discover Jharkhand</h1>
          <p className="mt-4 text-lg md:text-xl">
            Land of Forests, Waterfalls & Tribal Culture
          </p>
          <a
            href="#explore"
            className="mt-6 inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium"
          >
            Explore Now
          </a>
        </div>
      </header>

      {/* Explore Section */}
      <section
        id="explore"
        className="container mx-auto py-16 px-6 grid md:grid-cols-3 gap-8"
      >
        <div className="p-6 rounded-xl shadow bg-white hover:shadow-lg transition">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShJYQu82q5Y1xRlWTkWrIReC1qYZnrY6yb0W74IUCvcVoNroyfmEgizAI7KdPUnXDeISs&usqp=CAU"
            alt="Waterfalls"
            className="rounded-lg mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">Waterfalls</h2>
          <p className="text-gray-600 text-sm">
            Witness the stunning beauty of Hundru, Dassam and Jonha falls.
          </p>
        </div>
        <div className="p-6 rounded-xl shadow bg-white hover:shadow-lg transition">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRxcpbMYBJ1Fap3n0KDE09Y_QFNa9mT-QB8ZH7gkLYAt4AL8l0lYw7yZSaYpzO1Es4zMs&usqp=CAU"
            alt="Wildlife"
            className="rounded-lg mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">Wildlife</h2>
          <p className="text-gray-600 text-sm">
            Explore Betla National Park and Palamau Tiger Reserve.
          </p>
        </div>
        <div className="p-6 rounded-xl shadow bg-white hover:shadow-lg transition">
          <img
            src="https://www.theindiatourism.com/images/Jharkhand-tour.jpg"
            alt="Culture"
            className="rounded-lg mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">Culture</h2>
          <p className="text-gray-600 text-sm">
            Experience rich tribal traditions, festivals and handicrafts.
          </p>
        </div>
      </section>
      <Chatbot />

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 text-center py-6 mt-auto">
        <p>© {new Date().getFullYear()} Jharkhand Tourism. All rights reserved.</p>
      </footer>
    </div>
  );
}

