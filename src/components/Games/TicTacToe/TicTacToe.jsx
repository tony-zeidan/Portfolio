import React, {useEffect, useState} from "react";
import TicTacToeSquare from "./TicTacToeSquare";
import { Alert } from 'flowbite-react';
import {HiEye, HiInformationCircle} from "react-icons/hi";

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

const TicTacToe = (props) => {

    const [turn, setTurn] = useState('X');
    const [board, setBoard] = useState(Array(9).fill(null));
    const [lastMoves, setLastMoves] = useState([]);
    const [winner, setWinner] = useState(false);
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
    }, [showCantPlay]);

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

    const handleTurn = (sq) => {
        if (board[sq] != null) {
            setShowCantPlay(true);
            return;
        } else {
            let newBoard = board.slice();
            let currTurn = turn;
            let newTurn = (turn === 'X' ? 'O' : 'X');

            newBoard[sq] = currTurn;
            if (calculateWinner(newBoard)) {
                setWinner(true);
                setShowWinner(true);
            } else {
                if (newBoard.every((x) => x != null)) {
                    setWinner(false);
                    setGameOver(true);
                    setShowWinner(true);
                } else {
                    setTurn(newTurn);
                    setLastMoves([...lastMoves, sq]);
                }
            }
            setBoard(newBoard);
        }
        return 0;
    }

    const handleReset = () => {
        let b = board.slice();
        b.fill(null);
        setBoard(b);
        setLastMoves([]);
        setGameOver(false);
        setWinner(false);
        setTurn('X');
        setShowCantBack(false);
        setShowWinner(false);
        setShowCantPlay(false);
    }

    const handleBackOne = () => {
        if (lastMoves.length >= 1) {
            let b = board.slice();
            let moves = lastMoves.slice();
            let lastMove = moves.pop();
            b[lastMove] = null;
            setWinner(false);
            setGameOver(false);
            setTurn((turn === 'X' ? 'O' : 'X'));
            setLastMoves(moves);
            setBoard(b);
        } else {
            setShowCantBack(true);
        }
    }

    const endGame = () => {
        handleReset();
        props.onEnd();
    }


    return (

        <div
            className="max-w-[500px] mx-auto p-4 flex flex-col justify-center w-full rounded overflow-hidden shadow-lg">
            { showWinner && winner ? (
                <div className="mb-5">
                    <Alert
                        color="success"
                        withBorderAccent={true}
                        onDismiss={()=>setShowWinner(false)}
                        additionalContent={<React.Fragment><div className="mt-2 mb-4 text-sm text-green-700 dark:text-green-800">{`Player ${turn} wins the game! Nice try player ${turn === 'X' ? 'O' : 'X'}!`}</div><div className="flex"><button type="button" className="mr-2 inline-flex items-center rounded-lg bg-green-700 px-3 py-1.5 text-center text-xs font-medium text-white hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:bg-green-800 dark:hover:bg-green-900" onClick={handleReset}><HiEye className="-ml-0.5 mr-2 h-4 w-4" />Reset</button><button type="button" className="rounded-lg border border-green-700 bg-transparent px-3 py-1.5 text-center text-xs font-medium text-green-700 hover:bg-green-800 hover:text-white focus:ring-4 focus:ring-green-300 dark:border-green-800 dark:text-green-800 dark:hover:text-white" onClick={()=>setShowWinner(false)}>Dismiss</button></div></React.Fragment>}
                        icon={HiInformationCircle}
                    >
                  <span>
                    <span className="font-medium">
                      Winner!
                    </span>
                      {' '}{`Player ${turn} wins the match!`}
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
            <div className="mt-2 mx-auto">
                <div className='grid mx-auto sm:grid-cols-3 md:grid-cols-3 h-full'>
                    <TicTacToeSquare value={board[0]} onClick={() => handleTurn(0)} over={gameOver||winner}/>
                    <TicTacToeSquare value={board[1]} onClick={() => handleTurn(1)} over={gameOver||winner}/>
                    <TicTacToeSquare value={board[2]} onClick={() => handleTurn(2)} over={gameOver||winner}/>
                    <TicTacToeSquare value={board[3]} onClick={() => handleTurn(3)} over={gameOver||winner}/>
                    <TicTacToeSquare value={board[4]} onClick={() => handleTurn(4)} over={gameOver||winner}/>
                    <TicTacToeSquare value={board[5]} onClick={() => handleTurn(5)} over={gameOver||winner}/>
                    <TicTacToeSquare value={board[6]} onClick={() => handleTurn(6)} over={gameOver||winner}/>
                    <TicTacToeSquare value={board[7]} onClick={() => handleTurn(7)} over={gameOver||winner}/>
                    <TicTacToeSquare value={board[8]} onClick={() => handleTurn(8)} over={gameOver||winner}/>
                </div>
            </div>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">TicTacToe</div>
                <p className="text-gray-400 text-base">
                    {`it's player ${turn}'s turn.`}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                    onClick={handleReset}>Reset</span>
                <span
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                    onClick={handleBackOne}>Back one</span>
                <span
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                    onClick={endGame}
                    >Exit game</span>
            </div>
        </div>
    );
}

TicTacToe.defaultProps = {
    onEnd: ()=>{},
}

export default TicTacToe;