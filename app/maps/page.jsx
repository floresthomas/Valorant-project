"use client";
import React, { useState, useEffect } from "react";

const page = () => {
  const [maps, setMaps] = useState([]);
  const [selectedMap, setSelectedMap] = useState(null);

  const allMaps = () => {
    const url = "https://valorant-api.com/v1/maps";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMaps(data.data));
  };

  useEffect(() => {
    allMaps();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <nav className="bg-white shadow-md py-4 px-8 flex justify-center">
        <ul className="flex space-x-4">
          {maps.map((w) => (
            <li key={w.id}>
              <button onClick={() => setSelectedMap(w)}>{w.displayName}</button>
            </li>
          ))}
        </ul>
      </nav>

      <main className="flex-1 p-8 flex flex-col items-center justify-center">
        {selectedMap ? (
          <>
            <h1 className="text-3xl font-medium text-gray-900 mb-8">
              {selectedMap.displayName}
            </h1>
            <img
              src={selectedMap.splash}
              alt={selectedMap.displayName}
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
          </>
        ) : (
          <p className="text-2xl text-gray-500">Select the map</p>
        )}
      </main>
    </div>
  );
};

export default page;
