import React, { useState } from "react";
import TicTacToeSquare from "./TicTacToeSquare";

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

const TicTacToe = () => { 

  const [turn, setTurn] = useState('X');
  const [board, setBoard] = useState(Array(9).fill(null));
  const [lastMoves, setLastMoves] = useState([]);

  const handleTurn = (sq) => {
    console.log(sq);
    if (board[sq] != null) {
        console.log(board[sq])
      alert("Cannot play here, the space is filled.");
        return;
    } else {
      let newBoard = board.slice();
      let currTurn = turn;
      let newTurn = (turn === 'X' ? 'O' : 'X');

      newBoard[sq] = currTurn;
      if (calculateWinner(newBoard)) {
        alert(`${currTurn} wins the match!`);
        newBoard.fill(null);
      } else {
        setTurn(newTurn);
        setLastMoves([...lastMoves, sq]);
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
      setTurn('X');
  }

  const handleBackOne = () => {
      if (lastMoves.length >= 1) {
          let b = board.slice();
          let moves = lastMoves.slice();
          let lastMove = moves.pop();
          b[lastMove] = null;
          setTurn((turn === 'X' ? 'O' : 'X'));
          setLastMoves(moves);
          setBoard(b);
      } else {
          alert("Can't move back any more!");
      }
  }


  return (
      <div className="max-w-[500px] mx-auto p-4 flex flex-col justify-center w-full rounded overflow-hidden shadow-lg">
          <div>
              <div className='grid mx-auto w-80 sm:grid-cols-3 md:grid-cols-3 gap-4 h-full'>
                  <TicTacToeSquare value={board[0]} onClick={() => handleTurn(0)}/>
                  <TicTacToeSquare value={board[1]} onClick={() => handleTurn(1)}/>
                  <TicTacToeSquare value={board[2]} onClick={() => handleTurn(2)}/>
                  <TicTacToeSquare value={board[3]} onClick={() => handleTurn(3)}/>
                  <TicTacToeSquare value={board[4]} onClick={() => handleTurn(4)}/>
                  <TicTacToeSquare value={board[5]} onClick={() => handleTurn(5)}/>
                  <TicTacToeSquare value={board[6]} onClick={() => handleTurn(6)}/>
                  <TicTacToeSquare value={board[7]} onClick={() => handleTurn(7)}/>
                  <TicTacToeSquare value={board[8]} onClick={() => handleTurn(8)}/>
              </div>
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">TicTacToe</div>
            <p className="text-gray-400 text-base">
                {`it's player ${turn}'s turn.`}
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" onClick={handleReset}>Reset</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" onClick={handleBackOne}>Back one</span>
          </div>
      </div>
  );
};
export default TicTacToe;