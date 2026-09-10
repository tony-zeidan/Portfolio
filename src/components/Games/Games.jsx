import React from 'react';
import TicTacToe from "./TicTacToe/TicTacToe";
import DungeonRunner from './DungeonRunner/DungeonRunner';
import ConnectFour from './ConnectFour/ConnectFour';
import Riddles from './EscapeRoom/Riddles';
import Game from "./Game";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";

const games = [
    {
        name: "TicTacToe",
        info: "Surely you know of this game!",
        element: <TicTacToe />,
    },
    {
        name: "Connect Four",
        info: "Four in a row against the computer.",
        element: <ConnectFour />,
    },
    {
        name: "Dungeon Runner",
        info: "A very simple game inspired from some of my early software projects.",
        element: <DungeonRunner />,
    },
    {
        name: "Escape Room",
        info: "Two riddles. Read the code and work out what it prints.",
        element: <Riddles />,
    },
];

const Games = () => {
    return (
        <div id='games' className='w-full text-gray-300 bg-[#181818]'>
            <div className='max-w-[1000px] mx-auto p-4 w-full'>
                <Reveal className='pb-12 w-full flex justify-center mt-32'>
                    <SectionHeading index='06' title='Games' subtitle='Play some games while you are here!' />
                </Reveal>
                <Reveal stagger={50} itemClassName='w-full' className='pb-8 w-full flex justify-center items-center flex-col'>
                    {games.map((game) => (
                        <div key={game.name} className="my-2.5 w-full">
                            <Game name={game.name} info={game.info} element={game.element} />
                        </div>
                    ))}
                </Reveal>
            </div>
        </div>
    );
};
export default Games;
