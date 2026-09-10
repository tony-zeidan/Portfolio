import React, { useState } from "react";
import GameButton from "../GameButton";

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
    outcome: "win",
    outcomeText: "The front door is unlocked. You walk out of the building.",
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
      north: "hallway5",
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
    outcome: "lose",
    outcomeText: "The floor is not there. You keep falling.",
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
    outcome: "lose",
    outcomeText: "You did not run. The doctor did.",
  }
};

const DIRECTIONS = ["north", "south", "east", "west"];

const listExits = (exits) => {
  const keys = Object.keys(exits);
  if (keys.length === 1) return keys[0];
  return `${keys.slice(0, -1).join(", ")} and ${keys[keys.length - 1]}`;
};

const DungeonRunner = ({ onEnd = () => {} }) => {

  const [roomKey, setRoomKey] = useState("spawn");
  const [moves, setMoves] = useState(0);

  const currRoom = roomMapping[roomKey];
  const outcome = currRoom.outcome;

  const handleReset = () => {
    setRoomKey("spawn");
    setMoves(0);
  };

  const handleMove = (dir) => {
    const next = currRoom.exits[dir];
    if (!next) return;
    setRoomKey(next);
    setMoves((m) => m + 1);
  };

  const endGame = () => {
    handleReset();
    onEnd();
  };

  return (
    <div className="max-w-[500px] mx-auto p-4 flex flex-col justify-center w-full rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">DungeonRunner</div>
        {outcome ? (
          <div>
            <p className={outcome === "win" ? "text-cyan-400 text-lg" : "text-red-400 text-lg"}>
              {outcome === "win" ? "You escaped." : "You have died!"}
            </p>
            <p className="text-gray-400 text-base mt-1">{currRoom.outcomeText}</p>
            <p className="text-gray-500 text-sm mt-2">{`You made it in ${moves} moves.`}</p>
          </div>
        ) : (
          <div>
            <p className="text-gray-300 text-medium">
              {`You have found yourself in the ${currRoom.name}.`}
            </p>
            <p className="text-gray-400 text-base">
              {currRoom.info}
            </p>
            <p className="text-gray-400 text-base">
              {`You have exits to the ${listExits(currRoom.exits)}.`}
            </p>
          </div>
        )}
      </div>
      <div className="px-6 pt-4 pb-2">
        {!outcome && DIRECTIONS.filter((d) => d in currRoom.exits).map((d) => (
          <GameButton key={d} onClick={() => handleMove(d)}>
            {d.charAt(0).toUpperCase() + d.slice(1)}
          </GameButton>
        ))}
        <GameButton onClick={handleReset}>{outcome ? "Play again" : "Reset"}</GameButton>
        <GameButton onClick={endGame}>Exit game</GameButton>
      </div>
    </div>
  );
};
export default DungeonRunner;
