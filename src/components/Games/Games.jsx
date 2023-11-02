import React from 'react';
import TicTacToe from "./TicTacToe/TicTacToe";
import DungeonRunner from './DungeonRunner/DungeonRunner';
import Game from "./Game";

const Games = () => {
    return (
        <div id='games' className='w-full text-gray-300 justify-center bg-[#181818] -z-[-8]'>
            <div className='max-w-[1000px] mx-auto p-4 w-full h-full'>
                <div className='pb-8 w-full flex justify-center items-center flex-col mt-32'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500'>
                        Games
                    </p>
                    <p className='py-6 text-2xl'>Play some games while you are here!</p>
                </div>
                <div className='pb-8 w-full flex justify-center items-center flex-col -z-[-8]'>
                    <div className="my-2.5 w-full">
                        <Game name="TicTacToe" info="Surely you know of this game!" element={<TicTacToe />} />
                    </div>
                    <div className="my-2.5 w-full">
                        <Game name="Dungeon Runner" info="A very simple game inspired from some of my early software projects." element={<DungeonRunner />} />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Games;