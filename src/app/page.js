import Image from "next/image";
import Chatbot from "./components/Chatbot";
import VideoSlider from "./components/homepage/VideoSlider";
import DistrictGems from "./components/homepage/District-gems";
import Footer from "./components/homepage/Footer";
import TourismLeaders from "./components/homepage/Message";
import JharkhandMap from "./components/homepage/JharkhandMap";
import Handicrafts from "./components/homepage/Handicrafts";
import Navbar from "./components/homepage/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen font-sans flex flex-col">
      {/* Hero Section */}
      <Navbar />
      <VideoSlider />
      <Chatbot />
      <DistrictGems />
      <Handicrafts />
      <TourismLeaders />
      <JharkhandMap />
      <Footer />
    </div>
  );
}

