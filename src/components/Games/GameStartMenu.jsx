import React from "react";

function GameStartMenu(props) {

    const handleStart = (e) => {
        e.preventDefault();
        console.log("START")
        props.onStart();
    }

    return (<div
            className="shadow-lg shadow-[#040c16] group container bg-contain rounded-md flex py-3 px-3 justify-center flex flex-col items-center mx-auto">
            <div className="flex justify-center items-center flex-col" >
                        <span className=' text-lg font-bold text-white tracking-wider'>
                        {props.name}
                        </span>
                <p className='text-center'>{props.info}</p>
                <div
                    className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'
                    onClick={handleStart}
                >
                    Play Game
                </div>
            </div>
        </div>);
}

export default GameStartMenu;