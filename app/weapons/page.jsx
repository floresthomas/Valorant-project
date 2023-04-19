"use client";
import React, { useState, useEffect } from "react";

const page = () => {
  const [weapons, setWeapons] = useState([]);

  const allWeapons = () => {
    const url = "https://valorant-api.com/v1/weapons";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setWeapons(data.data));
  };

  useEffect(() => {
    allWeapons();
  }, []);

  return (
    <div className="flex flex-wrap justify-center bg-gray-900">
      {weapons.map((w) => (
        <div key={w.id}>
        <div
          
          className="bg-[#ece8e1] w-80 m-4 p-6  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        >
          <img src={w.displayIcon} alt={w.displayName} className="w-[300px] h-[100px]" />
          <p class="my-3 font-normal text-gray-500 dark:text-gray-400">
            {w.displayName}
          </p>
          <p class="text-center">$4000</p>
        </div>
        </div>
      ))}
    </div>
  );
};

export default page;
