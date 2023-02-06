import React, { useState } from "react";

const DungeonRunner = () => {

  const [currRoom, setCurrRoom] = useState("spawn");
  const [currMove, setCurrMove] = useState(null);
  const [alive, setAlive] = useState(true);

  const roomMapping = {
    spawn: {
      exits: {
        north: "hallway1",
        south: "room5",
        east: "hallway2",
      },
      name: "Spawn",
      info: "There is nothing in here..."
    },
    hallway1: {
      exits: {
        north: "lab",
        south: "spawn",
      },
      name: "Hallway",
      info: "You see a door at the end..."
    },
    hallway2: {
      exits: {
        east: "courtyard",
        west: "spawn",
      },
      name: "Hallway",
      info: "You see a door at the end..."
    },
    courtyard: {
      exits: {
        west: "hallway2",
        north: "lecturehall",
        south: "studio",
      },
      name: "Courtyard",
      info: "There seems to be a lot to do here..."
    },
    lecturehall: {
      exits: {
        south: "courtyard",
      },
      name: "Lecture Hall",
      info: "Seems like a lot of students were recently here..."
    },
    studio: {
      exits: {
        north: "courtyard",
      },
      name: "Studio",
      info: "All the recording equipment is lying on the floor..."
    },
    lab: {
      exits: {
        south: "hallway1",
      },
      name: "Laboratory",
      info: "You made it to the lab! You see an evil doctor... RUN.",
    }
  }

  const getCurrRoom = () => {

    let room = roomMapping[currRoom];
    let exits = Object.keys(room.exits);

    return (
      <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">DungeonRunner</div>
      {alive ? (
        <div>
          <p className="text-gray-300 text-medium">
          {`You have found yourself in the ${room.name}.`}
          </p>
          <p className="text-gray-400 text-base">
              {room.info}
          </p>
          <p className="text-gray-400 text-base">
            {`You have exits to the ${exits}.`}
          </p>
        </div>
      ) : (
        <div>
          <p className="text-gray-300 text-medium">
          You have died!
          </p>
        </div>
      )}
    </div>
    );
  }

  const handleReset = (e) => {
    e.preventDefault();
    setCurrRoom("spawn");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let room = roomMapping[currRoom];
    console.log(currMove);
    console.log(room.exits);
    console.log(currMove in room.exits)
    if (currMove in room.exits) {
      setCurrRoom(room.exits[currMove]);
    } else {
      alert("There is no exit that way!");
    }
  }

  return (
    <div className="max-w-[500px] mx-auto p-4 flex flex-col justify-center w-full rounded overflow-hidden shadow-lg">
    {getCurrRoom()}
    
    <div className="px-6 pt-4 pb-2">
    <input className="inline-block bg-gray-200 rounded-full px-3 py-1 text-md font-semibold text-gray-700 mr-2 mb-2" type='text' value={currMove} onChange={(e)=>{setCurrMove(e.target.value)}}/>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" onClick={handleSubmit}>Submit</span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" onClick={handleReset}>Reset</span>
    </div>
</div>
  );
};
export default DungeonRunner;