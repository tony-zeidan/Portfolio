import React from 'react';
import ghv from '../../assets/ghv.png';
import evase from '../../assets/evase.png';
import ruby from '../../assets/ruby.png';
import sapphire from '../../assets/sapphire.png';
import elevator from '../../assets/elevator.png';
import risk from '../../assets/risk.png';
import Project from '../ProjectsShort/Project';
import TicTacToe from "./TicTacToe/TicTacToe";
import DungeonRunner from './DungeonRunner/DungeonRunner';

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
                    <TicTacToe id='tictactoe'/>
                </div>
                <div className="mb-5">
                    <DungeonRunner id='dungeonrunner'/>
                </div>
            </div>
        </div>
    );
};
export default Games;