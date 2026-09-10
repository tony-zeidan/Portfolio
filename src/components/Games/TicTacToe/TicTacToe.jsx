import React, {useEffect, useState} from "react";
import TicTacToeSquare from "./TicTacToeSquare";
import GameButton from "../GameButton";
import { Alert } from 'flowbite-react';
import {HiEye, HiInformationCircle} from "react-icons/hi";
import { HUMAN, COMPUTER, calculateWinner, isFull, chooseMove } from "./logic";

const TicTacToe = ({ onEnd = () => {} }) => {

    const [vsComputer, setVsComputer] = useState(false);
    const [turn, setTurn] = useState('X');
    const [board, setBoard] = useState(Array(9).fill(null));
    const [lastMoves, setLastMoves] = useState([]);
    const [winner, setWinner] = useState(false);
    const [winnerToken, setWinnerToken] = useState(null);
    const [gameOver, setGameOver] = useState(false);
    const [showCantPlay, setShowCantPlay] = useState(false);
    const [showWinner, setShowWinner] = useState(false);
    const [showCantBack, setShowCantBack] = useState(false);

    useEffect(() => {
        if (showCantPlay) {
            const timeId = setTimeout(() => {
                // After 3 seconds set the show value to false
                setShowCantPlay(false)
            }, 8000);

            return () => {
                clearTimeout(timeId)
            };
        }
    }, [showCantPlay]);

    useEffect(() => {
        if (showWinner) {
            const timeId = setTimeout(() => {
                // After 3 seconds set the show value to false
                setShowWinner(false)
            }, 8000);

            return () => {
                clearTimeout(timeId)
            };
        }
    }, [showWinner]);

    useEffect(() => {
        if (showCantBack) {
            const timeId = setTimeout(() => {
                // After 3 seconds set the show value to false
                setShowCantBack(false)
            }, 8000);

            return () => {
                clearTimeout(timeId)
            };
        }
    }, [showCantBack]);

    const settle = (nextBoard) => {
        const won = calculateWinner(nextBoard);
        if (won) {
            setWinner(true);
            setWinnerToken(won);
            setShowWinner(true);
            return true;
        }
        if (isFull(nextBoard)) {
            setWinner(false);
            setWinnerToken(null);
            setGameOver(true);
            setShowWinner(true);
            return true;
        }
        return false;
    }

    const handleTurn = (sq) => {
        if (winner || gameOver) return;
        if (board[sq] != null) {
            setShowCantPlay(true);
            return;
        }

        const newBoard = board.slice();
        const moves = [...lastMoves, sq];
        newBoard[sq] = turn;

        if (settle(newBoard)) {
            setBoard(newBoard);
            setLastMoves(moves);
            return;
        }

        if (!vsComputer) {
            setTurn(turn === 'X' ? 'O' : 'X');
            setBoard(newBoard);
            setLastMoves(moves);
            return;
        }

        const reply = chooseMove(newBoard, COMPUTER, HUMAN);
        if (reply === -1 || reply === undefined) {
            setBoard(newBoard);
            setLastMoves(moves);
            return;
        }
        newBoard[reply] = COMPUTER;
        moves.push(reply);

        settle(newBoard);
        setTurn(HUMAN);
        setBoard(newBoard);
        setLastMoves(moves);
    }

    const handleReset = () => {
        setBoard(Array(9).fill(null));
        setLastMoves([]);
        setGameOver(false);
        setWinner(false);
        setWinnerToken(null);
        setTurn('X');
        setShowCantBack(false);
        setShowWinner(false);
        setShowCantPlay(false);
    }

    const selectOpponent = (useComputer) => {
        if (useComputer === vsComputer) return;
        setVsComputer(useComputer);
        handleReset();
    }

    const handleBackOne = () => {
        if (lastMoves.length < 1) {
            setShowCantBack(true);
            return;
        }

        const b = board.slice();
        const moves = lastMoves.slice();

        const undoCount = vsComputer ? Math.min(2, moves.length) : 1;
        for (let i = 0; i < undoCount; i++) {
            b[moves.pop()] = null;
        }

        const ended = winner || gameOver;
        setWinner(false);
        setWinnerToken(null);
        setGameOver(false);
        setShowWinner(false);
        if (vsComputer) {
            setTurn(HUMAN);
        } else if (!ended) {
            setTurn((turn === 'X' ? 'O' : 'X'));
        }
        setLastMoves(moves);
        setBoard(b);
    }

    const endGame = () => {
        handleReset();
        onEnd();
    }


    const winnerHeadline = vsComputer
        ? (winnerToken === HUMAN ? 'You win the match.' : 'The computer wins the match.')
        : `Player ${winnerToken} wins the match!`;

    const winnerDetail = vsComputer
        ? (winnerToken === HUMAN ? 'You beat the computer.' : 'The computer got there first.')
        : `Player ${winnerToken} wins the game! Nice try player ${winnerToken === 'X' ? 'O' : 'X'}!`;

    return (

        <div
            className="max-w-[500px] mx-auto p-4 flex flex-col justify-center w-full rounded overflow-hidden shadow-lg">
            { showWinner && winner ? (
                <div className="mb-5">
                    <Alert
                        color="success"
                        withBorderAccent={true}
                        onDismiss={()=>setShowWinner(false)}
                        additionalContent={<React.Fragment><div className="mt-2 mb-4 text-sm text-green-700 dark:text-green-800">{winnerDetail}</div><div className="flex"><button type="button" className="mr-2 inline-flex items-center rounded-lg bg-green-700 px-3 py-1.5 text-center text-xs font-medium text-white hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:bg-green-800 dark:hover:bg-green-900" onClick={handleReset}><HiEye className="-ml-0.5 mr-2 h-4 w-4" />Reset</button><button type="button" className="rounded-lg border border-green-700 bg-transparent px-3 py-1.5 text-center text-xs font-medium text-green-700 hover:bg-green-800 hover:text-white focus:ring-4 focus:ring-green-300 dark:border-green-800 dark:text-green-800 dark:hover:text-white" onClick={()=>setShowWinner(false)}>Dismiss</button></div></React.Fragment>}
                        icon={HiInformationCircle}
                    >
                  <span>
                    <span className="font-medium">
                      Winner!
                    </span>
                      {' '}{winnerHeadline}
                  </span>
                </Alert>
                </div>
            ) : (
                <></>
            )}
            { showWinner && !winner && gameOver ? (
                <div className="mb-5">
                <Alert
                    color="info"
                    withBorderAccent={true}
                    onDismiss={()=>setShowWinner(false)}
                    additionalContent={<React.Fragment><div className="mt-2 mb-4 text-sm text-blue-700 dark:text-blue-800">The game is a tie! Good job players, well fought.</div><div className="flex"><button type="button" className="mr-2 inline-flex items-center rounded-lg bg-blue-700 px-3 py-1.5 text-center text-xs font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-800 dark:hover:bg-blue-900" onClick={()=>{handleReset()}}><HiEye className="-ml-0.5 mr-2 h-4 w-4" />Reset</button><button type="button" className="rounded-lg border border-blue-700 bg-transparent px-3 py-1.5 text-center text-xs font-medium text-blue-700 hover:bg-blue-800 hover:text-white focus:ring-4 focus:ring-blue-300 dark:border-blue-800 dark:text-blue-800 dark:hover:text-white" onClick={()=>setShowWinner(false)}>Dismiss</button></div></React.Fragment>}
                    icon={HiInformationCircle}
                >
                  <span>
                    <span className="font-medium">
                      Tie game!
                    </span>
                      {' '}The match was a tie.
                  </span>
                </Alert>
                </div>
            ) : (
                <></>
            )}
            {showCantPlay ? (
                <div className="mb-5">
                <Alert
                    color="info"
                    withBorderAccent={true}
                    onDismiss={()=>setShowCantPlay(false)}
                    additionalContent={<React.Fragment><div className="mt-2 mb-4 text-sm text-blue-700 dark:text-blue-800">You can't use your turn on this space, the other player already has.</div><div className="flex"><button type="button" className="mr-2 inline-flex items-center rounded-lg bg-blue-700 px-3 py-1.5 text-center text-xs font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-800 dark:hover:bg-blue-900" onClick={()=>{handleReset()}}><HiEye className="-ml-0.5 mr-2 h-4 w-4" />Reset</button><button type="button" className="rounded-lg border border-blue-700 bg-transparent px-3 py-1.5 text-center text-xs font-medium text-blue-700 hover:bg-blue-800 hover:text-white focus:ring-4 focus:ring-blue-300 dark:border-blue-800 dark:text-blue-800 dark:hover:text-white" onClick={()=>setShowCantPlay(false)}>Dismiss</button></div></React.Fragment>}
                    icon={HiInformationCircle}
                >
                    <h3 className="text-lg font-medium text-blue-700 dark:text-blue-800">
                        You can't play there!
                    </h3>
                </Alert>
                </div>
            ) : (
                <></>
            )}
            {showCantBack ? (
                <div className="mb-5">
                    <Alert
                        color="info"
                        withBorderAccent={true}
                        onDismiss={()=>setShowCantBack(false)}
                        additionalContent={<React.Fragment><div className="mt-2 mb-4 text-sm text-blue-700 dark:text-blue-800">There is no history any more. Can't move back in time.</div><div className="flex"><button type="button" className="rounded-lg border border-blue-700 bg-transparent px-3 py-1.5 text-center text-xs font-medium text-blue-700 hover:bg-blue-800 hover:text-white focus:ring-4 focus:ring-blue-300 dark:border-blue-800 dark:text-blue-800 dark:hover:text-white" onClick={()=>setShowCantBack(false)}>Dismiss</button></div></React.Fragment>}
                        icon={HiInformationCircle}
                    >
                        <h3 className="text-lg font-medium text-blue-700 dark:text-blue-800">
                            You can't go back any more!
                        </h3>
                    </Alert>
                </div>
            ) : (
                <></>
            )}
            <div className="px-6 pt-2">
                <span className="text-sm text-gray-400 mr-2">Opponent:</span>
                <GameButton
                    onClick={() => selectOpponent(false)}
                    aria-pressed={!vsComputer}
                    className={vsComputer ? 'opacity-60' : ''}
                >
                    Two players
                </GameButton>
                <GameButton
                    onClick={() => selectOpponent(true)}
                    aria-pressed={vsComputer}
                    className={vsComputer ? '' : 'opacity-60'}
                >
                    Computer
                </GameButton>
            </div>
            <div className="mt-2 mx-auto">
                <div className='grid mx-auto grid-cols-3 h-full'>
                    {board.map((value, i) => (
                        <TicTacToeSquare
                            key={i}
                            index={i}
                            value={value}
                            onClick={() => handleTurn(i)}
                            over={gameOver || winner}
                        />
                    ))}
                </div>
            </div>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">TicTacToe</div>
                <p className="text-gray-400 text-base" role="status">
                    {winner || gameOver
                        ? (winner ? winnerHeadline : 'The match was a tie.')
                        : vsComputer
                            ? "You are X. It's your turn."
                            : `it's player ${turn}'s turn.`}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <GameButton onClick={handleReset}>Reset</GameButton>
                <GameButton onClick={handleBackOne} disabled={lastMoves.length === 0}>Back one</GameButton>
                <GameButton onClick={endGame}>Exit game</GameButton>
            </div>
        </div>
    );
}

export default TicTacToe;