import React, { useState } from "react";

const DungeonRunner = () => {

  const roomMapping = {
    spawn: {
      exits: {
        north: "hallway1",
        south: "hallway3",
        east: "hallway2",
        west: "hallway7",
      },
      name: "Spawn",
      info: "There is nothing in here..."
    },
    admin: {
      exits: {
        east: "hallway7",
      },
      name: "Administrative Desk",
      info: "Nobody is at the front-desk...",
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
    hallway3: {
      exits: {
        north: "spawn",
        south: "hallway4"
      },
      name: "Hallway",
      info: "You see a door at the end...",
    },
    hallway4: {
      exits: {
        north: "hallway3",
        south: "hallway5"
      },
      name: "Hallway",
      info: "This looks like a long hallway...",
    },
    hallway5: {
      exits: {
        north: "hallway4",
        south: "hallway6"
      },
      name: "Hallway",
      info: "Is this hallway ever going to end?",
    },
    hallway6: {
      exits: {
        north: "spawn",
        south: "nothing"
      },
      name: "Hallway",
      info: "I think I can see something past that door...",
    },
    nothing: {
      exits: {
        north: "hallway6",
      },
      name: "Void",
      info: "Nothingness...",
    },
    hallway7: {
      exits: {
        east: "spawn",
        west: "admin",
      },
      name: "Hallway",
      info: "You see a door at the end...",
    },
    courtyard: {
      exits: {
        west: "hallway2",
        north: "lecturehall",
        east: "graveyard",
        south: "studio",
      },
      name: "Courtyard",
      info: "There seems to be a lot to do here..."
    },
    graveyard: {
      exits: {
        west: "courtyard",
      },
      name: "Graveyard",
      info: "A little more populated then usual...",
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

  const [currRoom, setCurrRoom] = useState(roomMapping['spawn']);
  const [alive, setAlive] = useState(true);

  const getCurrRoom = () => {

    console.log(currRoom)

    let exits = Object.keys(currRoom.exits);

    return (
      <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">DungeonRunner</div>
      {alive ? (
        <div>
          <p className="text-gray-300 text-medium">
          {`You have found yourself in the ${currRoom.name}.`}
          </p>
          <p className="text-gray-400 text-base">
              {currRoom.info}
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
    setCurrRoom(roomMapping['spawn']);
  }

  const handleSubmit = (dir) => {
    if (dir in currRoom.exits) {
      setCurrRoom(roomMapping[currRoom.exits[dir]]);
    } else {
      alert("There is no exit that way!");
    }
  }

  const getMoveButtons = () => {
    return (
      <div>
        {("north" in currRoom.exits) ? (<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" onClick={()=>{handleSubmit("north")}}>North</span>): (<></>)}
        {("south" in currRoom.exits) ? (<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" onClick={()=>{handleSubmit("south")}}>South</span>): (<></>)}
        {("east" in currRoom.exits) ? (<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" onClick={()=>{handleSubmit("east")}}>East</span>): (<></>)}
        {("west" in currRoom.exits) ? (<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" onClick={()=>{handleSubmit("west")}}>West</span>): (<></>)}
      </div>
    )
  }

  return (
    <div className="max-w-[500px] mx-auto p-4 flex flex-col justify-center w-full rounded overflow-hidden shadow-lg">
    {getCurrRoom()}
    <div className="px-6 pt-4 pb-2">
      {getMoveButtons()}
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" onClick={handleSubmit}>Submit</span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" onClick={handleReset}>Reset</span>
    </div>
</div>
  );
};
export default DungeonRunner;