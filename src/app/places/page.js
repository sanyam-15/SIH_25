"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getAllPlaces } from "@/app/data/places";
import { 
  Star, 
  MapPin, 
  ArrowRight,
  Search,
  Filter,
  Grid,
  List,
  Mountain,
  Waves,
  TreePine,
  Building
} from "lucide-react";

export default function PlacesPage() {
  const [places] = useState(getAllPlaces());
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState("grid");

  const categories = [
    { name: "All", icon: Grid, count: places.length },
    { name: "Waterfall", icon: Waves, count: places.filter(p => p.category === "Waterfall").length },
    { name: "Temple", icon: Building, count: places.filter(p => p.category === "Temple").length },
    { name: "Hill Station", icon: Mountain, count: places.filter(p => p.category === "Hill Station").length },
    { name: "Forest", icon: TreePine, count: places.filter(p => p.category === "Forest").length }
  ];

  const filteredPlaces = places.filter(place => {
    const matchesSearch = place.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         place.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || place.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryIcon = (category) => {
    switch(category) {
      case "Waterfall": return Waves;
      case "Temple": return Building;
      case "Hill Station": return Mountain;
      case "Forest": return TreePine;
      default: return MapPin;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-2xl font-bold text-gray-900">Explore Places</h1>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Home</Link>
              <Link href="/itineraries" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Itineraries</Link>
              <Link href="/plan-trip" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Plan Trip</Link>
            </nav>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/districtgems/img1.jpg"
            alt="Jharkhand landscape"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-2000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Discover Amazing Places
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto">
            Explore the hidden gems and popular destinations of Jharkhand. From majestic waterfalls to ancient temples.
          </p>
          
          {/* Diamond Section with Baba Baidyanath Image */}
          <div className="flex justify-center mb-12">
            <div className="relative">
              <div className="w-48 h-48 transform rotate-45 overflow-hidden border-4 border-white shadow-2xl">
                <div className="w-full h-full transform -rotate-45 scale-150">
                  <Image
                    src="/images/places/baba_baidyanath.png"
                    alt="Baba Baidyanath Temple"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white text-gray-900 px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                Featured Place
              </div>
            </div>
          </div>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search places by name or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl border-0 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white focus:ring-opacity-50 bg-white/90 backdrop-blur-sm"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Controls */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`flex items-center px-4 py-2 rounded-full font-medium transition-colors ${
                    selectedCategory === category.name
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 border border-gray-200'
                  }`}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {category.name}
                  <span className="ml-2 text-xs opacity-75">({category.count})</span>
                </button>
              );
            })}
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">View:</span>
            <div className="flex bg-white rounded-lg border border-gray-200 p-1">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded ${viewMode === "grid" ? 'bg-blue-600 text-white' : 'text-gray-600 hover:text-blue-600'}`}
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded ${viewMode === "list" ? 'bg-blue-600 text-white' : 'text-gray-600 hover:text-blue-600'}`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredPlaces.length} of {places.length} places
            {searchTerm && ` for "${searchTerm}"`}
            {selectedCategory !== "All" && ` in ${selectedCategory}`}
          </p>
        </div>

        {/* Places Grid/List */}
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPlaces.map((place) => {
              const CategoryIcon = getCategoryIcon(place.category);
              return (
                <Link 
                  key={place.id} 
                  href={`/place/${place.id}`}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={place.images[0]}
                      alt={place.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-white text-gray-800 px-3 py-1 rounded-full text-sm font-medium shadow-sm flex items-center">
                        <CategoryIcon className="w-4 h-4 mr-1" />
                        {place.category}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3">
                      <div className="bg-black bg-opacity-50 text-white px-2 py-1 rounded-full text-sm flex items-center">
                        <Star className="w-3 h-3 text-yellow-400 fill-current mr-1" />
                        {place.rating}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {place.name}
                    </h3>
                    <div className="flex items-center text-gray-600 mb-3">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="text-sm">{place.location}</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {place.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                        <span>{place.rating} ({place.reviewCount} reviews)</span>
                      </div>
                      <div className="flex items-center text-blue-600 font-medium">
                        <span className="text-sm">Explore</span>
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredPlaces.map((place) => {
              const CategoryIcon = getCategoryIcon(place.category);
              return (
                <Link 
                  key={place.id} 
                  href={`/place/${place.id}`}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 flex items-center gap-6 group"
                >
                  {/* Image */}
                  <div className="relative w-32 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                    <Image
                      src={place.images[0]}
                      alt={place.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {place.name}
                      </h3>
                      <div className="flex items-center text-sm text-gray-500">
                        <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                        <span>{place.rating} ({place.reviewCount})</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 mb-3">
                      <div className="flex items-center text-gray-600">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span className="text-sm">{place.location}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <CategoryIcon className="w-4 h-4 mr-1" />
                        <span className="text-sm">{place.category}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {place.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="flex-shrink-0">
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
              );
            })}
          </div>
        )}

        {/* No Results */}
        {filteredPlaces.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No places found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search terms or category filters.
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
              }}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>

      {/* Call to Action */}
      <div className="bg-blue-600 py-16 mt-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Plan Your Perfect Journey
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Found places you love? Create a custom itinerary that includes your favorite destinations.
          </p>
          <Link 
            href="/plan-trip"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            Create Custom Itinerary
          </Link>
        </div>
      </div>
    </div>
  );
}
