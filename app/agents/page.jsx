"use client";

import React, { useEffect, useState } from "react";

const Page = () => {
  const allAgents = () => {
    const url = "https://valorant-api.com/v1/agents";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAgents(data.data));
  };

  useEffect(() => {
    allAgents();
  }, []);

  const [selectedAbility, setSelectedAbility] = useState(null);
  const [agents, setAgents] = useState([]);

  const handleAbilityClick = (ability) => {
    setSelectedAbility(ability);
  };

  const handleModalClose = () => {
    setSelectedAbility(null);
  };

  return (
    <div className="bg-gray-900">
      {agents.map((a) => (
        <div
          className="bg-[#ece8e1] ml-14 mr-14 font-mono flex flex-col md:flex-row items-center justify-center"
          key={a.displayName}
        >
          <div className="md:order-2">
            <img
              className="w-[500px] h-[300px] transition duration-300 ease-in-out hover:scale-110"
              src={a.fullPortraitV2}
            />
          </div>
          <div className="md:order-1 md:mr-8 ml-2">
            <h1 className="text-center md:text-left text-lg font-bold">
              {a.displayName}
            </h1>
            <p className="text-center md:text-left">{a.description}</p>
            <div className="flex flex-row mt-7">
              {a.abilities.map((p) => (
                <div key={p.description} className="relative">
                  <button onClick={() => handleAbilityClick(p)}>
                    <img
                      className="w-[80px] h-[80px] bg-black hover:opacity-70"
                      src={p.displayIcon}
                      alt=""
                      title={p.description}
                    />
                  </button>
                  {selectedAbility &&
                    selectedAbility.description === p.description && (
                      <div className="fixed top-0 left-0 w-screen h-screen bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white rounded-md p-4 max-w-md">
                          <h2 className="text-lg font-bold mb-2">
                            {p.displayName}
                          </h2>
                          <p className="mb-4">{p.description}</p>
                          <button
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                            onClick={() => handleModalClose()}
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    )}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Page;
