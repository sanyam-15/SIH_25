"use client";
import { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const geoUrl = "/jharkhand.json"; // put TopoJSON/GeoJSON in public folder

export default function JharkhandMap() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="flex flex-col md:flex-row items-start gap-6 bg-gray-50 p-6 rounded-xl shadow-lg">
      {/* MAP */}
      <div className="flex-1 bg-white rounded-xl shadow-md p-4">
        <h2 className="text-lg font-semibold mb-2 text-gray-800">
          Jharkhand District Map
        </h2>
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            scale: 6000,
            center: [85.2799, 23.6102], // Ranchi center
          }}
          width={550}
          height={400}
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
                    onClick={() => setSelected(district)}
                    style={{
                      default: {
                        fill: selected === district ? "#f97316" : "#1e40af",
                        stroke: "#fff",
                        strokeWidth: 0.5,
                        outline: "none",
                      },
                      hover: { fill: "#fb923c", outline: "none" },
                      pressed: { fill: "#f97316", outline: "none" },
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ComposableMap>
      </div>

      {/* INFO PANEL */}
      <div className="w-full md:w-1/3 bg-white rounded-xl shadow-md p-6 space-y-4">
        {selected ? (
          <>
            <h2 className="text-2xl font-bold text-gray-900">{selected}</h2>
            <p className="text-gray-600">
              Detailed information about <b>{selected}</b> will be shown here.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                Population: N/A
              </span>
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                Area: N/A
              </span>
              <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                Language: Hindi
              </span>
            </div>
          </>
        ) : (
          <div className="text-gray-500 text-center">
            <p>Select a district on the map to view details</p>
          </div>
        )}
      </div>
    </div>
  );
}
