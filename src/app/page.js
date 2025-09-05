import Image from "next/image";
import Chatbot from "./components/Chatbot";
import VideoSlider from "./components/homepage/VideoSlider";
import DistrictGems from "./components/homepage/District-gems";
import Footer from "./components/homepage/Footer";
import TourismLeaders from "./components/homepage/Message";

export default function Home() {
  return (
    <div className="min-h-screen font-sans flex flex-col">
      {/* Hero Section */}
      <VideoSlider />
      <Chatbot />
      <DistrictGems />
      <TourismLeaders />;
      <Footer/>
    </div>
  );
}

