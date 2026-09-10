import React from "react";

const TicTacToeSquare = ({ value = '', over = false, onClick = () => {}, index }) => {

  return (
          <button
            type="button"
            aria-label={value ? `Square ${index + 1}, ${value}` : `Square ${index + 1}, empty`}
            className={`group container justify-center items-center h-20 w-20 rounded-md text-3xl border small-content-div disabled:opacity-75`}
            disabled={over}
            onClick={onClick}
          >
            {value}
          </button>

  );
};

export default TicTacToeSquare;
