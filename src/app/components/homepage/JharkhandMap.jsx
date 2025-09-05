"use client";
import { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const geoUrl = "/uttar-pradesh.json"; // must be TopoJSON

export default function UttarPradeshMap() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="flex bg-white">
      {/* Map */}
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 5000,
          center: [80.9462, 26.8467], // UP center
        }}
      >
        {/* 👇 specify the TopoJSON object */}
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
                      fill: selected === district ? "#000" : "#1e40af",
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

      {/* Info Panel */}
      <div className="ml-6 p-4 border rounded w-1/3">
        {selected ? (
          <>
            <h2 className="font-bold text-xl">{selected}</h2>
            <p>Show district info here…</p>
          </>
        ) : (
          <p>Select a district on the map</p>
        )}
      </div>
    </div>
  );
}
