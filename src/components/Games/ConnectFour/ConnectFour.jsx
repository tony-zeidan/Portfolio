import React, { useState } from "react";
import GameButton from "../GameButton";
import {
    ROWS,
    COLS,
    PLAYER,
    COMPUTER,
    emptyBoard,
    at,
    landingRow,
    playable,
    drop,
    findWin,
    chooseMove,
} from "./logic";

const ConnectFour = ({ onEnd = () => {} }) => {

    const [board, setBoard] = useState(emptyBoard);
    const [status, setStatus] = useState(null);
    const [winning, setWinning] = useState([]);

    const handleReset = () => {
        setBoard(emptyBoard());
        setStatus(null);
        setWinning([]);
    };

    const endGame = () => {
        handleReset();
        onEnd();
    };

    const handleDrop = (col) => {
        if (status) return;

        const afterPlayer = drop(board, col, PLAYER);
        if (!afterPlayer) return;

        const playerWin = findWin(afterPlayer, PLAYER);
        if (playerWin) {
            setBoard(afterPlayer);
            setWinning(playerWin);
            setStatus('win');
            return;
        }
        if (playable(afterPlayer).length === 0) {
            setBoard(afterPlayer);
            setStatus('tie');
            return;
        }

        const reply = chooseMove(afterPlayer);
        const afterComputer = drop(afterPlayer, reply, COMPUTER);
        const computerWin = findWin(afterComputer, COMPUTER);

        setBoard(afterComputer);
        if (computerWin) {
            setWinning(computerWin);
            setStatus('lose');
        } else if (playable(afterComputer).length === 0) {
            setStatus('tie');
        }
    };

    const message = {
        win: 'You win.',
        lose: 'The computer wins.',
        tie: 'The board is full. Tie game.',
    }[status];

    return (
        <div className="max-w-[500px] mx-auto p-4 flex flex-col justify-center w-full rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Connect Four</div>
                <p className="text-gray-400 text-base" role="status">
                    {message || 'You are red. Drop a piece into a column.'}
                </p>
            </div>

            <div className="grid grid-cols-7 gap-1 mx-auto bg-[#222222] p-2 rounded-md">
                {Array.from({ length: COLS }, (_, col) => (
                    <button
                        key={col}
                        type="button"
                        onClick={() => handleDrop(col)}
                        disabled={!!status || landingRow(board, col) === -1}
                        aria-label={`Drop a piece into column ${col + 1}`}
                        className="flex flex-col gap-1 rounded disabled:cursor-not-allowed hover:bg-white/5 transition-colors duration-200"
                    >
                        {Array.from({ length: ROWS }, (_, row) => {
                            const value = at(board, row, col);
                            const isWinning = winning.includes(row * COLS + col);
                            return (
                                <span
                                    key={row}
                                    className={`block w-9 h-9 sm:w-11 sm:h-11 rounded-full border ${
                                        value === PLAYER
                                            ? 'bg-red-500 border-red-400'
                                            : value === COMPUTER
                                            ? 'bg-amber-400 border-amber-300'
                                            : 'bg-[#181818] border-gray-700'
                                    } ${isWinning ? 'ring-2 ring-cyan-400' : ''}`}
                                />
                            );
                        })}
                    </button>
                ))}
            </div>

            <div className="px-6 pt-4 pb-2">
                <GameButton onClick={handleReset}>{status ? 'Play again' : 'Reset'}</GameButton>
                <GameButton onClick={endGame}>Exit game</GameButton>
            </div>
        </div>
    );
};

export default ConnectFour;
