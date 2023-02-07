import React, {useState} from 'react';
import TicTacToe from "./TicTacToe/TicTacToe";
import DungeonRunner from './DungeonRunner/DungeonRunner';
import Riddles from './EscapeRoom/Riddles';
import Game from "./Game";

const Games = () => {
    return (
        <div id='games' className='w-full md:h-screen text-gray-300 justify-center bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8 w-full flex justify-center items-center flex-col'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500'>
                        Games
                    </p>
                    <p className='py-6 text-2xl'>Play some games while you are here!</p>
                </div>
                <div className="mb-5">
                    <Game name="TicTacToe" info="Surely you know of this game!" element={<TicTacToe />} />
                </div>
                <div className="mt-5 mb-5">
                    <Game name="DungeonRunner" info="A very simple game inspired from some of my early software projects." element={<DungeonRunner />} />
                </div>
            </div>
        </div>
    );
};
export default Games;