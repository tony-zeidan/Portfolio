import React, { useState } from "react";

const DungeonRunner = () => {

  const [currentInstruction, setCurrentInstruction] = useState("");



  return (
      <div
          name="dungeonrunner"
          id="dungeonrunner"
          className="w-full h-screen bg-[#0a192f] text-gray-300"
      >
      <div className="max-w-[500px] mx-auto p-4 flex flex-col justify-center w-full rounded overflow-hidden shadow-lg">
          <div>

          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Dungeon Runner</div>
            <p className="text-gray-400 text-base">
              Will you survive?
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Reset</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Back one</span>
          </div>
      </div>
      </div>
  );
};
export default DungeonRunner;